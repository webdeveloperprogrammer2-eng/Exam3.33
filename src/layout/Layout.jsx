import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, Button, IconButton, Stack, Divider, Drawer, Select, MenuItem, FormControl } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/Logo (4).png';
import DropDown from '../components/button';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => () => { setMobileOpen(open); };
  const changeLanguage = (event) => { i18n.changeLanguage(event.target.value); };

  return (
    <div className="bg-[#222222] min-h-screen text-white">
      <header>
        <div className='container mx-auto px-3 md:px-6 py-3 md:py-5'>
          <nav className='flex items-center justify-between gap-2 md:gap-6'>
            <img src={logo} alt="DubaiRealty" className='h-8 md:h-12' />
            <div className='hidden lg:flex items-center gap-8'>
              <DropDown to={'/'} text={t('nav.buy') + ' ▾'} />
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500'} to={'/blog'}>{t('nav.blog')}</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500'} to={'/about'}>{t('nav.about')}</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500'} to={'/contact'}>{t('nav.contact')}</NavLink>
            </div>
            <div className='flex items-center gap-2 md:gap-6 justify-end flex-grow md:flex-grow-0'>
              <button className='hidden lg:block bg-[#F7C300] text-black font-semibold px-4 py-2 rounded'>{t('nav.book')}</button>
              <FormControl size="small">
                <Select value={i18n.language} onChange={changeLanguage} sx={{ color: '#FCD54C', '.MuiOutlinedInput-notchedOutline': { border: 0 }, '& .MuiSvgIcon-root': { color: '#FCD54C' } }}>
                  <MenuItem value="en">EN</MenuItem>
                  <MenuItem value="tj">TJ</MenuItem>
                  <MenuItem value="ru">RU</MenuItem>
                </Select>
              </FormControl>
              <IconButton onClick={toggleDrawer(true)} className="lg:hidden" sx={{ color: '#FCD54C' }}><MenuIcon /></IconButton>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer>
        <Box component='footer' sx={{ bgcolor: '#161616', color: '#fff', pt: 8, pb: 4 }}>
          <Box sx={{ maxWidth: 1280, mx: 'auto', px: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2 }}>{t('footer.buy_title')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.apartment')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.house')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.apartments')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.loft')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.penthouse')}</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>{t('footer.villa')}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h6' sx={{ mb: 2 }}>{t('footer.services_title')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.serv1')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.serv2')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.serv3')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.serv4')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.serv5')}</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>{t('footer.serv6')}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2 }}>{t('footer.info_title')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.info1')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.info2')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.info3')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.info4')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.info5')}</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>{t('footer.info6')}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant='h6' sx={{ mb: 2 }}>{t('footer.about_title')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.about1')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.about2')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.about3')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.about4')}</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>{t('footer.about5')}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h6' sx={{ mb: 2 }}>{t('footer.contact_title')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.addr1')}</Typography>
                <Typography sx={{ color: '#8b8b8b', mb: 1 }}>{t('footer.addr2')}</Typography>
                <Typography sx={{ color: '#8b8b8b' }}>{t('footer.email')}</Typography>
                <Button variant='contained' sx={{ mt: 3, bgcolor: '#F7C300', color: '#000' }}>{t('nav.book')}</Button>
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: '#333', my: 4 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant='body2' sx={{ color: '#8b8b8b' }}>{t('footer.copyright')}</Typography>
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