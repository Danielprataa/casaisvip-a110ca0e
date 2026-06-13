import { useEffect, useState } from "react";
import MemberReviews from "@/components/MemberReviews";
import Features from "@/components/Features";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import LiveStreams from "@/components/LiveStreams";
import AgeVerification from "@/components/AgeVerification";

const Index = () => {
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    setVerified(sessionStorage.getItem("age_verified") === "true");
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem("age_verified", "true");
    setVerified(true);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen gradient-bg">
      {!verified && (
        <AgeVerification onConfirm={handleConfirm} onDeny={handleDeny} />
      )}
      {verified && (
        <>
          <TopBanner />
          <LiveStreams />
          <MemberReviews />
          <Features />
          <Footer />
          <CTAButton />
        </>
      )}
    </div>
  );
};

export default Index;
