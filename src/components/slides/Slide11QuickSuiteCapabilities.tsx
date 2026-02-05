import NuageLogo from "./NuageLogo";
import { Eye, Workflow, Bot, Search, FlaskConical } from "lucide-react";
import quickSuiteIcon from "@/assets/aws-icons/quicksuite.png";

const Slide11QuickSuiteCapabilities = () => {
  const capabilities = [
    {
      icon: Eye,
      name: "QuickSight",
      description: "Dashboards e visualizações de BI com IA generativa",
      color: "bg-primary",
    },
    {
      icon: Workflow,
      name: "Flows",
      description: "Workflows automatizados sem código",
      color: "bg-nuage-cyan",
    },
    {
      icon: Bot,
      name: "Automate",
      description: "Automação de tarefas com agentes de IA",
      color: "bg-nuage-gold",
    },
    {
      icon: Search,
      name: "Index",
      description: "Busca inteligente em dados empresariais",
      color: "bg-primary",
    },
    {
      icon: FlaskConical,
      name: "Research",
      description: "Análise e insights automatizados",
      color: "bg-nuage-cyan",
      useQuickSuiteIcon: true,
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
            Quick <span className="text-gradient-magenta">Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            5 capacidades integradas para BI e automação
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.name}
                className="pillar-card w-48 text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${cap.color} flex items-center justify-center mx-auto mb-4`}>
                  <cap.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cap.name}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-700">
            <div className="inline-flex items-center gap-4 pillar-card px-8 py-4">
              <img src={quickSuiteIcon} alt="Quick Suite" className="w-10 h-10 object-contain" />
              <p className="text-lg">
                Todas integradas via <span className="text-gradient-gold font-bold">Amazon Q</span> para uma experiência unificada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide11QuickSuiteCapabilities;
