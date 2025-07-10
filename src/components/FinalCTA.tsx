
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CheckCircle, Home, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FinalCTA = () => {
  const faqs = [
    {
      question: "What makes ATD different?",
      answer: "ATD isn't a marketplace or directory. It's a private dashboard where you work with your own trusted providers. No strangers, no third-party interference—just clean organization for the relationships you already have."
    },
    {
      question: "Can I use my own providers?",
      answer: "Absolutely. That's the whole point. ATD is designed for homeowners who want to work with their existing, trusted service providers while having everything organized in one place."
    },
    {
      question: "Do you background check providers?",
      answer: "No—because you're inviting your own providers. You already know and trust them. We just give you the tools to manage those relationships more effectively."
    },
    {
      question: "Is it free? What's the catch?",
      answer: "ATD will have a simple monthly subscription after beta. No hidden fees, no commission on jobs, no marketplace nonsense. Just a clean tool that works for you, not against you."
    },
    {
      question: "How do providers access their jobs?",
      answer: "They get PocketOffice—a simple, mobile-friendly interface where they can update job status, upload photos, and communicate with you. No complex apps to download."
    },
    {
      question: "Can I share access with family?",
      answer: "Yes. You can give family members, assistants, or property managers exactly the level of access they need—view-only, full access, or something in between."
    }
  ];

  return (
    <div>
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-green-100/40"></div>
      <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 bg-purple-100 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-balance text-gray-900">
              Take control of your home—
              <span className="text-blue-600 block mt-2">without the chaos.</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 md:mb-10 leading-relaxed font-semibold text-gray-600">
              Join beta users who are already experiencing the calm of total home control.
            </p>
            
            {/* Beta Benefits */}
            <div className="flex flex-col space-y-2 md:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/80 rounded-xl border border-gray-200">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--atd-accent))] flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm md:text-base">Early access to all features</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/80 rounded-xl border border-gray-200">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--atd-accent))] flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm md:text-base">Personal onboarding session</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/80 rounded-xl border border-gray-200">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--atd-accent))] flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm md:text-base">Direct feedback line to our team</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="py-4 md:py-6 text-lg md:text-xl font-bold mb-4 md:mb-6 w-full sm:w-auto"
              style={{ paddingLeft: '2rem', paddingRight: '3rem' }}
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Get Early Access
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
            
            <p className="text-sm md:text-base font-semibold text-gray-600">
              Limited beta spots available. No credit card required.
            </p>
          </div>
          
          {/* Enhanced Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-sm">
              {/* Enhanced Phone with Realistic Interface */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-2 md:p-3 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 via-background to-[hsl(var(--atd-accent))]/10 rounded-2xl p-4 md:p-6 aspect-[9/16] flex flex-col justify-center">
                  <div className="text-center space-y-4 md:space-y-6">
                    {/* Success State */}
                    <div className="bg-white/90 rounded-2xl p-4 md:p-6 shadow-lg mx-auto">
                      <div className="bg-gradient-to-br from-[hsl(var(--atd-accent))] to-green-500 rounded-full p-3 md:p-4 mx-auto w-fit mb-3 md:mb-4">
                        <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <div className="text-base md:text-lg font-bold text-[hsl(var(--atd-text))]">All Set!</div>
                        <div className="text-xs md:text-sm text-[hsl(var(--atd-text-muted))]">Your home command center</div>
                        <div className="text-xs md:text-sm text-[hsl(var(--atd-text-muted))]">is ready to go.</div>
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <div className="bg-white/60 rounded-lg p-2 md:p-3 text-center">
                        <Home className="h-3 w-3 md:h-4 md:w-4 text-[hsl(var(--atd-primary))] mx-auto mb-1" />
                        <div className="text-xs font-medium">1 Home</div>
                        <div className="text-xs text-gray-500">Connected</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2 md:p-3 text-center">
                        <Users className="h-3 w-3 md:h-4 md:w-4 text-[hsl(var(--atd-accent))] mx-auto mb-1" />
                        <div className="text-xs font-medium">3 Members</div>
                        <div className="text-xs text-gray-500">Added</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Success Elements */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-[hsl(var(--atd-accent))] to-green-500 text-white rounded-full p-3 md:p-4 shadow-lg animate-pulse">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-[hsl(var(--atd-primary))] to-blue-600 text-white rounded-full p-3 md:p-4 shadow-lg">
                <Smartphone className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              
              {/* Notification popup */}
              <div className="absolute top-1/3 -left-6 md:-left-8 bg-white rounded-lg shadow-lg p-2 md:p-3 border border-gray-100 animate-fade-in">
                <div className="text-xs text-[hsl(var(--atd-text))] font-medium">Welcome to ATD!</div>
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">Setup complete ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-600">
            Everything you need to know about All Things Done.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 border-2 hover:border-gray-200"
                style={{ paddingLeft: '1.5rem', paddingRight: '2rem' }}
              >
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-blue-600 py-6 md:py-8 text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-6 md:pb-8 text-sm md:text-base font-semibold text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FinalCTA;
