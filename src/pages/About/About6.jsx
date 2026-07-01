import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Container } from "@mui/material";
import img from '../../assets/town.png';

export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <Box className="bg-[#272727] py-16 px-4 font-sans">
            <Container maxWidth="xl">
                <Box
                    className="relative w-full min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center text-center p-8 rounded-sm overflow-hidden bg-cover bg-center"
                    sx={{ backgroundImage: `url(${img})` }}
                >
                    <Box className="absolute inset-0 bg-[#FBC32C] mix-blend-normal opacity-80" />

                    <Box className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                        <Typography variant="subtitle2" className="text-stone-900 font-bold tracking-wide text-xs sm:text-sm uppercase mb-3">
                            {t("contact.subtitle")}
                        </Typography>

                        <Typography variant="h2" className="text-stone-900 font-extrabold text-4xl sm:text-6xl tracking-tight mb-8">
                            {t("contact.title")}
                        </Typography>

                        <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col sm:flex-row items-center gap-0 shadow-lg">
                            <input
                                type="email"
                                placeholder={t("contact.placeholder")}
                                required
                                className="w-full sm:flex-1 h-14 px-6 bg-white text-stone-950 placeholder-stone-400 text-sm font-medium focus:outline-none rounded-none"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto h-14 px-10 bg-[#1e1e1e] text-white text-sm font-bold tracking-wider hover:bg-stone-800 transition-colors duration-200 rounded-none uppercase sm:normal-case"
                            >
                                {t("contact.button")}
                            </button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}