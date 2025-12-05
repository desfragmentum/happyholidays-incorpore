import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import VipSection from "@/components/VipSection";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TotalCrioSection from "@/components/TotalCrioSection";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CountdownTimer />
      <Hero />
      <TotalCrioSection />
      <ResultsSection />
      <Treatments />
      <WhyChooseUs />
      <VipSection />
      <Footer />
    </main>
  );
};

export default Index;
