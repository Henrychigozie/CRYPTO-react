import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "../src/assets/demo-cryptocurrency-avtar-01.jpg"
import img2 from "../src/assets/demo-cryptocurrency-avtar-02.jpg"
import img3 from "../src/assets/demo-cryptocurrency-avtar-03.jpg"

// 1. New Component: The Testimonial Card
const TestimonialCard = ({ image, quote, name, company }) => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-[#0b0527] rounded-2xl h-full ">
      <img
        src={image}
        alt={name}
        className="w-25 h-25 rounded-full object-cover mb-4 "
      />
      <p className="text-gray-300 mb-6 text-base ">"{quote}"</p>
      <div className="mt-auto">
        <p className="text-white font-bold uppercase tracking-wider text-sm">
          {name}
        </p>
        <p className="text-indigo-400 text-xs font-semibold mt-1">{company}</p>
      </div>
    </div>
  );
};

// 2. Data: Content for the carousel
const testimonials = [
  {
    id: 1,
    image: img3,
    quote:
      "This library completely changed how we build UI. The performance is incredible.",
    name: "Sarah Jen - Spotify",
    company: "",
  },
  {
    id: 2,
    image: img2,
    quote:
      "Tailwind makes styling so much faster. I can't imagine going back to vanilla CSS.",
    name: "Mark T. - Netflix",
    company: "",
  },
  {
    id: 3,
    image: img1,
    quote:
      "The responsive properties in this carousel are exactly what we needed for our mobile app.",
    name: "James D. - Twitter",
    company: "",
  },
  {
    id: 4,
    image: img2,
    quote:
      "Documentation is clear and the community support is top notch. Highly recommended.",
    name: "Emily R. - Airbnb",
    company: "",
  },
];

const EmblaCarousel = ({ options = { loop: true, align: "start" } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Logic for Arrows and Dots
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  return (
    <section className="max-w-8xl mx-auto p-4 bg-[#0b0527]">
      <div className="max-w-6xl mx-auto my-14">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container: -ml-6 compensates for the pl-6 gap on slides */}
          <div className="flex -ml-6">
            {testimonials.map((item) => (
              <div
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6"
                key={item.id}
              >
                <TestimonialCard
                  image={item.image}
                  quote={item.quote}
                  name={item.name}
                  company={item.company}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2 mx-auto">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                // Dynamic class: Width expands from w-2 to w-8 when selected
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-indigo-500 w-2"
                    : "bg-zinc-600 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
