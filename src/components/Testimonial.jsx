import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: `“Lorem ipsum dolor sit amet consectetur. Duis rutrum pretium quis purus eleifend id risus tempor Duis rutrum pretium quis purus eleif.”`,
    name: "Arlene McCoy",
    position: "Arlene Catering services",
    image: "src/assets/Avatar.svg",
  },
  {
    id: 2,
    text: `“Lorem ipsum dolor sit amet consectetur. Duis rutrum pretium quis purus eleifend id risus tempor Duis rutrum pretium quis purus eleif.”`,
    name: "Jane Smith",
    position: "CTO of Future Solutions",
    image: "src/assets/Avatar.svg",
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

  // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);
//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

  return (
    // Carousel Section
    <section className="py-16 sm:py-20">
      <div className="max-w-screen-lg mx-auto px-4 ">
        <div className="relative">
          {/* Testimonial Slide */}
          <div className="text-center flex items-center justify-center flex-col">
            <p className="text-lg sm:text-xl text-gray-800 mb-5 sm:mb-10 w-full md:w-1/2">
              {testimonials[currentSlide].text}
            </p>
            <div className="flex flex-row sm:flex-row justify-center items-center space-x-4 sm:space-x-4 space-y-5 sm:space-y-0">
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

          {/* Navigation Arrows */}
          <div className="absolute top-24 right-0 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={handlePrevSlide}
              className=" text-black rounded-full"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-24 left-0 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={handleNextSlide}
              className=" text-black  rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          {/* <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  idx === currentSlide ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(idx)}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;