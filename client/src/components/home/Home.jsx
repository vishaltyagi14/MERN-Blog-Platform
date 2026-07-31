import React from "react";
import Banner from "../banner/Banner";
import { Typography, Grid } from "@mui/material";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid size={{ xs: 12, sm: 2, lg: 2 }}>
          <Categories />
        </Grid>

        <Grid size={{ xs: 12, sm: 10, lg: 10 }}>Posts</Grid>
      </Grid>
    </>
  );
};

export default Home;
