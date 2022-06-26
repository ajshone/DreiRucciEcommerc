import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './NavBar2.css'

const pages = ['Home', 'Products', 'About Us'];
const settings = ['Home', 'Profile', 'About Us'];

const NavBar2 = () => {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar className='d-flec justify-content-center'>
         <MenuItem >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#AboutUs'> About us</a>
          </Typography>
          </MenuItem>
          <MenuItem>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#Products'>Products</a>
          </Typography>
          </MenuItem>
          <MenuItem>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#Contact'>Contact</a>
          </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar2;
