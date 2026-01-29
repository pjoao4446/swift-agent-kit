import NuageLogo from "./NuageLogo";
import { Database, TrendingUp, Film } from "lucide-react";

const SlideMachineLearning = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Evolução da IA • Fase 2
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Machine <span className="text-gradient-magenta">Learning</span>
          </h2>
          <p className="text-2xl text-nuage-cyan font-semibold opacity-0 animate-fade-in-up delay-150">
            Inteligência Baseada em Padrões — A IA que Aprende
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="pillar-card opacity-0 animate-fade-in-up delay-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Nova Abordagem</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Em vez de programar regras, <span className="text-gradient-gold font-semibold">alimentamos a máquina com dados</span>
              </p>
            </div>

            <div className="pillar-card opacity-0 animate-fade-in-up delay-250">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-nuage-cyan/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-nuage-cyan" />
                </div>
                <h3 className="text-xl font-bold">Como Funciona</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Algoritmos encontram <span className="text-primary font-semibold">padrões</span> em grandes volumes de dados e fazem <span className="text-nuage-cyan font-semibold">previsões</span>
              </p>
            </div>
          </div>

          <div className="card-glass p-8 rounded-3xl opacity-0 animate-fade-in-up delay-300">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-nuage-gold/20 flex items-center justify-center flex-shrink-0">
                <Film className="w-10 h-10 text-nuage-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nuage-gold mb-2">Exemplo Clássico</h4>
                <p className="text-xl text-muted-foreground">
                  Streaming <span className="text-primary font-semibold">prevendo qual filme você gostará</span> com base no seu histórico
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 opacity-0 animate-fade-in-up delay-400">
            <div className="inline-flex items-center gap-3 px-6 py-3 card-glass rounded-full">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-lg font-medium">Dados + Algoritmo = Previsão</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMachineLearning;
