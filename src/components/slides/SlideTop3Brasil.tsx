import NuageLogo from "./NuageLogo";

const SlideTop3Brasil = () => {
  const competencias = [
    "Networking",
    "SMB",
    "Cloud Operations",
    "Security",
    "DevOps",
    "Data & Analytics",
    "Education",
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
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
          {/* Left Side - TOP 3 */}
          <div className="text-center lg:text-left opacity-0 animate-slide-in-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="text-sm font-semibold text-muted-foreground">aws</span>
              <span className="text-xs text-muted-foreground">partner network</span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded">
                Advanced Consulting Partner
              </span>
            </div>
            
            <div className="flex items-end gap-4 mb-8">
              <span className="text-7xl md:text-9xl font-black text-foreground/10">TOP</span>
              <span className="text-[180px] md:text-[220px] font-black text-gradient-magenta leading-none">3</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground/80">
              BRASIL
            </h2>
          </div>

          {/* Right Side - Competencies & SDPs */}
          <div className="space-y-6 opacity-0 animate-slide-in-right delay-200">
            {/* Competências */}
            <div className="pillar-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Competências AWS</h3>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  7x COMPETÊNCIAS
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {competencias.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1.5 bg-card/50 border border-border/50 rounded-lg text-sm font-medium text-foreground"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* SDPs */}
            <div className="pillar-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Service Delivery Programs</h3>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  10x SDPs
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sdps.map((sdp) => (
                  <span
                    key={sdp}
                    className="px-3 py-1.5 bg-card/50 border border-border/50 rounded-lg text-xs font-medium text-muted-foreground"
                  >
                    {sdp}
                  </span>
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
