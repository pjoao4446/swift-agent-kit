import NuageLogo from "./NuageLogo";
import { Search, Settings, Plug, ArrowRight } from "lucide-react";

const SlideBedrockEscolha = () => {
  const steps = [
    {
      icon: Search,
      title: "Escolha",
      description: "Selecione o modelo ideal para seu caso de uso",
      color: "bg-nuage-cyan",
    },
    {
      icon: Settings,
      title: "Customize",
      description: "Ajuste com seus dados e parâmetros específicos",
      color: "bg-nuage-gold",
    },
    {
      icon: Plug,
      title: "Integre",
      description: "Conecte às suas aplicações via APIs",
      color: "bg-primary",
    },
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
            Amazon Bedrock
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient-magenta">Escolha</span>, Customize, <span className="text-gradient-gold">Integre</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Fluxo simplificado para colocar IA Generativa em produção
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-4 md:gap-8">
                <div
                  className="pillar-card text-center w-64 opacity-0 animate-scale-in"
                  style={{ animationDelay: `${0.25 + index * 0.15}s` }}
                >
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block opacity-0 animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-700">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                De <span className="text-primary font-bold">ideia</span> a <span className="text-gradient-gold font-bold">produção</span> em tempo recorde
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockEscolha;
