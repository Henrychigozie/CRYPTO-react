import React from "react";
import img1 from "../src/assets/demo-cryptocurrency-image-06.jpg"

const Reviews2 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0326] via-[#12063b] to-[#070018] text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm text-gray-400 tracking-wide">
            Securely buy, sell, store
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Start using <span className="text-indigo-400">LeadGen</span> with the
            most effective platform and easy-to-use app.
          </h1>

          <p className="text-gray-400 max-w-xl">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry’s standard dummy text.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Google Play
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              App Store
            </button>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative flex justify-center lg:justify-end">

          {/* PHONE MOCKUP (ONLINE IMAGE) */}
          <img
            src={img1}
            alt="Mobile app preview"
            className="relative z-10 w-[260px] md:w-[320px] xl:w-[360px] rounded-3xl drop-shadow-2xl"
          />

          {/* FLOATING GRADIENT SHAPES (REPLACES COINS) */}
          <div className="absolute -top-10 left-6 w-20 h-20 rounded-full bg-indigo-500/40 blur-xl animate-pulse" />
          <div className="absolute bottom-6 right-4 w-28 h-28 rounded-full bg-purple-500/30 blur-2xl animate-pulse" />
        </div>
      </div>

      {/* BACKGROUND CHART LINES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 h-full w-px bg-gradient-to-t from-indigo-500/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-full w-px bg-gradient-to-t from-indigo-500/20 to-transparent" />
        <div className="absolute bottom-0 left-3/4 h-full w-px bg-gradient-to-t from-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default Reviews2;
