import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../auth/authSlice';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const Title = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">Lodging</Title>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/lodging/new" color="inherit">New Lodging</Button>
        {
          isLoggedIn ? (
            <Tooltip title="Logout">
              <Avatar sx={{ bgcolor: 'info.main' }} onClick={() => handleLogout()}>A</Avatar>
            </Tooltip>
          ) : (
            <Button component={Link} to="/login" color="inherit">Login</Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
