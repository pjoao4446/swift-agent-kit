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
