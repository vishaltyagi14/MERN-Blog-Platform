import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from "dotenv";

dotenv.config();

export const storage=new GridFsStorage({
    url: process.env.MONGO_URI,
    options: {useNewUrlParser: true},
    file: (req,file)=>{
        const match =["image/png","image/jpg"];

        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `$${Date.now()}-blog-${file.originalname}`
        }
    }
})