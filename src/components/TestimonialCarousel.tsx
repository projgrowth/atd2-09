
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialCarousel = () => {
  const problemStatements = [
    {
      id: 1,
      quote: "I'm tired of juggling texts, emails, and calls with different contractors. There has to be a better way to organize all this.",
      context: "The Scattered Communication Problem",
      pain: "Every project feels chaotic"
    },
    {
      id: 2,
      quote: "I need to manage my elderly parents' home remotely, but I have no visibility into what's happening or what needs to be done.",
      context: "The Distance Management Challenge",
      pain: "Feeling helpless from afar"
    },
    {
      id: 3,
      quote: "Finding good contractors is hard enough. Once I find them, I shouldn't have to go through a marketplace every time I need work done.",
      context: "The Marketplace Frustration",
      pain: "Losing trusted relationships"
    },
    {
      id: 4,
      quote: "I spend more time managing my home maintenance than I do enjoying my home. The paperwork and coordination is overwhelming.",
      context: "The Time Drain Reality",
      pain: "Home ownership stress"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStatement = () => {
    setCurrentIndex((prev) => (prev + 1) % problemStatements.length);
  };

  const prevStatement = () => {
    setCurrentIndex((prev) => (prev - 1 + problemStatements.length) % problemStatements.length);
  };

  const currentStatement = problemStatements[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center animate-fade-in-up">
        <Quote className="h-12 w-12 text-[hsl(var(--atd-primary))]/20 mx-auto mb-6" />
        
        <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="text-center mb-6">
            <div className="inline-block bg-atd-primary/10 text-atd-primary px-4 py-2 rounded-full text-sm font-bold">
              {currentStatement.context}
            </div>
          </div>
          
          <blockquote className="text-2xl lg:text-3xl font-medium text-[hsl(var(--atd-text))] mb-8 leading-relaxed">
            "{currentStatement.quote}"
          </blockquote>
          
          <div className="text-center">
            <cite className="text-[hsl(var(--atd-text-muted))] font-medium italic">
              — {currentStatement.pain}
            </cite>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevStatement}
            className="rounded-full border-[hsl(var(--atd-primary))]/20 hover:bg-[hsl(var(--atd-primary))]/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {problemStatements.map((_, index) => (
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
            onClick={nextStatement}
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
