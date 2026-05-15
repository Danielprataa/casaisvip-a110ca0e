import PhoneMockup from "@/components/PhoneMockup";
import MemberReviews from "@/components/MemberReviews";
import Features from "@/components/Features";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import LiveStreams from "@/components/LiveStreams";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <TopBanner />
      <section className="pt-16 pb-8 px-4">
        <PhoneMockup />
      </section>

      <LiveStreams />
      <MemberReviews />
      <Features />
      <Footer />
      <CTAButton />
    </div>
  );
};

export default Index;
