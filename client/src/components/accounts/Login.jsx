import { TextField, Box, Button, Typography, Link, CircularProgress, Alert } from "@mui/material";
import { LogIn, UserPlus } from "lucide-react";
import logo from "../../assets/logo_text.png";

import React, { useState } from "react";

const Login = () => {
  const initialSignup = {
    name: "",
    username: "",
    password: "",
  };

  const [account, setAccount] = useState(true);
  const [signup, setSignup] = useState(initialSignup);
  const [load,setLoad]=useState(false)
  const [alertmsg, setAlert] = useState("")
  const [result, setResult] = useState("")

  const toogleSignup = () => {
    setAccount((prev) => !prev);
  };

  // Handle Input
  const inputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const BASE_URL = "http://localhost:8000/api";
  const signupUserApi = async () => {
    try {
      setLoad(true)
      console.log(signup);
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });

      const data = await response.json();
      if (response.ok) {
        setAlert("success")
        setResult("Signup completed")
      } else {
        
        setAlert("error")
        setResult("Unable to Signup")
      }
    } catch (error) {
      console.error(error);
    }finally{
      setLoad(false)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-100 p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white text-center">
        <img className="h-20 mx-auto mb-6" src={logo} alt="Logo" />
        {account === true ? (
          // LOGIN PAGE
          <div className="flex flex-col gap-5">
            <TextField label="Username" variant="standard" fullWidth />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
            />
            <Button variant="contained" endIcon={<LogIn size={19} />} fullWidth>
              Login
            </Button>
            <Typography>Or</Typography>
            <Link component="button" onClick={toogleSignup} underline="none">
              Don't have an account?
            </Link>
            {/* <Button>help</Button> */}
          </div>
        ) : (
          // SIGNUP PAGE
          <div className="flex flex-col gap-5">
            <TextField
              label="Full Name"
              onChange={(e) => inputChange(e)}
              variant="standard"
              fullWidth
              name="name"
            />
            <TextField
              label="Username"
              onChange={(e) => inputChange(e)}
              variant="standard"
              fullWidth
              name="username"
            />

            <TextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              onChange={(e) => inputChange(e)}
              name="password"
            />
            <Button
            disabled={load}
              variant="contained"
              endIcon={load? <CircularProgress enableTrackSlot size="30px" aria-label="Loading…" color="inherit" />:<UserPlus size={19} />}
              fullWidth
              onClick={() => signupUserApi()}
            >
              {load?  'We are signing you up...':"Signup" }
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
