import NuageLogo from "./NuageLogo";
import { Brain, Mic, Eye, ScanFace, Smartphone } from "lucide-react";

const SlideDeepLearning = () => {
  const capabilities = [
    { icon: Mic, text: "Reconhecimento de fala" },
    { icon: Eye, text: "Visão computacional" },
    { icon: ScanFace, text: "Análise de imagens em larga escala" },
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
            Evolução da IA • Fase 3
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Deep <span className="text-gradient-magenta">Learning</span>
          </h2>
          <p className="text-2xl text-nuage-cyan font-semibold opacity-0 animate-fade-in-up delay-150">
            Inteligência Baseada em Redes Neurais: Simulando o Cérebro Humano
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-glass p-8 rounded-3xl mb-10 opacity-0 animate-fade-in-up delay-200">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center flex-shrink-0">
                <Brain className="w-10 h-10 text-foreground" />
              </div>
              <p className="text-xl text-muted-foreground">
                <span className="text-primary font-bold">Redes neurais artificiais</span> aprendem padrões 
                <span className="text-gradient-gold font-semibold"> extremamente complexos</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {capabilities.map((cap, index) => (
              <div
                key={cap.text}
                className="pillar-card text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-nuage-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-8 h-8 text-nuage-cyan" />
                </div>
                <p className="font-semibold">{cap.text}</p>
              </div>
            ))}
          </div>

          <div className="card-glass p-8 rounded-3xl opacity-0 animate-fade-in-up delay-500">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-nuage-gold/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-10 h-10 text-nuage-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nuage-gold mb-2">Exemplo do Dia a Dia</h4>
                <p className="text-xl text-muted-foreground">
                  Seu smartphone <span className="text-primary font-semibold">reconhecendo seu rosto</span> para desbloquear
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDeepLearning;
