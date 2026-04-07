import NuageLogo from "./NuageLogo";
import { Brain, Users, Compass } from "lucide-react";

const SlideDataDrivenConceito = () => {
  const pilares = [
    {
      icon: Brain,
      title: "Decisões Mais Inteligentes e Rápidas",
      desc: "Respostas ágeis a mudanças de mercado e otimização de recursos.",
      color: "text-primary",
      glow: "glow-magenta",
    },
    {
      icon: Users,
      title: "Entendimento Profundo do Cliente",
      desc: "Personalização de produtos e serviços, elevando a experiência do cliente.",
      color: "text-nuage-cyan",
      glow: "glow-cyan",
    },
    {
      icon: Compass,
      title: "Identificação de Novas Oportunidades",
      desc: "Descoberta de mercados inexplorados e tendências emergentes através da análise preditiva.",
      color: "text-nuage-gold",
      glow: "glow-gold",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">O QUE É</span>{" "}
            <span className="text-gradient-cyan">DATA DRIVEN</span>
          </h2>
          <p className="text-base md:text-lg text-primary font-semibold opacity-0 animate-fade-in-up delay-100">
            Transformando Dados em Vantagem Competitiva e Crescimento Sustentável
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-6 opacity-0 animate-fade-in-up delay-100">
          <div className="card-glass rounded-xl p-5">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Data Driven:</span> escolhas não são feitas com base em intuição, 
              "achismos" ou experiências passadas isoladas, mas sim em{" "}
              <span className="text-nuage-cyan font-semibold">evidências concretas e insights</span> extraídos da análise 
              sistemática de dados relevantes. É um compromisso contínuo com a objetividade e a veracidade que os dados podem oferecer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.title}
              className={`card-glass rounded-xl p-6 opacity-0 animate-fade-in-up hover:scale-105 transition-transform ${pilar.glow}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-card/50 flex items-center justify-center">
                  <pilar.icon className={`w-7 h-7 ${pilar.color}`} />
                </div>
              </div>
              <h3 className={`text-base font-bold text-center mb-2 ${pilar.color}`}>{pilar.title}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{pilar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideDataDrivenConceito;
