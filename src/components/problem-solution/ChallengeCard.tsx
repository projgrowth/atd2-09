import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Challenge } from "./types";

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
  hoveredCard: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ChallengeCard = ({ 
  challenge, 
  index, 
  hoveredCard, 
  onMouseEnter, 
  onMouseLeave 
}: ChallengeCardProps) => {
  const StatIcon = challenge.statIcon;

  return (
    <div 
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "bg-white rounded-3xl border border-gray-200",
        "hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-60 rounded-3xl" />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Problem Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-blue-600",
              hoveredCard === index && "scale-110 shadow-lg"
            )}>
              <challenge.icon className="h-7 w-7 text-white" />
            </div>
            
            {/* Impact Stat */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white">
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
                <span className="text-sm font-semibold text-gray-600">
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
};