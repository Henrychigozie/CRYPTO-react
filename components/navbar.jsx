import React, { useState } from 'react';
import navimg from '../src/assets/logo-white.png'; // Make sure this path is correct
import { List } from 'react-bootstrap-icons';

const navLinkBase =
  'text-gray-300 hover:text-white px-3 py-2 text-[12px] font-medium uppercase tracking-wider underline decoration-gray-600 hover:decoration-white transition duration-200';

// Optional: Add state for mobile menu toggle later
// const [isOpen, setIsOpen] = useState(false);

const Navbar = () => {
  const navItems = [
    'Home',
    'Market',
    'Features',
    'About',
    'Review',
    'Mobile App',
  ];

  return (
    <nav className="bg-[#0b052b] border-b border-gray-800 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="shrink-0">
            <img
              src={navimg}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation + Contact Button + Mobile Toggle */}
          <div className="flex items-center space-x-5">
            
            {/* Desktop Links & Contact Button (hidden on mobile) */}
            <div className="max-[992px]:hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={navLinkBase}
                >
                  {item}
                </a>
              ))}

              {/* Contact Us Button */}
              <a
                href="#"
                className="bg-white text-gray-900 hover:bg-gray-200 px-5 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-wider border border-white transition duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Icon (visible only on small screens) */}
            <button className="hidden text-white p-2 max-[992px]:block">
              <List className="text-[30px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Mobile Menu Dropdown (hidden by default) */}
      {/* You can expand this later with useState */}
    </nav>
  );
};

export default Navbar;