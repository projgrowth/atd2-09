
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I can finally manage my mom's home remotely. ATD changed everything.",
      author: "Jenna K.",
      role: "Early Beta User",
      rating: 5,
      location: "San Francisco, CA"
    },
    {
      id: 2,
      quote: "As a contractor, PocketOffice has streamlined my entire workflow. No more lost paperwork or missed appointments.",
      author: "Mike Rodriguez",
      role: "Licensed Contractor",
      rating: 5,
      location: "Austin, TX"
    },
    {
      id: 3,
      quote: "The peace of mind knowing everything about Dad's house is organized in one place is invaluable.",
      author: "Sarah Chen",
      role: "Family Caregiver",
      rating: 5,
      location: "Portland, OR"
    },
    {
      id: 4,
      quote: "My clients love how organized I am now. ATD has made me a better service provider.",
      author: "Lisa Thompson",
      role: "House Cleaner",
      rating: 5,
      location: "Denver, CO"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center animate-fade-in-up">
        <Quote className="h-12 w-12 text-[hsl(var(--atd-primary))]/20 mx-auto mb-6" />
        
        <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <blockquote className="text-2xl lg:text-3xl font-medium text-[hsl(var(--atd-text))] mb-8 leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <cite className="text-[hsl(var(--atd-text-muted))] font-medium">
            — {currentTestimonial.author}, {currentTestimonial.role}
          </cite>
          <div className="text-sm text-[hsl(var(--atd-text-muted))]/70 mt-1">
            {currentTestimonial.location}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-[hsl(var(--atd-primary))]/20 hover:bg-[hsl(var(--atd-primary))]/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-[hsl(var(--atd-primary))]' 
                    : 'bg-[hsl(var(--atd-primary))]/30'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-[hsl(var(--atd-primary))]/20 hover:bg-[hsl(var(--atd-primary))]/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
