//public polls + searchbar  (shows only ongoing polls), (can search any user or poll through searchbar)

import { prisma } from "../database/db.js";
import { finalizePollIfNeeded } from "../middlewares/helper.js";
const searchbar = async (req,res,next) => {
    try {
        const query = req.body.query;
        const polls = await prisma.poll.findMany({
            where: {
                title: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            take: 6
        });

        res.status(200).json(polls);
    } catch (error) {
        console.log(`Error while searching for a poll ${error}`);
        res.status(500).json({error: "Error while searching polls"})
    }
}

//rendering default polls
const defaultpolls = async (req,res,next) => {
    try {
        const polls = await prisma.poll.findMany({
            where : {
                finalized: false,
                type : 'public'

            },
            orderBy: {lastVoteAt: 'desc'},
            take: 6
        });
        res.status(200).json(polls);
    } catch (error) {
        console.log(`Error while loading public polls ${error}`);
        res.status(500).json({error: "Error while loading dpublic polls"})
        
    }
}
//personal dashboard (widget with pastpolls -> clicking this redirects to pastpoll route)(create new poll button)(past votes made -> redirects to the poll route where the user made the vote)
const dashboard = async (req,res,next) => {
    try {
        const userid = req.userid;

        const hostedPolls = await prisma.poll.findMany({
            where : {
                userid: userid
            }
        });
        //check if hostepolls endtime has passed, trigger analysis creation 
        for (const p of hostedPolls) {
            if (!p.finalized) {
                await finalizePollIfNeeded(p.pollid);
            }
        }

        const votesCast = await prisma.vote.findMany({
            where : {
                userid: userid,

            },
            include : {
                option: {
                    include: {
                        poll: {
                            select : {pollid: true, title: true}
                        }
                    }
                }
            }
        });
        
        

        res.status(200).json({hostedPolls, votesCast});
    } catch (error) {
        console.log(`Error loading dashboard: ${error}`);
    res.status(500).json({ error: "Could not load dashboard" });
    }

}

//getpoll 
const joinpoll = async (req,res,next) => { //what about private polls and their codes
    try {
        const pollid = Number(req.params.pollid);
        const code = req.body.code;
        
        
            
        let poll = await prisma.poll.findUnique({
            where: {
                pollid: pollid, 
              },
            select: {
              pollid: true,
              title : true,
              options : true,  
              startTime: true,
              endTime: true ,
              finalized: true,
              type : true,
              code: true
            },
          });
          if (poll == null) {
            return res.status(404).json({ error: "Poll not found" });
          }

        
        if (poll.type === 'private' && poll.code !== code) {
                return res.status(403).json({ error: "Invalid code" });
              }
        //if endtime has passed trigger analysis
        poll = await finalizePollIfNeeded(pollid);
        
      
          
          res.status(200).json({poll});

          
          
        
    } catch (error) {
        console.log(`Error with joining poll ${error}`)
        res.status(500).json({ error: "Could not join poll" });
    }
}
//postpoll (public or private?)(title, options, duration)
const postpoll = async (req,res,next) => {
    console.log("-> Hit postpoll controller with body:", req.body);
    try {
        const userid = req.userid; 
        const title = req.body.title;
        const type = req.body.type;
        let code = req.body.code;
        const multiselect = req.body.multiselect;
        const showResult = req.body.showResult;
        const options = req.body.options;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;

if(code == undefined){
    code = null;
}
        const poll = await prisma.poll.create({
            data: {
                userid: userid,
                title: title,
                startTime: new Date(startTime),
                endTime: new Date(endTime),
                code : code,
                multiselect: multiselect,
                showResult: showResult,
                type: type,
                options: {
                    create: options.map(desc => ({ desc: desc }))
                    // optionsArray is something like ["Option A", "Option B", "Option C"]
                    // from req.body — each string becomes its own `option` row,
                    // Prisma automatically fills in the pollid for you
                  }}
                ,
                include: {
                  options: true // so the response includes the created options, not just the poll
                }
                
              }
    )

        res.status(200).json({status: 'success'});
        
    } catch (error) {
        res.status(500).json({ error: "Could not post the poll" });
    }
}

//pastpoll (opens page with all the polls the user had hosted)
const pastpoll = async (req,res,next) => {
    try{
    const userid = req.userid;
    const userPolls = await prisma.poll.findMany({
        where: { userid: userid, finalized: false }
    });

    for (const p of userPolls) {
        await finalizePollIfNeeded(p.pollid);
    }

    const past = await prisma.poll.findMany({
        where: {
            userid: userid, 
            finalized : true
          },
        select: {
          pollid: true,
          title : true,
          options : true,  
          startTime: true,
          endTime: true ,
          type : true,
          code: true
        },

    });
    
   
    

    res.status(200).json({past});}
    catch(error){
        console.log(`Error while posting the poll:`, error);
        res.status(500).json({error: error});
    }


}
//viewpollanalytics (trigger: click the poll tab in pastpolls,reroutes to analytics page of that poll ,appears only after a poll ended)
const getPollAnalytics = async (req, res) => {
    try {
      const pollid = Number(req.params.pollid);
      const userid = req.userid;
  
      const poll = await prisma.poll.findUnique({
        where: { pollid: pollid },
        include: { options: true 
        }
      });
  
      if (!poll) {
        return res.status(404).json({ error: "Poll not found" });
      }
  
      if (poll.userid !== userid) {
        return res.status(403).json({ error: "Only the host can view analytics" });
      }
  
      if (!poll.finalized) {
        return res.status(403).json({ error: "Poll hasn't ended yet" });
      }

      const totalVotes = poll.options.reduce((sum,opt) => sum + opt.finalVoteCount, 0);

      const analysis = poll.options.map(opt => ({
        optionid : opt.optionid,
        desc : opt.desc,
        votes: opt.finalVoteCount,
        percentage: totalVotes > 0? Math.round((opt.finalVoteCount / totalVotes) * 100) : 0
      }));

      const winningOption = poll.options.reduce((max,opt) => opt.finalVoteCount > max.finalVoteCount? opt : max, poll.options[0]);
  
      res.status(200).json({ poll: {pollid: pollid, title: poll.title, totalVotes: totalVotes}, analysis, winningOption  });
    } catch (error) {
      res.status(500).json({ error: "Could not load analytics" });
    }
  };
//vote (clicking an option, allow changing votes anytime during the poll {multiple options can be selected depending on whether the host has enabled it}) (makes db changes only after the timer ends)
const vote = async (req,res,next) => {
    try {
        const userid = req.userid; //coming from checkauth
        const optionid = req.body.optionid;
        const pollid = req.body.pollid;

        const ms = await prisma.poll.findUnique({
            where: {
                pollid:pollid
            },
        })
        if(ms.multiselect == true){
            const existingVoteForThisOption = await prisma.vote.findFirst({
                where: { userid: userid, optionid: optionid }
            });
        
            if (existingVoteForThisOption != null) {
                // they already voted for *this* option — toggle off
                const del = await prisma.vote.delete({
                    where: {
                        composite_key: { userid: userid, optionid: optionid }
                    }
                });
            } else {
                // no vote for this option yet — toggle on
                const nv = await prisma.vote.create({
                    data: { userid: userid, optionid: optionid }
                });
            }
        }
        else{

        const check = await prisma.vote.findFirst({
            where: {
                userid: userid,
                option: {
                    pollid: pollid
                }
            }
        })

        if(check == null){
            const nv = await prisma.vote.create({
                data: {
                userid: userid,
                optionid: optionid}
            })
        }
        else{

           
           
            const OPTIONID = check.optionid;

            const newvote = await prisma.vote.upsert({
                where : {

                    composite_key: {
                    userid : userid,
                    optionid : OPTIONID}
                },
                update: {
                    optionid : optionid
                },
                create: {
                    
                    userid: userid,
                    optionid: optionid
                }
            });}

        }
        
//upsert query for changing votes {cz you'll have to remove the previous one}
        const lastupdate = await prisma.poll.update({
            where: {
                pollid: pollid},
            data: {
                lastVoteAt: new Date()
            }
        });
        console.log('Vote Added!');
        res.status(200).json({status: 'success', message: 'entry made'})



    } catch (error) {
        console.log(`Error while adding vote ${error}`);
        res.status(500).json(error.message);
    }
}
//deletepoll (deleted poll, options, analytics, votes)
const deletepoll = async (req,res,next) => {
try {
    const pollid = req.params.pollid;
    const userid = req.userid;
    const delpoll = await prisma.poll.delete({
        where : {
            pollid: pollid,
            userid : userid
        }
    });

    res.status(200).json({status: 'success', message: 'poll deleted successfully'});
} catch (error) {
    res.status(500).json({error: error});
}
}

export {searchbar,defaultpolls,vote, joinpoll, deletepoll, postpoll, pastpoll, getPollAnalytics, dashboard}