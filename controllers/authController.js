import { userSchema } from "../utils/zod.js";
import { createtoken,checktoken } from "../utils/jwt.js";
import { hashpassword,verifypassword } from "../utils/hash.js";
import { prisma } from "../database/db.js";



const register = async (req,res,next) => {
    try {
        const username = req.body.username;
        const password= req.body.password;
        const email = req.body.email;

        const data = {
            username: username,
            email: email,
            password: password
        }

        const user = await prisma.user.findUnique({
            where : {email: data.email}
        })
         if(user != null){
            return res.status(409).json({message : 'user already exists'});
         }
// if the username already exists...throw username already exists error
        const result = userSchema.safeParse(data);

        if(!result.success){
            const formattedErrors = result.error.flatten();
            console.log(formattedErrors.fieldErrors);
           return res.status(422).json({message : 'invalid entry'})
        }

        const hashedpassword = await hashpassword(password);

        const newuser = await prisma.user.create({
            data:{
                email: email,
                username: username,
                passwordHash: hashedpassword
            }
        })

        const userid = newuser.userid;
        const token = createtoken(userid);

        return res.cookie('token', token, {
            httpOnly: true, // Prevents browser JavaScript from accessing the token
            secure: process.env.NODE_ENV === 'production', // Use true in production (HTTPS)
            sameSite: 'strict', // Protects against CSRF attacks
            maxAge: 3600000 // Cookie expiration in milliseconds (e.g., 1 hour)
        }).status(200).json({ message: "Logged in successfully!" });
    
    } catch (error) {
        console.log(`Error while registering ${error}`)
        return res.status(500).json({status : "unsuccessful"});
    }
}

const login = async (req, res, next) => {
    try{
        //reads username password from req
        const username = req.body.username;
        const password = req.body.password;

        // checks if the user exists 
        const newuser = await prisma.user.findUniqueOrThrow({
            where: { username : username},
            select : {
                userid: true,
                passwordHash: true

            }
          });
          const isMatch = await verifypassword(password, newuser.passwordHash);
        
        if(isMatch == false){
           return res.status(401).json({message: 'password doesnt match'});
        }
        
        //creates token 
        const userid = newuser.userid;
        const token = createtoken(userid);
        
        return res.cookie('token', token, {
            httpOnly: true, // Prevents browser JavaScript from accessing the token
            secure: process.env.NODE_ENV === 'production', // Use true in production (HTTPS)
            sameSite: 'strict', // Protects against CSRF attacks
            maxAge: 3600000 // Cookie expiration in milliseconds (e.g., 1 hour)
        }).status(200).json({ message: "Logged in successfully!" });

        //to the user profile 
        //where do i verify token?
        
    }
    catch (error){
        console.log(`Error while logging ${error}`)
        return res.status(500).json({status : "unsuccessful"});
        
    }
}

const logout = async (req,res,next) => {
    try { //clearcookie doest need to know who does the token really belong to, it just clears whatever's under the token
        return res.clearCookie('token', {
            httpOnly: true, // Prevents browser JavaScript from accessing the token
            secure: process.env.NODE_ENV === 'production', // Use true in production (HTTPS)
            sameSite: 'strict', // Protects against CSRF attacks
            maxAge: 0 // Cookie expiration 
        }).status(200).json({message: "Logged out successfully!" })
    } catch (error) {
        console.log(`Error while logging out ${error}`)
        return res.status(500).json({status : "unsuccessfull"});
    }
}

const deleteAcc = async (req,res,next) => {
    try{
        const userid = req.userid;
        
        const deleteUser = await prisma.user.delete({
            where: {
                userid:userid,
            },
        })

        return res.status(200).json(`Account deleted successfully!`);
    }
    catch(error){
        return res.status(500).json({status:"unsuccessfull"});
    }
}

export {register,login,logout,deleteAcc};