import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px;
  height: 350px;
  & > p {
    padding: 0 5px 5px 5px;
  }
`;
const Post = ({ post }) => {
  return (
    <>
      <Container>
        <img src={post.picture? post.picture: "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"} alt="Blog Image" title="picture" />
        <Typography>{post.title}</Typography>
        <Typography>{post.categories}</Typography>
        <Typography>{post.username}</Typography>
        <Typography>{post.description}</Typography>
      </Container>
    </>
  );
};

export default Post;
