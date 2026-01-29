import NuageLogo from "./NuageLogo";
import { Zap, Users, BarChart3, Palette } from "lucide-react";

const Slide06GenAIPotential = () => {
  const potentials = [
    {
      icon: Users,
      title: "Experiência",
      description: "Interfaces conversacionais e personalização em tempo real para cada cliente",
      stat: "85%",
      statLabel: "satisfação",
    },
    {
      icon: Zap,
      title: "Produtividade",
      description: "Automação de tarefas repetitivas e geração de código assistida",
      stat: "10x",
      statLabel: "mais rápido",
    },
    {
      icon: BarChart3,
      title: "Insights",
      description: "Análise preditiva e descoberta de padrões em dados não estruturados",
      stat: "60%",
      statLabel: "mais precisão",
    },
    {
      icon: Palette,
      title: "Criatividade",
      description: "Geração de conteúdo, design e prototipação acelerada",
      stat: "5x",
      statLabel: "mais ideias",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Potencial da <span className="text-gradient-magenta">GenAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Quatro dimensões de transformação para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {potentials.map((item, index) => (
            <div
              key={item.title}
              className="pillar-card group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-gradient-gold">{item.stat}</span>
                    <span className="text-sm text-muted-foreground">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide06GenAIPotential;
