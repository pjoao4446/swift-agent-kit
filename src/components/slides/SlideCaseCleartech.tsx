import NuageLogo from "./NuageLogo";
import { Shield, Database, Server, CheckCircle2 } from "lucide-react";

const SlideCaseCleartech = () => {
  const stats = [
    { icon: Database, value: "+60BI", label: "Registros processados" },
    { icon: Shield, value: "Certificação", label: "StirShaken compliance" },
    { icon: Server, value: "99.99%", label: "Disponibilidade" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-xs font-medium text-nuage-cyan mb-4 glow-cyan">
            Case de Sucesso
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-gradient-cyan">CLEARTECH</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Data Lake StirShaken
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-6 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-nuage-cyan flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Cleartech necessitava de uma solução robusta para processamento e certificação de chamadas seguindo 
                o protocolo <span className="text-foreground font-semibold">STIR/SHAKEN</span>. A implementação do Data Lake na AWS 
                permitiu processar bilhões de registros com alta disponibilidade e conformidade regulatória.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card-glass rounded-xl p-6 text-center opacity-0 animate-fade-in-up glow-cyan"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <stat.icon className="w-8 h-8 text-nuage-cyan mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-gradient-cyan mb-2">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideCaseCleartech;
