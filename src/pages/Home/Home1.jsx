import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import img from "../../assets/slider1.png"

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full m-auto relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4">
        <div><div className="text-yellow-400 font-bold mb-1"></div></div>
        <div className="flex flex-row sm:flex-col gap-4 text-sm opacity-80">
          <p className="hover:text-yellow-400"><CgFacebook /></p>
          <p className="hover:text-yellow-400"><AiOutlineTwitter /></p>
          <p className="hover:text-yellow-400"><AiFillYoutube /></p>
          <p className="hover:text-yellow-400"><AiFillInstagram /></p>
          <p className="hover:text-yellow-400"><AiFillLinkedin /></p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen pl-4 sm:pl-8 md:pl-24 max-w-2xl mx-auto sm:mx-0">
        <div className="border-l-2 border-t-2 border-b-2 border-yellow-300/70 p-6 md:p-8 pt-12 pb-12 relative">
          <span className="text-xs tracking-widest uppercase opacity-60 block mb-2">{t('section1.subtitle')}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {t('section1.welcome_home')} <br />
            <span className="text-yellow-400">{t('section1.to')}</span> {t('section1.luxury')}
          </h1>
          <a href="#" className="inline-block mt-6 text-sm font-semibold tracking-wider hover:text-yellow-400 transition-colors">
            {t('section1.book_consultation')} &rarr;
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs font-bold tracking-widest opacity-80">
          <button className="hover:text-yellow-400">{t('section1.prev')}</button>
          <span className="hidden sm:inline">|</span>
          <button className="hover:text-yellow-400">{t('section1.next')}</button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 md:left-auto md:w-3/5 bg-neutral-900/95 z-10 grid grid-cols-1 sm:grid-cols-3 p-6 sm:p-8 gap-4 border-t border-neutral-800">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-start gap-3">
            <span className={`text-3xl font-bold ${num === 1 ? 'text-yellow-400' : 'text-white'}`}>0{num}</span>
            <div>
              <h4 className="text-sm font-semibold">{t('section1.card_title')}</h4>
              <p className="text-xs text-gray-400 mt-1">{t('section1.card_desc')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;