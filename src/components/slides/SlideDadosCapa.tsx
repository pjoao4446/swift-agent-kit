import NuageLogo from "./NuageLogo";
import { Database, BarChart3, TrendingUp } from "lucide-react";

const SlideDadosCapa = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 opacity-20 animate-float">
          <Database className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/6 opacity-20 animate-float delay-200">
          <BarChart3 className="w-20 h-20 text-nuage-cyan" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float delay-500">
          <TrendingUp className="w-16 h-16 text-nuage-gold" />
        </div>
      </div>

      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full card-glass text-sm font-medium text-primary mb-8 glow-magenta">
            <Database className="w-4 h-4 inline mr-2" />
            Módulo Dados
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-magenta">DADOS</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl lg:text-6xl">O SEGREDO PARA O</span>
          <br />
          <span className="text-gradient-cyan">SUCESSO EMPRESARIAL</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Transforme dados em{" "}
          <span className="text-nuage-cyan font-semibold">vantagem competitiva</span>
        </p>
      </div>
    </div>
  );
};

export default SlideDadosCapa;
