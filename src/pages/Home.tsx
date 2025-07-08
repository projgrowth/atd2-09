import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <InteractiveDemo />
      
      {/* Focused CTA Section */}
      <section className="section-spacing section-bg-primary section-separator">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Ready to take control of your home?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            See exactly how ATD transforms home management from chaos to clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="premium-button px-8 py-6 text-lg font-bold">
              <Link to="/how-it-works">
                See How It Works
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
              <Link to="/join-beta">
                Skip to Beta Access
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;