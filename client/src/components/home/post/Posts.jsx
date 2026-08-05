import React, { useEffect, useState } from "react";
import { getAccessToken, getPostsUrl } from "../../../utils/common-utils";
import Post from "./Post";
import { Box, Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [post, setPost] = useState([]);
  const [searchParam] = useSearchParams();
  const categories = searchParam.get("category");
  const query = searchParam.get("query");

  useEffect(() => {
    const token = getAccessToken();
    const fetchData = async () => {
      const url = getPostsUrl(BASE_URL, categories, query);

      const response = await fetch(
       url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        },
      );

      const data = await response.json();
      if (response.ok) {
        setPost(data);
      }
    };
    fetchData();
  }, [categories]);

  return (
    <>
      {post.length > 0 ? (
        <Grid container spacing={2}>
          {post.map((item) => (
            <Grid key={item._id} size={{ xs: 12, sm: 4, lg: 3 }}>
              <Post post={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            color: "#878787",
            margin: "30px 80px",
            fontSize: 18,
          }}
        >
          <h1>No data available to Display</h1>
        </Box>
      )}
    </>
  );
};
export default Posts;
