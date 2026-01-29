import NuageLogo from "./NuageLogo";
import { Database, Settings, Layers, Target } from "lucide-react";

const SlideModelosFundacionais = () => {
  const features = [
    {
      icon: Database,
      title: "Pré-treinados",
      description: "Em vastos montantes de dados não estruturados",
      color: "from-primary to-primary/60",
    },
    {
      icon: Layers,
      title: "Parâmetros Complexos",
      description: "Grande número de parâmetros capazes de aprender conceitos complexos",
      color: "from-nuage-cyan to-nuage-cyan/60",
    },
    {
      icon: Settings,
      title: "Versatilidade",
      description: "Podem ser aplicados em uma ampla variedade de contextos",
      color: "from-nuage-gold to-nuage-gold/60",
    },
    {
      icon: Target,
      title: "Customizáveis",
      description: "Podem ser customizados usando seus dados para tarefas de domínios específicos",
      color: "from-primary to-nuage-cyan",
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
            IA Generativa
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Modelos <span className="text-gradient-magenta">Fundacionais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
            IA Generativa construída por modelos fundacionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="pillar-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 opacity-0 animate-fade-in-up delay-600">
          <div className="inline-block card-glass px-8 py-4 rounded-2xl">
            <p className="text-lg">
              A base para <span className="text-gradient-gold font-bold">aplicações de IA de próxima geração</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModelosFundacionais;
