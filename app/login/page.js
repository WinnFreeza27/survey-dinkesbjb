"use client"

import ResponsiveAppBar from "../components/navbar";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import CustomButton from "../components/customButton";
import {useState, useEffect} from "react"
import { signIn } from "../utils/signIn";
import { Alert } from "@mui/material";
import { errorMsg } from "../utils/errorMsg";
import { useSessionStore } from "../hooks/useSessionStore";
import { useAlertStore } from "../hooks/useAlertStore";

export default function LoginPage() {
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {session} = useSessionStore();
  const {showAlert} = useAlertStore()
  const router = useRouter();
  const pathname = usePathname();
    useEffect(() => {
      if (session && pathname === '/login') {
        router.push('/');
      }
    }, [session, router]);

  const handleChange = (e) => {
    setError(null);
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      // Call your signIn function (replace with actual implementation)
      await signIn(form.email, form.password);
      showAlert('Login Berhasil!', 'success'); // Trigger alert on successful login
      // Handle successful login
    } catch (error) {
      // Handle login error
      setError(errorMsg(error.message));
      showAlert(errorMsg(error.message), 'error');
    } finally {
      setLoading(false); // Reset loading state after form submission completes
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <ResponsiveAppBar />
      <main className="mt-4 sm:mt-10 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center font-bold text-base xs:text-xl sm:text-3xl text-center gap-3 mb-4 sm:mb-10">
          <h1>DINAS KESEHATAN KOTA BANJARBARU</h1>
          <h1>Login</h1>
        </div>

        <Card className="p-4 mt-1 bg-white shadow-md">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
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
            <CustomButton type="submit" variant="contained" fullWidth disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </CustomButton>
          </form>
        </Card>
      </main>
    </>
  );
}