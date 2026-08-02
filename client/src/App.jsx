import React, { useState } from "react";
import Login from "./components/accounts/login";
import { Box, Toolbar } from "@mui/material";
import ContextProvider from "./context/Context";
import Home from "./components/home/home";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header";
import CreatePost from "./components/create/CreatePost";

const PrivateRoute = () => {
  const token = sessionStorage.getItem("accessToken");


  return token ? (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default App;
