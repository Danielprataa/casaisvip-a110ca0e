import TopBanner from "@/components/TopBanner";
import LiveStreams from "@/components/LiveStreams";
import CTAButton from "@/components/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <TopBanner />
      <LiveStreams />
      <CTAButton />
    </div>
  );
};

export default Index;
