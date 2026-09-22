import { checktoken } from "../utils/jwt.js";
const checkAuth = (req,res,next)=>{
    let token = req.cookies.token;

    if(!token){
        return res.status(401).json({error: "access denied"})
    }

    try {
        console.log("token received:", token);
        const decoded = checktoken(token);
        console.log("decoded result:", decoded);
        req.userid = decoded;
        next()
    }
    catch(error){
        console.log(`Error while authenticating ${error}`)
        return res.status(500).json({ message: "Authentication error" });
    }


};

export {checkAuth};