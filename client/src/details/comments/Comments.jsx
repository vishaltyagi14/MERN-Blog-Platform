
import { Box, Button, styled, TextareaAutosize } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
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
};

const Comments = ({ post }) => {
  const [comment, setComment] = useState(initial);
  const [cmntData, setCmntData] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;
  const { accountDetails } = useContext(OnlyContext);
  const token = getAccessToken();

  const url =
    "https://static.thenounproject.com/png/12017-200.png";

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: accountDetails.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  // Get all comments of this post
  const getAllComments = async () => {
    try {
      const cmnt = await fetch(
        `${BASE_URL}/comments?postId=${post._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      const data = await cmnt.json();

      if (cmnt.ok) {
        setCmntData(data);
      }
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };

  // Post comment
  const postComment = async () => {
    try {
      const response = await fetch(`${BASE_URL}/addComment/new`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });

      if (response.ok) {
        setComment(initial);

        // Fetch updated comments
        getAllComments();
      }
    } catch (error) {
      console.log("Error posting comment:", error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, [post._id, token]);

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

      <Box>
        {cmntData.map((item) => (
          <Box key={item._id}>
            <strong>{item.name}</strong>
            <p>{item.comments}</p>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Comments;
