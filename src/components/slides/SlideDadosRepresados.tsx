import NuageLogo from "./NuageLogo";
import { Droplets, AlertTriangle } from "lucide-react";

const SlideDadosRepresados = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-foreground">DADOS</span>{" "}
            <span className="text-gradient-cyan">REPRESADOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Dam visualization */}
          <div className="opacity-0 animate-fade-in-up delay-100">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden card-glass">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Water behind dam */}
                <defs>
                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="damGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#666" />
                    <stop offset="100%" stopColor="#333" />
                  </linearGradient>
                </defs>
                {/* Water body */}
                <rect x="0" y="60" width="180" height="240" fill="url(#waterGrad)" />
                {/* Dam wall */}
                <rect x="175" y="40" width="25" height="260" fill="url(#damGrad)" rx="3" />
                {/* Water level lines */}
                {[80, 110, 140, 170, 200, 230, 260].map((y, i) => (
                  <line key={i} x1="10" y1={y} x2="170" y2={y} stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1" />
                ))}
                {/* Small leak */}
                <circle cx="210" cy="200" r="3" fill="hsl(var(--primary))" opacity="0.6">
                  <animate attributeName="cx" values="210;350" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="210" cy="220" r="2" fill="hsl(var(--primary))" opacity="0.4">
                  <animate attributeName="cx" values="210;300" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0" dur="1.5s" repeatCount="indefinite" />
                </circle>
                {/* Labels */}
                <text x="90" y="35" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">Dados Coletados</text>
                <text x="300" y="150" textAnchor="middle" fill="white" fontSize="12" opacity="0.5">Dados Utilizados</text>
                {/* Percentage indicators */}
                <text x="90" y="180" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">60-73%</text>
                <text x="90" y="200" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">Não utilizados</text>
              </svg>
            </div>
          </div>

          {/* Text content */}
          <div className="opacity-0 animate-fade-in-up delay-200 space-y-6">
            <div className="card-glass rounded-xl p-6 glow-cyan">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-nuage-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg md:text-xl text-foreground font-semibold mb-2">
                    Entre <span className="text-gradient-magenta text-2xl font-black">60%</span> e{" "}
                    <span className="text-gradient-magenta text-2xl font-black">73%</span> de todos os dados de uma empresa{" "}
                    <span className="text-nuage-cyan font-bold">não são utilizados</span> para análise.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-4 flex items-center gap-3">
              <Droplets className="w-6 h-6 text-nuage-cyan" />
              <p className="text-sm text-muted-foreground">
                Fonte: <span className="text-foreground font-semibold">Forrester Research</span>
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              A maioria dos dados coletados pelas empresas permanece "represada" — armazenada mas nunca analisada, 
              representando um enorme potencial desperdiçado de insights e vantagem competitiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDadosRepresados;
