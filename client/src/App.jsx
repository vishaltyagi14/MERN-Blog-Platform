import React from "react";
import Login from "./components/accounts/login";
import { Box } from "@mui/material";
import ContextProvider from "./context/Context";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
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
