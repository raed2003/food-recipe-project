import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AdbIcon from '@mui/icons-material/Adb';
import image from './logo by issra.png'
import axios from 'axios';
import { useState, useRef } from 'react';
import { Nav } from 'react-bootstrap';

const pages = [];



function ResponsiveAppBar({setHits,search,setSearch}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  
    
  };
  
    
    console.log(search)
    const searchrecipe=async()=>{
      try {
          await axios.post(`https://api.edamam.com/search?q=${search}$&app_id=8a888ecb&app_key=5fba4a439eed4be8151d338d297e90ff`)
        .then(response=>setHits(response.data.hits))
      } catch (error) {
        console.log(error)
      }
    }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
   
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const searchInputRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchrecipe();
    }
  };
  return (
    <AppBar position="static" style={{background:"#FFF0F5 "}}>

      <Container maxWidth="xl" maxHeight="100px">
        <Toolbar disableGutters>
        <img src={image} alt="Your Image" style={{ display: { xs: 'none', md: 'flex' }, marginRight: 1, height: '80px', width: '100px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Nav>
          <Nav.Link href="/login" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Login</Nav.Link>
            <Nav.Link href="/diet" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Diet</Nav.Link>
            <Nav.Link href="/" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Signup</Nav.Link>
          </Nav>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
<InputBase style={{color:"black"}}
 placeholder="Search..."
 inputRef={searchInputRef}
 onKeyDown={handleKeyDown}
 onChange={(e)=>setSearch(e.target.value)}
 value={search} />

              <SearchIcon style={{color:"black"}} onClick={searchrecipe} />
            
          

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;