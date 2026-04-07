import NuageLogo from "./NuageLogo";
import { Zap, BarChart3, Shield, Layers } from "lucide-react";

const SlideQuickSuiteBrief = () => {
  const features = [
    { icon: Zap, title: "Performance", desc: "Dashboards otimizados e de alta performance" },
    { icon: BarChart3, title: "Analytics", desc: "Análises avançadas com inteligência artificial" },
    { icon: Shield, title: "Segurança", desc: "Governança e controle de acesso granular" },
    { icon: Layers, title: "Integração", desc: "Conectado ao ecossistema AWS e ferramentas externas" },
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
            <span className="text-gradient-magenta">QUICKSUITE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            A solução completa da NuageIT para{" "}
            <span className="text-nuage-cyan font-semibold">inteligência de dados</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-6 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-xl p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              O <span className="text-foreground font-semibold">QuickSuite</span> é a solução proprietária da NuageIT que potencializa 
              o Amazon QuickSight com funcionalidades adicionais, automações e integrações exclusivas para acelerar 
              a jornada data-driven das empresas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-glass rounded-xl p-5 text-center opacity-0 animate-fade-in-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideQuickSuiteBrief;
