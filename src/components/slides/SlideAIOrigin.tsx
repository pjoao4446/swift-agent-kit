import NuageLogo from "./NuageLogo";
import { HelpCircle, Cpu, Trophy } from "lucide-react";

const SlideAIOrigin = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className="mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 mb-8">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 opacity-0 animate-fade-in-up delay-100">
            "As máquinas podem <span className="text-gradient-magenta">pensar</span>?"
          </h2>

          <div className="card-glass p-8 rounded-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Esta pergunta de <span className="text-primary font-bold">Alan Turing (1950)</span> deu início a tudo.
              <br />
              O objetivo era a <span className="text-gradient-gold font-semibold">simulação da inteligência</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
            <div className="pillar-card text-center">
              <Trophy className="w-10 h-10 text-nuage-gold mx-auto mb-4" />
              <h4 className="font-bold mb-2">Vencer no Xadrez</h4>
              <p className="text-sm text-muted-foreground">Provar que máquinas podiam competir</p>
            </div>
            <div className="pillar-card text-center">
              <Cpu className="w-10 h-10 text-nuage-cyan mx-auto mb-4" />
              <h4 className="font-bold mb-2">Cálculos Complexos</h4>
              <p className="text-sm text-muted-foreground">Resolver problemas matemáticos avançados</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mt-8 opacity-0 animate-fade-in-up delay-400">
            As primeiras tentativas de IA focavam em <span className="text-primary">provar a possibilidade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideAIOrigin;
