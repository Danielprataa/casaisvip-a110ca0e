import { Users } from "lucide-react";

const TELEGRAM_LINK = "https://casaisvip.com/redirect.html";

const CTAButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
      <div className="max-w-md mx-auto">
        <p className="text-center text-primary text-sm font-semibold mb-2">
          Vagas fechando
        </p>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full gradient-primary hover:opacity-90 text-background py-4 px-8 rounded-xl font-bold text-lg transition-opacity animate-pulse-glow flex items-center justify-center gap-3"
        >
          <Users className="w-5 h-5" />
          ENTRAR NO GRUPO 🔥
        </a>
      </div>
    </div>
  );
};

export default CTAButton;
