
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

            </div>
          </div>

          {/* Descriptions - right side */}
          <div className="flex-1 grid grid-cols-1 gap-3">
            {phases.map((phase, index) => (
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
