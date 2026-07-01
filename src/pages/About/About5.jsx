import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';

export default function ChallengeSection() {
    const { t } = useTranslation();

    return (
        <Box className="bg-[#222222] min-h-screen py-10 text-white font-sans flex items-center">
            <Container maxWidth="md">
                <Box className="max-w-3xl mx-auto flex flex-col gap-8">
                    <Typography variant="h4" className="font-bold mb-2 text-left" sx={{ fontFamily: 'inherit', fontWeight: 700 }}>
                        {t("challenge.title")}
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, letterSpacing: '0.01em' }}>
                        {t("challenge.p1")}
                    </Typography>

                    <Typography variant="h6" className="font-bold mt-4 mb-2 text-left" sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: '1.25rem' }}>
                        {t("challenge.subtitle")}
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, letterSpacing: '0.01em' }}>
                        {t("challenge.p2")}
                    </Typography>

                    <Box className="border-t border-zinc-700 my-6" />

                    <Box component="ul" className="flex flex-col gap-4 list-none p-0 m-0">
                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>{t("challenge.list1")}</Typography>
                        </Box>
                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>{t("challenge.list2")}</Typography>
                        </Box>
                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>{t("challenge.list3")}</Typography>
                        </Box>
                        <Box component="li" className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1.5 text-xs">•</span>
                            <Typography variant="body1" sx={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>{t("challenge.list4")}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}