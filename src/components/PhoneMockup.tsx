import { Play } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-foreground">Veja o grupo </span>
        <span className="text-gradient">por dentro</span>
      </h2>
      <div className="phone-mockup w-72 md:w-80 aspect-[9/16] bg-secondary flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary" />
        <div className="relative z-10 bg-background/60 rounded-full p-5 cursor-pointer hover:bg-background/80 transition-colors">
          <Play className="w-8 h-8 text-foreground fill-foreground" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
