import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "gray",
      }}
    >
      <Box className="flex gap-6 p-4">
        <Typography>HOME</Typography>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGOUT</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
