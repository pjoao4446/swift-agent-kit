import NuageLogo from "./NuageLogo";
import { Blocks, Shield, Zap, Lock } from "lucide-react";

const Slide14QuickSuiteDifferentials = () => {
  const differentials = [
    {
      icon: Blocks,
      title: "No-Code First",
      description: "Interfaces visuais para criação de dashboards, workflows e automações sem escrever código.",
      highlight: "Qualquer usuário pode criar",
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "SSO, RBAC, auditoria completa, conformidade com SOC 2, HIPAA, e GDPR.",
      highlight: "Certificações de mercado",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "SPICE engine para queries ultra-rápidas em datasets de bilhões de linhas.",
      highlight: "Resposta em milissegundos",
    },
    {
      icon: Lock,
      title: "Data Governance",
      description: "Catalogação automática, linhagem de dados, e políticas de acesso centralizadas.",
      highlight: "Controle total",
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
            <span className="text-gradient-magenta">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Por que escolher Quick Suite para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className="pillar-card group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <diff.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{diff.title}</h3>
                  <p className="text-muted-foreground mb-3">{diff.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {diff.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide14QuickSuiteDifferentials;
