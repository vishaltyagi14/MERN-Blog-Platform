import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { addElipsis } from "../../../utils/common-utils";

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px;
  height: 350px;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;

  display: flex;
  flex-direction: column;
`;
const Image = styled("img")({
  width: "100%",
  borderRadius: "10px 10px 0 0",
  objectFit: "cover",
  height: 150,
});
const Cat = styled(Typography)`
  margin: 8px 0;
  width: fit-content;
  height: 24px;
  padding: 0 10px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 24px;
  background-color: #b6b4b4;
  color: #4f4f4f;

  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const Heading = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const SubHeading = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const SubContainer = styled(Box)`
  margin: 10px;
  max-width: 100%;
  box-sizing: border-box;
`;

const Desc = styled(Typography)`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;
const ButtonStyle = styled(Button)`
  margin: auto 10px 10px;
`;
const Post = ({ post }) => {
  return (
    <>
      <Container>
        <Image
          src={
            post.picture
              ? post.picture
              : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
          }
          alt="Blog Image"
          title="picture"
        />
        <SubContainer>
          <Heading>Title: {addElipsis(post.title, 15)}</Heading>
          <SubHeading>By: {post.username}</SubHeading>
          <Cat>{post.categories}</Cat>
          <Desc>{addElipsis(post.description, 50)}</Desc>
        </SubContainer>
        <ButtonStyle variant="contained" >
          Open
        </ButtonStyle>
      </Container>
    </>
  );
};

export default Post;
