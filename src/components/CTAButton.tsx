const CTAButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
      <div className="max-w-md mx-auto">
        <p className="text-center text-primary text-sm font-semibold mb-2 animate-pulse">
          Vagas fechando
        </p>
        <button className="w-full gradient-primary hover:opacity-90 text-primary-foreground py-4 px-8 rounded-xl font-bold text-lg transition-opacity glow-primary">
          ENTRAR NO GRUPO 🔥
        </button>
      </div>
    </div>
  );
};

export default CTAButton;
