import { TextField, Box, Button, Typography, Link } from "@mui/material";
import { LogIn, UserPlus } from "lucide-react";
import logo from "../../assets/logo_text.png";

import React, { useState } from "react";

const Login = () => {
  const [account, setAccount] = useState(true);
  const toogleSignup=()=>{
      setAccount((prev)=>!prev)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white text-center">
        <img className="h-20 mx-auto mb-6" src={logo} alt="Logo" />
        {account === true ? (
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
            <Link component='button' onClick={ toogleSignup} underline="none">
              Don't have an account?
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <TextField label="Full Name" variant="standard" fullWidth />
            <TextField label="Username" variant="standard" fullWidth />

            <TextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
            />

            <Button
              variant="contained"
              endIcon={<UserPlus size={19} />}
              fullWidth
            >
              Signup
            </Button>
            <Typography>Or</Typography>
            <Link component='button' onClick={ toogleSignup} underline="none">
              Already have an Account
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Login;
