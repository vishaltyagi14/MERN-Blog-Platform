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

export const getComments=async(req,res)=>{
    try {
        const { postId } = req.query;
        const comments= await Comment.find({postId})
        res.status(200).json(comments)
    } catch (error) {
        return res.status(200).json({
            msg: error
        })
    }
}