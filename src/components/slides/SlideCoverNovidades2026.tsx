import NuageLogo from "./NuageLogo";
import { Sparkles, Rocket, Cpu, Bot } from "lucide-react";

const SlideCoverNovidades2026 = () => {
  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      <div className="network-lines" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Rocket className="absolute top-1/4 left-[15%] w-12 h-12 text-primary/30 animate-float opacity-0 animate-fade-in delay-300" />
        <Cpu className="absolute top-1/3 right-[20%] w-16 h-16 text-nuage-cyan/30 animate-float opacity-0 animate-fade-in delay-400" style={{ animationDelay: "1s" }} />
        <Bot className="absolute bottom-1/3 left-[25%] w-14 h-14 text-nuage-gold/30 animate-float opacity-0 animate-fade-in delay-500" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8 opacity-0 animate-fade-in-up">
          <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full scale-150" />
          <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center animate-float">
            <Sparkles className="w-12 h-12 text-foreground" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-magenta">Novidades</span> de IA
        </h1>
        
        <p className="text-3xl md:text-4xl font-bold text-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
          na AWS em <span className="text-gradient-gold">2026</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <div className="px-6 py-3 rounded-full card-glass">
            <span className="font-bold text-primary">Amazon Kiro</span>
          </div>
          <div className="px-6 py-3 rounded-full card-glass">
            <span className="font-bold text-nuage-cyan">Amazon Quick Suite</span>
          </div>
          <div className="px-6 py-3 rounded-full card-glass">
            <span className="font-bold text-nuage-gold">Amazon AgentCore</span>
          </div>
        </div>

        <p className="mt-10 text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-up delay-400">
          Conheça os 3 serviços que estão revolucionando a forma de desenvolver e automatizar com IA
        </p>
      </div>
    </div>
  );
};

export default SlideCoverNovidades2026;
