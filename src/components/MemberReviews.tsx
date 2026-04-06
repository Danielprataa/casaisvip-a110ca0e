import { Star } from "lucide-react";

const messages = [
  {
    date: "29 de janeiro",
    texts: [
      { text: "Cara, o melhor grupo que já vi !\nSe eu fosse você aumentaria até o valor e continuaria investindo nisso. É muito bom mesmo!", time: "15:34", align: "left" as const },
    ],
  },
  {
    date: "23 de janeiro",
    texts: [
      { text: "Mano tem atualizacao sempre?", time: "20:01", align: "left" as const },
      { text: "vlw mn", time: "13:50", align: "right" as const },
      { text: "Eae Mano", time: "15:38", align: "left" as const },
      { text: "Canal top viu", time: "16:10", align: "left" as const },
    ],
  },
  {
    date: null,
    texts: [
      { text: "Pqp que trabalho hein mano. Tmj, tenha paciência e espero que permaneçam com o conteúdo top de sempre!", time: "23:56", align: "left" as const },
    ],
  },
];

const MemberReviews = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex justify-center mb-6">
        <div className="gradient-primary px-6 py-2 rounded-full flex items-center gap-2">
          <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
            Avaliações de Membros
          </span>
          <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        <span className="text-foreground">VEJA O QUE NOSSOS</span>
        <br />
        <span className="text-gradient">MEMBROS DIZEM</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {messages.map((convo, i) => (
          <div
            key={i}
            className="bg-card border border-primary/40 rounded-xl p-4 flex flex-col gap-3 min-h-[180px]"
          >
            {convo.date && (
              <div className="flex justify-center">
                <span className="bg-secondary text-muted-foreground text-xs px-3 py-1 rounded-full">
                  {convo.date}
                </span>
              </div>
            )}
            {convo.texts.map((msg, j) => (
              <div
                key={j}
                className={`flex ${msg.align === "right" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                    msg.align === "right"
                      ? "bg-emerald-800/60 text-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <p className="text-[10px] text-muted-foreground text-right mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberReviews;
