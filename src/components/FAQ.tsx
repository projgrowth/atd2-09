
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))]">
            Everything you need to know about All Things Done.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--atd-text))] hover:text-[hsl(var(--atd-primary))] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--atd-text-muted))] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
