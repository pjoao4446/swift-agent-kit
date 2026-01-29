import NuageLogo from "./NuageLogo";
import { Layers, Cpu, Server, Sparkles } from "lucide-react";

const Slide04AWSSimplifies = () => {
  const layers = [
    {
      icon: Sparkles,
      title: "Produtividade",
      subtitle: "Camada de Aplicação",
      items: ["Amazon Q", "CodeWhisperer", "QuickSight Q"],
      color: "from-primary to-primary/60",
      delay: "delay-300",
    },
    {
      icon: Cpu,
      title: "Modelos de IA",
      subtitle: "Foundation Models",
      items: ["Amazon Bedrock", "SageMaker", "Titan"],
      color: "from-nuage-cyan to-nuage-cyan/60",
      delay: "delay-400",
    },
    {
      icon: Server,
      title: "Infraestrutura",
      subtitle: "Compute & Storage",
      items: ["EC2 Inf2", "Trainium", "S3"],
      color: "from-nuage-gold to-nuage-gold/60",
      delay: "delay-500",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 2 • Ecossistema AWS AI
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            AWS <span className="text-gradient-magenta">Simplifica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Três camadas de IA para qualquer necessidade de negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-nuage-cyan to-nuage-gold opacity-30 hidden lg:block" />
            
            <div className="space-y-8">
              {layers.map((layer, index) => (
                <div
                  key={layer.title}
                  className={`relative opacity-0 animate-fade-in-up ${layer.delay}`}
                >
                  <div className="pillar-card flex flex-col lg:flex-row items-center gap-8 p-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                      <layer.icon className="w-10 h-10 text-foreground" />
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <p className="text-sm text-muted-foreground mb-1">{layer.subtitle}</p>
                      <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-6xl font-black text-muted/30">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide04AWSSimplifies;
