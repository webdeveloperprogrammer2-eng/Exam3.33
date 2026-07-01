import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function MethodsSection() {
    const { t } = useTranslation();

    return (
        <Box className=" min-h-screen py-20 text-white font-sans flex items-center">
            <Container maxWidth="md">
                <Box className="max-w-3xl mx-auto flex flex-col gap-8">
                    <Typography variant="h4" className="font-bold mb-4 text-left" sx={{ fontFamily: 'inherit', fontWeight: 700 }}>
                        {t("methods.title")}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        {t("methods.p1")}
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        {t("methods.p2")}
                    </Typography>

                    <Box className="mt-6 p-8 border border-[#d4af37] relative flex flex-col gap-6" sx={{ backgroundColor: 'transparent' }}>
                        <div className="flex items-start gap-4">
                            <FormatQuoteIcon sx={{ color: '#d4af37', fontSize: '3rem', transform: 'rotate(180deg)', marginTop: '-8px' }} />
                            <Typography variant="h6" className="font-medium" sx={{ fontFamily: 'inherit', lineHeight: 1.6, fontSize: '1.25rem' }}>
                                {t("methods.quote")}
                            </Typography>
                        </div>

                        <div className="pl-16">
                            <Typography variant="subtitle1" className="font-bold text-white" sx={{ fontFamily: 'inherit' }}>
                                {t("methods.author_name")}
                            </Typography>
                            <Typography variant="caption" className="text-zinc-500" sx={{ fontFamily: 'inherit', fontSize: '0.85rem' }}>
                                {t("methods.author_title")}
                            </Typography>
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}