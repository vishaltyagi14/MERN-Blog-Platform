import { Box, Button, styled, TextareaAutosize } from "@mui/material";
import React, { useState, useContext } from "react";
import { OnlyContext } from "../../context/Context";
import { getAccessToken } from "../../utils/common-utils";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Image = styled("img")`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
`;

const initial = {
  name: "",
  postId: "",
  comments: "",
  date: new Date(),
};

const Comments = ({ post }) => {
  const [comment, setComment] = useState(initial);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { accountDetails } = useContext(OnlyContext);

  const url = "https://static.thenounproject.com/png/12017-200.png";
  const token = getAccessToken();
  const handleChange = (e) => {
    setComment({
      ...comment,
      name: accountDetails.username,
      postId: post._id,
      comments: e.target.value,
    });
  };
  const postComment = async () => {
    const response = await fetch(`${BASE_URL}/addComment/new`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    if(response.ok){
        setComment(initial)
    }
  };

  return (
    <>
      {/* For Commenting */}
      <Container>
        <Image src={url} />

        <TextArea
          placeholder="Write a comment..."
          value={comment.comments}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          style={{ height: "40px" }}
          onClick={postComment}
        >
          Post
        </Button>
      </Container>

      {/* For Displaying Comments */}
    </>
  );
};

export default Comments;
