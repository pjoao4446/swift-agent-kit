import { MessageSquare, Database, Bot, Shield, Wrench, FileText, Sliders, Brain } from "lucide-react";

const SlideBedrockCustomizacao = () => {
  const levels = [
    { icon: MessageSquare, title: "Engenharia de Prompt", description: "Técnicas para otimizar interações com o modelo", color: "bg-nuage-cyan" },
    { icon: Database, title: "RAG", description: "Retrieval-Augmented Generation com seus dados", color: "bg-nuage-gold" },
    { icon: Bot, title: "Agentes do Bedrock", description: "Automação de tarefas complexas com múltiplas etapas", color: "bg-primary" },
    { icon: Shield, title: "Guardrails", description: "Controle de segurança e compliance das respostas", color: "bg-nuage-cyan" },
    { icon: Sliders, title: "Fine-tuning", description: "Ajuste fino do modelo com seus dados específicos", color: "bg-nuage-gold" },
    { icon: FileText, title: "Knowledge Bases", description: "Bases de conhecimento integradas para consulta", color: "bg-primary" },
    { icon: Wrench, title: "Function Calling", description: "Integração com APIs e ferramentas externas", color: "bg-nuage-cyan" },
    { icon: Brain, title: "Model Evaluation", description: "Avaliação e comparação de modelos para seu caso", color: "bg-nuage-gold" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Níveis de <span className="text-gradient-magenta">Customização</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.title}
              className="pillar-card opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.15 + index * 0.08}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl ${level.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <level.icon className={`w-5 h-5 ${level.color === 'bg-nuage-cyan' ? 'text-nuage-cyan' : level.color === 'bg-nuage-gold' ? 'text-nuage-gold' : 'text-primary'}`} />
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
  );
};

export default SlideBedrockCustomizacao;
