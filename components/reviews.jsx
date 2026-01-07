import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

// 1. New Component: The Testimonial Card
const TestimonialCard = ({ image, quote, name, company }) => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-[#110b2b] rounded-2xl h-full border border-zinc-800">
      <img 
        src={image} 
        alt={name} 
        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-indigo-500"
      />
      <p className="text-gray-300 mb-6 text-base italic">
        "{quote}"
      </p>
      <div className="mt-auto">
        <p className="text-white font-bold uppercase tracking-wider text-sm">
          {name}
        </p>
        <p className="text-indigo-400 text-xs font-semibold mt-1">
          {company}
        </p>
      </div>
    </div>
  )
}

// 2. Data: Content for the carousel
const testimonials = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=32", 
    quote: "This library completely changed how we build UI. The performance is incredible.",
    name: "Sarah Jen",
    company: "Spotify"
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=12",
    quote: "Tailwind makes styling so much faster. I can't imagine going back to vanilla CSS.",
    name: "Mark T.",
    company: "Netflix"
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=59",
    quote: "The responsive properties in this carousel are exactly what we needed for our mobile app.",
    name: "James D.",
    company: "Twitter"
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?img=44",
    quote: "Documentation is clear and the community support is top notch. Highly recommended.",
    name: "Emily R.",
    company: "Airbnb"
  }
]

const EmblaCarousel = ({ options = { loop: true, align: 'start' } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  // Logic for Arrows and Dots
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect(emblaApi)
  }, [emblaApi, onSelect])

  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        
        {/* Container: -ml-6 compensates for the pl-6 gap on slides */}
        <div className="flex -ml-6">
          {testimonials.map((item) => (
            /* Slide: Responsive classes added here 
               - Mobile: 100% width
               - Tablet (md): 50% width (2 slides)
               - Desktop (lg): 33.33% width (3 slides)
            */
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
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button 
            className="px-6 py-2 bg-zinc-800 text-white rounded-full text-sm font-bold shadow-lg hover:bg-zinc-700 transition-colors" 
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button 
            className="px-6 py-2 bg-zinc-800 text-white rounded-full text-sm font-bold shadow-lg hover:bg-zinc-700 transition-colors" 
            onClick={scrollNext}
          >
            Next
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mx-auto">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              // Dynamic class: Width expands from w-2 to w-8 when selected
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-indigo-500 w-2' : 'bg-zinc-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel