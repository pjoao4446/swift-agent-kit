import { Search, Settings, Plug, ChevronRight, Sparkles, Check } from "lucide-react";

const SlideBedrockEscolha = () => {
  const steps = [
    {
      icon: Search,
      title: "Escolha",
      description: "Selecione o modelo ideal para seu caso de uso",
      color: "bg-nuage-cyan",
      glowColor: "shadow-nuage-cyan/40",
      items: ["Claude", "Llama", "Mistral", "+200 modelos"],
    },
    {
      icon: Settings,
      title: "Customize",
      description: "Ajuste com seus dados e parâmetros específicos",
      color: "bg-nuage-gold",
      glowColor: "shadow-nuage-gold/40",
      items: ["Fine-tuning", "RAG", "Prompts"],
    },
    {
      icon: Plug,
      title: "Integre",
      description: "Conecte às suas aplicações via APIs",
      color: "bg-primary",
      glowColor: "shadow-primary/40",
      items: ["REST API", "SDKs", "Agents"],
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="opacity-0 animate-scale-in relative"
                  style={{ animationDelay: `${0.25 + index * 0.15}s` }}
                >
                  <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden h-full min-h-[320px] flex flex-col">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${step.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Número do passo */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-sm font-bold text-muted-foreground">
                      {index + 1}
                    </div>

                    {/* Ícone principal */}
                    <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg ${step.glowColor} group-hover:shadow-xl transition-shadow`}>
                      <step.icon className="w-10 h-10 text-background" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">{step.description}</p>

                    {/* Items list */}
                    <div className="space-y-2 flex-1">
                      {step.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Check className={`w-4 h-4 ${index === 0 ? 'text-nuage-cyan' : index === 1 ? 'text-nuage-gold' : 'text-primary'}`} />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seta entre cards - FORA do card para sobrepor */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-30">
                      <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur flex items-center justify-center border-2 border-primary shadow-lg shadow-primary/30">
                        <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 opacity-0 animate-fade-in-up delay-700">
            <div className="inline-flex items-center gap-3 card-glass px-8 py-4 rounded-2xl">
              <Sparkles className="w-6 h-6 text-nuage-gold" />
              <p className="text-lg">
                De <span className="text-primary font-bold">ideia</span> a <span className="text-gradient-gold font-bold">produção</span> em tempo recorde
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockEscolha;
