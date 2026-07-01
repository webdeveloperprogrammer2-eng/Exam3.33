import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../../assets/1920x1080.png';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-[#272727] min-h-screen flex flex-col justify-between font-sans">
            <div className="relative w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-16 flex flex-col justify-between py-8" style={{ marginTop: '300px' }}>
                    <div className="mb-20 max-w-2xl">
                        <span className="text-zinc-300 text-lg font-medium block mb-2">
                            {t("hero.rent_label")}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide leading-tight">
                            {t("hero.title_part1")} <br />
                            <span className="text-[#d4af37]">{t("hero.title_part2")}</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                    <span className="hover:text-zinc-300 cursor-pointer">{t("hero.nav.main")}</span>
                    <span>&gt;</span>
                    <span className="hover:text-zinc-300 cursor-pointer">{t("hero.nav.services")}</span>
                    <span>&gt;</span>
                    <span className="hover:text-zinc-300 cursor-pointer">{t("hero.nav.rent")}</span>
                    <span>&gt;</span>
                    <span className="text-zinc-400">{t("hero.nav.current")}</span>
                </div>
            </div>
        </div>
    );
}