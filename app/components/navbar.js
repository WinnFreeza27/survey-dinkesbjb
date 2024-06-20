"use client"
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem, 
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSessionStore } from '../hooks/useSessionStore';
import { useRouter } from 'next/navigation';
import { createAdmin } from '../utils/createAdmin';

const pages = ['Survey', 'Tentang', 'Bantuan'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const {session}= useSessionStore();

  const settings = session ? ['Logout', 'Dashboard'] : ['Login'];
  const router = useRouter()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (type) => {
    setAnchorElUser(null);
    if (type === 'Login') {
      router.push('/login')
    } else if (type == 'Logout') {
      router.push('/logout')
    };
  }

  return (
    <AppBar position="static" sx={{backgroundColor: "white", color: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
          <img src="/logobjb.png" alt="logo" style={{width: 40, height: 50}}/>
        
          <Box sx={{ display:  'flex', gap: {sm: 5}}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'rgb(--text-secondary)', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {session ? <Avatar sx={{width: 40, height: 40}}/> : <AccountCircle sx={{width: 40, height: 40}}/>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
