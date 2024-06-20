"use client"

import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { CircularProgress, } from '@mui/material'; // Import CircularProgress from Material-UI
import { useAlertStore } from '../hooks/useAlertStore';
const LogoutPage = () => {
    const {showAlert} = useAlertStore()
    const router = useRouter()
    const handleLogout = async () => {
        console.log("X")
            try {
              await supabase.auth.signOut();
              showAlert('Logout Berhasil!', 'success');
              router.push('/');
              // Optionally, redirect or show a confirmation message
              console.log('User logged out successfully');
            } catch (error) {
              console.error('Error logging out:', error.message);
              // Handle error state or show error message to the user
            }
          };
    handleLogout();
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={24} /> Logging out...
    </div>
    </>
  );
};

export default LogoutPage;
