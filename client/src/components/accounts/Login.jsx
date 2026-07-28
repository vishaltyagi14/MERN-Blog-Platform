import {
  TextField,
  Box,
  Button,
  Typography,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";
import { LogIn, UserPlus } from "lucide-react";
import logo from "../../assets/logo_text.png";
import { createContext, useContext } from "react";
import ContextProvider from "../../context/Context";

import React, { useState } from "react";

const Login = () => {
  const initialSignup = {
    name: "",
    username: "",
    password: "",
  };

  const initialLogin = {
    username: "",
    password: "",
  };

  const [account, setAccount] = useState(true);
  const [signup, setSignup] = useState(initialSignup);
  const [login, setLogin] = useState(initialLogin);
  const [load, setLoad] = useState(false);
  const [alertmsg, setAlert] = useState("");
  const [result, setResult] = useState("");
  const [loginResult, setLoginResult] = useState("");
  const [setAccount] = useContext(createContext);

  const toogleSignup = () => {
    setAccount((prev) => !prev);
  };

  // Handle Input
  const inputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const valueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const BASE_URL = "http://localhost:8000/api";
  const signupUserApi = async () => {
    try {
      setLoad(true);

      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });

      const data = await response.json();
      if (response.ok) {
        toogleSignup();
      } else {
        setAlert("error");
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  const loginUserApi = async () => {
    try {
      setLoad(true);
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("accesToken", `Bearer ${data.accessToken}`);
        sessionStorage.setItem("refreshToken", `Bearer ${data.refreshToken}`);

        setAccount({username: data.username, name: data.name})
        setAlert("success");
        setLoginResult(data.message);
      } else {
        setAlert("error");
        setLoginResult(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-100 p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white text-center">
        <img className="h-20 mx-auto mb-6" src={logo} alt="Logo" />
        {account === true ? (
          // LOGIN PAGE
          <div className="flex flex-col gap-5">
            <TextField
              label="Username"
              value={login.username}
              onChange={valueChange}
              name="username"
              variant="standard"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="standard"
              fullWidth
              onChange={valueChange}
              value={login.password}
            />
            <Button
              disabled={load}
              variant="contained"
              onClick={() => loginUserApi()}
              endIcon={
                load ? (
                  <CircularProgress
                    enableTrackSlot
                    size="30px"
                    aria-label="Loading…"
                    color="inherit"
                  />
                ) : (
                  <LogIn size={19} />
                )
              }
              fullWidth
            >
              Login
            </Button>
            <Typography>Or</Typography>
            <Link component="button" onClick={toogleSignup} underline="none">
              Don't have an account?
            </Link>
            <Alert severity={alertmsg}>{loginResult}</Alert>
          </div>
        ) : (
          // SIGNUP PAGE
          <div className="flex flex-col gap-5">
            <TextField
              label="Full Name"
              name="name"
              value={signup.name}
              onChange={inputChange}
              variant="standard"
              fullWidth
            />

            <TextField
              label="Username"
              name="username"
              value={signup.username}
              onChange={inputChange}
              variant="standard"
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={signup.password}
              onChange={inputChange}
              variant="standard"
              fullWidth
            />
            <Button
              disabled={load}
              variant="contained"
              endIcon={
                load ? (
                  <CircularProgress
                    enableTrackSlot
                    size="30px"
                    aria-label="Loading…"
                    color="inherit"
                  />
                ) : (
                  <UserPlus size={19} />
                )
              }
              fullWidth
              onClick={() => signupUserApi()}
            >
              {load ? "We are signing you up..." : "Signup"}
            </Button>
            <Typography>Or</Typography>
            <Link component="button" onClick={toogleSignup} underline="none">
              Already have an Account
            </Link>
            <Alert severity={alertmsg}>{result}</Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
