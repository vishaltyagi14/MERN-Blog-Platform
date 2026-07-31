import React, { useState } from "react";
import Login from "./components/accounts/login";
import { Box } from "@mui/material";
import ContextProvider from "./context/Context";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route, Outlet ,Navigate} from "react-router-dom";
import Header from "./components/header/header";

const Privateroute=({isAuthenticated,...props})=>{
  return isAuthenticated?<>
  <Outlet/>
  </>:
  <Navigate replace to='/login'/>
}
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="/" element={<Privateroute isAuthenticated={isAuthenticated}/>}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default App;
