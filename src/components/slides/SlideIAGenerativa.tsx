import NuageLogo from "./NuageLogo";
import { Sparkles, Zap, Search, Users, Lightbulb } from "lucide-react";

const SlideIAGenerativa = () => {
  const benefits = [
    { icon: Zap, title: "Produtividade Radical", color: "text-primary" },
    { icon: Search, title: "Extração de Insights", color: "text-nuage-cyan" },
    { icon: Users, title: "Novas Experiências de Cliente", color: "text-nuage-gold" },
    { icon: Lightbulb, title: "Aceleração da Criatividade e Inovação", color: "text-primary" },
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
            Evolução da IA • Fase 4
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            IA <span className="text-gradient-magenta">Generativa</span>
          </h2>
          <p className="text-2xl text-nuage-cyan font-semibold opacity-0 animate-fade-in-up delay-150">
            A Revolução Atual: A IA que Cria
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-glass p-8 rounded-3xl mb-10 opacity-0 animate-fade-in-up delay-200">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-nuage-cyan to-nuage-gold flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                <Sparkles className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <p className="text-xl text-muted-foreground">
                  Foco na <span className="text-primary font-bold">criação de conteúdo novo e original</span>
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  <span className="text-nuage-cyan font-semibold">Texto</span>, 
                  <span className="text-nuage-gold font-semibold"> imagens</span>, 
                  <span className="text-primary font-semibold"> código</span> — em vez de apenas analisar, classificar ou processar dados existentes.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8 opacity-0 animate-fade-in-up delay-250">
            Grandes <span className="text-gradient-gold">Benefícios</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="pillar-card text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <p className="font-semibold text-sm">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIAGenerativa;
