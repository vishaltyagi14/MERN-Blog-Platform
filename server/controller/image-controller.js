import mongoose from "mongoose";

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                msg: "File not found",
            });
        }

        const db = mongoose.connection.db;

        const bucket = new mongoose.mongo.GridFSBucket(db, {
            bucketName: "photos",
        });

        const filename = `${Date.now()}-blog-${req.file.originalname}`;

        const uploadStream = bucket.openUploadStream(filename, {
            contentType: req.file.mimetype,
        });

        uploadStream.end(req.file.buffer);

        uploadStream.on("finish", () => {
            const imageUrl = `${process.env.BACKEND_URL}/file/${filename}`;

            return res.status(200).json({
                success: true,
                imgUrl: imageUrl,
            });
        });

        uploadStream.on("error", (error) => {
            console.log("GridFS upload error:", error);

            return res.status(500).json({
                success: false,
                msg: "Image upload failed",
            });
        });

    } catch (error) {
        console.log("Upload error:", error);

        return res.status(500).json({
            success: false,
            msg: error.message,
        });
    }
};