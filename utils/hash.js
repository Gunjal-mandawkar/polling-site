import bcrypt from 'bcrypt';
async function hashpassword(password){
    const satRounds = 10;

    const hashPassword  = await bcrypt.hash(password, satRounds);

    return hashPassword;
}

async function verifypassword(password, hashedpassword){
    const isMatch = await bcrypt.compare(password, hashedpassword);
    return isMatch;
}

export {hashpassword,verifypassword}