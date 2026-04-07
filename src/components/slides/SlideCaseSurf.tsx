import NuageLogo from "./NuageLogo";
import { TrendingDown, Clock, DollarSign, Database } from "lucide-react";

const SlideCaseSurf = () => {
  const stats = [
    { icon: TrendingDown, value: "96%", label: "Redução no tempo de processamento" },
    { icon: Clock, value: "0.2s", label: "Latência de consulta" },
    { icon: DollarSign, value: "40%", label: "Redução de custos" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-xs font-medium text-primary mb-4 glow-magenta">
            Case de Sucesso
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-gradient-magenta">SURF TELECOM</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Data Lake CDR
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-6 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Surf Telecom é uma operadora de telecomunicações que precisava processar e analisar grandes volumes 
                de registros de chamadas (CDR). Com a implementação do <span className="text-foreground font-semibold">Data Lake na AWS</span>, 
                foi possível centralizar todos os dados e obter insights em tempo real.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card-glass rounded-xl p-6 text-center opacity-0 animate-fade-in-up glow-magenta"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-gradient-magenta mb-2">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideCaseSurf;
