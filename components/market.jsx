import React from "react";
import { useState } from "react";
import bitcoinLogo from "../src/assets/demo-cryptocurrency-bitcoin.png";
import ethereumLogo from "../src/assets/demo-cryptocurrency-ethereum.png";
import tetherLogo from "../src/assets/demo-cryptocurrency-tether.png";
import lidoLogo from "../src/assets/demo-cryptocurrency-lido.png";
import {
  GraphDownArrow,
  GraphUpArrow,
  Globe,
  PersonGear,
  Headset,
  Wallet,
} from "react-bootstrap-icons";

export default function Market() {
  const cryptos = [
    {
      symbol: "BTCUSD",
      name: "Bitcoin / U.S.D.",
      price: "50869",
      change: "-1.88% ",
      logo: bitcoinLogo, // Bitcoin
    },
    {
      symbol: "ETHUSD",
      name: "Ethereum / U.S.D.",
      price: "2171.14",
      change: "+1.20%",
      logo: ethereumLogo, // Ethereum
    },
    {
      symbol: "USDTUSD",
      name: "Tether / U.S.D.",
      price: "13534",
      change: "+2.45%",
      logo: tetherLogo, // USDT
    },
    {
      symbol: "LDOUSD",
      name: "Lido / U.S.D.",
      price: "247.28",
      change: "+4.22%",
      logo: lidoLogo, // LDO
    },
  ];

  // leadgen market component
  const features = [
    {
      title: "FAST AND GLOBAL",
      description:
        "We offer a fast and global cryptocurrency solution for all your digital transactions.",
      icon: <Globe size={48} />, // Globe icon
    },
    {
      title: "FRIENDLY ADMIN",
      description:
        "We are proud to have a friendly and approachable admin team on our platform.",
      icon: <PersonGear size={48} />, // Mobile settings icon
    },
    {
      title: "TECHNICAL SUPPORT",
      description:
        "We specialize in providing expert assistance for all your cryptocurrency needs.",
      icon: <Headset size={48} />, // Headset icon
    },
    {
      title: "LEADGEN WALLET",
      description:
        "LeadGen wallets can prevent theft and unauthorized access to your funds.",
      icon: <Wallet size={48} />, // Wallet ico
      // Wallet icon
    },
  ];

  return (
    <div className="h-full bg-[#0b0527] text-white flex flex-col items-center justify-center py-20 px-4">
      {/* Crypto Ticker Section */}
      <div className="w-full max-w-6xl mb-20">
        <div className="grid grid-cols-4 max-[992px]:grid-cols-2 gap-8 max-[992px]:gap-4 max-sm:grid-cols-1">
          {cryptos.map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex flex-col items-center text-center max-[992px]:mb-4 max-sm:mb-6"
            >
              {/* Coin Logo */}
              <div className="">
                <img
                  src={crypto.logo}
                  alt={`${crypto.name} logo`}
                  className="w-12 h-12 object-contain rounded-full max-[992px]:w-15 max-[992px]:h-15 max-sm:mb-3"
                />
              </div>

              {/* Symbol & Name */}
              <p className="text-[16px] font-bold uppercase tracking-wider text-white">
                {crypto.symbol}
              </p>
              <p className="text-[16px] text-gray-500 mb-2 font-semibold">
                {crypto.name}
              </p>

              {/* Price */}
              <p className="text-3xl font-bold mb-3">{crypto.price}</p>

              {/* Change Badge */}
              <div
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                  crypto.change.startsWith("+")
                    ? "bg-[#008000] text-white px-5 font-bold max-sm:px-7"
                    : "bg-[#ff0000] text-white px-5 font-bold max-sm:px-7"
                }`}
              >
                <span>{crypto.change}</span>
                {crypto.change.startsWith("-") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marketing Text */}
      <div className="max-w-300  max-[992px]:max-w-180">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h1 className="text-[36px] font-semibold tracking-wide max-sm:text-[28px]  max-sm:tracking-normal">
            Why you choose LeadGen
          </h1>
          <p className="text-[16px] mt-5 text-[#858293] tracking-wider  max-sm:text-[14px] max-sm:tracking-normal">
            The exchange where users can buy, sell, and trade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#140c3a] px-8 py-3 flex flex-col items-center text-center hover:bg-linear-to-t from-[#16075f] via-[#13074e]  transition-all"
              >
                <div className="w-24 h-24 mb-3 flex items-center justify-center text-white">
                  {feature.icon}
                </div>

                <h3 className="text-[16px] font-semibold uppercase tracking-wider mb-4 text-white">
                  {feature.title}
                </h3>

                <p className="text-[14px] text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
