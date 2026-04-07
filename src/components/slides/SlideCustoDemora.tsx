import NuageLogo from "./NuageLogo";
import { Clock, Eye, TrendingDown, Hourglass } from "lucide-react";

const SlideCustoDemora = () => {
  const dores = [
    {
      icon: Clock,
      title: "Relatórios que levam semanas",
      desc: "Decisões que deveriam ser instantâneas, adiadas pela lentidão.",
      color: "text-primary",
    },
    {
      icon: Eye,
      title: "Decisões baseadas em intuição",
      desc: "Operar no escuro, aumentando riscos e perdendo oportunidades.",
      color: "text-nuage-gold",
    },
    {
      icon: TrendingDown,
      title: "Oportunidades Perdidas",
      desc: "O mercado não espera. A agilidade é a nova moeda de troca.",
      color: "text-nuage-cyan",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">O CUSTO DA</span>{" "}
            <span className="text-gradient-magenta">DEMORA</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Quando os Dados se Tornam um Freio para o Negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-100">
          <div className="card-glass rounded-xl p-4 text-center glow-magenta">
            <p className="text-sm md:text-base text-primary font-semibold">
              DIFICULDADE NA OBTENÇÃO ÁGIL DE DADOS PARA TOMADA DE DECISÃO
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {dores.map((dor, i) => (
            <div
              key={dor.title}
              className="card-glass rounded-xl p-6 opacity-0 animate-fade-in-up relative"
              style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Timeline connector */}
              {i < dores.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-card/50 flex items-center justify-center">
                  <dor.icon className={`w-7 h-7 ${dor.color}`} />
                </div>
              </div>
              <h3 className={`text-lg font-bold text-center mb-2 ${dor.color}`}>{dor.title}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{dor.desc}</p>
            </div>
          ))}
        </div>

        {/* Hourglass animation */}
        <div className="flex justify-center opacity-0 animate-fade-in-up delay-500">
          <div className="animate-pulse">
            <Hourglass className="w-12 h-12 text-nuage-gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCustoDemora;
