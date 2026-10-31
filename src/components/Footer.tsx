const Footer = () => {
  return (
    <footer className="py-8 pb-28 px-4 text-center border-t border-border">
      <div className="max-w-xl mx-auto space-y-2">
        <p className="text-foreground font-semibold text-sm">CasaisVip</p>
        <p className="text-muted-foreground text-sm">
          Plataforma destinada exclusivamente a maiores de 18 anos.
        </p>
        <p className="text-muted-foreground text-xs">
          Ao selecionar “Assistir Agora”, você será direcionado ao Telegram para continuar.
        </p>
        <p className="text-muted-foreground/60 text-xs">© {new Date().getFullYear()} CasaisVip</p>
      </div>
    </footer>
  );
};

export default Footer;
