import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ServicesSection() {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            title: t('services.list.mortgage.title'),
            description: t('services.list.mortgage.desc'),
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            title: t('services.list.property.title'),
            description: t('services.list.property.desc'),
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            title: t('services.list.legal.title'),
            description: t('services.list.legal.desc'),
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <Box sx={{ background: '#222222', minHeight: '100vh', padding: '80px 0', color: 'white' }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', mb: 8 }}>
                        <Typography variant="h4" fontWeight={700}>
                            {t('services.title')}
                        </Typography>
                        <Link href="#" underline="none" color="#a1a1aa" sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {t('services.view_all')}
                            <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                        </Link>
                    </Box>
                    <Grid container spacing={4}>
                        {services.map((service) => (
                            <Grid key={service.id} size={{ xs: 12, md: 4 }}>
                                <Box sx={{ position: 'relative', height: '420px', overflow: 'hidden', cursor: 'pointer', background: '#333', '&:hover .front': { opacity: 0, transform: 'scale(1.05)' }, '&:hover .back': { opacity: 1, transform: 'translateY(0)' } }}>
                                    <Box className="front" sx={{ position: 'absolute', inset: 0, transition: '0.4s' }}>
                                        <Box component="img" src={service.image} alt={service.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'end', padding: '24px', background: 'linear-gradient(to top, rgba(0,0,0,.9), transparent)' }}>
                                            <Typography variant="h6" fontWeight={700}>{service.title}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="back" sx={{ position: 'absolute', inset: 0, background: '#f5c742', color: '#222', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', opacity: 0, transform: 'translateY(20px)', transition: '0.4s' }}>
                                        <Box>
                                            <Typography variant="h5" fontWeight={700} mb={3}>{service.title}</Typography>
                                            <Typography>{service.description}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {t('services.learn_more')}
                                            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}