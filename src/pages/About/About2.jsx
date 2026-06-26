import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import img from '../../assets/1110x628.png';

export default function TextSection() {
    return (
        <Box className="bg-[#272727] min-h-screen py-10 md:py-20 flex items-center font-sans text-white">
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    
                    <Grid item xs={12} lg={5} className="flex justify-center">
                        <Box component="img" src={img} alt="Section Image" sx={{width: '100%', maxWidth: { xs: '100%', md: '550px', lg: '1110px' }, height: 'auto', borderRadius: '5px', objectFit: 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Box className="flex flex-col gap-6 md:gap-8 px-2 md:px-6">
                            
                            <Typography variant="body1" sx={{color: '#a1a1aa',fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em'}}> This response is important for our ability to learn from mistakes, but it also gives rise to <br /> self-criticism, because it is part of the threat-protection system. In other words, what keeps <br />us safe can go too far, and keep us too safe. In fact it can trigger self-censoring. </Typography>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, }} >
                                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the <br />
                                future. The same is true as we experience the emotional sensation of stress from our first <br />
                                instances of social rejection or ridicule. We quickly learn to fear and thus automatically <br />
                                avoid potentially stressful situations of all kinds, including the most common of all:
                            </Typography >

                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em' }} >
                                This response is important for our ability to learn from mistakes, but it also gives rise to <br />
                                self-criticism, because it is part of the threat-protection system. In other words, what keeps <br />
                                us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.
                            </Typography> 
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, letterSpacing: '0.02em' }} >
                                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the <br />
                                future. The same is true as we experience the emotional sensation of stress from our first <br />
                                instances of social rejection or ridicule. We quickly learn to fear and thus automatically <br />
                                avoid potentially stressful situations of all kinds, including the most common of all:
                            </Typography>

                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}