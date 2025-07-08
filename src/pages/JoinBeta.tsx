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
      <div className="container max-w-6xl mx-auto pt-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/social-proof">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Social Proof
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="section-spacing section-bg-primary">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border-2 border-green-200 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-bold text-green-900">Limited Beta Spots Available</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            Join the ATD Beta Program
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable mb-8">
            Get early access to the home management solution that puts you back in control.
          </p>
          
          <div className="bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-orange-500" />
              <span className="text-lg font-bold text-orange-900">Beta capacity: 80% full</span>
            </div>
            <p className="text-sm text-gray-600">Only 50 spots remaining for Q1 2024 cohort</p>
          </div>
        </div>
      </section>

      {/* Beta Benefits */}
      <section className="section-spacing section-bg-content">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6 text-enhanced">
              Why Join the Beta?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {betaBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-interactive p-6 h-full">
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
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 text-center">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-enhanced">
              Zero Risk, Maximum Reward
            </h3>
            <p className="text-base font-semibold text-muted-enhanced mobile-text-readable">
              Free beta access, personal onboarding, and grandfathered pricing. 
              If you're not completely satisfied in 30 days, we'll help you transition back to your old system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing section-bg-primary section-separator">
        <div className="container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-enhanced">
                Ready to take control?
              </h2>
              <p className="text-lg mb-8 font-semibold text-muted-enhanced mobile-text-readable">
                Join hundreds of homeowners who are already experiencing the calm of total home control.
              </p>
              
              <Button 
                size="lg" 
                className="premium-button px-12 py-6 text-xl font-bold mb-6 w-full lg:w-auto"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Get Early Access Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <p className="text-sm font-semibold text-muted-enhanced mobile-text-readable">
                No credit card required • Setup call included • Cancel anytime
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-br from-[hsl(var(--atd-accent))] to-green-500 rounded-full p-4 mx-auto w-fit">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[hsl(var(--atd-text))]">Welcome to ATD!</div>
                    <div className="text-sm text-[hsl(var(--atd-text-muted))]">Your home command center is ready.</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold">1 Home</div>
                      <div className="text-xs text-gray-500">Connected</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold">Setup</div>
                      <div className="text-xs text-gray-500">Complete</div>
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
        <div className="container max-w-4xl mx-auto">
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
                className="card-base px-6 md:px-8 border-2 hover:border-gray-200"
              >
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-[hsl(var(--atd-primary))] py-6 text-enhanced mobile-text-readable">
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
              className="premium-button px-12 py-6 text-xl font-bold"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Secure Your Beta Spot
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinBeta;