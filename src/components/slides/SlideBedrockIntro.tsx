import { Layers, Shield, Zap, Settings, Brain, Database, Code, Lock, Cloud, Sparkles } from "lucide-react";

const SlideBedrockIntro = () => {
  const features = [
    { icon: Layers, title: "Múltiplos Modelos", description: "Acesso a diversos modelos fundacionais em um só lugar" },
    { icon: Shield, title: "Segurança Enterprise", description: "Dados privados e protegidos com compliance" },
    { icon: Zap, title: "Serverless", description: "Sem infraestrutura para gerenciar" },
    { icon: Settings, title: "Customizável", description: "Fine-tuning com seus dados" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Amazon Bedrock
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Amazon <span className="text-gradient-magenta">Bedrock</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-nuage-gold via-primary to-nuage-cyan flex items-center justify-center animate-pulse-glow">
                  <Layers className="w-16 h-16 text-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-nuage-cyan/20 flex items-center justify-center border border-nuage-cyan/30">
                  <Database className="w-6 h-6 text-nuage-cyan" />
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-10 h-10 rounded-lg bg-nuage-gold/20 flex items-center justify-center border border-nuage-gold/30">
                  <Code className="w-5 h-5 text-nuage-gold" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-2xl font-medium mb-4">
                O <span className="text-gradient-gold font-bold">hub centralizado</span> para acessar, personalizar e implantar modelos de IA
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Privado
                </span>
                <span className="px-3 py-1 rounded-full bg-nuage-cyan/20 text-nuage-cyan text-sm font-medium flex items-center gap-2">
                  <Cloud className="w-4 h-4" /> Escalável
                </span>
                <span className="px-3 py-1 rounded-full bg-nuage-gold/20 text-nuage-gold text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Flexível
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="pillar-card text-center opacity-0 animate-scale-in group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${0.35 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockIntro;
