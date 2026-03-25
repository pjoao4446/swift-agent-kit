import NuageLogo from "./NuageLogo";
import { Cloud, Database, Code, Headphones, ArrowDownToLine } from "lucide-react";

const SlideOfertasServicos = () => {
  const ofertas = [
    {
      icon: ArrowDownToLine,
      title: "MIGRAÇÃO",
      items: [
        "Análise de ambientes para migração (Assessment)",
        "Migração e modernização de ambientes para Nuvem",
        "Estratégia de adoção a nuvem (CAF)",
      ],
    },
    {
      icon: Cloud,
      title: "INFRAESTRUTURA EM NUVEM",
      items: [
        "Implementação de ambientes em nuvem",
        "Reestruturação de infraestruturas em nuvem",
        "Melhores práticas (Well Architected)",
        "Otimização de custos (FinOps)",
      ],
    },
    {
      icon: Database,
      title: "DADOS E INTELIGÊNCIA DE NEGÓCIO",
      items: [
        "Implementação de estruturas de dados",
        "Inteligência de negócios (BI e Analytics)",
        "Inteligência artificial",
        "Ambiente de análise de dados",
      ],
    },
    {
      icon: Code,
      title: "DESENVOLVIMENTO DE APLICAÇÕES",
      items: [
        "Desenvolvimento nativo para a nuvem (Cloud Native)",
        "Esteira de desenvolvimento (DevSecOps)",
        "Modernização de aplicações",
        "Desenvolvimento de aplicações móveis",
      ],
    },
    {
      icon: Headphones,
      title: "SUPORTE E SERVIÇOS GERENCIADOS",
      items: [
        "Suportes",
        "AMS | MSP",
        "NOC | SOC",
      ],
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">OFERTAS E SERVIÇOS</span>{" "}
            <span className="text-gradient-magenta">NUAGEIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto mb-6">
          {ofertas.map((oferta, index) => (
            <div
              key={oferta.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <oferta.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              {/* Title */}
              <div className="bg-gradient-to-r from-[#1a0a4a] to-[#2d0b5a] rounded-t-lg py-3 px-2 text-center">
                <h3 className="text-sm font-bold text-foreground leading-tight">{oferta.title}</h3>
              </div>
              
              {/* Items */}
              <div className="bg-card/30 backdrop-blur rounded-b-lg p-3 space-y-2 min-h-[140px]">
                {oferta.items.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground leading-tight">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bars */}
        <div className="max-w-7xl mx-auto space-y-2 opacity-0 animate-fade-in-up delay-500" style={{ animationFillMode: "forwards" }}>
          <div className="bg-gradient-to-r from-[#1a0a4a] to-[#2d0b5a] rounded-lg py-3 text-center">
            <span className="text-sm font-bold text-foreground">SEGURANÇA E CONFORMIDADE</span>
          </div>
          <div className="bg-primary rounded-lg py-3 text-center">
            <span className="text-sm font-bold text-primary-foreground">INTELIGÊNCIA ARTIFICIAL GENERATIVA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOfertasServicos;
