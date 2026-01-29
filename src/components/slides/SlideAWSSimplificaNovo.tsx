import NuageLogo from "./NuageLogo";
import { MessageSquare, Layers, Server, Cpu } from "lucide-react";

const SlideAWSSimplificaNovo = () => {
  const layers = [
    {
      title: "APLICAÇÕES PARA AUMENTAR PRODUTIVIDADE",
      services: "Amazon Q Business, Developer, For Quicksight, For Amazon Connect",
      subtitle: "INSIGHT E AUTOMAÇÃO",
      color: "bg-nuage-cyan",
      icon: MessageSquare,
    },
    {
      title: "MODELOS E FERRAMENTAS PARA APPS DE GEN AI",
      services: "Amazon Bedrock",
      subtitle: "AMAZON MODELS | MODELOS DE PARCEIROS",
      color: "bg-nuage-gold",
      icon: Layers,
    },
    {
      title: "INFRAESTRUTURA PARA CONSTRUIR/TREINAR MODELOS DE IA",
      services: "Amazon SageMaker AI, AWS Trainium, AWS Inferentia, GPUs",
      subtitle: "HIGH PERFORMANCE COMPUTE",
      color: "bg-primary",
      icon: Server,
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-gradient-gold">AWS</span> SIMPLIFICA
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            <span className="bg-nuage-cyan px-2 py-1 rounded text-background font-medium">Como conectar</span> o poder dos FMs aos <span className="bg-nuage-gold/20 px-2 py-1 rounded text-nuage-gold font-medium">meus dados</span> de forma segura, privada e eficaz?
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="card-glass p-8 rounded-3xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              {/* Stack visual */}
              <div className="hidden md:flex flex-col justify-center gap-2">
                <div className="h-20 bg-nuage-cyan/30 rounded-lg border-2 border-nuage-cyan/50 opacity-0 animate-fade-in-up delay-200" />
                <div className="h-20 bg-nuage-gold/30 rounded-lg border-2 border-nuage-gold/50 opacity-0 animate-fade-in-up delay-300" />
                <div className="h-20 bg-primary/30 rounded-lg border-2 border-primary/50 opacity-0 animate-fade-in-up delay-400" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                {layers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="flex items-start gap-4 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                  >
                    <div className={`w-10 h-10 rounded-lg ${layer.color} flex items-center justify-center flex-shrink-0`}>
                      <layer.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold uppercase tracking-wide ${
                        index === 0 ? 'text-nuage-cyan' : index === 1 ? 'text-nuage-gold' : 'text-primary'
                      }`}>
                        {layer.title}
                      </h3>
                      <p className="text-foreground font-medium mt-1">{layer.services}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{layer.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAWSSimplificaNovo;
