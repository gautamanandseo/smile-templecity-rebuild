import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@/data/services";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 relative"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(currentTestimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="text-lg text-gray-800 mb-6 italic leading-relaxed">
        "{currentTestimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
          <p className="text-sm text-gray-600">Satisfied Patient</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all shadow-md border-2 border-blue-200 hover:border-blue-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all shadow-md border-2 border-blue-200 hover:border-blue-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoPlay(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
