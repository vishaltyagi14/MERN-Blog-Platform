import Comment from "../model/comment.js"
export const newComment = async (req, res) => {
    try {

        const comment = await new Comment(req.body)
        comment.save()

        res.status(200).json({
            msg: "Comment saved Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
}

export const getComments = async (req, res) => {
    try {
        const { postId } = req.query;
        const comments = await Comment.find({ postId }).sort({ date: -1 });
        res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).json({ msg: "Comment not Found" })
        }
        await Comment.findByIdAndDelete(req.params.id);

        return res.status(200).json({ msg: "Comment Deleted SuccessFully" })
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
}
