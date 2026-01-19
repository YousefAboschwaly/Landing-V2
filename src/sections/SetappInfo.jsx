import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { testimonials } from "../data";
import SetappCard from "../components/setapp-info/SetappCard";

export default function SetappInfo() {
  const [currentPage, setCurrentPage] = useState(0);
const [screenType, setScreenType] = useState("desktop");

useEffect(() => {
  const checkScreen = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setScreenType("mobile");
    } else if (width < 1250) {
      setScreenType("tablet");
    } else {
      setScreenType("desktop");
    }

    setCurrentPage(0); // مهم جدًا
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);


const cardsPerPage =
  screenType === "mobile" ? 1 :
  screenType === "tablet" ? 2 :
  3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-20 md:pt-30 px-6 md:px-32.5 relative bg-[#fefefe] border-b border-gray-300">
      {/* Header */}
      <div className="flex flex-col justify-center lg:flex-row items-center lg:justify-between mb-8 gap-4 md:gap-25">
        <h2 className="text-[36px] tracking-[1.3px] leading-[47.88px] font-semibold text-primary">
          Setapp in your words.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 ">
          <p className="text-[16px] md:text-lg leading-relaxed md:leading-[32.04px] text-primary max-w-md mx-auto">
            What you say about how Setapp
            <br />
            powers you up.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2.5 md:pl-17">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <Facebook size={20} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <Twitter size={20} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <Instagram size={20} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <Youtube size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center space-y-5 relative">
        {/* Desktop Navigation Arrows (Visible only on md+) */}
        <div className="hidden md:flex items-center justify-end w-full gap-6">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={2} />
          </button>

          <button
            onClick={goToNext}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={2} />
          </button>
        </div>

        {/* Testimonials Display Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Mobile Navigation Arrows (Visible only on small screens) */}
          <button
            onClick={goToPrevious}
            className="md:hidden absolute left-10 z-10 p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer bg-white/50 rounded-full"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-10 h-10" strokeWidth={2} />
          </button>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center transition-all duration-500 ease-in-out px-10 md:px-0">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div key={`${currentPage}-${index}`} className="w-full sm:w-1/2 md:w-auto">
                <SetappCard
                  i={currentPage * cardsPerPage + index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  handle={testimonial.handle}
                  bgColor={testimonial.bgColor}
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="md:hidden absolute right-10 z-10 p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer bg-white/50 rounded-full"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-10 h-10" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pb-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentPage ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
