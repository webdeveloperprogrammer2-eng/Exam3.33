import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function ContactSection() {
    const dubaiCoordinates = [25.2048, 55.2708];

    return (
        <>
            <h1 className='text-white text-6xl' style={{marginLeft:'80px', marginTop:'30px', marginBottom:'30px'}}>Contact</h1>
            <Box className="relative w-full h-[600px] bg-[#222222] font-sans">

                <YMaps query={{ lang: 'en_US' }}>
                    <Map
                        defaultState={{ center: dubaiCoordinates, zoom: 11 }}
                        className="w-full h-full opacity-80"
                        controls={['zoomControl', 'fullscreenControl']}
                    >
                        <Placemark geometry={dubaiCoordinates} />
                    </Map>
                </YMaps>

                <Box className="absolute inset-0 pointer-events-none flex items-center">
                    <Container maxWidth="lg">
                        <Box className="w-full max-w-md bg-[#222222] text-white p-12 pointer-events-auto flex flex-col gap-8 shadow-2xl">

                            <Box className="flex flex-col gap-4">
                                <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 700 }}>
                                    Dubai, <span className="text-[#f5c742]">UAE</span>
                                </Typography>
                                <Typography variant="body2" className="text-zinc-400" sx={{ fontFamily: 'inherit', lineHeight: 1.6 }}>
                                    269 King Str, 05th Floor, Utral Hosue Building,<br />
                                    Dubai, VIC 3000, UAE.
                                </Typography>
                            </Box>

                            <Typography variant="h5" sx={{ fontFamily: 'inherit', fontWeight: 700, tracking: 'wide' }}>
                                +99 (0) 344 956 4050
                            </Typography>

                            <Box className="flex flex-col gap-2">
                                <Typography variant="caption" className="text-zinc-500 uppercase tracking-widest font-bold">
                                    Email
                                </Typography>
                                <span className="text-white hover:text-[#f5c742] transition-colors duration-200 text-sm font-medium">
                                    info@sparch.co
                                </span>
                            </Box>

                            <Box className="flex flex-col gap-2">
                                <Typography variant="caption" className="text-zinc-500 uppercase tracking-widest font-bold">
                                    Work Hours
                                </Typography>
                                <Typography variant="body2" className="text-zinc-300 text-sm font-medium">
                                    Monday - Friday : 08h00 - 17h30
                                </Typography>
                            </Box>

                        </Box>
                    </Container>
                </Box>

            </Box>
        </>
    );
}