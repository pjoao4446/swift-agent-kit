import NuageLogo from "./NuageLogo";
import { Eye, Workflow, Bot, Search, FlaskConical, BarChart3, Zap, Shield } from "lucide-react";
import quickSuiteIcon from "@/assets/aws-icons/quicksuite.png";

const SlideQuickSuiteProduct = () => {
  const capabilities = [
    {
      icon: Eye,
      name: "QuickSight",
      description: "Dashboards interativos com IA generativa para perguntas em linguagem natural",
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
    {
      icon: Workflow,
      name: "Flows",
      description: "Criação de workflows automatizados sem necessidade de código",
      color: "text-nuage-cyan",
      bgColor: "bg-nuage-cyan/15",
    },
    {
      icon: Bot,
      name: "Automate",
      description: "Automação inteligente de tarefas repetitivas com agentes de IA",
      color: "text-nuage-gold",
      bgColor: "bg-nuage-gold/15",
    },
    {
      icon: Search,
      name: "Index",
      description: "Busca semântica e indexação inteligente em dados empresariais",
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
    {
      icon: FlaskConical,
      name: "Research",
      description: "Pesquisa e geração de insights automatizados a partir dos seus dados",
      color: "text-nuage-cyan",
      bgColor: "bg-nuage-cyan/15",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4 opacity-0 animate-fade-in-up">
            <img src={quickSuiteIcon} alt="Quick Suite" className="w-14 h-14 object-contain" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Amazon Quick <span className="text-gradient-magenta">Suite</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Plataforma unificada de BI e automação no-code, powered by <span className="text-primary font-semibold">Amazon Q</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left - O que é */}
          <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">O que é?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O Amazon Quick Suite é uma suíte completa de ferramentas de <strong className="text-foreground">Business Intelligence e automação</strong> que 
                permite a qualquer pessoa — técnica ou não — criar dashboards, automatizar processos e extrair insights dos dados 
                usando <strong className="text-foreground">linguagem natural e IA generativa</strong>.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Principais Benefícios</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">BI Acessível:</strong> Qualquer pessoa faz perguntas aos dados em linguagem natural</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-nuage-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Automação No-Code:</strong> Crie workflows complexos sem escrever uma linha de código</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-nuage-cyan flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Integração Nativa:</strong> Conecta com S3, Redshift, Athena, Salesforce, Jira e mais de 14 serviços</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - 5 Capabilities */}
          <div className="space-y-3 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
            <h3 className="text-xl font-bold mb-2">5 Capacidades Integradas</h3>
            {capabilities.map((cap, index) => (
              <div
                key={cap.name}
                className="card-glass rounded-xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className={`w-12 h-12 rounded-xl ${cap.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <cap.icon className={`w-6 h-6 ${cap.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{cap.name}</h4>
                  <p className="text-xs text-muted-foreground">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideQuickSuiteProduct;
