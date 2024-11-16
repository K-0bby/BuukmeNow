import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: `“Lorem ipsum dolor sit amet consectetur. Duis rutrum pretium quis purus eleifend id risus tempor Duis rutrum pretium quis purus eleif.”`,
    name: "Arlene McCoy",
    position: "Arlene Catering services",
    image: "src/assets/avatar1.jpeg",
  },
  {
    id: 2,
    text: `“Lorem ipsum dolor sit amet consectetur. Duis rutrum pretium quis purus eleifend id risus tempor Duis rutrum pretium quis purus eleif.”`,
    name: "Jane Smith",
    position: "CTO of Future Solutions",
    image: "src/assets/avatar3.jpeg",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide navigation
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  // Function to handle previous slide navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="relative">
          {/* Testimonial Slide */}
          <div className="text-center flex items-center justify-center flex-col">
            <p className="text-lg sm:text-xl text-gray-800 mb-5 sm:mb-10 w-full md:w-1/2">
              {testimonials[currentSlide].text}
            </p>
            <div className="flex flex-row justify-center items-center space-x-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="rounded-full w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] object-cover"
              />
              <div className="text-left">
                <h3 className="font-bold text-md sm:text-lg">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows (Hidden on Small Screens) */}
          <div className="absolute inset-y-0 left-28 md:flex hidden items-center">
            <button
              onClick={handlePrevSlide}
              className="p-2 rounded-full bg-white border text-gray-600"
            >
              <ArrowLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-28 md:flex hidden items-center">
            <button
              onClick={handleNextSlide}
              className="p-2 rounded-full bg-white border text-gray-600"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
