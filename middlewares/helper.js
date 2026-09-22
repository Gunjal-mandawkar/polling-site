
import { prisma } from "../database/db.js";
// Helper to check expiry, compute final vote counts, and freeze the poll
async function finalizePollIfNeeded(pollid) {
    const poll = await prisma.poll.findUnique({
        where: { pollid: Number(pollid) },
        include: { options: true }
    });

    if (!poll || poll.finalized) return poll;

    const now = new Date();
    if (now > new Date(poll.endTime)) {
        // Count total votes for each option from the Vote table
        for (const opt of poll.options) {
            const voteCount = await prisma.vote.count({
                where: { optionid: opt.optionid }
            });

            // Update the option's finalVoteCount and mark poll as finalized
            await prisma.option.update({
                where: { optionid: opt.optionid },
                data: { finalVoteCount: voteCount }
            });
        }

        const updatedPoll = await prisma.poll.update({
            where: { pollid: Number(pollid) },
            data: { finalized: true },
            include: { options: true }
        });

        return updatedPoll;
    }

    return poll;
}

export {finalizePollIfNeeded}

