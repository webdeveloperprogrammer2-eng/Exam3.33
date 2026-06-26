import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillYoutube } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react';

import img from "../../assets/slider1.png"

const Section1 = () => {
  return (
    <div className="w-full m-auto relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${img})` }}>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4">
        <div>
          <div className="text-yellow-400 font-bold mb-1"></div>
        </div>
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
          <span className="text-xs tracking-widest uppercase opacity-60 block mb-2">Lorem Ipsum</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Welcome Home <br />
            <span className="text-yellow-400">To</span> Luxury
          </h1>
          <a href="#" className="inline-block mt-6 text-sm font-semibold tracking-wider hover:text-yellow-400 transition-colors">
            Book a consultation &rarr;
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs font-bold tracking-widest opacity-80">
          <button className="hover:text-yellow-400">PREV</button>
          <span className="hidden sm:inline">|</span>
          <button className="hover:text-yellow-400">NEXT</button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 md:left-auto md:w-3/5 bg-neutral-900/95 z-10 grid grid-cols-1 sm:grid-cols-3 p-6 sm:p-8 gap-4 border-t border-neutral-800">
        <div className="flex items-start gap-3">
          <span className="text-3xl font-bold text-yellow-400">01</span>
          <div>
            <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
            <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-3xl font-bold text-white">02</span>
          <div>
            <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
            <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-3xl font-bold text-white">03</span>
          <div>
            <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
            <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
