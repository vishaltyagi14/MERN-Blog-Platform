import React from "react";
import Login from "./components/accounts/login";
import { Box } from "@mui/material";
import ContextProvider from "./context/Context";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";

const App = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default App;
