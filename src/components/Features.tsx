import { Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "CasaisVip",
    description: "Grupo exclusivo de casais",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Dados protegidos e criptografados",
  },
  {
    icon: Zap,
    title: "Acesso Instantâneo",
    description: "Entre no grupo instantaneamente",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="inline-flex gradient-primary p-3 rounded-full mb-4">
              <feature.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
