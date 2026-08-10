import Comment from "../model/comment.js"
export const newComment=async(req,res)=>{
    try {

        const comment= await new Comment(req.body)
        comment.save()

        res.status(200).json({
            msg: "Comment saved Successfully"
        })
    } catch (error) {
        return res.status(200).json({
            msg: error
        })
    }
}