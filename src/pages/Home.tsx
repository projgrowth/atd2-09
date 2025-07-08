import Hero from "@/components/Hero";
import QuickBenefits from "@/components/QuickBenefits";
import Interactive3DDemo from "@/components/Interactive3DDemo";
import SocialProofTeaser from "@/components/SocialProofTeaser";
import StoryConnector from "@/components/StoryConnector";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Story Transition */}
      <StoryConnector text="Here's what makes ATD different" />
      
      <QuickBenefits />
      
      {/* Story Transition */}
      <StoryConnector text="See it in action" />
      
      <Interactive3DDemo />
      
      {/* Story Transition */}
      <StoryConnector text="Join thousands of satisfied users" />
      
      <SocialProofTeaser />
      
      {/* Final CTA Section */}
      <section className="section-spacing section-bg-content section-separator">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-bold mb-6 border border-accent/20">
            Ready to Get Started?
          </div>
          <h2 className="heading-secondary mb-6 text-enhanced">
            Transform Your Home Management Today
          </h2>
          <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
            Experience the complete ATD platform and join our growing community of satisfied homeowners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/how-it-works">
              <Button size="lg" className="premium-button px-8 py-6 text-lg font-bold">
                Learn More
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            
            <Link to="/join-beta">
              <Button variant="outline" size="lg" className="button-secondary-enhanced px-8 py-6 text-lg font-semibold">
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