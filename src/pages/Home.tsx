import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import EnhancedDemo from "@/components/EnhancedDemo";
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
      <StoryConnector />
      
      <ProblemSolution />
      
      {/* Story Transition */}
      <StoryConnector />
      
      <EnhancedDemo />
      
      {/* Story Transition */}
      <StoryConnector />
      
      <SocialProofTeaser />
      
      {/* Final CTA Section */}
      <section className="section-spacing-xl section-bg-premium section-divider">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-6 text-enhanced">
            Transform Your Home Management Today
          </h2>
          <p className="text-body-large mb-8 mobile-text-readable">
            Experience the complete ATD platform and join our growing community of satisfied homeowners.
          </p>
          
          <div className="flex justify-center">
            <Link to="/join-beta">
              <Button size="lg" className="touch-target">
                Join Beta Program
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;