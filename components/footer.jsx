import React from "react";
import {
  Facebook,
  Twitter,
  Google,
  Pinterest,
  Linkedin,
  Envelope,
} from "react-bootstrap-icons";

import logo from "../src/assets/demo-cryptocurrency-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#09051b] text-gray-500">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
       
          {/* Brand */}

          <div className="flex justify-between space-x-10 max-[992px]:flex-col max-[992px]:space-y-9">
            <div className="space-y-6 mx-auto">
              <div className="max-[992px]:mx-auto">
                <img src={logo} alt="Logo" className="max-[992px]:mx-auto" />
              </div>

              <p className="text-sm leading-relaxed max-sm:text-center">
                Lorem ipsum is simply dummy text to printing & typesetting.
              </p>

              <div className="flex space-x-4 text-white max-[992px]:justify-center max-[992px]:space-x-9">
                <Facebook className="cursor-pointer hover:text-purple-400" />
                <Twitter className="cursor-pointer hover:text-purple-400" />
                <Google className="cursor-pointer hover:text-purple-400" />
                <Pinterest className="cursor-pointer hover:text-purple-400" />
                <Linkedin className="cursor-pointer hover:text-purple-400" />
              </div>
            </div>

            {/* Company */}
            <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:text-center max-md:mx-auto max-md:gap-10">
              <div>
                <h3 className="text-white font-semibold mb-6">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li className="hover:text-white cursor-pointer">About us</li>
                  <li className="hover:text-white cursor-pointer">Market</li>
                  <li className="hover:text-white cursor-pointer">Features</li>
                  <li className="hover:text-white cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-semibold mb-6">Our features</h3>
                <ul className="space-y-3 text-sm">
                  <li className="hover:text-white cursor-pointer">Dashboard</li>
                  <li className="hover:text-white cursor-pointer">
                    Mobile app
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Extra features
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Help center
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h3 className="text-white font-semibold mb-6">Information</h3>
                <ul className="space-y-3 text-sm">
                  <li className="hover:text-white cursor-pointer">
                    Privacy policy
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Terms & conditions
                  </li>
                  <li className="hover:text-white cursor-pointer">Legal</li>
                  <li className="hover:text-white cursor-pointer">FAQ’s</li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold">
                  Subscribe our newsletter
                </h3>

                <p className="text-sm">
                  Subscribe our newsletter to get the latest news and updates.
                </p>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-10 pl-4 pr-12 rounded-md text-gray-700 focus:outline-none bg-white text-[13px]"
                  />
                  <Envelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom */}
        <p className="text-center text-sm">
          © 2023 LeadGen is proudly powered by{" "}
          <span className="text-white font-medium">ThemeZaa</span>.
        </p>
    </footer>
  );
};

export default Footer;
