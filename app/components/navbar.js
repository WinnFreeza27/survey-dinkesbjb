"use client"
import {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import supabase from '../lib/supabaseClient';

const pages = ['Survey', 'Tentang', 'Bantuan'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState(null); // State to track user authentication state

  console.log(user)
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
    if (type === 'Logout') {
        handleLogout()
    }
  };

  useEffect(() => {
    // Check if user is already authenticated on component mount
    const checkSession = async() => {
        const session = await supabase.auth.getUser();
        setUser(session?.user ?? null);
    }
    checkSession()
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null); // Update local state to indicate user is logged out
      // Optionally, redirect or show a confirmation message
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error.message);
      // Handle error state or show error message to the user
    }
  };

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
                <AccountCircle sx={{width: 40, height: 40}}/>
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
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
