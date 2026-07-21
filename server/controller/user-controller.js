import User from "../model/user.js"
import bcrypt from "bcrypt"

// Signup API

export const signupUser=async(req,res)=>{
    try {
        const {name,password,username}= req.body;
        const hashPass=await bcrypt.hash(password,10)
        const newUser= await User.create({
            name,
            username,
            password: hashPass
        })
// Send to Frontend 

        return res.status(200).json({
            success: true,
            message: "Signup Successfull"

        })
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).json({
            success: false,
            message: "Error while signup the user"

        })
    }
}