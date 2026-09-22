import 'dotenv/config';

import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET

function createtoken(userid){
    try{
        const payload = {
            userid: userid
        };

        const options = {
            expiresIn: '1d',
            algorithm: 'HS256'
        };
        return jwt.sign(payload, JWT_SECRET, options);
    }
    catch(error){
        console.log(`Error while creating token ${error}`)
    }
}

function checktoken(token){
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        console.log("FULL DECAHED PAYLOAD OBJECT:", payload);
        return payload.userid;
    } catch (error) {
        console.log(`Error while checking token ${error}`);
    }
}

export {createtoken,checktoken}