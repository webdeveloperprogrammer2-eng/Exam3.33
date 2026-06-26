import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import img1 from '../../assets/540x302.png';
import img2 from '../../assets/530x302.png';
import img3 from '../../assets/540x634.png';

export default function GalleryStatsSection() {
    return (
        <Box className="bg-[#222222] min-h-screen py-20 text-white font-sans flex items-center">
            <Container maxWidth="lg">
                <Box className="max-w-5xl mx-auto flex flex-col gap-16">
                    <div className='flex gap-6'>
                        <Box className="flex flex-col gap-[24px]">
                            <Box className="overflow-hidden w-full aspect-[540/302] md:h-[302px]">
                                <img
                                    src={img1}
                                    alt="Dubai Cityscape Night"
                                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                                />
                            </Box>
                            <Box className="overflow-hidden w-full aspect-[540/302] md:h-[302px]">
                                <img
                                    src={img2}
                                    alt="Dubai Marina Coast"
                                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                                />
                            </Box>
                        </Box>
                        <Box className="overflow-hidden w-full aspect-[540/628] md:h-[628px]">
                            <img
                                src={img3}
                                alt="Dubai Beach Drone View"
                                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                            />
                        </Box>
                    </div>
                    <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-zinc-800">

                        <Box className="flex items-center justify-center gap-4">
                            <Typography
                                variant="h2"
                                sx={{ color: '#d4af37', fontWeight: 700, fontFamily: 'inherit' }}
                            >
                                20
                            </Typography>
                            <Box>
                                <Typography variant="body2" className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Years
                                </Typography>
                                <Typography variant="body2" className="text-zinc-400 font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Working
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex items-center justify-center gap-4">
                            <Typography
                                variant="h2"
                                sx={{ color: '#d4af37', fontWeight: 700, fontFamily: 'inherit' }}
                            >
                                7
                            </Typography>
                            <Box>
                                <Typography variant="body2" className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Talanted
                                </Typography>
                                <Typography variant="body2" className="text-zinc-400 font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Managers
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex items-center justify-center gap-4">
                            <Box className="flex items-start">
                                <Typography
                                    variant="h2"
                                    sx={{ color: '#d4af37', fontWeight: 700, fontFamily: 'inherit', lineHeight: 1 }}
                                >
                                    100
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: '#d4af37', fontWeight: 700, fontFamily: 'inherit', ml: 0.5, mt: -0.5 }}
                                >
                                    +
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Complitly
                                </Typography>
                                <Typography variant="body2" className="text-zinc-400 font-semibold uppercase tracking-wider text-xs leading-tight">
                                    Projects
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}