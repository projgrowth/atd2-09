
import Hero from "@/components/Hero";
import WhyATD from "@/components/WhyATD";
import HowItWorks from "@/components/HowItWorks";
import FeatureShowcase from "@/components/FeatureShowcase";
import InteractiveDemo from "@/components/InteractiveDemo";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileNavigation />
      <Hero />
      <InteractiveDemo />
      <WhyATD />
      <HowItWorks />
      <FeatureShowcase />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
