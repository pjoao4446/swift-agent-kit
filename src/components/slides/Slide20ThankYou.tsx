import NuageLogo from "./NuageLogo";
import { Mail, Linkedin, Phone, Award, Briefcase } from "lucide-react";
import joaoPauloPhoto from "@/assets/joao-paulo.png";
import linkedinQR from "@/assets/linkedin-qr.png";

const Slide20ThankYou = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col justify-center h-full">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-3 opacity-0 animate-fade-in-up">
            <span className="text-gradient-magenta">Obrigado!</span>
          </h2>
          <p className="text-xl text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Perguntas & Discussão
          </p>
        </div>

        {/* Card principal */}
        <div className="max-w-4xl mx-auto w-full opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-3xl p-8 flex items-center gap-8">
            {/* Foto */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-primary/40 shadow-2xl shadow-primary/20">
                <img src={joaoPauloPhoto} alt="João Paulo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Dados */}
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-1 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
                João Paulo Oliveira Gonçalves
              </h3>
              <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Arquiteto de Soluções</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">NuageIT</span>
              </div>

              <div className="space-y-2.5 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">11 999959108</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">jpgoncalves@nuageit.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-nuage-cyan/15 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-nuage-cyan" />
                  </div>
                  <span className="text-nuage-cyan font-medium">LinkedIn</span>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex-shrink-0 text-center opacity-0 animate-scale-in delay-500" style={{ animationFillMode: "forwards" }}>
              <div className="bg-white rounded-2xl p-3 shadow-lg shadow-primary/10">
                <img src={linkedinQR} alt="QR Code LinkedIn" className="w-32 h-32" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">Conecte-se no LinkedIn</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="text-center mt-8 opacity-0 animate-fade-in-up delay-500" style={{ animationFillMode: "forwards" }}>
          <div className="badge-gold inline-flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>TOP 10 AWS SOLUTIONS PROVIDER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide20ThankYou;
