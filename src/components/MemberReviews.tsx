import { Star } from "lucide-react";

const reviews = [
  { name: "Carlos M.", text: "Melhor grupo que já participei! Conteúdo incrível e muito organizado.", rating: 5 },
  { name: "Ana P.", text: "Super recomendo, atendimento rápido e conteúdo de qualidade.", rating: 5 },
  { name: "Lucas R.", text: "Vale cada centavo! Grupo muito ativo com novidades todos os dias.", rating: 5 },
  { name: "Fernanda S.", text: "Ambiente seguro e discreto. Adorei a experiência!", rating: 5 },
];

const MemberReviews = () => {
  return (
    <section className="py-16 px-4">
      <p className="text-primary font-semibold text-center uppercase tracking-wider text-sm mb-2">
        Avaliações de Membros
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Veja o que nossos membros dizem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">"{review.text}"</p>
            <p className="text-foreground font-semibold text-sm">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberReviews;
