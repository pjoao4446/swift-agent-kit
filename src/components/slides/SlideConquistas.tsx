import NuageLogo from "./NuageLogo";
import { Award, Shield, Users, Trophy, Star, Building2 } from "lucide-react";

const SlideConquistas = () => {
  const conquistas = [
    {
      icon: Shield,
      title: "Consultoria Especializada",
      description: "Empresa especializada em consultoria e entrega de serviços em TI e Cloud, Parceiro Estratégico AWS nível ADVANCED.",
    },
    {
      icon: Award,
      title: "Especialistas Reconhecidos",
      description: "Reconhecidos pela AWS como especialistas em Networking, Security e DevOps, e nos segmentos SMB e Educação.",
    },
    {
      icon: Star,
      title: "Selos de Especialidade",
      description: "Possuímos selos de especialidade nos mais diversos serviços AWS, como ambientes Serverless e de Dados.",
    },
    {
      icon: Trophy,
      title: "TOP 10 AWS LATAM",
      description: "Premiados pela CIOReview, que auxilia executivos e grandes empresas a encontrarem parceiros de negócios.",
    },
    {
      icon: Building2,
      title: "Partner of the Year",
      description: "Premiados com o troféu AWS Partner of the Year, como reconhecimento da nossa excelência nas entregas.",
    },
    {
      icon: Users,
      title: "Great Place to Work",
      description: "Nossos times reconhecem a NuageIT como um ótimo lugar para trabalhar, atuando de forma consultiva e gerando valor.",
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
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-4 opacity-0 animate-fade-in">
            Nossas Conquistas
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            <span className="text-foreground">VISÃO</span>{" "}
            <span className="text-gradient-magenta">360º</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Conectando infraestrutura, aplicação e dados em nossas jornadas e ofertas, 
            oferecendo soluções inovadoras, completas e personalizadas para cada segmento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {conquistas.map((item, index) => (
            <div
              key={item.title}
              className="pillar-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideConquistas;
