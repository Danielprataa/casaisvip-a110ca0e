import { User } from "lucide-react";
import logo from "@/assets/logo.png";

const REDIRECT_LINK = "https://casaisvip.com/redirect.html";

const TopBanner = () => {
  return (
    <header className="w-full border-b border-primary/40 py-4 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="CasaisVip logo"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-xl md:text-2xl font-extrabold text-foreground">
            Casais<span className="text-primary">Vip</span>
          </span>
        </a>

        <h1 className="hidden md:block text-3xl md:text-4xl font-extrabold text-primary tracking-wide text-center">
          +18 Brasil
        </h1>

        <a
          href={REDIRECT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base shrink-0"
        >
          <User className="w-4 h-4" />
          Entrar
        </a>
      </div>

      <h1 className="md:hidden text-2xl font-extrabold text-primary tracking-wide text-center mt-3">
        +18 Brasil
      </h1>
    </header>
  );
};

export default TopBanner;
