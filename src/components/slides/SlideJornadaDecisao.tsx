import NuageLogo from "./NuageLogo";
import { Eye, BarChart3, HelpCircle } from "lucide-react";

const SlideJornadaDecisao = () => {
  const perguntas = [
    "O que aconteceu?",
    "Acontecerá novamente?",
    "Por que aconteceu?",
    "O que deve ser feito?",
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
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Traditional side */}
          <div className="opacity-0 animate-fade-in-up delay-100">
            <div className="rounded-2xl border border-muted/30 bg-card/20 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-xl font-bold text-muted-foreground">CENÁRIO TRADICIONAL</h3>
              </div>
              <div className="bg-muted/10 rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  Decisões baseadas em
                </p>
                <p className="text-2xl font-black text-muted-foreground/70 mb-3">PERCEPÇÃO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Percepções cognitivas baseadas na experiência individual e/ou coletiva.
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground/50">
                <div className="w-full h-1 bg-muted/20 rounded" />
              </div>
            </div>
          </div>

          {/* Data Driven side */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 h-full glow-magenta">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-primary">CENÁRIO DATA DRIVEN</h3>
              </div>
              <div className="bg-primary/10 rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                  Ciência de Dados
                </p>
                <p className="text-2xl font-black text-gradient-magenta mb-3">BASEADO NO VALOR</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conseguindo responder perguntas baseadas nos dados das empresas:
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {perguntas.map((p, i) => (
                  <div
                    key={p}
                    className="card-glass rounded-lg px-3 py-2 text-xs font-medium text-primary flex items-center gap-2 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-3 h-3 flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VS divider */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <span className="text-lg font-black text-primary">VS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideJornadaDecisao;
