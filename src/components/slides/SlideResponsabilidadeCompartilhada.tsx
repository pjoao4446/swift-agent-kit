import NuageLogo from "./NuageLogo";
import { Shield, Cloud, User } from "lucide-react";
import responsabilidadeImg from "@/assets/responsabilidade.png";

const SlideResponsabilidadeCompartilhada = () => {
  const awsItems = [
    "Segurança do Data Center",
    "Infraestrutura da Cloud",
    "Firmware e Patching",
    "Descomissionamento de hardware antigo",
  ];

  const clienteItems = [
    "Atualizações e Patching das instâncias EC2",
    "Encriptação dos dados armazenados e em trânsito",
    "Controle de custos",
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            MODELO DE <span className="text-gradient-magenta">RESPONSABILIDADE COMPARTILHADA</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 max-w-6xl mx-auto items-center">
          {/* Left - Cards empilhados */}
          <div className="space-y-6">
            <div className="opacity-0 animate-fade-in-up delay-100">
              <div className="card-glass p-6 rounded-2xl border border-nuage-cyan/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-nuage-cyan/10 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-nuage-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-nuage-cyan">AWS é responsável por</h3>
                </div>
                <div className="space-y-3">
                  {awsItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-nuage-cyan flex-shrink-0" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-up delay-200">
              <div className="card-glass p-6 rounded-2xl border border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Cliente é responsável por</h3>
                </div>
                <div className="space-y-3">
                  {clienteItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Imagem */}
          <div className="flex items-center justify-center opacity-0 animate-fade-in-up delay-300">
            <img src={responsabilidadeImg} alt="Modelo de Responsabilidade Compartilhada" className="w-full rounded-xl object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideResponsabilidadeCompartilhada;
