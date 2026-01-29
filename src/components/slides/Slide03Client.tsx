import NuageLogo from "./NuageLogo";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const Slide03Client = () => {
  const metrics = [
    { icon: Users, value: "500+", label: "Usuários Ativos" },
    { icon: TrendingUp, value: "40%", label: "Aumento Produtividade" },
    { icon: Building2, value: "15", label: "Unidades Integradas" },
    { icon: Award, value: "99.9%", label: "Uptime Garantido" },
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
            Case de Referência
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient-magenta">360 Suites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Transformação digital completa com infraestrutura AWS
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left: Description */}
          <div className="space-y-6 opacity-0 animate-slide-in-left delay-300">
            <div className="pillar-card">
              <h3 className="text-xl font-bold mb-4 text-nuage-cyan">O Desafio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empresa de hotelaria com múltiplas unidades enfrentando dificuldades de integração, 
                gestão de dados fragmentados e processos manuais ineficientes.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="text-xl font-bold mb-4 text-primary">A Solução</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementação de arquitetura serverless com Amazon Lambda, API Gateway, 
                e DynamoDB. Integração com serviços de IA para automação de processos.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="text-xl font-bold mb-4 text-nuage-gold">O Resultado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Redução de 60% nos custos operacionais, tempo de resposta 10x mais rápido,
                e visibilidade total das operações em tempo real.
              </p>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="grid grid-cols-2 gap-6 opacity-0 animate-slide-in-right delay-400">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="pillar-card text-center"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-black text-gradient-magenta mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03Client;
