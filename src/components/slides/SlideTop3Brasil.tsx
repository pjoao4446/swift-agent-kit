import NuageLogo from "./NuageLogo";

const SlideTop3Brasil = () => {
  const competencias = [
    { name: "Networking", type: "Advanced" },
    { name: "SMB", type: "Advanced" },
    { name: "Cloud Operations", type: "Advanced" },
    { name: "Security", type: "Advanced" },
    { name: "DevOps", type: "Advanced" },
    { name: "Data & Analytics", type: "Advanced" },
    { name: "Education", type: "Advanced" },
  ];

  const sdps = [
    "AWS WAF Delivery",
    "AWS EC2 System Manager",
    "Amazon QuickSight",
    "Amazon API Gateway Delivery",
    "Amazon CloudFront Delivery",
    "Amazon RDS Delivery",
    "AWS Config",
    "AWS Control Tower Delivery",
    "AWS Lambda Delivery",
    "Amazon DynamoDB",
  ];

  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      {/* Background Brazil Map Silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 120" className="w-full h-full fill-foreground">
          <path d="M70,10 Q90,20 85,40 Q95,50 90,70 Q85,90 70,100 Q50,110 30,100 Q15,90 10,70 Q5,50 15,30 Q25,15 45,10 Q60,5 70,10 Z" />
        </svg>
      </div>

      <div className="slide-content relative z-10 h-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 max-w-7xl mx-auto items-center h-full">
          
          {/* Left Side - TOP 3 BRASIL */}
          <div className="text-center lg:text-left opacity-0 animate-slide-in-left">
            {/* AWS Partner Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-foreground">aws</span>
                <span className="text-xs text-muted-foreground">partner<br/>network</span>
              </div>
              <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded">
                Advanced<br/>Consulting Partner
              </span>
            </div>
            
            {/* TOP 3 Typography */}
            <div className="relative mb-4">
              <span className="text-6xl md:text-8xl font-black text-foreground tracking-tight block">TOP</span>
              <span className="text-[140px] md:text-[200px] font-black text-gradient-magenta leading-none block -mt-4">
                3
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground/70 -mt-8">
              BRASIL
            </h2>
          </div>

          {/* Right Side - Competencies & SDPs Visual Grid */}
          <div className="space-y-6 opacity-0 animate-slide-in-right delay-200">
            
            {/* 7x Competências */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Competências AWS</h3>
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-black rounded-lg shadow-lg shadow-primary/30">
                  7x COMPETÊNCIAS
                </span>
              </div>
              
              {/* Grid de Competências estilo badges AWS */}
              <div className="grid grid-cols-4 lg:grid-cols-7 gap-2">
                {competencias.map((comp, index) => (
                  <div
                    key={comp.name}
                    className="card-glass p-3 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 group opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span className="text-[10px] font-bold text-nuage-cyan">aws</span>
                        <span className="text-[8px] text-muted-foreground">partner<br/>network</span>
                      </div>
                      <div className="h-px bg-border/50 mb-2" />
                      <p className="text-[10px] text-muted-foreground mb-0.5">{comp.type}</p>
                      <p className="text-xs font-bold text-foreground leading-tight">{comp.name}</p>
                      <p className="text-[9px] text-muted-foreground mt-1">Competency</p>
                      <div className="h-px bg-border/50 my-2" />
                      <p className="text-[9px] text-muted-foreground">Consulting Partner</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 10x SDPs */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Service Delivery Programs</h3>
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-black rounded-lg shadow-lg shadow-primary/30">
                  10x SDPs
                </span>
              </div>
              
              {/* Grid de SDPs estilo badges AWS */}
              <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
                {sdps.map((sdp, index) => (
                  <div
                    key={sdp}
                    className="card-glass p-2 rounded-lg border border-nuage-cyan/20 hover:border-nuage-cyan/50 transition-all duration-300 hover:scale-105 group opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.5 + index * 0.03}s` }}
                  >
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-nuage-cyan block mb-1">aws</span>
                      <p className="text-[9px] font-semibold text-foreground mb-1">PARTNER</p>
                      <div className="h-px bg-nuage-cyan/30 mb-1" />
                      <p className="text-[8px] text-muted-foreground leading-tight">{sdp.replace('AWS ', '').replace('Amazon ', '')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTop3Brasil;
