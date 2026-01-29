import NuageLogo from "./NuageLogo";
import { Bot, Sparkles } from "lucide-react";

const SlideCoverAgentCore = () => {
  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      <div className="network-lines" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8 opacity-0 animate-fade-in-up">
          <div className="absolute inset-0 blur-3xl bg-nuage-gold/40 rounded-full scale-150" />
          <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-nuage-gold via-nuage-gold to-primary flex items-center justify-center animate-float">
            <Bot className="w-14 h-14 text-foreground" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-gold">AgentCore</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
          Amazon AgentCore
        </p>

        <div className="flex items-center gap-3 opacity-0 animate-fade-in-up delay-300">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-lg text-foreground">Infraestrutura para Agentes Autônomos</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        <p className="mt-10 text-xl text-muted-foreground max-w-3xl opacity-0 animate-fade-in-up delay-400">
          O AgentCore é um serviço gerenciado que fornece toda a infraestrutura necessária para executar agentes de IA em escala enterprise: runtime isolado, memória persistente, identidade, observabilidade e orquestração multi-agente.
        </p>
      </div>
    </div>
  );
};

export default SlideCoverAgentCore;
