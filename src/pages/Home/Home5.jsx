import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowForwardIos } from '@mui/icons-material';
import img from '../../assets/350x350.png';
import img1 from '../../assets/350x350 (2).png';

const Section5 = () => {
  const { t } = useTranslation();

  return (
    <section className="text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-semibold tracking-wide">{t("section5.title")}</h3>
          <p className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
            {t("section5.view_all")} <ArrowForwardIos sx={{ fontSize: 10 }} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden h-[300px] cursor-pointer">
            <img src={img} alt="Discover" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t filter from-black/80 to-transparent flex items-end p-6">
              <h4 className="text-lg font-medium tracking-wide">{t("section5.card_title")}</h4>
            </div>
          </div>

          <div className="border border-zinc-800 bg-[#222222] p-8 flex flex-col justify-between h-[300px]">
            <div>
              <span className="text-xs text-zinc-500 block mb-3">{t("section5.date")}</span>
              <h4 className="text-lg font-medium tracking-wide mb-4">{t("section5.card_title")}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
                {t("section5.desc")}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#FFC107] hover:underline inline-flex items-center gap-1 cursor-pointer">
                {t("section5.learn_more")} <ArrowForwardIos sx={{ fontSize: 8 }} />
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden h-[300px] cursor-pointer">
            <img src={img1} alt="Discover" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t filter from-black/80 to-transparent flex items-end p-6">
              <h4 className="text-lg font-medium tracking-wide">{t("section5.card_title")}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;