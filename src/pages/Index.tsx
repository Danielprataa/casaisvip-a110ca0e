import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import LiveStreams from "@/components/LiveStreams";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <TopBanner />
      <LiveStreams />
      <Footer />
      <CTAButton />
    </div>
  );
};

export default Index;
