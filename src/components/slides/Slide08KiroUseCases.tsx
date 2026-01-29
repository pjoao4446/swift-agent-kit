import NuageLogo from "./NuageLogo";
import { AppWindow, Server, Terminal } from "lucide-react";

const Slide08KiroUseCases = () => {
  const useCases = [
    {
      icon: AppWindow,
      title: "Dev de Apps",
      description: "Geração de aplicações full-stack a partir de specs",
      features: ["React/Next.js", "APIs RESTful", "Banco de dados", "Autenticação"],
      color: "from-primary to-primary/60",
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Automação de infraestrutura e pipelines CI/CD",
      features: ["Terraform", "CloudFormation", "Docker", "Kubernetes"],
      color: "from-nuage-cyan to-nuage-cyan/60",
    },
    {
      icon: Terminal,
      title: "CLI & Scripts",
      description: "Ferramentas de linha de comando e automação",
      features: ["Python", "Bash", "Node.js", "AWS SDK"],
      color: "from-nuage-gold to-nuage-gold/60",
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Casos de <span className="text-gradient-magenta">Uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Do protótipo à produção com velocidade sem precedentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="pillar-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide08KiroUseCases;
