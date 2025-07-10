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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Transform Your Home Management Today
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Experience the complete ATD platform and join our growing community of satisfied homeowners.
          </p>
          
          <div className="flex justify-center">
            <Link to="/join-beta">
              <Button size="lg" className="min-h-[48px] px-8 py-4">
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