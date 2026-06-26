import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function ChallengeSection() {
    return (
        <Box className="bg-[#222222] min-h-screen py-10 text-white font-sans flex items-center">
            <Container maxWidth="md">
                <Box className="max-w-3xl mx-auto flex flex-col gap-8">

                    <Typography
                        variant="h4"
                        className="font-bold mb-2 text-left"
                        sx={{ fontFamily: 'inherit', fontWeight: 700 }}
                    >
                        Challenge
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, letterSpacing: '0.01em' }}
                    >
                        To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the <br />
                        sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything <br />
                        was interesting to her. She knew nothing. I knew everything...been there, done that. She was <br />
                        in the moment, I was in the past. She was mindful. I was mindless.
                    </Typography>

                    <Typography
                        variant="h6"
                        className="font-bold mt-4 mb-2 text-left"
                        sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: '1.25rem' }}
                    >
                        Everything along the way
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, letterSpacing: '0.01em' }}
                    >
                        One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the <br />
                        future. The same is true as we experience the emotional sensation of stress from our first <br />
                        instances of social rejection or ridicule. We quickly learn to fear and thus automatically <br />
                        avoid potentially stressful situations of all kinds, including the most common of all: making <br />
                        mistakes.
                    </Typography>

                    <Box className="border-t border-zinc-700 my-6" />

                    <Box component="ul" className="flex flex-col gap-4 list-none p-0 m-0">
                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade <br />
                                of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, <br />
                                smelled, and shaken.
                            </Typography>
                        </Box>

                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Everything was interesting to her. She knew nothing. I knew everything...been there, done <br />
                                that. She was in the moment, I was in the past. She was mindful. I was mindless.
                            </Typography>
                        </Box>

                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in <br />
                                the future. The same is true as we experience the emotional sensation of stress from our <br />
                                first instances of social rejection or ridicule.
                            </Typography>
                        </Box>

                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                We quickly learn to fear and thus automatically avoid potentially stressful situations of <br />
                                all kinds, including the most common of all: making mistakes.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}