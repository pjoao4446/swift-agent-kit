import NuageLogo from "./NuageLogo";
import { Target, Eye, Heart } from "lucide-react";

const Slide02Purpose = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Capacitar empresas com soluções cloud inovadoras que impulsionam a transformação digital e geram resultados mensuráveis.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a principal referência em consultoria AWS na América Latina, reconhecida pela excelência técnica e parceria estratégica.",
      color: "text-nuage-cyan",
      bgColor: "bg-nuage-cyan/10",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Inovação contínua, compromisso com resultados, ética e transparência, e foco absoluto no sucesso do cliente.",
      color: "text-nuage-gold",
      bgColor: "bg-nuage-gold/10",
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
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 1 • Abertura
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Propósito <span className="text-gradient-magenta">NuageIT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Compromisso com a excelência em cada etapa da jornada cloud
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => (
            <div
              key={item.title}
              className={`pillar-card text-center opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in-up delay-600">
          <div className="inline-flex items-center gap-4 px-8 py-4 card-glass rounded-2xl">
            <span className="text-4xl font-black text-gradient-gold">+150</span>
            <div className="text-left">
              <p className="font-semibold">Projetos Entregues</p>
              <p className="text-sm text-muted-foreground">com sucesso comprovado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide02Purpose;
