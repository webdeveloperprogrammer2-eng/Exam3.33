import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography, Box } from '@mui/material';
import img from '../../assets/1110x628.png';

export default function TextSection() {
    const { t } = useTranslation();

    return (
        <Box className="bg-[#272727] min-h-screen py-10 md:py-20 flex items-center font-sans text-white">
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} lg={5} className="flex justify-center">
                        <Box component="img" src={img} alt="Section Image" sx={{ width: '100%', maxWidth: { xs: '100%', md: '550px', lg: '1110px' }, height: 'auto', borderRadius: '5px', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Box className="flex flex-col gap-6 md:gap-8 px-2 md:px-6">
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em' }}>
                                {t("text_section.p1")}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                                {t("text_section.p2")}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em' }}>
                                {t("text_section.p3")}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em' }}>
                                {t("text_section.p4")}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}