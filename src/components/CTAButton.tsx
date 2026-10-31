import { Users } from "lucide-react";

const TELEGRAM_LINK = "/redirect.html";

const CTAButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
      <div className="max-w-md mx-auto">
        <a
          href={TELEGRAM_LINK}
          className="w-full gradient-primary hover:opacity-90 text-white py-4 px-8 rounded-xl font-bold text-lg transition-opacity animate-pulse-glow flex items-center justify-center gap-3"
        >
          <Users className="w-5 h-5" />
          Assistir Agora
        </a>
      </div>
    </div>
  );
};

export default CTAButton;
