import NuageLogo from "./NuageLogo";
import { Copy, ShieldAlert, Clock, Layers } from "lucide-react";

const SlideDadosLabirinto = () => {
  const cards = [
    {
      icon: Copy,
      title: "Duplicação",
      desc: "Custos desnecessários e inconsistência.",
      color: "text-primary",
      glow: "glow-magenta",
    },
    {
      icon: ShieldAlert,
      title: "Inconsistência",
      desc: "Dados diferentes contam histórias diferentes. Qual confiar?",
      color: "text-nuage-gold",
      glow: "glow-gold",
    },
    {
      icon: Clock,
      title: "Lentidão",
      desc: "Qualquer análise cross-funcional vira um projeto manual e demorado.",
      color: "text-nuage-cyan",
      glow: "glow-cyan",
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
            <span className="text-foreground">O LABIRINTO DOS</span>{" "}
            <span className="text-gradient-magenta">DADOS</span>
          </h2>
          <p className="text-lg md:text-xl text-primary font-semibold opacity-0 animate-fade-in-up delay-100">
            A Causa Raiz da Lentidão e Inconsistência
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-6 opacity-0 animate-fade-in-up delay-100">
          <div className="card-glass rounded-xl p-5 flex items-start gap-4">
            <Layers className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Por que seus dados, que deveriam ser um ativo, hoje geram tanta fricção? A causa é estrutural: 
                a proliferação de <span className="text-foreground font-semibold">'silos de dados'</span>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Informações vitais estão isoladas em diferentes sistemas e departamentos — como ilhas que não se comunicam. 
                Cada setor tem sua 'versão da verdade', gerando duplicação, inconsistência e um esforço enorme para consolidar qualquer informação.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`card-glass rounded-xl p-6 opacity-0 animate-fade-in-up group hover:scale-105 transition-transform ${card.glow}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-card/50 flex items-center justify-center group-hover:animate-spin-slow">
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                </div>
              </div>
              <h3 className={`text-xl font-bold text-center mb-2 ${card.color}`}>{card.title}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideDadosLabirinto;
