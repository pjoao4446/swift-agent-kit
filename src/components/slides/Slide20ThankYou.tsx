import NuageLogo from "./NuageLogo";
import { Mail, Linkedin, Globe, Award } from "lucide-react";

const Slide20ThankYou = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-up">
          <span className="text-gradient-magenta">Obrigado!</span>
        </h2>

        <p className="text-2xl text-muted-foreground mb-12 opacity-0 animate-fade-in-up delay-200">
          Perguntas & Discussão
        </p>

        <div className="flex justify-center gap-6 mb-12 opacity-0 animate-fade-in-up delay-300">
          <a href="#" className="p-4 rounded-xl card-glass hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
          </a>
          <a href="#" className="p-4 rounded-xl card-glass hover:bg-primary/20 transition-colors">
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
          <a href="#" className="p-4 rounded-xl card-glass hover:bg-primary/20 transition-colors">
            <Globe className="w-6 h-6 text-primary" />
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-400">
          <div className="inline-block pillar-card px-8 py-4 mb-8">
            <p className="text-lg mb-2">
              <span className="font-bold">contato@nuageit.com.br</span>
            </p>
            <p className="text-muted-foreground">www.nuageit.com.br</p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-500">
          <div className="badge-gold inline-flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>TOP 10 AWS SOLUTIONS PROVIDER 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide20ThankYou;
