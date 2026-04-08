import { MessageSquare, Settings, FileSearch, Lightbulb } from "lucide-react";

const SlideIAGenerativaValor = () => {
  const cards = [
    {
      icon: MessageSquare,
      title: "NOVAS EXPERIÊNCIAS",
      description: "Crie novas formas inovadoras e envolventes de interagir com seus clientes e funcionários",
      delay: "0.3s",
    },
    {
      icon: Settings,
      title: "PRODUTIVIDADE",
      description: "Melhore radicalmente a produtividade em todas as linhas de negócios",
      delay: "0.45s",
    },
    {
      icon: FileSearch,
      title: "INSIGHTS",
      description: "Extraia insights e respostas claras de todas suas informações corporativas, permitindo mais rapidez e melhores decisões",
      delay: "0.6s",
    },
    {
      icon: Lightbulb,
      title: "CRIATIVIDADE",
      description: "Crie novos conteúdos e ideias, incluindo conversas, histórias, imagens, vídeos e músicas",
      delay: "0.75s",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10 flex flex-col justify-center h-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight opacity-0 animate-fade-in-up">
            A <span className="text-gradient-magenta">IA Generativa</span> tem <span className="text-foreground font-black">potencial</span> para
          </h2>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight opacity-0 animate-fade-in-up delay-100">
            criar um <span className="text-foreground font-black">valor comercial significativo</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-5 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="opacity-0 animate-scale-in"
              style={{ animationDelay: card.delay, animationFillMode: "forwards" }}
            >
              <div className="border border-nuage-cyan/30 rounded-2xl p-6 h-full flex flex-col items-center text-center bg-background/30 backdrop-blur-sm hover:border-nuage-cyan/60 transition-colors duration-300">
                {/* Icon area */}
                <div className="w-full aspect-square flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-nuage-cyan/10 flex items-center justify-center">
                    <card.icon className="w-10 h-10 text-nuage-cyan/70" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/80 text-foreground text-xs font-bold tracking-wider rounded">
                    {card.title}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideIAGenerativaValor;
