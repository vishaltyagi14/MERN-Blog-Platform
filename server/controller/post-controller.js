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
         console.error("Create post error:", error);
         return res.status(500).json({
            success: false,
            msg: error.message || "Failed to create post"
        })
    }
} 

export const getAllPosts=async(req,res)=>{
    try {
        const posts= await Post.find({})
        return res.status(200).json(posts)
    } catch (error) {
        return response.status(500).json({
            msg: error.message
        })
    }
}