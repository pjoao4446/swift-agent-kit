import NuageLogo from "./NuageLogo";
import { Server, Monitor, Network, Building2, Cloud } from "lucide-react";

const SlideInfraTI = () => {
  const cards = [
    { icon: Server, title: "Hardware", description: "Servidores, rede, armazenamento." },
    { icon: Monitor, title: "Software Básico", description: "Sistemas operacionais, virtualização." },
    { icon: Network, title: "Rede", description: "Conectividade, segurança, roteadores, switches." },
    { icon: Building2, title: "Instalações Físicas", description: "Data centers, energia, refrigeração." },
    { icon: Cloud, title: "Recursos Virtuais", description: "Máquinas virtuais, contêineres, serviços em nuvem." },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-4 opacity-0 animate-fade-in">
            Fundamentos
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            INFRAESTRUTURA DE <span className="text-gradient-magenta">TI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Infraestrutura de TI é o conjunto de recursos físicos e virtuais necessários para executar e gerenciar aplicações, dados e serviços de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {cards.map((item, index) => (
            <div
              key={item.title}
              className="pillar-card text-center py-6 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideInfraTI;
