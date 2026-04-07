import NuageLogo from "./NuageLogo";
import quicksightDemo from "@/assets/quicksight-demo.png";
import { BarChart3, MessageSquare, Brain, Filter, Link, Lock, Code, Users } from "lucide-react";

const SlideQuickSightIntro = () => {
  const recursos = [
    { icon: BarChart3, text: "Spice (Cache dos dados)" },
    { icon: MessageSquare, text: "Conversação (ML – Linguagem Natural)" },
    { icon: Brain, text: "Análises Avançadas (ML – Anomalias e Forecast)" },
    { icon: Filter, text: "Painéis Interativos (Filtros, Drill Down...)" },
    { icon: Link, text: "Conectores com serviços AWS e Externos (incluso DataBricks)" },
    { icon: Lock, text: "Permissionamento a nível de linha (RLS)" },
    { icon: Code, text: "Embedded em sites e aplicações" },
    { icon: Users, text: "Comunidade ativa" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">AMAZON</span>{" "}
            <span className="text-gradient-magenta">QUICKSIGHT</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-4 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                O QuickSight é um serviço de <span className="text-foreground font-semibold">BI serverless da AWS</span>, 
                com modelo de precificação de acordo com o seu uso e quantidade de usuários habilitados.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Com ele, é possível realizar a criação de <span className="text-nuage-cyan font-semibold">painéis customizáveis</span>, 
                reaproveitando os recursos disponibilizados dentro da ferramenta.
              </p>
            </div>

            <div className="card-glass rounded-xl p-4 glow-magenta">
              <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Principais Recursos</h3>
              <div className="space-y-1.5">
                {recursos.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <r.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-3 border border-primary/20 glow-cyan">
              <img
                src={quicksightDemo}
                alt="Amazon QuickSight - Business Summary Dashboard"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideQuickSightIntro;
