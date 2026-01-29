import NuageLogo from "./NuageLogo";
import { MessageSquare, Layers, Server, Sparkles, Brain, Cpu, Zap, Cloud, Database, Settings } from "lucide-react";

const SlideAWSSimplificaNovo = () => {
  const layers = [
    {
      title: "APLICAÇÕES PARA AUMENTAR PRODUTIVIDADE",
      services: "Amazon Q, Amazon Quick Suite, Amazon Kiro",
      subtitle: "INSIGHT E AUTOMAÇÃO",
      color: "from-nuage-cyan to-nuage-cyan/60",
      bgColor: "bg-nuage-cyan",
      borderColor: "border-nuage-cyan",
      textColor: "text-nuage-cyan",
      icon: MessageSquare,
      secondaryIcons: [Sparkles, Brain],
    },
    {
      title: "MODELOS E FERRAMENTAS PARA APPS DE GEN AI",
      services: "Amazon Bedrock",
      subtitle: "AMAZON MODELS | MODELOS DE PARCEIROS",
      color: "from-nuage-gold to-nuage-gold/60",
      bgColor: "bg-nuage-gold",
      borderColor: "border-nuage-gold",
      textColor: "text-nuage-gold",
      icon: Layers,
      secondaryIcons: [Settings, Database],
    },
    {
      title: "INFRAESTRUTURA PARA CONSTRUIR/TREINAR MODELOS DE IA",
      services: "Amazon SageMaker AI, AWS Trainium, AWS Inferentia, GPUs",
      subtitle: "HIGH PERFORMANCE COMPUTE",
      color: "from-primary to-primary/60",
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
      icon: Server,
      secondaryIcons: [Cpu, Cloud],
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-gradient-gold">AWS</span> SIMPLIFICA
          </h2>
          <p className="text-xl text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            <span className="bg-nuage-cyan px-3 py-1 rounded-lg text-background font-medium">Como conectar</span> o poder dos FMs aos <span className="bg-nuage-gold/20 px-3 py-1 rounded-lg text-nuage-gold font-medium">meus dados</span> de forma segura, privada e eficaz?
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className={`card-glass p-6 rounded-2xl border-l-4 ${layer.borderColor} hover:bg-background/40 transition-all duration-300`}>
                  <div className="flex items-center gap-6">
                    {/* Ícone principal grande */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <layer.icon className="w-10 h-10 text-background" />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold uppercase tracking-wide ${layer.textColor} mb-1`}>
                        {layer.title}
                      </h3>
                      <p className="text-xl text-foreground font-semibold">{layer.services}</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{layer.subtitle}</p>
                    </div>

                    {/* Ícones secundários */}
                    <div className="hidden md:flex gap-3">
                      {layer.secondaryIcons.map((Icon, i) => (
                        <div key={i} className={`w-12 h-12 rounded-xl ${layer.bgColor}/20 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${layer.textColor}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicador visual de stack */}
          <div className="flex justify-center mt-8 opacity-0 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-nuage-gold" />
              <span className="text-muted-foreground">Stack completa para IA Generativa na AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAWSSimplificaNovo;
