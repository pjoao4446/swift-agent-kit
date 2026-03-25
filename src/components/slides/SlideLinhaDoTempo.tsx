import NuageLogo from "./NuageLogo";

const SlideLinhaDoTempo = () => {
  const timeline = [
    { title: "On-Premises", description: "Toda a infraestrutura fica dentro da própria empresa: servidores, rede, armazenamento, climatização, energia e segurança física." },
    { title: "Colocation", description: "A empresa mantém seus servidores, mas os instala em um data center de terceiros que fornece energia, refrigeração e conectividade." },
    { title: "Hospedagem Dedicada", description: "Você aluga um servidor físico inteiro de um provedor, que cuida do hardware, mas o uso é exclusivo seu." },
    { title: "VPS", description: "Servidor físico particionado virtualmente em vários servidores independentes para diferentes clientes." },
    { title: "Nuvem Privada", description: "Ambiente de nuvem exclusivo de uma organização, podendo estar no data center próprio ou em infraestrutura de terceiros." },
    { title: "Nuvem Pública", description: "Infraestrutura compartilhada operada por provedores como AWS, Azure e GCP, com recursos alugados sob demanda." },
    { title: "Nuvem Híbrida", description: "Combinação de nuvem privada e pública, permitindo mover cargas de trabalho entre elas." },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            LINHA DO TEMPO DA <span className="text-gradient-magenta">INFRAESTRUTURA</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Como hospedamos aplicações ao longo do tempo
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />
          <div className="grid gap-3">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 opacity-0 animate-fade-in-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ animationDelay: `${0.2 + index * 0.08}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="card-glass p-4 rounded-xl inline-block">
                    <h3 className="font-bold text-sm text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 hidden md:block shadow-lg shadow-primary/50" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideLinhaDoTempo;
