import NuageLogo from "./NuageLogo";

const SlideJornadaIceberg = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">JORNADA</span>{" "}
            <span className="text-gradient-cyan">DATA DRIVEN</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-0 animate-fade-in-up delay-100">
            Muito além da ponta do iceberg
          </p>
        </div>

        <div className="flex justify-center opacity-0 animate-fade-in-up delay-200">
          <div className="relative w-full max-w-3xl">
            <svg viewBox="0 0 600 450" className="w-full">
              {/* Water line */}
              <line x1="0" y1="150" x2="600" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8,4" opacity="0.5" />
              <text x="590" y="145" textAnchor="end" fill="hsl(var(--primary))" fontSize="10" opacity="0.7">Linha d'água</text>

              {/* Above water - tip */}
              <polygon points="250,40 350,40 370,150 230,150" fill="hsl(var(--primary))" opacity="0.3" />
              <polygon points="260,50 340,50 360,145 240,145" fill="hsl(var(--primary))" opacity="0.2" />
              
              {/* Above water labels */}
              <text x="300" y="80" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">IA Generativa</text>
              <text x="300" y="100" textAnchor="middle" fill="white" fontSize="10">Analytics</text>
              <text x="300" y="118" textAnchor="middle" fill="white" fontSize="9" opacity="0.8">Descritiva & Preditiva</text>

              {/* Side label above */}
              <text x="440" y="90" textAnchor="start" fill="hsl(var(--primary))" fontSize="10" fontWeight="bold">O que todos veem</text>
              <line x1="370" y1="90" x2="435" y2="90" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />

              {/* Below water - massive base */}
              <polygon points="230,155 370,155 430,420 170,420" fill="hsl(var(--primary))" opacity="0.15" />
              <polygon points="235,160 365,160 420,410 180,410" fill="hsl(var(--primary))" opacity="0.1" />

              {/* Below water labels */}
              <text x="300" y="200" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Dados Consolidados</text>
              <text x="300" y="230" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Dados Confiáveis</text>
              <text x="300" y="260" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Qualidade de Dados</text>
              <text x="300" y="295" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" opacity="0.9">Gestão e Governança</text>
              <text x="300" y="315" textAnchor="middle" fill="white" fontSize="11" opacity="0.8">de Dados</text>
              <text x="300" y="350" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">FUNDAÇÃO DE DADOS</text>

              {/* Side label below */}
              <text x="450" y="280" textAnchor="start" fill="white" fontSize="10" fontWeight="bold" opacity="0.7">A base que sustenta tudo</text>
              <line x1="380" y1="280" x2="445" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />

              {/* Water effect */}
              <rect x="0" y="150" width="600" height="300" fill="hsl(var(--primary))" opacity="0.03" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideJornadaIceberg;
