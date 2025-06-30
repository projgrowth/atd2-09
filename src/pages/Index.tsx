
import Hero from "@/components/Hero";
import WhyATD from "@/components/WhyATD";
import HowItWorks from "@/components/HowItWorks";
import FeatureShowcase from "@/components/FeatureShowcase";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
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
