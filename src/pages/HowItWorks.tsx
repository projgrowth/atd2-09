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
      <div className="container max-w-6xl mx-auto pt-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <section className="section-spacing section-bg-primary">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            How ATD Works
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable">
            Four simple steps to transform your home management from chaos to control.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-spacing section-bg-content">
        <div className="container max-w-5xl mx-auto">
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
                      <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-[hsl(var(--atd-primary))]" />
                      </div>
                      <div className="bg-[hsl(var(--atd-primary))] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-enhanced">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-muted-enhanced mb-4 mobile-text-readable">
                      {step.description}
                    </p>
                    <p className="text-sm md:text-base text-muted-enhanced mobile-text-readable">
                      {step.details}
                    </p>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100">
                      <div className="aspect-square bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 rounded-xl flex items-center justify-center">
                        <step.icon className="h-16 w-16 text-[hsl(var(--atd-primary))]" />
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
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Sound like what you need?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            See what real users are saying about their ATD experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="premium-button px-8 py-6 text-lg font-bold">
              <Link to="/social-proof">
                See What Others Say
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
              <Link to="/join-beta">
                Join the Beta Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;