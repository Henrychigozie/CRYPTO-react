import React from "react";
import { useState } from "react";
import bitcoinImg from "../src/assets/demo-cryptocurrency-image-02-1.jpg";

const about = () => {
      const stats = [
    { value: "45M+", label: "Investors use our platform" },
    { value: "4.9", label: "Rating from 1M+ reviews" },
    { value: "85M+", label: "Total funds disbursed" },
    { value: "#1", label: "World’s leading website" },
  ];

  return (
    <>
      <div className="h-full py-12 bg-[#0b0527] overflow-hidden">
        {/* Content Container */}
        <div className="grid grid-cols-2 md:grid-cols-2 items-center py-12 max-w-6xl mx-auto max-[992px]:max-w-3xl max-md:grid-cols-1 max-md:max-w-4xl px-3">
          {/* Left Text Section */}
          <div className="text-white max-w-lg space-y-4 max-md:mx-auto max-md:text-center">
            <p className="text-[17px] font-bold tracking-wider max-md:text-[14px] opacity-95 max-[992px]:font-semibold">
              Securely buy, sell, store
            </p>

            <h1 className="text-[36px] font-bold leading-tight max-[992px]:text-[25px] max-w-100 max-md:max-w-full">
              Trade with confidence with best platform and easy to use.
            </h1>

            <p className="text-[16px] opacity-50 leading-relaxed">
              We provide a wide range of cryptocurrencies for trading and offer
              high returns on investment with competitive fees and low
              transaction costs.
            </p>

            <button className="px-7 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition transform flex items-center gap-3 mt-5 max-md:mx-auto">
              Let's get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

            {/* Right Image Section */}
          <div className="w-[110%] max-[992px]:w-full relative z-20 max-md:w-full">
            {/* Floating smaller coins - replace these src with your own images */}
            <img src={bitcoinImg} alt="Floating Coin 1" className="w-full" />
          </div>
        </div>
        {/* Stats Section */}

         <div className="max-w-6xl mx-auto grid max-[992px]:grid-cols-2 grid-cols-4 gap-8 text-center text-white max-sm:grid-cols-1">
        {stats.map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl md:text-4xl font-bold">{item.value}</h3>
            <p className="text-sm text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default about;
