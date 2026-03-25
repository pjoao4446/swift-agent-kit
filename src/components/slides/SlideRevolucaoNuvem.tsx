import NuageLogo from "./NuageLogo";
import { ArrowUpDown, CreditCard, Globe, Rocket, Users } from "lucide-react";

const SlideRevolucaoNuvem = () => {
  const items = [
    { icon: ArrowUpDown, title: "Elasticidade", description: "Escalar para cima ou para baixo em minutos.", color: "text-nuage-cyan", bg: "bg-nuage-cyan/10" },
    { icon: CreditCard, title: "Pay-as-you-go", description: "Pague apenas pelo que usar.", color: "text-nuage-gold", bg: "bg-nuage-gold/10" },
    { icon: Globe, title: "Globalização", description: "Infraestrutura distribuída no mundo todo.", color: "text-primary", bg: "bg-primary/10" },
    { icon: Rocket, title: "Inovação Acelerada", description: "Acesso a IA, Big Data, IoT, sem investir pesado.", color: "text-nuage-cyan", bg: "bg-nuage-cyan/10" },
    { icon: Users, title: "Barreira Menor", description: "Pequenas empresas competindo globalmente.", color: "text-nuage-gold", bg: "bg-nuage-gold/10" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10"><NuageLogo /></div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            A REVOLUÇÃO DA <span className="text-gradient-gold">NUVEM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="pillar-card text-center py-6 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideRevolucaoNuvem;
