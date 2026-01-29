import NuageLogo from "./NuageLogo";
import { Play, Database, KeyRound, Eye, Wrench, Shield, Settings } from "lucide-react";

const Slide16SevenPillars = () => {
  const pillars = [
    { icon: Play, name: "Runtime", description: "Execução isolada e escalável" },
    { icon: Database, name: "Memory", description: "Persistência de contexto" },
    { icon: KeyRound, name: "Identity", description: "Autenticação e autorização" },
    { icon: Eye, name: "Observability", description: "Logs, métricas e traces" },
    { icon: Wrench, name: "Tools", description: "Integração com APIs externas" },
    { icon: Shield, name: "Guardrails", description: "Limites e políticas de segurança" },
    { icon: Settings, name: "Orchestration", description: "Coordenação multi-agente" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Os 7 <span className="text-gradient-magenta">Pilares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Arquitetura completa para agentes de produção
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.name}
                className="pillar-card text-center py-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center mx-auto mb-3">
                  <pillar.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-bold text-sm mb-1">{pillar.name}</h3>
                <p className="text-xs text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pillar-card p-8 text-center opacity-0 animate-fade-in-up delay-700">
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div>
                <p className="text-3xl font-black text-gradient-magenta">100%</p>
                <p className="text-sm text-muted-foreground">Serverless</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-black text-gradient-gold">Pay-per-use</p>
                <p className="text-sm text-muted-foreground">Sem custos fixos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-black text-nuage-cyan">Zero Ops</p>
                <p className="text-sm text-muted-foreground">Gerenciado pela AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide16SevenPillars;
