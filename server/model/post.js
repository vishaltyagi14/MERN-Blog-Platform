import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    categories:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
    }
})
const Post= mongoose.model("Post",postSchema)
export default Post;