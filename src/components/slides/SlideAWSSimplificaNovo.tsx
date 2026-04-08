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

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Stack AWS para IA
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Como a AWS <span className="text-gradient-magenta">Simplifica</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className={`card-glass p-5 rounded-2xl border-l-4 ${layer.borderColor} hover:scale-[1.02] transition-transform duration-300`}>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-7 h-7 text-foreground" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-lg font-bold uppercase tracking-wide ${layer.textColor} mb-1`}>
                      {layer.title}
                    </h3>
                    <p className="text-xl text-foreground font-semibold">{layer.services}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{layer.subtitle}</p>
                  </div>

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

        <div className="flex justify-center mt-8 opacity-0 animate-fade-in-up delay-500">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-nuage-gold" />
            <span className="text-muted-foreground">Stack completa para IA Generativa na AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAWSSimplificaNovo;
