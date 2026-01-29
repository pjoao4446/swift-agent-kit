import NuageLogo from "./NuageLogo";
import { Rocket, Calendar, Users, MessageSquare } from "lucide-react";

const Slide19NextSteps = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Discovery Call",
      description: "Entendemos seus desafios e objetivos de negócio",
    },
    {
      icon: Users,
      step: "02",
      title: "Workshop Técnico",
      description: "Sessão hands-on com sua equipe para explorar as soluções",
    },
    {
      icon: Calendar,
      step: "03",
      title: "Proof of Concept",
      description: "Implementação piloto em ambiente controlado",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Go-Live",
      description: "Deploy em produção com suporte contínuo",
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
            Módulo 6 • Encerramento
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Próximos <span className="text-gradient-magenta">Passos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Como implementar com a NuageIT
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary to-transparent z-0" />
                )}
                <div className="pillar-card text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <span className="text-3xl font-black text-muted/30">{step.step}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-700">
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-magenta">
              Agendar Reunião
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide19NextSteps;
