import NuageLogo from "./NuageLogo";
import { Server, Cloud, Shield, Network } from "lucide-react";

const SlideCoverInfra = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 opacity-20 animate-float">
          <Server className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/6 opacity-20 animate-float delay-200">
          <Cloud className="w-20 h-20 text-nuage-cyan" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float delay-500">
          <Shield className="w-16 h-16 text-nuage-gold" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float delay-300">
          <Network className="w-18 h-18 text-primary" />
        </div>
      </div>

      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full card-glass text-sm font-medium text-primary mb-8 glow-magenta">
            <Server className="w-4 h-4 inline mr-2" />
            Fundamentos Essenciais
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-magenta">INFRAESTRUTURA</span>
          <br />
          <span className="text-foreground">DE TECNOLOGIA</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Entendendo os pilares que sustentam a{" "}
          <span className="text-nuage-cyan font-semibold">transformação digital</span>
        </p>
      </div>
    </div>
  );
};

export default SlideCoverInfra;
