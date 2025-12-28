import React from "react";
import bgImage from "../src/assets/demo-cryptocurrency-bg-image-02.jpg";
import dashboardImg from "../src/assets/demo-cryptocurrency-image-03.jpg";
import {ArrowRight } from "react-bootstrap-icons";

const Platform = () => {
  return (
    <>
      <div
        className="min-h-screen relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-black/80"></div> */}

        {/* Header Text */}
        <div className="relative z-10 text-center pt-20 mb-15 text-white">
          <h1 className="text-[35px] font-bold mb-4 max-md:text-[28px]">
            World's fastest and most secure platform
          </h1>
          <p
            className="text-[14px] text-[#858293]"
          >
            Swap your currencies with world's fastest and most secure crypto
            exchange.
          </p>
        </div>

        {/* Add more content here if needed, like the dashboard from previous examples */}
        <div className="max-w-250 mx-auto mt-12 px-4 max-[992px]:max-w-200 max-md:max-w-160">
            <img src={dashboardImg} alt="dashboard" className="w-full"/>
        </div>
      </div>


<div className="bg-[#0b0527] py-15 max-[992px]:py-10">
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex items-center justify-between max-[992px]:flex-col max-[992px]:gap-6 ">
        <p className="text-white text-[22px] font-medium max-[992px]:text-center max-[992px]:font-normal">
          Do you have any interest in markets with the highest trading volume today?
   
        </p>
        <button className="bg-[#7611f7] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
          Check live market 
            <ArrowRight className="inline-block ml-2" />
        </button>
      </div>
</div>
     
    </>
  );
};

export default Platform;
