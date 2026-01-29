import NuageLogo from "./NuageLogo";
import { Code, Sparkles } from "lucide-react";

const SlideCoverKiro = () => {
  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      <div className="network-lines" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8 opacity-0 animate-fade-in-up">
          <div className="absolute inset-0 blur-3xl bg-primary/40 rounded-full scale-150" />
          <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-primary via-primary to-nuage-cyan flex items-center justify-center animate-float">
            <Code className="w-14 h-14 text-foreground" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-magenta">Kiro</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
          Amazon Kiro
        </p>

        <div className="flex items-center gap-3 opacity-0 animate-fade-in-up delay-300">
          <Sparkles className="w-5 h-5 text-nuage-gold" />
          <span className="text-lg text-foreground">O IDE Agêntico da AWS</span>
          <Sparkles className="w-5 h-5 text-nuage-gold" />
        </div>

        <p className="mt-10 text-xl text-muted-foreground max-w-3xl opacity-0 animate-fade-in-up delay-400">
          Transforme especificações em código de produção com agentes de IA autônomos
        </p>
      </div>
    </div>
  );
};

export default SlideCoverKiro;
