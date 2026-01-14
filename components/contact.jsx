import React, { useState } from "react";
import { GeoAlt, Phone, Envelope } from "react-bootstrap-icons";

const ContactUs = () => {
  // States to handle the form status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      // Optional: Reset form after 5 seconds
      setTimeout(() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } }), 5000);
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjkgkqdd", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        handleServerResponse(true, "Thanks! Your message has been sent.");
        form.reset();
      } else {
        const errorData = await response.json();
        handleServerResponse(false, errorData.error || "Something went wrong.");
      }
    } catch (error) {
      handleServerResponse(false, "Network error. Please try again later.");
    }
  };

  return (
    <section className="bg-[#0b0527] text-white py-20 px-6">
      <h1 className="text-4xl font-semibold text-center mb-16 tracking-tight">
        Contact us
      </h1>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
        <div className="space-y-4">
          <div className="text-4xl flex justify-center text-purple-500"><GeoAlt /></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            301 The Greenhouse, Custard <br /> Factory, London, E2 8DY.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl flex justify-center text-purple-500"><Phone /></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            (M) +44 (0) 123 456 7890 <br /> (O) +44 (0) 123 456 7890
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl flex justify-center text-purple-500"><Envelope /></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            no-reply@domain.com <br /> help@domain.com
          </p>
        </div>
      </div>

      {/* Form with AJAX submission */}
      <form onSubmit={handleOnSubmit} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 h-fit">
          <input type="text" name="name" required placeholder="* Your name" 
            className="w-full h-11 px-5 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none bg-white rounded transition-all" />
          
          <input type="email" name="email" required placeholder="* Your email" 
            className="w-full h-11 px-5 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none bg-white rounded transition-all" />
          
          <input type="tel" name="phone" placeholder="Your Phone" 
            className="w-full h-11 px-5 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none bg-white rounded transition-all" />
        </div>

        <div className="flex flex-col space-y-6">
          <textarea name="message" required placeholder="Your Message" 
            className="w-full h-44 px-5 py-4 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none resize-y bg-white transition-all" />

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={status.submitting}
              className={`self-start px-10 py-3 bg-[#7611f7] hover:bg-[#4a0a9e] transition-all rounded-full font-medium text-[14px] tracking-wide text-white ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status.submitting ? "Sending..." : "Send message"}
            </button>

            {/* Status Messages */}
            {status.info.error && (
              <p className="text-red-400 text-sm">Error: {status.info.msg}</p>
            )}
            {status.submitted && (
              <p className="text-green-400 text-sm">{status.info.msg}</p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;