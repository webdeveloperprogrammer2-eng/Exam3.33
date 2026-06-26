import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

export default function ContactFormSection() {
    return (
        <Box className="bg-[#222222] min-h-screen flex items-center py-20 text-white font-sans">
            <Container maxWidth="lg">
                <Box className="max-w-5xl mx-auto flex flex-col gap-10">

                    <Box className="flex flex-col">
                        <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 700, color: '#f5c742', lineHeight: 1.2 }}>
                            Be in touch
                        </Typography>
                        <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 700, lineHeight: 1.2 }}>
                            with us
                        </Typography>
                    </Box>

                    <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col gap-6">
                        <div className='flex flex-col gap-5'>

                            <div className='flex gap-10'>
                                <Grid item xs={12} md={4}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#2a2a2a] border border-zinc-700 text-white px-11 py-4 focus:outline-none focus:border-zinc-500 placeholder-zinc-500 text-sm font-medium transition-colors"
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        required
                                        className="w-full bg-[#2a2a2a] border border-zinc-700 text-white px-11 py-4 focus:outline-none focus:border-zinc-500 placeholder-zinc-500 text-sm font-medium transition-colors"
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-[#2a2a2a] border border-zinc-700 text-white px-11 py-4 focus:outline-none focus:border-zinc-500 placeholder-zinc-500 text-sm font-medium transition-colors"
                                    />
                                </Grid>
                            </div>

                            <Grid item xs={12}>
                                <textarea
                                    rows={6}
                                    style={{width:'868px'}}
                                    placeholder="Message *"
                                    required
                                    className="w-full bg-[#2a2a2a] border border-zinc-700 text-white p-5 focus:outline-none focus:border-zinc-500 placeholder-zinc-500 text-sm font-medium transition-colors resize-none"
                                />
                            </Grid>

                        </div>

                        <Box>
                            <Button
                                type="submit"
                                variant="contained"
                                disableElevation
                                sx={{
                                    backgroundColor: '#f5c742',
                                    color: '#222222',
                                    borderRadius: 0,
                                    padding: '12px 36px',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    letterSpacing: '1px',
                                    fontFamily: 'inherit',
                                    '&:hover': {
                                        backgroundColor: '#e0b536',
                                    },
                                }}
                            >
                                SUBMIT
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Container >
        </Box >
    );
}