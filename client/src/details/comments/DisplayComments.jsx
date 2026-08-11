import { Box, Typography, IconButton, Avatar, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React, { useContext } from "react";
import { OnlyContext } from "../../context/Context";

import { getAccessToken } from "../../utils/common-utils";

const DisplayComments = ({ com, getAllComments }) => {
  const { accountDetails } = useContext(OnlyContext);

  const isOwner = com.name === accountDetails?.username;
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token= getAccessToken()
  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/deletecomment/${com._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        getAllComments();
      } else {
        console.log("Delete failed:", data);
      }
    } catch (error) {
      console.log("Error deleting comment:", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        width: "100%",
        boxSizing: "border-box",
        padding: "14px 16px",
        marginBottom: "10px",
        borderRadius: "14px",
        backgroundColor: "#fafafa",
        border: "1px solid #eeeeee",
        marginTop: "20px",
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          width: 42,
          height: 42,
          flexShrink: 0,
          fontSize: "16px",
          fontWeight: 600,
          bgcolor: "#1976d2",
        }}
      >
        {com.name?.charAt(0).toUpperCase()}
      </Avatar>

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* User info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            {com.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#999",
            }}
          >
            •
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#999",
            }}
          >
            {com.date
              ? new Date(com.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Just now"}
          </Typography>

          {isOwner && (
            <Tooltip title="Delete comment">
              <IconButton
                size="small"
                sx={{
                  marginLeft: "auto",
                  flexShrink: 0,
                  color: "#999",

                  "&:hover": {
                    color: "#d32f2f",
                    backgroundColor: "#ffebee",
                  },
                }}
                onClick={handleDelete}
              >
                <Delete sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* Comment Content */}
        <Typography
          sx={{
            display: "block",
            width: "100%",
            marginTop: "8px",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#333",

            // Important for long comments
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            wordBreak: "break-word",

            // Don't clip the content
            overflow: "visible",
          }}
        >
          {com.comments}
        </Typography>
      </Box>
    </Box>
  );
};

export default DisplayComments;
