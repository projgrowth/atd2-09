import CoreBenefits from "@/components/CoreBenefits";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, UserPlus, Home, Smartphone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Invite Your Trusted Providers",
      description: "Add the service providers you already know and trust to your private network.",
      details: "No marketplace browsing or stranger vetting—just bring your existing relationships into one organized space."
    },
    {
      icon: Home,
      title: "Create Job Requests",
      description: "Post work requests directly to your providers with all the details they need.",
      details: "Photos, descriptions, access instructions—everything organized automatically for clear communication."
    },
    {
      icon: Smartphone,
      title: "Providers Use PocketOffice",
      description: "Your providers access a simple mobile interface to update progress and communicate.",
      details: "No apps to download—just a web link that works on any device with real-time updates."
    },
    {
      icon: CheckCircle,
      title: "Track Everything Seamlessly",
      description: "Monitor progress, handle payments, and store all documents in one secure location.",
      details: "From initial request to final invoice—complete visibility and organization without the chaos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-wide pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <section className="section-spacing section-bg-primary">
        <div className="container-narrow text-center">
          <h1 className="heading-primary text-enhanced">
            How ATD Works
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable">
            Four simple steps to transform your home management from chaos to control.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-spacing section-bg-content">
        <div className="container-standard">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="heading-tertiary text-enhanced">
                      {step.title}
                    </h3>
                    <p className="text-body-large text-muted-enhanced mb-4 mobile-text-readable">
                      {step.description}
                    </p>
                    <p className="text-body text-muted-enhanced mobile-text-readable">
                      {step.details}
                    </p>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="premium-card p-8">
                      <div className="aspect-square bg-primary/5 rounded-xl flex items-center justify-center">
                        <step.icon className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <CoreBenefits />

      {/* CTA Section */}
      <section className="section-spacing section-bg-primary section-separator">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Sound like what you need?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            See what real users are saying about their ATD experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/social-proof">
              <Button size="lg">
                See What Others Say
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button variant="outline" size="lg">
                Join Early Access Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;