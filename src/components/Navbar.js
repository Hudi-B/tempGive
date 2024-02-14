import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Title = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">Lodging</Title>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/lodging/new" color="inherit">New Lodging</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
