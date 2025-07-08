import Hero from "@/components/Hero";
import QuickBenefits from "@/components/QuickBenefits";
import InteractiveDemo from "@/components/InteractiveDemo";
import SocialProofTeaser from "@/components/SocialProofTeaser";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <QuickBenefits />
      <InteractiveDemo />
      <SocialProofTeaser />
      
      {/* Final CTA Section */}
      <section className="section-spacing section-bg-content section-separator">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Ready to Transform Your Home Management?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            See exactly how ATD works and join the beta program today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/how-it-works">
              <Button size="lg" className="premium-button px-8 py-6 text-lg font-bold">
                See How It Works
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            
            <Link to="/join-beta">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                Join Beta Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;