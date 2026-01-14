import React from "react";
import { GeoAlt,Phone,Envelope } from "react-bootstrap-icons";

const ContactUs = () => {
  return (
    <section className="bg-[#0b0527] text-white py-20 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mb-16">
        Contact us
      </h1>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
        <div className="space-y-4">
          <div className="text-4xl flex justify-center">
             <GeoAlt />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            301 The Greenhouse, Custard <br />
            Factory, London, E2 8DY.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-4xl flex justify-center">
                <Phone />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            (M) +44 (0) 123 456 7890 <br />
            (O) +44 (0) 123 456 7890
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-4xl flex justify-center">
                <Envelope />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            no-reply@domain.com <br />
            help@domain.com
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Inputs */}
        <div className="space-y-6 h-fit">
          <input
            type="text"
            placeholder="* Your name"
            className="w-full h-11 px-5 text-gray-700 focus:outline-none bg-white"
          />

          <input
            type="email"
            placeholder="* Your email"
            className="w-full h-11 px-5 text-gray-700 focus:outline-none bg-white"
          />

          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full h-11 px-5 text-gray-700 focus:outline-none bg-white"
          />
        </div>

        {/* Right Message */}
        <div className="flex flex-col space-y-6">
          <textarea
            placeholder="Your Message"
            className="w-full h-44 px-5 py-4 rounded-md text-gray-700 focus:outline-none resize bg-white max-sm:resize-none"
          />

          <button className="self-start px-4 py-3 bg-[#7611f7] hover:bg-[#4a0a9e] transition rounded-full font-medium text-[14px] tracking-wide">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
