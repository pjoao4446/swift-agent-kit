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
