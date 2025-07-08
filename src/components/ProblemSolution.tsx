import { ArrowRight, MessageSquare, FileX, Clock, Shield } from "lucide-react";

const ProblemSolution = () => {
  const challenges = [
    {
      icon: MessageSquare,
      problem: "Scattered Communication",
      description: "Emails, texts, and calls with different contractors get lost or forgotten",
      solution: "All communication happens in one secure platform with automatic organization",
      benefit: "Never lose track of important conversations again"
    },
    {
      icon: FileX,
      problem: "Missing Documentation", 
      description: "Photos, receipts, and project details scattered across devices and conversations",
      solution: "Every photo, document, and conversation is automatically saved and searchable",
      benefit: "Complete project history at your fingertips"
    },
    {
      icon: Clock,
      problem: "No Real-Time Updates",
      description: "Wondering if contractors showed up, what they're working on, or when they'll finish",
      solution: "Live updates with photos and progress tracking from your providers' mobile app",
      benefit: "Stay informed without constant check-ins"
    },
    {
      icon: Shield,
      problem: "Trust & Accountability",
      description: "Difficulty verifying work quality and ensuring providers follow through",
      solution: "Two-way rating system and documented work history builds trust and accountability",
      benefit: "Confidence in every project outcome"
    }
  ];

  return (
    <section className="section-spacing-large section-bg-content">
      <div className="container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Home Management Challenges
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mobile-text-readable">
            Most homeowners struggle with the same frustrating problems. Here's how ATD solves each one.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="premium-card group hover:shadow-medium transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {/* Challenge Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-muted/20 p-3 rounded-xl shrink-0">
                    <challenge.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-enhanced">
                      {challenge.problem}
                    </h3>
                    <p className="text-muted-enhanced leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                {/* Solution Flow */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
                    <div className="mx-4 bg-primary/10 p-2 rounded-full">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                    <h4 className="font-bold text-primary mb-2">ATD Solution</h4>
                    <p className="text-enhanced mb-3 leading-relaxed">
                      {challenge.solution}
                    </p>
                    <div className="text-sm font-semibold text-accent">
                      {challenge.benefit}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-enhanced">
            Ready to See ATD in Action?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
            Watch how ATD transforms each of these pain points into organized, efficient home management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;