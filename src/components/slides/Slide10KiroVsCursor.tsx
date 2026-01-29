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
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Kiro vs <span className="text-muted-foreground">Cursor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Duas abordagens de IDE com IA
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Tabela comparativa */}
            <div className="opacity-0 animate-fade-in-up delay-200">
              <div className="pillar-card overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="text-muted-foreground font-medium text-sm">Recurso</div>
                  <div className="text-center">
                    <span className="text-xl font-black text-gradient-magenta">Kiro</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-muted-foreground">Cursor</span>
                  </div>
                </div>

                {comparison.map((row, index) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 gap-4 p-3 ${
                      index % 2 === 0 ? "bg-secondary/20" : ""
                    }`}
                  >
                    <div className="font-medium text-sm">{row.feature}</div>
                    <div className="text-center flex items-center justify-center gap-2">
                      {row.winner === "kiro" && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                      {row.winner === "tie" && (
                        <Minus className="w-4 h-4 text-muted-foreground" />
                      )}
                      {row.winner === "cursor" && (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                      <span className={`text-sm ${row.winner === "kiro" ? "text-green-400" : ""}`}>
                        {row.kiro}
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      {row.winner === "cursor" && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                      {row.winner === "tie" && (
                        <Minus className="w-4 h-4 text-muted-foreground" />
                      )}
                      {row.winner === "kiro" && (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                      <span className={`text-sm ${row.winner === "cursor" ? "text-green-400" : "text-muted-foreground"}`}>
                        {row.cursor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards laterais */}
            <div className="lg:w-64 space-y-4 opacity-0 animate-slide-in-right delay-300">
              <div className="pillar-card text-center p-6">
                <p className="text-3xl font-black text-gradient-magenta mb-2">50%</p>
                <p className="text-sm text-muted-foreground">mais econômico que Cursor Pro</p>
              </div>
              <div className="pillar-card text-center p-6">
                <p className="text-3xl font-black text-gradient-gold mb-2">Enterprise</p>
                <p className="text-sm text-muted-foreground">segurança de nível corporativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10KiroVsCursor;
