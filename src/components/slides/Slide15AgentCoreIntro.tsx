import NuageLogo from "./NuageLogo";
import { Bot, Scale, ShieldCheck } from "lucide-react";

const Slide15AgentCoreIntro = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 5 • AgentCore
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Amazon <span className="text-gradient-magenta">AgentCore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Infraestrutura para agentes de IA em escala enterprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="pillar-card text-center opacity-0 animate-scale-in delay-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Agentes Autônomos</h3>
            <p className="text-muted-foreground">
              Deploy de agentes que executam tarefas complexas sem supervisão constante
            </p>
          </div>

          <div className="pillar-card text-center opacity-0 animate-scale-in delay-400">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nuage-cyan to-nuage-cyan/60 flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Escala Infinita</h3>
            <p className="text-muted-foreground">
              De 1 a 1 milhão de execuções simultâneas com auto-scaling automático
            </p>
          </div>

          <div className="pillar-card text-center opacity-0 animate-scale-in delay-500">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nuage-gold to-nuage-gold/60 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Confiabilidade</h3>
            <p className="text-muted-foreground">
              Isolamento, observabilidade e recovery automático integrados
            </p>
          </div>
        </div>

        <div className="text-center opacity-0 animate-fade-in-up delay-600">
          <div className="inline-block pillar-card px-8 py-4">
            <p className="text-lg">
              O <span className="text-gradient-magenta font-bold">futuro</span> da automação inteligente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide15AgentCoreIntro;
