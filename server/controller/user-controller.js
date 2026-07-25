import User from "../model/user.js"
import bcrypt from "bcrypt"

// Signup API

export const signupUser = async (req, res) => {
    try {
        const { name, password, username } = req.body;
        const hashPass = await bcrypt.hash(password, 10)
        const newUser = await User.create({
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
        console.error("Error: ", error)
        return res.status(500).json({
            success: false,
            message: "Error while signup the user"

        })
    }
}

export const loginUser = async (req, res) => {
    let { username, password } = req.body
    let user = await User.findOne({
        username
    })
    if (!user) {
        return res.status(400).json({
            success: "false",
            message: "Username doesn't match"
        })
    }
    try {
        let match = await bcrypt.compare(password, user.password)
        if (match) {
            const accessToken= jwt.sign(user.json(),process.env.ACCESS_TOKEN_KEY)
            const refreshToken
        } else {
            return res.status(400).json({
                success: "false",
                message: "username or password is wrong"
            })
        }
    } catch (error) {
        console.error("Error: ", error)
        return res.status(500).json({
            success: false,
            message: "Error while login the user"

        })
    }
}