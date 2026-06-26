import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function MethodsSection() {
    return (
        <Box className=" min-h-screen py-20 text-white font-sans flex items-center">
            <Container maxWidth="md">
                <Box className="max-w-3xl mx-auto flex flex-col gap-8">

                    <Typography variant="h4" className="font-bold mb-4 text-left" sx={{ fontFamily: 'inherit', fontWeight: 700 }} >
                        Methods for Everyone
                    </Typography> 
                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8 }} >
                        Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of
                        grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled,
                        and shaken. Everything was interesting to her. She knew nothing. I knew everything...been
                        there, done that. She was in the moment, I was in the past. She was mindful. I was
                        mindless.
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8 }} >
                        One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the
                        future. The same is true as we experience the emotional sensation of stress from our first
                        instances of social rejection or ridicule. We quickly learn to fear and thus automatically
                        avoid potentially stressful situations of all kinds, including the most common of all: making
                        mistakes.
                    </Typography>

                    <Box className="mt-6 p-8 border border-[#d4af37] relative flex flex-col gap-6" sx={{ backgroundColor: 'transparent' }} >
                        <div className="flex items-start gap-4">
                            <FormatQuoteIcon sx={{ color: '#d4af37', fontSize: '3rem', transform: 'rotate(180deg)', marginTop: '-8px'   }} />
                            <Typography  variant="h6"  className="font-medium"  sx={{ fontFamily: 'inherit', lineHeight: 1.6, fontSize: '1.25rem' }}  >
                                Our greatest weakness lies in giving up. The most certain
                                way to succeed is always to try just one more time.
                                emotional sensation of stress from our firs
                            </Typography>
                        </div>

                        <div className="pl-16">
                            <Typography variant="subtitle1" className="font-bold text-white" sx={{ fontFamily: 'inherit' }}>
                                Paul
                            </Typography>
                            <Typography variant="caption" className="text-zinc-500" sx={{ fontFamily: 'inherit', fontSize: '0.85rem' }} >
                                Elite Author
                            </Typography>
                        </div>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}