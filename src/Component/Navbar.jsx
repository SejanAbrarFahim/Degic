import React, { useState } from 'react'
import '../App.css'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

function Navbar() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const menuItems = ['Home', 'About', 'Services', 'Project', 'Contact']

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: 'white', color: 'black',borderBottom:"1px solid #ccc",boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            minHeight: 70,
            px: { xs: 2, md: 6 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', paddingBottom:"10px" }}>
            <img
              src="/Logo.png"
              alt="Logo"             
            />
          </Box>

          {/* Desktop menu / Mobile hamburger */}
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {menuItems.map((item) => (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: '#5F62E2',
                  borderColor: '#5F62E2',
                  backgroundColor: 'rgba(95, 98, 226, 0.2)',
                  borderRadius: '10px',
                  ml: 2,
                  '&:hover': {
                    backgroundColor: '#5F62E2',
                    borderColor: '#5F62E2',
                    color: 'white',
                  },
                }}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar