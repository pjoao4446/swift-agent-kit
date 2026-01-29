import NuageLogo from "./NuageLogo";
import { MessageSquare, Database, Bot, Shield } from "lucide-react";

const SlideBedrockCustomizacao = () => {
  const levels = [
    {
      icon: MessageSquare,
      title: "Engenharia de Prompt",
      description: "Técnicas para otimizar interações com o modelo",
      difficulty: "Básico",
      color: "bg-nuage-cyan",
    },
    {
      icon: Database,
      title: "RAG",
      description: "Retrieval-Augmented Generation com seus dados",
      difficulty: "Intermediário",
      color: "bg-nuage-gold",
    },
    {
      icon: Bot,
      title: "Agentes do Bedrock",
      description: "Automação de tarefas complexas com múltiplas etapas",
      difficulty: "Avançado",
      color: "bg-primary",
    },
    {
      icon: Shield,
      title: "Guardrails",
      description: "Controle de segurança e compliance das respostas",
      difficulty: "Enterprise",
      color: "bg-nuage-cyan",
    },
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
            Níveis de <span className="text-gradient-magenta">Customização</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Do básico ao avançado, adapte a IA às suas necessidades
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {levels.map((level, index) => (
              <div
                key={level.title}
                className="pillar-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.25 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 rounded-2xl ${level.color} flex items-center justify-center flex-shrink-0`}>
                    <level.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{level.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-background/50 text-muted-foreground">
                        {level.difficulty}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 opacity-0 animate-fade-in-up delay-600">
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
