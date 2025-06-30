
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const logos = [
    "Built for homeowners",
    "Trusted by professionals",
    "Privacy-first approach",
    "No third-party marketplaces"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Testimonial */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-12 w-12 text-[hsl(var(--atd-primary))]/20 mx-auto mb-6" />
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-[hsl(var(--atd-text))] mb-8 leading-relaxed">
              "I can finally manage my mom's home remotely. ATD changed everything."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <cite className="text-[hsl(var(--atd-text-muted))] font-medium">
              — Jenna K., Early Beta User
            </cite>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {logos.map((text, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50/50 to-white border border-gray-100"
              >
                <div className="text-sm font-medium text-[hsl(var(--atd-text-muted))]">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
