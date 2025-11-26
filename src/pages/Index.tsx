import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyLearn from "@/components/WhyLearn";
import Courses from "@/components/Courses";
import Benefits from "@/components/Benefits";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyLearn />
      <Courses />
      <Benefits />
      <Showcase />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
