import NuageLogo from "./NuageLogo";
import { MessageSquare, Database, Bot, Shield, Wrench, FileText, Sliders, Brain } from "lucide-react";

const SlideBedrockCustomizacao = () => {
  const levels = [
    {
      icon: MessageSquare,
      title: "Engenharia de Prompt",
      description: "Técnicas para otimizar interações com o modelo",
      color: "bg-nuage-cyan",
    },
    {
      icon: Database,
      title: "RAG",
      description: "Retrieval-Augmented Generation com seus dados",
      color: "bg-nuage-gold",
    },
    {
      icon: Bot,
      title: "Agentes do Bedrock",
      description: "Automação de tarefas complexas com múltiplas etapas",
      color: "bg-primary",
    },
    {
      icon: Shield,
      title: "Guardrails",
      description: "Controle de segurança e compliance das respostas",
      color: "bg-nuage-cyan",
    },
    {
      icon: Sliders,
      title: "Fine-tuning",
      description: "Ajuste fino do modelo com seus dados específicos",
      color: "bg-nuage-gold",
    },
    {
      icon: FileText,
      title: "Knowledge Bases",
      description: "Bases de conhecimento integradas para consulta",
      color: "bg-primary",
    },
    {
      icon: Wrench,
      title: "Function Calling",
      description: "Integração com APIs e ferramentas externas",
      color: "bg-nuage-cyan",
    },
    {
      icon: Brain,
      title: "Model Evaluation",
      description: "Avaliação e comparação de modelos para seu caso",
      color: "bg-nuage-gold",
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Níveis de <span className="text-gradient-magenta">Customização</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Do básico ao avançado, adapte a IA às suas necessidades
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {levels.map((level, index) => (
              <div
                key={level.title}
                className="pillar-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + index * 0.06}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${level.color} flex items-center justify-center flex-shrink-0`}>
                    <level.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-1">{level.title}</h3>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 opacity-0 animate-fade-in-up delay-600">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                Comece simples e evolua conforme sua <span className="text-gradient-gold font-bold">maturidade em IA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockCustomizacao;
