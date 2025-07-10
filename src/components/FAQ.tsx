
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
    <section className="py-16 lg:py-20 bg-blue-50 border-t border-gray-200">
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
          <Accordion type="single" collapsible className="space-y-6 sm:space-y-8">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg lg:text-xl hover:text-blue-600 py-6 sm:py-8 px-6 sm:px-8 text-gray-900 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-6 sm:pb-8 px-6 sm:px-8 text-sm sm:text-base lg:text-lg font-semibold text-gray-600">
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
