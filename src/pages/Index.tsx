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

      <section className="py-8 px-4">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4">Prévias Exclusivas</h3>
          <p className="text-muted-foreground text-sm">
            Atenção: Caso você seja um dos casais das prévias, me chame no @bento021 para remover do site.
          </p>
        </div>
      </section>

      <MemberReviews />
      <Features />
      <Footer />
      <CTAButton />
    </div>
  );
};

export default Index;
