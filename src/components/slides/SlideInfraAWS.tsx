import NuageLogo from "./NuageLogo";
import { DollarSign, Timer, ShieldCheck, Server, Heart } from "lucide-react";

const SlideInfraAWS = () => {
  const fatores = [
    { icon: DollarSign, title: "Preços", color: "text-nuage-gold", bg: "bg-nuage-gold/10", description: "Os preços variam de região para região devido à economia local, custos de equipamentos, alfândega e imóveis. A AWS cobra com base nos fatores financeiros específicos de cada região." },
    { icon: Timer, title: "Latência", color: "text-nuage-cyan", bg: "bg-nuage-cyan/10", description: "Para aplicações sensíveis à latência, escolha uma Região próxima à sua base de usuários. Aplicações síncronas como jogos, telefonia e IoT são significativamente afetadas pela alta latência." },
    { icon: ShieldCheck, title: "Conformidade de Dados", color: "text-primary", bg: "bg-primary/10", description: "Empresas corporativas precisam cumprir regulamentações que exigem que os dados sejam armazenados em um território geográfico específico." },
    { icon: Server, title: "Disponibilidade dos Serviços", color: "text-nuage-gold", bg: "bg-nuage-gold/10", description: "Alguns serviços podem não estar disponíveis em algumas regiões. A documentação da AWS fornece uma tabela com os serviços disponíveis em cada região." },
    { icon: Heart, title: "Manter a Resiliência", color: "text-nuage-cyan", bg: "bg-nuage-cyan/10", description: "Use serviços gerenciados com escopo da região. Replique workloads em múltiplas AZs. No mínimo, use duas AZs para garantir alta disponibilidade." },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            INFRAESTRUTURA <span className="text-gradient-magenta">AWS</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-100">
            A AWS tem a mais extensa infraestrutura de nuvem global. O modelo de região e zona de disponibilidade foi reconhecido pela Gartner como a abordagem recomendada para aplicações empresariais de alta disponibilidade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-3">
          {fatores.map((item, index) => (
            <div
              key={item.title}
              className="pillar-card py-5 px-4 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideInfraAWS;
