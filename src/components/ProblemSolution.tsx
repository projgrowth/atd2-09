import { MessageSquare, FileX, Clock, Shield, CheckCircle, ArrowRight, Zap, TrendingUp, Users, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProblemSolution = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const challenges = [
    {
      icon: MessageSquare,
      problem: "Communication Chaos",
      painPoint: "Juggling texts, emails, and calls across multiple contractors",
      description: "Lost messages, missed deadlines, and constant confusion about project status",
      solution: "Unified communication hub with automatic message organization",
      benefit: "Never miss another important update or decision",
      impact: "87% reduction in miscommunication",
      timesSaved: "3 hours per week",
      statIcon: TrendingUp,
      gradient: "from-blue-50 to-blue-100",
      accentColor: "blue-600"
    },
    {
      icon: FileX,
      problem: "Documentation Disaster",
      painPoint: "Photos and receipts scattered everywhere",
      description: "Important project documents lost in phone galleries and email threads",
      solution: "Automatic photo organization with searchable project history",
      benefit: "Complete documentation without the hassle",
      impact: "100% project transparency",
      timesSaved: "2 hours per project",
      statIcon: Star,
      gradient: "from-purple-50 to-purple-100",
      accentColor: "purple-600"
    },
    {
      icon: Clock,
      problem: "Status Blackout",
      painPoint: "Wondering if contractors even showed up today",
      description: "No visibility into work progress, arrival times, or completion estimates",
      solution: "Real-time updates with photos and progress tracking",
      benefit: "Complete project visibility from anywhere",
      impact: "Real-time peace of mind",
      timesSaved: "Daily check-ins eliminated",
      statIcon: Users,
      gradient: "from-green-50 to-green-100",
      accentColor: "green-600"
    },
    {
      icon: Shield,
      problem: "Trust Uncertainty",
      painPoint: "How do you know if work is actually done right?",
      description: "Difficulty verifying quality and ensuring accountability without being there",
      solution: "Documented work history with two-way rating system",
      benefit: "Confidence in every project outcome",
      impact: "95% homeowner satisfaction",
      timesSaved: "Zero quality surprises",
      statIcon: CheckCircle,
      gradient: "from-orange-50 to-orange-100",
      accentColor: "orange-600"
    }
  ];

  return (
    <section className="section-spacing-large section-bg-content">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-200 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Common homeowner frustrations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            Why Home Projects Feel Like
            <span className="text-red-600 block">Constant Chaos</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium text-muted-enhanced leading-relaxed">
            Every homeowner faces the same exhausting problems. Here's how ATD eliminates each frustration.
          </p>
        </div>

        {/* Modern Challenge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {challenges.map((challenge, index) => {
            const StatIcon = challenge.statIcon;
            return (
              <div 
                key={index}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300",
                  "bg-white rounded-3xl border border-gray-200",
                  "hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-60 rounded-3xl",
                  challenge.gradient
                )} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Problem Section */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
                        `bg-${challenge.accentColor}`,
                        hoveredCard === index && "scale-110 shadow-lg"
                      )}>
                        <challenge.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      {/* Impact Stat */}
                      <div className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold",
                        `bg-${challenge.accentColor} text-white`
                      )}>
                        <StatIcon className="h-3 w-3" />
                        {challenge.timesSaved}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {challenge.problem}
                    </h3>
                    <p className="text-lg font-semibold text-red-600 mb-3">
                      "{challenge.painPoint}"
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>

                  {/* Solution Transform */}
                  <div className={cn(
                    "relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300",
                    hoveredCard === index ? "border-blue-200 shadow-md" : "border-gray-200"
                  )}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-600 mb-2">ATD Solution</h4>
                        <p className="text-gray-800 font-medium mb-3 leading-relaxed">
                          {challenge.solution}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-green-600">
                            {challenge.benefit}
                          </span>
                          <span className="text-sm font-bold text-blue-600">
                            {challenge.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 rounded-3xl",
                  hoveredCard === index && "opacity-100"
                )} />
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              See the Complete Transformation
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium text-gray-700 leading-relaxed">
              Watch how ATD transforms each frustration into seamless home management that actually works.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No marketplace chaos
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Your trusted providers only
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Complete transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;