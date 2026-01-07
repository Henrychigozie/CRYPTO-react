import React from "react";

const HeroServiceSection = () => {
  return (
    <section className="relative w-full h-full flex items-center bg-linear-to-br from-[#140b41] via-[#15002e] to-[#140b41] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-16 py-24 grid max-[992px]:grid-cols-1 grid-cols-2 gap-12 items-center max-[992px]:max-w-3xl max-[992px]:px-10 max-md:px-5">
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <h1 className="text-[40px] font-semibold leading-tight w-[80%] max-[992px]:w-[98%] max-[992px]:text-3xl">
            We are best service
            provider for worldwide 
            users with experts team.
          </h1>

          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#7611f7] hover:bg-purple-700 transition font-medium shadow-lg max-md:px-5">
            Explore features
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-12 w-[95%] max-md:w-full">
          {/* ITEM 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Customizable trading strategies
            </h3>
            <p className="text-[15px] text-gray-400 leading-relaxed ">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem ipsum has been he standard dummy.
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* ITEM 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Advanced charting tools</h3>
            <p className="text-[15px] text-gray-400 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem ipsum has been he standard dummy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServiceSection;
