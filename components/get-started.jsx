import React from "react";
import { useState } from "react";
import icon1 from "../src/assets/demo-cryptocurrency-icon-04.png";
import icon2 from "../src/assets/demo-cryptocurrency-icon-05-1.png";
import icon3 from "../src/assets/demo-cryptocurrency-icon-06-1.png";
import icon4 from "../src/assets/demo-cryptocurrency-icon-03.png";

/* ================= STEP CARD ================= */

const StepCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-5 group transition-transform duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="relative mb-7">
        <div
          className="flex items-center justify-center
          transition duration-300
          shadow-[0_0_0_0_rgba(99,102,241,0)]
        "
        >
          <img src={icon} alt={title} className="w-17 object-cover" />
        </div>

        {/* Plus badge */}
      </div>

      <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-[14px] leading-relaxed max-sm:text-[15px]">
        {description}
      </p>
    </div>
  );
};

/* ================= SECTION ================= */

export default function GetStarted() {
  const steps = [
    {
      icon: icon1,
      title: "Create account",
      description:
        "Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has.",
    },
    {
      icon: icon2,
      title: "Add a bank account",
      description:
        "Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has.",
    },
    {
      icon: icon3,
      title: "Secure your investment",
      description:
        "Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has.",
    },
    {
      icon: icon4,
      title: "Start Buying & Selling",
      description:
        "Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has.",
    },
  ];

  return (
    <section className="bg-[#0b0527] py-24 px-12 font-sans border border-t-white">
      <div className="max-w-7xl mx-auto max-sm:max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get started in a few minutes
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Simple and easy step to start your investment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
