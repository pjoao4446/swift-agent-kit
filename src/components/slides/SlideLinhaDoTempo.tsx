import NuageLogo from "./NuageLogo";

const SlideLinhaDoTempo = () => {
  const timeline = [
    { title: "On-Premises", description: "Infraestrutura dentro da própria empresa." },
    { title: "Colocation", description: "Servidores próprios em data center terceirizado." },
    { title: "Hospedagem Dedicada", description: "Servidor físico alugado com uso exclusivo." },
    { title: "VPS", description: "Servidor particionado virtualmente entre clientes." },
    { title: "Nuvem Privada", description: "Ambiente de nuvem exclusivo de uma organização." },
    { title: "Nuvem Pública", description: "Recursos compartilhados sob demanda (AWS, Azure, GCP)." },
    { title: "Nuvem Híbrida", description: "Combinação de nuvem privada e pública." },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            LINHA DO TEMPO DA <span className="text-gradient-magenta">INFRAESTRUTURA</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Como hospedamos aplicações ao longo do tempo
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto relative">
          {/* Horizontal line */}
          <div className="absolute top-[60px] left-0 right-0 h-px bg-primary/40" />

          <div className="flex justify-between items-start gap-2">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center flex-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 mb-2 mt-[52px] relative z-10" />

                {/* Card below */}
                <div className="card-glass p-3 rounded-xl mt-2 w-full max-w-[140px]">
                  <h3 className="font-bold text-xs text-primary mb-1 leading-tight">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideLinhaDoTempo;
