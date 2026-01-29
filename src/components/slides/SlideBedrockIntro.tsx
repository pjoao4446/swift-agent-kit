import NuageLogo from "./NuageLogo";
import { Layers, Shield, Zap, Settings } from "lucide-react";

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
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Amazon Bedrock
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Amazon <span className="text-gradient-magenta">Bedrock</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
            A plataforma da AWS para construir aplicações de IA Generativa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-glass p-10 rounded-3xl mb-10 opacity-0 animate-fade-in-up delay-250">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-nuage-gold via-primary to-nuage-cyan flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Layers className="w-12 h-12 text-foreground" />
              </div>
              <p className="text-2xl font-medium">
                O <span className="text-gradient-gold font-bold">hub centralizado</span> para acessar, personalizar e implantar modelos de IA
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="pillar-card text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.35 + index * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockIntro;
