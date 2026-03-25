import NuageLogo from "./NuageLogo";
import { Code, Monitor, Layers, BarChart3, Brain, Wifi, Film, Smartphone, Database } from "lucide-react";

const SlideServicosAWS = () => {
  const servicos = [
    { icon: Code, name: "Desenvolvimento de Aplicações", highlight: false },
    { icon: Monitor, name: "Computação do Usuário Final", highlight: false },
    { icon: Layers, name: "Integração de Aplicações", highlight: false },
    { icon: BarChart3, name: "Análise de Dados", highlight: false },
    { icon: Brain, name: "Inteligência Artificial", highlight: true },
    { icon: Wifi, name: "Internet das Coisas", highlight: false },
    { icon: Film, name: "Mídia", highlight: false },
    { icon: Smartphone, name: "Mobile", highlight: false },
    { icon: Database, name: "Bancos de Dados", highlight: false },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            PRINCIPAIS SERVIÇOS DA <span className="text-gradient-gold">AWS</span>
          </h2>
          <div className="inline-block opacity-0 animate-fade-in-up delay-100">
            <span className="text-5xl md:text-6xl font-black text-gradient-magenta">200+</span>
            <p className="text-sm text-muted-foreground mt-1">Serviços completos</p>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {servicos.map((item, index) => (
            <div
              key={item.name}
              className={`pillar-card text-center py-5 opacity-0 animate-scale-in ${item.highlight ? "border-2 border-nuage-cyan shadow-lg shadow-nuage-cyan/20 scale-105" : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.06}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${item.highlight ? "bg-nuage-cyan/20" : "bg-primary/10"}`}>
                <item.icon className={`w-6 h-6 ${item.highlight ? "text-nuage-cyan" : "text-primary"}`} />
              </div>
              <h3 className={`font-bold text-sm ${item.highlight ? "text-nuage-cyan" : ""}`}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideServicosAWS;
