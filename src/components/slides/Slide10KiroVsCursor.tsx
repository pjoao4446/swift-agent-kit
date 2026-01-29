import NuageLogo from "./NuageLogo";
import { Check, X, Minus } from "lucide-react";

const Slide10KiroVsCursor = () => {
  const comparison = [
    { feature: "Preço Mensal", kiro: "Free / $19", cursor: "$20 / $40", winner: "kiro" },
    { feature: "Spec-Driven Dev", kiro: "Nativo", cursor: "Manual", winner: "kiro" },
    { feature: "AWS Integration", kiro: "Nativa profunda", cursor: "Genérica", winner: "kiro" },
    { feature: "Agentes Multi-file", kiro: "Avançado", cursor: "Composer", winner: "tie" },
    { feature: "Privacy/Security", kiro: "Enterprise-grade", cursor: "Básico", winner: "kiro" },
    { feature: "IDE Proprietária", kiro: "Sim", cursor: "Sim (fork VSCode)", winner: "tie" },
    { feature: "Modelos Suportados", kiro: "AWS + Parceiros", cursor: "Multi-vendor", winner: "cursor" },
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
            Módulo 3 • Amazon Kiro
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Kiro vs <span className="text-muted-foreground">Cursor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Duas abordagens de IDE com IA
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
                <span className="text-2xl font-bold text-muted-foreground">Cursor</span>
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
                  {row.winner === "cursor" && (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                  <span className={row.winner === "kiro" ? "text-green-400" : ""}>
                    {row.kiro}
                  </span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  {row.winner === "cursor" && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  {row.winner === "tie" && (
                    <Minus className="w-5 h-5 text-muted-foreground" />
                  )}
                  {row.winner === "kiro" && (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                  <span className={row.winner === "cursor" ? "text-green-400" : "text-muted-foreground"}>
                    {row.cursor}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="pillar-card text-center">
              <p className="text-3xl font-black text-gradient-magenta mb-2">50%</p>
              <p className="text-muted-foreground">mais econômico que Cursor Pro</p>
            </div>
            <div className="pillar-card text-center">
              <p className="text-3xl font-black text-gradient-gold mb-2">Enterprise</p>
              <p className="text-muted-foreground">segurança de nível corporativo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10KiroVsCursor;
