/*
  Warnings:

  - You are about to drop the column `status` on the `poll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "poll" DROP COLUMN "status",
ADD COLUMN     "finalized" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastVoteAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
