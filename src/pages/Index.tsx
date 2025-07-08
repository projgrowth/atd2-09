
import Hero from "@/components/Hero";
import CoreBenefits from "@/components/CoreBenefits";
import InteractiveDemo from "@/components/InteractiveDemo";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileNavigation />
      <Hero />
      <InteractiveDemo />
      <CoreBenefits />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
