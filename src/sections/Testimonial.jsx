import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Testimonial_Links } from "../data";

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Testimonial_Links.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Testimonial_Links.length - 1 ? 0 : prev + 1,
    );
  };

  const testimonial = Testimonial_Links[currentIndex];

  return (
    <section className="w-full mt-30 px-5 md:px-12 relative bg-linear-to-b from-primary from-0% via-primary via-50% to-[#fefefe] to-50%  ">
      <div className="bg-[#765070] relative rounded-[20px] overflow-hidden ">


        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch ">
          {/* Left Content */}
          <div className="flex-1 p-8 pt-14  lg:pl-22.75 lg:py-20 lg:pr-0 flex flex-col justify-between space-y-8 lg:space-y-33">
            <div className="space-y-5 max-w-full md:max-w-139">
              <h3 className="font-medium">{testimonial.quote}</h3>
              <p className="leading-[100%] tracking-normal">
                {testimonial.name}
              </p>
            </div>

            {/* Play Button */}
            <button
              className="w-16 h-16 md:w-18.5 md:h-18.5 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg"
              aria-label="Play video"
            >
              <Play className="w-5 h-5 text-[#9D9CA2] fill-[#9D9CA2]" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative min-h-75 md:min-h-0 flex items-end justify-center md:justify-end md:pt-7.5 md:pr-16.5">
            <img
              src="/testimonial.png"
              alt={testimonial.name}
              className="w-auto h-75 md:w-full md:h-full object-contain object-bottom md:object-bottom-right"
              priority
            />
          </div>

        </div>



          {/* Navigation Arrows */}
          <div className="absolute top-4 right-4 md:top-16.25 md:right-7.5 flex items-center gap-4 md:gap-11.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-full h-full" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10  flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-full h-full" />
            </button>
          </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-6.25 mt-6">
        {Testimonial_Links.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? "bg-neutral-800" : "bg-neutral-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
