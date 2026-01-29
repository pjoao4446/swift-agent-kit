import NuageLogo from "./NuageLogo";
import { Award } from "lucide-react";

const Slide01Cover = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />
      
      {/* Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
        <NuageLogo />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-card/50 backdrop-blur">
            <span className="text-xs font-bold">360</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground">360 Suites</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-8">
            AWS Partner Network
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="text-foreground">WORKSHOP:</span>
          <br />
          <span className="text-gradient-magenta">IA AGÊNTICA</span>
          <br />
          <span className="text-foreground">& PRODUTIVIDADE</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Transformando o amanhã com{" "}
          <span className="text-nuage-cyan font-semibold">Amazon Kiro</span>,{" "}
          <span className="text-nuage-cyan font-semibold">Quick Suite</span> e{" "}
          <span className="text-nuage-cyan font-semibold">AgentCore</span>
        </p>

        <div className="flex gap-4 opacity-0 animate-fade-in-up delay-300">
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-magenta">
            Iniciar Workshop
          </button>
        </div>
      </div>

      {/* Footer Badge */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in-up delay-500">
        <div className="badge-gold flex items-center gap-2 animate-pulse-glow">
          <Award className="w-5 h-5" />
          <span>TOP 10 AWS SOLUTIONS PROVIDER 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
