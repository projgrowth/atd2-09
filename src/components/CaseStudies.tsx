
import { ArrowRight, Clock, DollarSign, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const cases = [
    {
      title: "The Johnson Family: From Chaos to Control",
      subtitle: "Managing elderly parent's home across 3 states",
      challenge: "Sarah Johnson was overwhelmed trying to coordinate care for her 78-year-old father's home from 1,200 miles away. Multiple contractors, lost paperwork, and family confusion created stress and delays.",
      solution: "With ATD, Sarah created a central command center for Dad's home. All family members now have access, contractors use QR codes for instant updates, and everything is organized in one place.",
      results: [
        "Reduced coordination time by 75%",
        "Zero lost documents or missed appointments",
        "Family stress levels significantly decreased",
        "Father feels more independent and supported"
      ],
      metrics: {
        timeSaved: "15 hours/month",
        providers: "8 trusted contractors",
        familyMembers: "4 people coordinating"
      },
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      category: "Family Coordination"
    },
    {
      title: "Rodriguez Contracting: Streamlined Operations",
      subtitle: "How a small contractor doubled their efficiency",
      challenge: "Mike Rodriguez was losing jobs due to poor organization. Client communication was scattered, project details were forgotten, and his reputation was suffering.",
      solution: "PocketOffice transformed Mike's business. QR codes at each job site, instant client updates, organized photo documentation, and streamlined scheduling.",
      results: [
        "Client satisfaction scores up 40%",
        "Administrative time cut in half",
        "Zero missed appointments in 6 months",
        "Revenue increased by 60% through referrals"
      ],
      metrics: {
        timeSaved: "20 hours/week",
        clients: "45 active homes",
        projects: "120+ completed"
      },
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
      category: "Service Provider"
    }
  ];

  return (
    <section className="section-spacing-large section-bg-interactive section-separator">
      <div className="container-standard">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--atd-text))] mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))] max-w-2xl mx-auto">
            See how ATD is transforming home management for families and service providers
          </p>
        </div>

        <div className="space-y-20">
          {cases.map((caseStudy, index) => (
            <div 
              key={caseStudy.title}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="rounded-2xl shadow-xl w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[hsl(var(--atd-primary))] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[hsl(var(--atd-text))] mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-[hsl(var(--atd-primary))] font-medium">
                      {caseStudy.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--atd-text))] mb-2">The Challenge</h4>
                      <p className="text-[hsl(var(--atd-text-muted))]">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--atd-text))] mb-2">The ATD Solution</h4>
                      <p className="text-[hsl(var(--atd-text-muted))]">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--atd-text))] mb-3">Results Achieved</h4>
                    <div className="grid gap-2">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--atd-accent))] flex-shrink-0" />
                          <span className="text-[hsl(var(--atd-text-muted))]">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(caseStudy.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-[hsl(var(--atd-primary))]">{value}</div>
                        <div className="text-xs text-[hsl(var(--atd-text-muted))] capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white py-4 rounded-full font-semibold"
            style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
            onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
