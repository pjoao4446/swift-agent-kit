import NuageLogo from "./NuageLogo";
import { Building2, AlertCircle } from "lucide-react";

const SlideDadosDesafio = () => {
  const buildings = Array.from({ length: 10 }, (_, i) => i);
  const highlighted = [2, 5, 8]; // 3 out of 10 = ~32%

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-foreground">DADOS:</span>{" "}
            <span className="text-gradient-magenta">O DESAFIO</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
          {/* 32% display */}
          <div className="opacity-0 animate-fade-in-up delay-100 text-center">
            <div className="text-8xl md:text-9xl font-black text-gradient-magenta mb-2">32%</div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              das empresas relataram ser capazes de obter{" "}
              <span className="text-foreground font-semibold">valor tangível e mensurável</span> a partir de dados
            </p>
          </div>

          {/* Building icons */}
          <div className="flex justify-center gap-3 md:gap-4 opacity-0 animate-fade-in-up delay-200">
            {buildings.map((_, i) => (
              <div
                key={i}
                className={`flex flex-col items-center transition-all duration-500 ${
                  highlighted.includes(i) ? "scale-110" : "opacity-40"
                }`}
              >
                <Building2
                  className={`w-10 h-10 md:w-14 md:h-14 ${
                    highlighted.includes(i) ? "text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" : "text-muted-foreground"
                  }`}
                />
                {highlighted.includes(i) && (
                  <div className="w-2 h-2 rounded-full bg-primary mt-1 animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="card-glass rounded-xl p-6 max-w-4xl opacity-0 animate-fade-in-up delay-300 glow-magenta">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-nuage-gold flex-shrink-0 mt-1" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Contar com dados concretos e confiáveis <span className="text-foreground font-bold">não é somente um diferencial competitivo</span>, 
                e sim um <span className="text-primary font-bold">processo vital para sobrevivência</span> das empresas no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDadosDesafio;
