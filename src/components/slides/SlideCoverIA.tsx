import NuageLogo from "./NuageLogo";
import { Brain, Sparkles, Zap, Bot } from "lucide-react";

const SlideCoverIA = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />
      
      {/* Header */}
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 opacity-20 animate-float">
          <Brain className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/6 opacity-20 animate-float delay-200">
          <Bot className="w-20 h-20 text-nuage-cyan" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float delay-500">
          <Sparkles className="w-16 h-16 text-nuage-gold" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float delay-300">
          <Zap className="w-18 h-18 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full card-glass text-sm font-medium text-primary mb-8 glow-magenta">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Próxima Geração de Soluções
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-magenta">INTELIGÊNCIA</span>
          <br />
          <span className="text-foreground">ARTIFICIAL</span>
          <br />
          <span className="text-nuage-cyan">&</span>{" "}
          <span className="text-gradient-gold">ANALYTICS</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Transformando negócios com{" "}
          <span className="text-nuage-cyan font-semibold">IA Generativa</span>,{" "}
          <span className="text-nuage-cyan font-semibold">Agentes Inteligentes</span> e{" "}
          <span className="text-nuage-cyan font-semibold">Automação Cognitiva</span>
        </p>

        <div className="flex gap-6 opacity-0 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-full">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Amazon Kiro</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Quick Suite</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-full">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">AgentCore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCoverIA;
