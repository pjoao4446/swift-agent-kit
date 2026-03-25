import NuageLogo from "./NuageLogo";
import { Award, Globe } from "lucide-react";
import gartnerImg from "@/assets/gartner.png";

const SlideConhecaAWS = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            CONHEÇA A <span className="text-gradient-gold">CLOUD AWS</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-center">
          {/* Left - Cards empilhados */}
          <div className="space-y-6">
            <div className="card-glass p-8 rounded-2xl border border-nuage-cyan/30 opacity-0 animate-fade-in-up delay-100">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-nuage-cyan" />
                <h3 className="text-xl font-bold text-nuage-cyan">Plataforma Global</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Amazon Web Services (AWS) é a plataforma de nuvem mais adotada e mais abrangente do mundo, oferecendo mais de 200 serviços completos de datacenters em todo o mundo.
              </p>
            </div>

            <div className="card-glass p-8 rounded-2xl border border-nuage-gold/30 opacity-0 animate-fade-in-up delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-nuage-gold" />
                <h3 className="text-xl font-bold text-nuage-gold">Líder Gartner 2025</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Gartner posiciona a AWS no quadrante de líderes no Quadrante Mágico 2025 de Serviços de Infraestrutura e Plataforma de Nuvem (CIPS), definidos como ofertas padronizadas e altamente automatizadas de computação, redes e armazenamento complementados por serviços de plataforma integrados.
              </p>
            </div>
          </div>

          {/* Right - Imagem Gartner */}
          <div className="flex items-center justify-center opacity-0 animate-fade-in-up delay-300">
            <img src={gartnerImg} alt="Gartner Magic Quadrant" className="max-h-[500px] rounded-2xl object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideConhecaAWS;
