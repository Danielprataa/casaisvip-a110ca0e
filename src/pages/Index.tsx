import { useState } from "react";
import AgeVerification from "@/components/AgeVerification";
import PhoneMockup from "@/components/PhoneMockup";
import MemberReviews from "@/components/MemberReviews";
import Features from "@/components/Features";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

const Index = () => {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <AgeVerification
          onConfirm={() => setVerified(true)}
          onDeny={() => window.history.back()}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <section className="pt-16 pb-8 px-4">
        <PhoneMockup />
      </section>


      <MemberReviews />
      <Features />
      <Footer />
      <CTAButton />
    </div>
  );
};

export default Index;
