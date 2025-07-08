import { AlertTriangle, CheckCircle, MessageSquare, FileX, Clock, Shield } from "lucide-react";

const ProblemSolution = () => {
  const challenges = [
    {
      icon: MessageSquare,
      problem: "Scattered Communication",
      description: "Emails, texts, and calls with different contractors get lost or forgotten",
      solution: "All communication happens in one secure platform with automatic organization"
    },
    {
      icon: FileX,
      problem: "Missing Documentation", 
      description: "Photos, receipts, and project details scattered across devices and conversations",
      solution: "Every photo, document, and conversation is automatically saved and searchable"
    },
    {
      icon: Clock,
      problem: "No Real-Time Updates",
      description: "Wondering if contractors showed up, what they're working on, or when they'll finish",
      solution: "Live updates with photos and progress tracking from your providers' mobile app"
    },
    {
      icon: Shield,
      problem: "Trust & Accountability",
      description: "Difficulty verifying work quality and ensuring providers follow through",
      solution: "Two-way rating system and documented work history builds trust and accountability"
    }
  ];

  return (
    <section className="section-spacing-large section-bg-content">
      <div className="container max-w-6xl mx-auto">
        {/* The Challenge */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 border border-red-200 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-sm font-bold text-red-600">The Challenge</span>
          </div>
          <h2 className="heading-secondary mb-6 text-enhanced">
            Home Management Chaos
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mobile-text-readable">
            Most homeowners struggle with the same frustrating problems when managing projects and providers.
          </p>
        </div>

        {/* Problems & Solutions */}
        <div className="space-y-12 md:space-y-16">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Problem Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-xl mr-4">
                      <challenge.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-red-900">
                      {challenge.problem}
                    </h3>
                  </div>
                  <p className="text-red-800 font-semibold leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>

              {/* Solution Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-xl mr-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">
                      ATD Solution
                    </h3>
                  </div>
                  <p className="text-green-800 font-semibold leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200 mb-6">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-bold text-green-600">The Solution</span>
          </div>
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