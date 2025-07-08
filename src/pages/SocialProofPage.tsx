import SocialProof from "@/components/SocialProof";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SocialProofPage = () => {
  const faqs = [
    {
      question: "What makes ATD different from other home management tools?",
      answer: "ATD isn't a marketplace or directory. It's a private dashboard where you work with your own trusted providers. No strangers, no third-party interference—just clean organization for the relationships you already have."
    },
    {
      question: "Can I use my existing service providers?",
      answer: "Absolutely. That's the whole point. ATD is designed for homeowners who want to work with their existing, trusted service providers while having everything organized in one place."
    },
    {
      question: "Do you background check providers?",
      answer: "No—because you're inviting your own providers. You already know and trust them. We just give you the tools to manage those relationships more effectively."
    },
    {
      question: "What does the beta program include?",
      answer: "Beta users get early access to all features, personal onboarding sessions, direct feedback line to our team, and input on feature development—all while helping shape the future of home management."
    },
    {
      question: "How do service providers access their jobs?",
      answer: "They get PocketOffice—a simple, mobile-friendly interface where they can update job status, upload photos, and communicate with you. No complex apps to download, just a web link that works on any device."
    },
    {
      question: "Can I share access with family members?",
      answer: "Yes. You can give family members, assistants, or property managers exactly the level of access they need—view-only, full access, or something in between. Your home, your rules."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container max-w-6xl mx-auto pt-8">
        <Link to="/how-it-works">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to How It Works
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <section className="section-spacing section-bg-primary">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="heading-primary text-enhanced">
            What Our Users Say
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable">
            Real stories from homeowners who've taken control of their home management.
          </p>
        </div>
      </section>

      {/* Social Proof Content */}
      <SocialProof />

      {/* FAQ Section */}
      <section className="section-spacing section-bg-content section-separator">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="heading-secondary mb-4 md:mb-6 text-enhanced">
              Common Questions
            </h2>
            <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable">
              Everything you need to know about All Things Done.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="premium-card hover:shadow-medium transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-primary py-6 md:py-8 text-enhanced">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed pb-6 md:pb-8 text-sm md:text-base text-muted-enhanced">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing section-bg-primary section-separator">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Ready to join them?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            Get early access to the home management solution that actually works.
          </p>
          
          <Link to="/join-beta">
            <Button size="lg">
              Join the Beta Program
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialProofPage;