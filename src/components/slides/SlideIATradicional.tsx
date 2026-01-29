import NuageLogo from "./NuageLogo";
import { GitBranch, AlertTriangle, Settings, RefreshCw } from "lucide-react";

const SlideIATradicional = () => {
  const characteristics = [
    { icon: Settings, text: "Poderoso em contextos específicos", positive: true },
    { icon: AlertTriangle, text: "Frágil e inflexível", positive: false },
    { icon: GitBranch, text: "Não lida com exceções", positive: false },
    { icon: RefreshCw, text: "Requer manutenção constante", positive: false },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Evolução da IA • Fase 1
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            IA <span className="text-gradient-magenta">Tradicional</span>
          </h2>
          <p className="text-2xl text-nuage-cyan font-semibold opacity-0 animate-fade-in-up delay-150">
            Inteligência Baseada em Regras: A Primeira Onda
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-glass p-8 rounded-3xl mb-10 opacity-0 animate-fade-in-up delay-200">
            <div className="text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Baseada em <span className="text-primary font-bold">programação explícita</span>
              </p>
              <div className="inline-block bg-background/50 px-8 py-4 rounded-2xl border border-primary/30">
                <code className="text-2xl md:text-3xl font-mono">
                  <span className="text-nuage-cyan">SE</span> (condição X) <span className="text-nuage-gold">ENTÃO</span> (ação Y)
                </code>
              </div>
              <p className="text-lg text-muted-foreground mt-6">
                O conhecimento é <span className="text-gradient-gold font-semibold">codificado manualmente</span> por especialistas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up delay-300">
            {characteristics.map((item, index) => (
              <div
                key={item.text}
                className={`pillar-card text-center ${item.positive ? 'border-nuage-cyan/30' : 'border-primary/30'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.positive ? 'text-nuage-cyan' : 'text-primary'}`} />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIATradicional;
