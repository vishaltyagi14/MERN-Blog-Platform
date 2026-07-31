import { Typography, Box, styled } from "@mui/material";

import React from "react";

const Image = styled(Box)`
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Heading=styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height:1;
`

const SubHeading=styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;

`

const Banner = () => {
  return (
    <>
      <Image>
        <Heading>BLOG</Heading>
        <SubHeading>DevInk</SubHeading>
      </Image>
    </>
  );
};

export default Banner;
