import Post from "../model/post.js"

export const createPost = async (req, res) => {
    try {
        const { title, description, picture, username, categories } = req.body;
        const post = await Post.create({
            title, description, picture, username, categories
        })
        return res.status(200).json({
            success: true,
            msg: "post saved successfully"
        })
    } catch (error) {

    }
}