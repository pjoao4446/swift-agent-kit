const SlideEvolucaoIA = () => {
  const phases = [
    {
      label: "IA Tradicional",
      subtitle: "Baseada em Regras",
      desc: "Programação explícita: SE (X) ENTÃO (Y). Conhecimento codificado manualmente por especialistas.",
      ring: "ring-primary/60",
      accent: "text-primary",
      bg: "bg-primary/10",
      delay: "0.3s",
    },
    {
      label: "Machine Learning",
      subtitle: "Aprendizado por Dados",
      desc: "Algoritmos aprendem padrões a partir de dados, sem programação explícita de regras.",
      ring: "ring-nuage-cyan/60",
      accent: "text-nuage-cyan",
      bg: "bg-nuage-cyan/10",
      delay: "0.5s",
    },
    {
      label: "Deep Learning",
      subtitle: "Redes Neurais Profundas",
      desc: "Redes neurais artificiais simulam o cérebro humano, aprendendo padrões extremamente complexos.",
      ring: "ring-nuage-gold/60",
      accent: "text-nuage-gold",
      bg: "bg-nuage-gold/10",
      delay: "0.7s",
    },
    {
      label: "IA Generativa",
      subtitle: "Criação de Conteúdo",
      desc: "Gera texto, imagens, código e mais. Construída sobre modelos fundacionais pré-treinados.",
      ring: "ring-green-400/60",
      accent: "text-green-400",
      bg: "bg-green-400/10",
      delay: "0.9s",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10 flex flex-col justify-center h-full">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-3 opacity-0 animate-fade-in">
            Entendendo os Campos da IA
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up delay-100">
            A Evolução da <span className="text-gradient-magenta">Inteligência Artificial</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Cada subcampo está contido dentro do anterior — todos fazem parte da IA
          </p>
        </div>

        <div className="flex items-center gap-8 max-w-6xl mx-auto w-full">
          {/* Nested circles diagram */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="relative w-[340px] h-[400px]">
              <div className="absolute inset-0 rounded-[50%] border-2 border-primary/50 bg-primary/5 flex items-start justify-center pt-4 opacity-0 animate-scale-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <span className="text-xs font-bold text-primary tracking-wider uppercase">Inteligência Artificial</span>
              </div>
              <div className="absolute left-[30px] right-[30px] top-[50px] bottom-[20px] rounded-[50%] border-2 border-nuage-cyan/50 bg-nuage-cyan/5 flex items-start justify-center pt-4 opacity-0 animate-scale-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                <span className="text-xs font-bold text-nuage-cyan tracking-wider uppercase">Machine Learning</span>
              </div>
              <div className="absolute left-[60px] right-[60px] top-[100px] bottom-[40px] rounded-[50%] border-2 border-nuage-gold/50 bg-nuage-gold/5 flex items-start justify-center pt-4 opacity-0 animate-scale-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <span className="text-xs font-bold text-nuage-gold tracking-wider uppercase">Deep Learning</span>
              </div>
              <div className="absolute left-[90px] right-[90px] top-[155px] bottom-[65px] rounded-[50%] border-2 border-green-400/60 bg-green-400/10 flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
                <span className="text-xs font-bold text-green-400 tracking-wider uppercase text-center leading-tight">IA<br />Generativa</span>
              </div>
            </div>
          </div>

          {/* Descriptions */}
          <div className="flex-1 grid grid-cols-1 gap-3">
            {phases.map((phase) => (
              <div
                key={phase.label}
                className={`flex items-start gap-4 p-4 rounded-2xl card-glass ring-1 ${phase.ring} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: phase.delay, animationFillMode: "forwards" }}
              >
                <div className={`w-3 h-3 rounded-full ${phase.bg} ring-2 ${phase.ring} mt-1.5 flex-shrink-0`} />
                <div>
                  <h3 className={`text-lg font-bold ${phase.accent} mb-0.5`}>
                    {phase.label}
                    <span className="text-muted-foreground font-normal text-sm ml-2">— {phase.subtitle}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideEvolucaoIA;
