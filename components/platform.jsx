import React from "react";
import bgImage from "../src/assets/demo-cryptocurrency-bg-image-02.jpg";
import dashboardImg from "../src/assets/demo-cryptocurrency-image-03.jpg";

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
        <div className="max-w-250 mx-auto mt-12 px-4 pb-20 max-[992px]:max-w-200 max-md:max-w-160">
            <img src={dashboardImg} alt="dashboard" className="w-full"/>
        </div>
      </div>
    </>
  );
};

export default Platform;
