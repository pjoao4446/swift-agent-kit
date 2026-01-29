import NuageLogo from "./NuageLogo";
import { Check, X, Minus } from "lucide-react";

const Slide09KiroVsCopilot = () => {
  const comparison = [
    { feature: "Preço Mensal", kiro: "Free / $19", copilot: "$10 / $19", winner: "tie" },
    { feature: "Spec-Driven Dev", kiro: "Nativo", copilot: "Não", winner: "kiro" },
    { feature: "Agentes Autônomos", kiro: "Completo", copilot: "Limitado", winner: "kiro" },
    { feature: "Integração AWS", kiro: "Nativa", copilot: "Extensão", winner: "kiro" },
    { feature: "Code Context", kiro: "Projeto inteiro", copilot: "Arquivo atual", winner: "kiro" },
    { feature: "VS Code Support", kiro: "Sim", copilot: "Sim", winner: "tie" },
    { feature: "Geração de Testes", kiro: "Automático", copilot: "Sob demanda", winner: "kiro" },
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
            Kiro vs <span className="text-muted-foreground">GitHub Copilot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Comparativo de funcionalidades e preço
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300">
          <div className="pillar-card overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border">
              <div className="text-muted-foreground font-medium">Recurso</div>
              <div className="text-center">
                <span className="text-2xl font-black text-gradient-magenta">Kiro</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-muted-foreground">Copilot</span>
              </div>
            </div>

            {comparison.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index % 2 === 0 ? "bg-secondary/20" : ""
                }`}
              >
                <div className="font-medium">{row.feature}</div>
                <div className="text-center flex items-center justify-center gap-2">
                  {row.winner === "kiro" && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  {row.winner === "tie" && (
                    <Minus className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className={row.winner === "kiro" ? "text-green-400" : ""}>
                    {row.kiro}
                  </span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  {row.winner === "copilot" && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  {row.winner === "tie" && (
                    <Minus className="w-5 h-5 text-muted-foreground" />
                  )}
                  {row.winner === "kiro" && (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                  <span className="text-muted-foreground">{row.copilot}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg">
              <span className="text-gradient-magenta font-bold">Kiro</span> oferece{" "}
              <span className="text-nuage-gold font-bold">mais valor</span> por um preço competitivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide09KiroVsCopilot;
