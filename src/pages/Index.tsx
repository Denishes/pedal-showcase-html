import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import BuildDetails from "@/components/BuildDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Specifications />
      <BuildDetails />
      <Footer />
    </div>
  );
};

export default Index;
