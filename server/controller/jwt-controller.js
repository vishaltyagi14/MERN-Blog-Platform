import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticateToken=(req,res,next)=>{


    const authHeader=req.headers.authorization
    const token=authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({msg:"Token is Missing"})
    }
    
    jwt.verify(token,process.env.ACCESS_TOKEN_KEY,(error,user)=>{
        if(error){
            console.log("JWT ERROR:", error);
            return res.status(403).json({msg:"Invalid Token"})
        }
        req.user= user;
        next()
    })
}