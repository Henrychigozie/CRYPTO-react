// src/components/Hero.jsx
import React from "react";
import { PlayCircle,ArrowRight } from "react-bootstrap-icons";
import bitcoinImg from "../src/assets/demo-cryptocurrency-image-01-2.png";


const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-[#0b052b] to-[#1a0b4d] text-white min-h-full overflow-x-hidden">

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto pl-9 pt-30 pb-20 flex items-center justify-between gap-12 max-[992px]:flex-col max-[992px]:px-6">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Stats Badge */}
          <div className="inline-flex items-center bg-green-700/20  px-4 py-2 rounded-full text-[15px] font-medium mb-8">
            <span className="mr-2 text-green-400">2300k+</span> daily active investors
          </div>

          {/* Main Headline */}
          <h1 className="text-[60px] font-bold leading-tight mb-6 max-[992px]:text-[30px]">
            World’s leading cryptocurrency
            <br />
            <span className="text-purple-400">secure assets.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-130">
            LeadGen technology allows cryptocurrencies to offer a high level of
            security & protect against fraud & hacking.
          </p>

         
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-full font-semibold text-[13px] transition flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30">
              Get started <ArrowRight className="text-[13px]" />
            </button>
            <button className="border border-white/40 hover:bg-black text-black px-6 py-4 rounded-full font-semibold text-[13px] transition flex items-center justify-center gap-2 bg-white hover:text-white">
              How it works
              <PlayCircle className="text-[15px]" />
            </button>
          </div>
        </div>

        {/* Right Side - Floating Crypto Coins */}
        <div className="w-[120%] relative left-40 max-[992px]:w-[80%] max-[992px]:left-0 max-[400px]:w-full">
          <img
            src={bitcoinImg}
            alt="Cryptocurrency"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
