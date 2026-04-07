import NuageLogo from "./NuageLogo";
import { Database, Warehouse, CheckCircle2 } from "lucide-react";

const SlideJornadaInicio = () => {
  const steps = [
    "Avaliação do estado atual dos dados",
    "Processos, definindo objetivos",
    "Jornada clara",
    "A coleta e integração de dados de diversas fontes",
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">JORNADA</span>{" "}
            <span className="text-gradient-cyan">DATA DRIVEN</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            A jornada para se tornar uma organização Data Driven começa com:
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-100">
          <div className="card-glass rounded-xl p-6 space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground mb-6 opacity-0 animate-fade-in-up delay-200">
          Utilizando de estratégia, ferramentas e soluções como:
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="card-glass rounded-2xl p-8 text-center glow-cyan opacity-0 animate-fade-in-up delay-300 hover:scale-105 transition-transform" style={{ animationFillMode: "forwards" }}>
            <Database className="w-16 h-16 text-nuage-cyan mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-nuage-cyan">DATA</h3>
            <h3 className="text-2xl md:text-3xl font-black text-nuage-cyan">LAKE</h3>
          </div>
          <div className="card-glass rounded-2xl p-8 text-center glow-magenta opacity-0 animate-fade-in-up delay-400 hover:scale-105 transition-transform" style={{ animationFillMode: "forwards" }}>
            <Warehouse className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-primary">DATA</h3>
            <h3 className="text-2xl md:text-3xl font-black text-primary">WAREHOUSE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideJornadaInicio;
