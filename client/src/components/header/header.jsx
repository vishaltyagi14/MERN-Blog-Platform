import React from "react";
import { AppBar, Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background-color: white;
`;
const Container = styled(Box)`
    justify-content: center;
    &> a{
      color: #000;
      padding: 20px
      text-decoration: none;
}
`;
const Header = () => {
  return (
    <Component>
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGOUT</Link>
      </Container>
    </Component>
  );
};

export default Header;
