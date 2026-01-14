import React from "react";
import img1 from "../src/assets/demo-cryptocurrency-image-06.jpg";
import img2 from "../src/assets/googleplay.png";
import img3 from "../src/assets/appstore.png";

const Reviews2 = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0527] text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-[992px]:text-center">
          <p className="text-1xl font-semibold text-white tracking-wide">
            Securely buy, sell, store
          </p>

          <h1 className="text-4xl font-bold leading-tight max-md:text-3xl max-sm:text-2xl">
            Start using <span className="text-indigo-400">LeadGen</span> with
            the most effective platform and easy-to-use app.
          </h1>

          <p className="text-gray-400 max-w-xl max-[992px]:mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley type and scrambled it to standard dummy text ever of the printing and typesetting industry.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4 pt-4 flex-wrap max-[992px]:justify-center">
            <img
            src={img2}
            alt="Mobile app preview"
            className="relative z-10 w-35 max-sm:w-28 "
          />

            <img
            src={img3}
            alt="Mobile app preview"
            className="relative z-10 w-35 max-sm:w-28"
          />
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative flex justify-center lg:justify-end">
          {/* PHONE MOCKUP (ONLINE IMAGE) */}
          <img
            src={img1}
            alt="Mobile app preview"
            className="relative z-10 w-full rounded-3xl max-[992px]:w-100 md:w-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews2;
