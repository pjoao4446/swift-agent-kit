import { useEffect, useState } from "react";
import NuageLogo from "./NuageLogo";
import { Smartphone, Globe, Radio, Users, Wifi } from "lucide-react";

const SlideDadosGerados = () => {
  const [count, setCount] = useState(0);
  const targetZB = 124;

  useEffect(() => {
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * targetZB));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const fontes = [
    { icon: Smartphone, label: "Mobile" },
    { icon: Globe, label: "Web" },
    { icon: Radio, label: "Sensores" },
    { icon: Users, label: "Social" },
    { icon: Wifi, label: "IoT" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-foreground">DADOS</span>{" "}
            <span className="text-gradient-magenta">GERADOS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-100">
            As empresas geram cada vez mais dados, tendo alcançado a marca de
          </p>
        </div>

        <div className="flex flex-col items-center mb-8 opacity-0 animate-fade-in-up delay-200">
          <div className="card-glass rounded-2xl p-8 glow-magenta">
            <div className="text-7xl md:text-9xl font-black text-gradient-magenta mb-2">
              {count} <span className="text-4xl md:text-5xl">ZB</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-mono tracking-widest">
              124.000.000.000.000.000.000.000 bytes
            </p>
          </div>
        </div>

        <div className="text-center mb-4 opacity-0 animate-fade-in-up delay-300">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Fontes de Dados</span>
        </div>

        <div className="flex justify-center gap-6 md:gap-10 opacity-0 animate-fade-in-up delay-400">
          {fontes.map((fonte, i) => (
            <div
              key={fonte.label}
              className="flex flex-col items-center gap-2 group"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl card-glass flex items-center justify-center group-hover:scale-110 transition-transform glow-magenta">
                <fonte.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground">{fonte.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideDadosGerados;
