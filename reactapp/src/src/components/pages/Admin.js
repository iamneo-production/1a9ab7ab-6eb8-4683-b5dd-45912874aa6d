import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Avatar, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ChefKart
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" >
              <Avatar sx={{ bgcolor: '#6d1b7b' }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="temporary" anchor="left" open={isSidebarOpen} onClose={handleSidebarToggle} >
          <List>
            <ListItem button  onClick={handleSidebarToggle}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button  onClick={handleSidebarToggle} >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Chef Profile" />
            </ListItem>
            <ListItem button onClick={handleSidebarToggle}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItem>
            <ListItem button  onClick={handleSidebarToggle}>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Booking" />
            </ListItem>
            <ListItem button onClick={handleSidebarToggle}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Manage FeedBack" />
            </ListItem>
            <ListItem button component={NavLink} to="/" onClick={handleSidebarToggle}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to ChefKart Admin Dashboard!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
