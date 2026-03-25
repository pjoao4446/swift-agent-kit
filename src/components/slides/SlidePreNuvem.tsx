import NuageLogo from "./NuageLogo";
import { DollarSign, Clock, TrendingDown, Scale, Users } from "lucide-react";

const SlidePreNuvem = () => {
  const items = [
    { icon: DollarSign, text: "Alto investimento inicial (CAPEX)." },
    { icon: Clock, text: "Planejamento de capacidade com meses ou anos de antecedência." },
    { icon: TrendingDown, text: "Recursos muitas vezes ociosos ou insuficientes em picos." },
    { icon: Scale, text: "Escalabilidade lenta e custosa." },
    { icon: Users, text: "Equipes especializadas dedicadas à operação 24/7." },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            ERA <span className="text-gradient-magenta">PRÉ NUVEM</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-glass p-5 rounded-xl flex items-center gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-base text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidePreNuvem;
