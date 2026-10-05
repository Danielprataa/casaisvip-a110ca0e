import { User } from "lucide-react";
import logo from "@/assets/logo.png";

const REDIRECT_LINK = "/redirect.html";

const TopBanner = () => {
  return (
    <header className="w-full border-b border-primary/30 py-2 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="CasaisVip logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-lg md:text-xl font-extrabold text-foreground">
            Casais<span className="text-primary">Vip</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-bold ml-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            15768 AO VIVO
          </span>
        </a>

        <h1 className="hidden md:block text-2xl md:text-3xl font-extrabold text-primary tracking-wide text-center">
          +18
        </h1>

        <a
          href={REDIRECT_LINK}
          className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-semibold text-sm shrink-0"
        >
          <User className="w-4 h-4" />
          Entrar
        </a>
      </div>

      <h1 className="md:hidden text-xl font-extrabold text-primary tracking-wide text-center mt-2">
        +18
      </h1>

      <div className="sm:hidden mt-2 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          15768 AO VIVO
        </div>
      </div>
    </header>
  );
};

export default TopBanner;
