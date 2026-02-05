import NuageLogo from "./NuageLogo";
import { Sparkles } from "lucide-react";
import quickSuiteIcon from "@/assets/aws-icons/quicksuite.png";

const SlideCoverQuickSuite = () => {
  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      <div className="network-lines" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8 opacity-0 animate-fade-in-up">
          <div className="absolute inset-0 blur-3xl bg-nuage-cyan/40 rounded-full scale-150" />
          <div className="relative w-28 h-28 rounded-3xl overflow-hidden animate-float">
            <img src={quickSuiteIcon} alt="Quick Suite" className="w-full h-full object-contain" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 opacity-0 animate-fade-in-up delay-100">
          <span className="text-gradient-cyan">Quick Suite</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
          Amazon Quick Suite
        </p>

        <div className="flex items-center gap-3 opacity-0 animate-fade-in-up delay-300">
          <Sparkles className="w-5 h-5 text-nuage-gold" />
          <span className="text-lg text-foreground">Business Intelligence & Automação com IA</span>
          <Sparkles className="w-5 h-5 text-nuage-gold" />
        </div>

        <p className="mt-10 text-xl text-muted-foreground max-w-3xl opacity-0 animate-fade-in-up delay-400">
          Dashboards inteligentes, workflows automatizados e insights poderosos para seu negócio
        </p>
      </div>
    </div>
  );
};

export default SlideCoverQuickSuite;
