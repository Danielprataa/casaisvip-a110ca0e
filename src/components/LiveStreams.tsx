import { Play, ChevronRight, Eye, Video } from "lucide-react";

const lives = [
  { name: "sweetAli_", views: 198, img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&h=600&fit=crop&crop=faces" },
  { name: "Halanamorena", views: 82, img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=400&h=600&fit=crop&crop=faces" },
  { name: "jujugostamt2000", views: 70, img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=600&fit=crop&crop=faces" },
  { name: "OliviaWild_", views: 54, img: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&h=600&fit=crop&crop=faces" },
];

const LiveStreams = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-foreground">
          Lives Amadoras Brasileiras
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Acesso seguro e discreto a conteúdo +18 premium
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Ao Vivo
          </span>
          <h3 className="text-xl font-bold text-foreground">Players ao Vivo</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <a
            href="https://casaisvip.com/redirect.html"
            className="bg-primary rounded-xl flex flex-col items-center justify-center aspect-[3/4] hover:opacity-90 transition glow-primary"
          >
            <ChevronRight className="w-8 h-8 text-primary-foreground mb-2" />
            <span className="text-primary-foreground font-semibold">Ver Todas</span>
          </a>

          {lives.map((live, i) => (
            <a
              key={i}
              href="https://casaisvip.com/redirect.html"
              className="relative rounded-xl overflow-hidden border border-primary/40 aspect-[3/4] group"
            >
              <img src={live.img} alt={live.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" /> Ao Vivo
              </span>
              <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                <Eye className="w-3 h-3" /> {live.views}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary rounded-full p-3 group-hover:scale-110 transition">
                  <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white font-semibold text-sm flex items-center gap-1">
                {live.name} <span>🇧🇷</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-primary pl-3">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Lives Amadoras</h3>
          </div>
          <p className="text-muted-foreground text-sm mt-1">Modelos brasileiras ao vivo</p>
        </div>
      </div>
    </section>
  );
};

export default LiveStreams;
