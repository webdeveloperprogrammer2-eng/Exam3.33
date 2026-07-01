import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Илова шуд
import { Typography, IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Section3 = () => {
    const { t } = useTranslation(); // Hook-и тарҷума
    const [showVideo, setShowVideo] = useState(false);

    const handlePlay = () => {
        setShowVideo(true);
    };

    return (
        <div className="w-full min-h-screen overflow-x-hidden text-white font-sans bg-[#111111]">
            <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-screen overflow-hidden">
                {!showVideo && (
                    <>
                        <img
                            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80"
                            alt="City"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <IconButton onClick={handlePlay} sx={{  color: "#f1c40f",  fontSize: { xs: 54, sm: 72, md: 100 }, transition: "transform 0.2s", "hover": { transform: "scale(1.1)", color: "#f39c12" } }} >
                                <PlayCircleFilledWhiteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </>
                )}
                {showVideo && (
                    <iframe className="w-full h-full object-cover border-none" src="https://www.youtube.com/embed/ysjl6A6eNcY?autoplay=1&mute=0&loop=1&playlist=ysjl6A6eNcY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                )}
            </div>

            <div className="w-full max-w-3xl mx-auto border border-[#d4af37] p-8 text-center rounded-sm my-12 bg-[#262626]/50 px-6">
                <Typography variant="h6" className="italic text-gray-300 font-light leading-relaxed select-none" sx={{ fontFamily: "serif", fontSize: "1.25rem" }} >
                    {t("section3.quote")}
                </Typography >
                <Typography variant="subtitle1" className="text-[#d4af37] mt-4 font-semibold uppercase tracking-wider" sx={{ fontSize: "0.9rem" }} >
                    {t("section3.author")}
                </Typography>
            </div>

            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 px-4">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-56 rounded-md overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                            alt="Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        {t("section3.text1")}
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="w-full h-56 rounded-md overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
                            alt="Pool"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        {t("section3.text2")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section3;