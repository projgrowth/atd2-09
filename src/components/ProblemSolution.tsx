import { ArrowRight, MessageSquare, FileX, Clock, Shield, CheckCircle, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProblemSolution = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const challenges = [
    {
      icon: MessageSquare,
      problem: "Scattered Communication",
      description: "Emails, texts, and calls with different contractors get lost or forgotten",
      solution: "All communication happens in one secure platform with automatic organization",
      benefit: "Never lose track of important conversations again",
      stats: "87% fewer missed messages",
      color: "from-atd-primary/10 to-atd-primary/20",
      iconColor: "text-atd-primary"
    },
    {
      icon: FileX,
      problem: "Missing Documentation", 
      description: "Photos, receipts, and project details scattered across devices and conversations",
      solution: "Every photo, document, and conversation is automatically saved and searchable",
      benefit: "Complete project history at your fingertips",
      stats: "100% project documentation",
      color: "from-atd-accent/10 to-atd-accent/20",
      iconColor: "text-atd-accent"
    },
    {
      icon: Clock,
      problem: "No Real-Time Updates",
      description: "Wondering if contractors showed up, what they're working on, or when they'll finish",
      solution: "Live updates with photos and progress tracking from your providers' mobile app",
      benefit: "Stay informed without constant check-ins",
      stats: "Real-time notifications",
      color: "from-atd-success/10 to-atd-success/20",
      iconColor: "text-atd-success"
    },
    {
      icon: Shield,
      problem: "Trust & Accountability",
      description: "Difficulty verifying work quality and ensuring providers follow through",
      solution: "Two-way rating system and documented work history builds trust and accountability",
      benefit: "Confidence in every project outcome",
      stats: "95% satisfaction rate",
      color: "from-atd-warning/10 to-atd-warning/20",
      iconColor: "text-atd-warning"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Home Management Challenges
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Most homeowners struggle with the same frustrating problems. Here's how ATD solves each one.
          </p>
        </div>

        {/* Interactive Challenge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl shadow-sm border border-gray-200 p-6 group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg",
                "animate-fade-in-up",
                expandedCard === index && "md:col-span-2 scale-[1.02]"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Background Pattern */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50",
                challenge.color
              )} />
              
              {/* Content */}
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      "bg-background/80 backdrop-blur-sm border border-border",
                      hoveredCard === index && "scale-110 shadow-lg"
                    )}>
                      <challenge.icon className={cn("h-8 w-8 md:h-10 md:w-10", challenge.iconColor)} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {challenge.problem}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="text-sm bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 font-semibold text-primary">
                    {challenge.stats}
                  </div>
                </div>

                {/* Transformation Arrow */}
                <div className={cn(
                  "flex items-center justify-center mb-6 transition-all duration-300",
                  hoveredCard === index && "scale-110"
                )}>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1 max-w-20"></div>
                  <div className="mx-4 bg-primary/10 p-3 rounded-full border border-primary/20">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1 max-w-20"></div>
                </div>
                
                {/* Solution */}
                <div className={cn(
                  "bg-gray-50 rounded-lg border border-gray-200 p-4 transition-all duration-300",
                  hoveredCard === index && "bg-primary/5 border-primary/20"
                )}>
                  <div className="flex items-start space-x-3 mb-4">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">ATD Solution</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Benefit Highlight */}
                  <div className={cn(
                    "border-t border-gray-200 pt-4 transition-all duration-300",
                    hoveredCard === index && "border-primary/20"
                  )}>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm font-bold text-accent">
                        {challenge.benefit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className={cn(
                  "flex items-center justify-center mt-4 transition-all duration-300",
                  expandedCard === index ? "rotate-180" : ""
                )}>
                  <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300",
                hoveredCard === index && "opacity-100"
              )} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Ready to See ATD in Action?
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Watch how ATD transforms each of these pain points into organized, efficient home management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;