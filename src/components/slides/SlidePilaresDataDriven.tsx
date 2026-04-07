import NuageLogo from "./NuageLogo";
import { Users, Cpu, Settings, CheckCircle2 } from "lucide-react";

const SlidePilaresDataDriven = () => {
  const pilares = [
    {
      icon: Users,
      title: "PESSOAS",
      color: "text-primary",
      border: "border-primary/30",
      desc: "A empresa deve buscar uma equipe qualificada para lidar com os dados e a jornada de implementação. Isso inclui a contratação de consultoria e capacitação de profissionais especializados em dados.",
    },
    {
      icon: Cpu,
      title: "TECNOLOGIA",
      color: "text-nuage-cyan",
      border: "border-nuage-cyan/30",
      desc: "Para se tornar data-driven, a empresa precisa de uma infraestrutura tecnológica que suporte a coleta, armazenamento e análise de dados. Isso inclui a adoção de ferramentas de BI, banco de dados, ferramentas de visualização e outras soluções tecnológicas.",
    },
    {
      icon: Settings,
      title: "PROCESSOS",
      color: "text-nuage-gold",
      border: "border-nuage-gold/30",
      desc: "A empresa precisa estabelecer processos que permitam a coleta, análise e uso dos dados de forma eficiente e eficaz. Isso inclui a definição de KPIs, relatórios e dashboards, procedimentos de coleta de dados e práticas de governança de dados.",
    },
  ];

  const beneficios = [
    "Redução de equívocos e custos operacionais",
    "Otimização de tempo para tomadas de decisão",
    "Viabiliza a identificação de criação de novos produtos e reduz o tempo de lançamento para o mercado",
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">PILARES JORNADA</span>{" "}
            <span className="text-gradient-cyan">DATA DRIVEN</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.title}
              className={`card-glass rounded-xl p-5 opacity-0 animate-fade-in-up border ${pilar.border}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <pilar.icon className={`w-7 h-7 ${pilar.color}`} />
                <h3 className={`text-lg font-black ${pilar.color}`}>{pilar.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{pilar.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-xl p-5 glow-magenta">
            <h3 className="text-lg font-bold text-primary mb-3">Por que ser Data Driven?</h3>
            <p className="text-xs text-muted-foreground mb-3">
              A orientação a dados traz clareza matemática na tomada de decisões:
            </p>
            <div className="space-y-2">
              {beneficios.map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePilaresDataDriven;
