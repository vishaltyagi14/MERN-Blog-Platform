import React from "react";
import { AppBar, Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background-color: white;
  justify-content: center;
  height: 60px;
`;
const Container = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    &> a{
      color: #000;
      padding: 25px
      text-decoration: none;
}
`;

const handleLogout=()=>{
  sessionStorage.removeItem("accessToken")
  sessionStorage.removeItem("refreshToken");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("name");
}
const Header = () => {
  return (
    <Component>
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link onClick ={handleLogout} to="/login">LOGOUT</Link>
      </Container>
    </Component>
  );
};

export default Header;
