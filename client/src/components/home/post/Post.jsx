import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { addElipsis } from "../../../utils/common-utils";
import { useNavigate } from "react-router-dom";
const Container = styled(Box)`
  border: 1px solid #e1e4e8;
  border-radius: 14px;
  margin: 10px;
  height: 360px;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #d0d5db;
  }
`;
const Image = styled("img")`
  width: 100%;
  height: 165px;
  object-fit: cover;
  display: block;
`;
const Content = styled(Box)`
  padding: 10px 14px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Cat = styled(Typography)`
  margin-bottom: 7px;
  width: fit-content;
  padding: 4px 11px;
  border-radius: 20px;
  background-color: #eef2ff;
  color: #4f46e5;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
`;
const Heading = styled(Typography)`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
  color: #222;
  margin-bottom: 4px;
`;
const SubHeading = styled(Typography)`
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
`;
const Desc = styled(Typography)`
  font-size: 13px;
  color: #555;
  line-height: 1.55;
  overflow-wrap: anywhere;
`;
const ButtonStyle = styled(Button)`
  margin: auto 14px 14px;
  border-radius: 8px;
  text-transform: none;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
`;
const Post = ({ post, id }) => {
  const navigate = useNavigate();
  const fallbackImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <Container>
      {" "}
      {/* Blog Image */}{" "}
      <Image src={post.picture || fallbackImage} alt="Blog" />{" "}
      {/* Blog Content */}{" "}
      <Content>
        {" "}
        {/* Category */} <Cat> {post.categories || "General"} </Cat>{" "}
        {/* Title */} <Heading> {addElipsis(post.title, 45)} </Heading>{" "}
        {/* Author */} <SubHeading> By {post.username} </SubHeading>{" "}
        {/* Description */}{" "}
        <Desc> {addElipsis(post.description, 100)} </Desc>{" "}
      </Content>{" "}
      {/* Open Button */}{" "}
      <ButtonStyle
        variant="contained"
        onClick={() => navigate(`/details/${id}`)}
      >
        {" "}
        Read More{" "}
      </ButtonStyle>{" "}
    </Container>
  );
};
export default Post;
