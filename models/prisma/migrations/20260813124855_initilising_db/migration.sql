-- CreateTable
CREATE TABLE "user" (
    "userid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "poll" (
    "pollid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code" TEXT,
    "multiselect" BOOLEAN NOT NULL DEFAULT false,
    "showResult" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "poll_pkey" PRIMARY KEY ("pollid")
);

-- CreateTable
CREATE TABLE "option" (
    "optionid" SERIAL NOT NULL,
    "pollid" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("optionid")
);

-- CreateTable
CREATE TABLE "vote" (
    "voteid" SERIAL NOT NULL,
    "optionid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "vote_pkey" PRIMARY KEY ("voteid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "vote_userid_optionid_key" ON "vote"("userid", "optionid");

-- AddForeignKey
ALTER TABLE "poll" ADD CONSTRAINT "poll_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("userid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option" ADD CONSTRAINT "option_pollid_fkey" FOREIGN KEY ("pollid") REFERENCES "poll"("pollid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote" ADD CONSTRAINT "vote_optionid_fkey" FOREIGN KEY ("optionid") REFERENCES "option"("optionid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote" ADD CONSTRAINT "vote_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("userid") ON DELETE CASCADE ON UPDATE CASCADE;
