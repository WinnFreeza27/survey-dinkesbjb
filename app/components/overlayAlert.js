// components/OverlayAlert.js
"use client"
import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAlertStore } from '../hooks/useAlertStore';
import { Snackbar, Alert } from '@mui/material'; // Material-UI components

const OverlayAlert = () => {
    const { message, variant, visible, hideAlert } = useAlertStore();
    console.log(message)
    useLayoutEffect(() => {
      if (visible && typeof document !== 'undefined') {
        const timeout = setTimeout(() => {
          hideAlert(); // Hide alert after some time (e.g., 3 seconds)
        }, 3000); // Adjust timeout as needed
  
        return () => clearTimeout(timeout); // Cleanup on unmount or visibility change
      }
    }, [visible, hideAlert]);
  
    if (!visible || typeof document === 'undefined') {
      return null; // Return null if not visible or document is undefined (server-side)
    }
  
    return createPortal(
      <Snackbar
        open={visible}
        autoHideDuration={3000}
        onClose={hideAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={hideAlert} severity={variant}>
          {message}
        </Alert>
      </Snackbar>,
      document.body
    );
  };
  
  export default OverlayAlert;