import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ImageUp } from "lucide-react";

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

  const handleChange = (e) => {
    setPost({...post,[e.target.name]: e.target.value})
  };
  return (
    <>
      <Container>
        <Image
          src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="banner"
          title="Banner Image"
        />

        <StyledFormControl>
          <label htmlFor="upload_image" className="mt-1.5 ml-2">
            <ImageUp color="#363636" size={25}></ImageUp>
          </label>
          <input type="file" id="upload_image" style={{ display: "none" }} />
          <StyledInputBase placeholder="Title" name="title" onChange={handleChange}/>
          <Button variant="contained">Publish</Button>
        </StyledFormControl>
        <StyledTextareaAutosize onChange={handleChange} name="description" placeholder="Whats Up!..." minRows={5} />
      </Container>
    </>
  );
};

export default CreatePost;
