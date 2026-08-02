import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ImageUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { OnlyContext } from "../../context/Context";

const Image = styled("img")`
  height: 50vh;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
const Container = styled(Box)`
  margin: 0 100px;
`;
const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const StyledInputBase = styled(InputBase)`
  flex: 1;
  font-size: 20px;
  margin: 0 30px;
`;
const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
  resize: none;
  padding: 3px;
  &:focus-visible {
    outline: none;
  }
`;
const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const location = useLocation();
  const account = useContext(OnlyContext);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getImage = async () => {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      // API CALL
      const response = await fetch(`${BASE_URL}/file/upload`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      post.picture = "";
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container>
        <Image
          src={
            post.picture
              ? post.picture
              : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          }
          alt="banner"
          title="Banner Image"
        />

        <StyledFormControl>
          <label htmlFor="upload_image" className="mt-1.5 ml-2">
            <ImageUp color="#363636" size={25}></ImageUp>
          </label>
          <input type="file" id="upload_image" style={{ display: "none" }} />
          <StyledInputBase
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <Button variant="contained">Publish</Button>
        </StyledFormControl>
        <StyledTextareaAutosize
          onChange={handleChange}
          name="description"
          placeholder="Whats Up!..."
          minRows={5}
        />
      </Container>
    </>
  );
};

export default CreatePost;
