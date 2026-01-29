import NuageLogo from "./NuageLogo";
import { Building2 } from "lucide-react";

const Slide18UseCases = () => {
  const cases = [
    {
      company: "Cisco",
      description: "Automação de troubleshooting de rede com agentes que diagnosticam e resolvem problemas em tempo real.",
      result: "70% redução no tempo de resolução",
    },
    {
      company: "Genpact",
      description: "Processamento de documentos financeiros com agentes que extraem, validam e reconciliam dados automaticamente.",
      result: "90% automação de processos manuais",
    },
    {
      company: "PwC",
      description: "Assistentes de auditoria que analisam documentos, identificam riscos e geram relatórios de compliance.",
      result: "5x mais auditorias por analista",
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
            Módulo 5 • AgentCore
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Casos de <span className="text-gradient-magenta">Uso Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Empresas líderes já utilizam AgentCore em produção
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.company}
              className="pillar-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{caseItem.company}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{caseItem.description}</p>
              <div className="p-4 rounded-lg bg-nuage-gold/10 border border-nuage-gold/30">
                <p className="text-sm font-bold text-nuage-gold">{caseItem.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-600">
          <p className="text-muted-foreground">
            E muitas outras empresas <span className="text-primary font-bold">Fortune 500</span> em implementação
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide18UseCases;
