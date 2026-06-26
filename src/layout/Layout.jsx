import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import logo from '../assets/Logo (4).png';
import DropDown from '../components/button';
import { Box, Grid, Typography, Button, IconButton, Stack, Divider, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };
  return (
    <div className="bg-[#222222] min-h-screen text-white">
      <header>
        <div className='container mx-auto px-3 md:px-6 py-3 md:py-5'>
          <nav className='flex items-center justify-between gap-2 md:gap-6'>
            <div className='flex items-center gap-2 md:gap-4'>
              <img src={logo} alt="DubaiRealty" className='h-8 md:h-12' />
            </div>
            <div className='hidden lg:flex items-center gap-8'>
              <DropDown to={'/'} text='BUY ▾'/>
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500 transition'} to={'/blog'}>BLOG</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500 transition'} to={'/about'}>ABOUT</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500 transition'} to={'/contact'}>CONTACT</NavLink>
            </div>
            <div className='flex items-center gap-2 md:gap-6 justify-end flex-grow md:flex-grow-0'>
              <button className='hidden lg:block bg-[#F7C300] text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded shadow-lg hover:bg-[#e0b400] transition text-xs md:text-sm'>
                Book a consultation
              </button>
              <div className='hidden md:flex items-center gap-3 text-sm uppercase'>
                <span className='text-[#FCD54C] cursor-pointer'>EN</span>
                <span className='text-[#929292] cursor-pointer hover:text-white transition'>RU</span>
              </div>
              <div className='text-right hidden sm:block'>
                <p className='text-white font-bold text-xs md:text-[21px]'>+7 (212) 674-25-10</p>
              </div>
              <IconButton onClick={toggleDrawer(true)}  className="block lg:hidden" sx={{ color: '#FCD54C', padding: '4px' }}>
                <MenuIcon sx={{ fontSize: '28px' }} />
              </IconButton>
            </div>
          </nav>
        </div>
      </header>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            width: { xs: '250px', sm: '290px' }, 
            backgroundColor: '#ffffff', 
            color: '#000000', 
            padding: '16px 12px',
            boxSizing: 'border-box'
          }
        }}
      >
        <Box className="flex flex-col h-full justify-between">
          <Box>
            <Box className="flex justify-end mb-6">
              <IconButton onClick={toggleDrawer(false)} sx={{ color: '#000000', padding: '4px' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box className="flex flex-col gap-5 text-base font-bold tracking-wide pl-2">
              <div onClick={toggleDrawer(false)} style={{ color: '#000000' }}>
                <DropDown to={'/'} text='BUY ▾'/>
              </div>
              <NavLink onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-black block py-1'} to={'/blog'}>BLOG</NavLink>
              <NavLink onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-black block py-1'} to={'/about'}>ABOUT</NavLink>
              <NavLink onClick={toggleDrawer(false)} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-black block py-1'} to={'/contact'}>CONTACT</NavLink>
            </Box>
          </Box>
          <Box className="flex flex-col gap-5 pl-2 mb-2">
            <div className='flex items-center gap-4 text-xs uppercase font-bold'>
              <span className='text-yellow-600'>EN</span>
              <span className='text-gray-400'>RU</span>
            </div>
            <div className='text-left block'>
              <p className='text-black font-bold text-[15px]'>+7 (212) 674-25-10</p>
            </div>
            <button className='w-full bg-[#F7C300] text-black font-bold py-3 px-2 rounded shadow-md text-[11px] uppercase tracking-wider whitespace-nowrap overflow-hidden text-center'>
              Book a consultation
            </button>
          </Box>
        </Box>
      </Drawer>

      <div>
        <Outlet />
      </div>

      <footer>
        <Box component='footer' sx={{ bgcolor: '#161616', color: '#fff', pt: 8, pb: 4 }}>
          <Box sx={{ maxWidth: 1280, mx: 'auto', px: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2, color: '#fff' }}>Buy</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Apartment in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>House in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Apartments in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Loft in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Penthouse in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>Villa in Dubai</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h6' sx={{ mb: 2, color: '#fff' }}>Services</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Property management in Dubai, UAE</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Sell property in Dubai, UAE</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Rent property in Dubai, UAE</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Investments in Dubai, UAE</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Real estate for cryptocurrency in Dubai</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>Moving to Dubai, UAE</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2, color: '#fff' }}>Information</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Video</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Podcasts</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Laws</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Questions and answers</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Books</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>Articles</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2, color: '#fff' }}>About company</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Jobs</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Story</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Licenses</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Why are we</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>Real estate agency</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h6' sx={{ mb: 2, color: '#fff' }}>Contact</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>964 Worthington Drive</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>Dubai, UAE</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>dubairealty@mail.com</Typography>
                <Button variant='contained' sx={{ mt: 3, bgcolor: '#F7C300', color: '#000', '&:hover': { bgcolor: '#e0b400' } }}>Book a consultation</Button>
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: '#333', my: 4 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant='body2' sx={{ color: '#8b8b8b' }}>Copyright © 2022 Dubai Realty</Typography>
              <Stack direction='row' spacing={1}>
                <IconButton size='small' sx={{ color: '#fff' }}><FacebookIcon fontSize='small' /></IconButton>
                <IconButton size='small' sx={{ color: '#fff' }}><TwitterIcon fontSize='small' /></IconButton>
                <IconButton size='small' sx={{ color: '#fff' }}><YouTubeIcon fontSize='small' /></IconButton>
                <IconButton size='small' sx={{ color: '#fff' }}><InstagramIcon fontSize='small' /></IconButton>
                <IconButton size='small' sx={{ color: '#fff' }}><LinkedInIcon fontSize='small' /></IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </footer>
    </div>
  );
};

export default Layout;