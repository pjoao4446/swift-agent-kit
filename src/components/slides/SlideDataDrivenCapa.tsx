import NuageLogo from "./NuageLogo";
import { Database, Brain, LineChart } from "lucide-react";

const SlideDataDrivenCapa = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 opacity-20 animate-float">
          <Brain className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-20 animate-float delay-300">
          <LineChart className="w-20 h-20 text-nuage-cyan" />
        </div>
      </div>

      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full card-glass text-sm font-medium text-primary mb-8 glow-magenta">
            <Database className="w-4 h-4 inline mr-2" />
            Conceito Fundamental
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-cyan">DATA DRIVEN</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl">O QUE É?</span>
        </h1>
      </div>
    </div>
  );
};

export default SlideDataDrivenCapa;
