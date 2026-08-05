import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../../utils/common-utils";
import Post from "./Post";
import { Box,Grid } from "@mui/material";


const Posts = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const token = getAccessToken();
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setPost(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {post && post.length > 0 ? (
        post.map((post) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Post post={post} />
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          <h1>No data available to Display</h1>
        </Box>
      )}
    </>
  );
};

export default Posts;
