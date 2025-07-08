import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, Users, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const JoinBeta = () => {
  const betaBenefits = [
    {
      icon: Zap,
      title: "Early Access to All Features",
      description: "Be among the first to experience ATD's complete feature set before public launch."
    },
    {
      icon: Users,
      title: "Personal Onboarding Session",
      description: "Get a 1-on-1 setup call to ensure ATD is perfectly configured for your home."
    },
    {
      icon: Star,
      title: "Direct Line to Our Team",
      description: "Your feedback shapes the product—direct access to developers and product team."
    },
    {
      icon: Shield,
      title: "Lifetime Founder Benefits",
      description: "Lock in special pricing and features that won't be available to general users."
    }
  ];

  const finalFAQs = [
    {
      question: "Is the beta really free?",
      answer: "Yes, completely free during beta. You'll get grandfathered pricing when we launch, and you can cancel anytime with no obligations."
    },
    {
      question: "How long does beta access last?",
      answer: "Beta runs for 6 months minimum. We'll give you 60 days notice before any transition to paid plans, and beta users get significant discounts."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "That's exactly who we built this for. Every beta user gets a personal onboarding call to set everything up perfectly. No technical knowledge required."
    },
    {
      question: "Can I cancel if it's not for me?",
      answer: "Absolutely. No contracts, no commitments. If ATD isn't saving you time and stress within the first month, just let us know and we'll help you export your data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-standard pt-8">
        <Button asChild variant="ghost" className="mb-8 touch-target">
          <Link to="/social-proof">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Social Proof
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="section-spacing section-bg-primary">
        <div className="container-narrow text-center">
          <div className="inline-flex items-center rounded-full bg-atd-primary/10 border-2 border-atd-primary/20 mb-8" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
            <div className="w-3 h-3 bg-atd-primary rounded-full mr-3"></div>
            <span className="text-sm font-bold text-atd-primary">Early Access Program</span>
          </div>
          
          <h1 className="heading-primary text-enhanced">
            Join the ATD Early Access List
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable mb-8">
            Be notified when the home management solution is ready for testing.
          </p>
          
          <div className="premium-card p-6 md:p-8 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-atd-primary" />
              <span className="text-lg font-bold text-enhanced">Currently in Development</span>
            </div>
            <p className="text-body text-muted-enhanced mobile-text-readable">We're building something better—honest development, no rush to market</p>
          </div>
        </div>
      </section>

      {/* Beta Benefits */}
      <section className="section-spacing section-bg-content">
        <div className="container-standard">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6 text-enhanced">
              Why Join the Beta?
            </h2>
          </div>

          <div className="grid-responsive-2 gap-6 mb-12">
            {betaBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="premium-card enhanced-card-hover p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-[hsl(var(--atd-primary))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-enhanced">
                        {benefit.title}
                      </h3>
                      <p className="text-sm font-semibold text-muted-enhanced mobile-text-readable">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Reversal */}
          <div className="premium-card-elevated p-8 text-center">
            <Shield className="h-12 w-12 text-atd-success mx-auto mb-4" />
            <h3 className="heading-tertiary mb-4 text-enhanced">
              Zero Risk, Maximum Reward
            </h3>
            <p className="text-body-large text-muted-enhanced mobile-text-readable">
              Free beta access, personal onboarding, and grandfathered pricing. 
              If you're not completely satisfied in 30 days, we'll help you transition back to your old system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing section-bg-primary section-separator">
        <div className="container-narrow">
          <div className="grid-responsive-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="heading-secondary mb-6 text-enhanced">
                Ready to take control?
              </h2>
              <p className="text-lg mb-8 font-semibold text-muted-enhanced mobile-text-readable">
                Join hundreds of homeowners who are already experiencing the calm of total home control.
              </p>
              
              <Button 
                size="lg" 
                className="mb-6 w-full lg:w-auto"
                asChild
              >
                <Link to="/signup">
                  Join Early Access List
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              
              <p className="text-sm font-semibold text-muted-enhanced mobile-text-readable">
                No credit card required • Setup call included • Cancel anytime
              </p>
            </div>
            
            <div className="relative">
              <div className="premium-card-elevated p-6 relative">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-br from-atd-accent to-atd-success rounded-full p-4 mx-auto w-fit">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-enhanced">Welcome to ATD!</div>
                    <div className="text-body text-muted-enhanced">Your home command center is ready.</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-atd-primary/10 rounded-lg p-3 text-center">
                      <div className="text-body font-bold text-enhanced">1 Home</div>
                      <div className="text-caption text-muted-enhanced">Connected</div>
                    </div>
                    <div className="bg-atd-success/10 rounded-lg p-3 text-center">
                      <div className="text-body font-bold text-enhanced">Setup</div>
                      <div className="text-caption text-muted-enhanced">Complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final FAQ */}
      <section className="section-spacing section-bg-content">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6 text-enhanced">
              Final Questions?
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {finalFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="premium-card enhanced-card-hover"
                style={{ paddingLeft: '1.5rem', paddingRight: '2rem' }}
              >
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-primary py-6 text-enhanced mobile-text-readable">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-6 text-sm md:text-base font-semibold text-muted-enhanced mobile-text-readable">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              asChild
            >
              <Link to="/signup">
                Join Early Access List
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinBeta;