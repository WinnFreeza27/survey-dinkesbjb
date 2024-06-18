"use client"

import ResponsiveAppBar from "../components/navbar";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import CustomButton from "../components/customButton";
import {useState, useEffect} from "react"
import { createAdmin } from "../utils/createAdmin";
import { signIn } from "../utils/signIn";
import supabase from "../lib/supabaseClient";

export default function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    signIn(email, password)
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('User is signed in:', session.user);
        // Handle signed in state
      } else if (event === 'SIGNED_OUT') {
        console.log('User is signed out');
        // Handle signed out state
      }
    });

    // Return cleanup function
    return () => {
      // Cleanup any resources if needed, but no direct unsubscribe needed for authListener
    };
  }, []); // Only run once on component mount

  return (
    <>
      <ResponsiveAppBar />
      <main className="mt-4 sm:mt-10 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center font-bold text-base xs:text-xl sm:text-3xl text-center gap-3">
          <h1>DINAS KESEHATAN KOTA BANJARBARU</h1>
          <h1>Login</h1>
        </div>
        <Card className="mt-4 sm:mt-10 p-4 bg-white shadow-md">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              className="mb-4"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <CustomButton type="submit" variant="contained" fullWidth>
              Login
            </CustomButton>
          </form>
        </Card>
      </main>
    </>
  );
}