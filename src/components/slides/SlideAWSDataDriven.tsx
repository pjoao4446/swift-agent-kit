import NuageLogo from "./NuageLogo";

const SlideAWSDataDriven = () => {
  const services = [
    { name: "Amazon S3", angle: -1, isCenter: true },
    { name: "OpenSearch", angle: 0 },
    { name: "Kinesis", angle: 30 },
    { name: "MSK", angle: 60 },
    { name: "SageMaker", angle: 90 },
    { name: "QuickSight", angle: 120 },
    { name: "Lake Formation", angle: 150 },
    { name: "DataZone", angle: 180 },
    { name: "Athena", angle: 210 },
    { name: "EMR", angle: 240 },
    { name: "AI Services", angle: 270 },
    { name: "Redshift", angle: 300 },
    { name: "Glue", angle: 330 },
  ];

  const outerServices = services.filter((s) => !s.isCenter);
  const radius = 180;
  const cx = 300;
  const cy = 240;

  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">COMO A AWS SIMPLIFICA A SUA</span>{" "}
            <span className="text-gradient-cyan">JORNADA DATA-DRIVEN</span>
          </h2>
        </div>

        <div className="flex justify-center opacity-0 animate-fade-in-up delay-200">
          <svg viewBox="0 0 600 480" className="w-full max-w-3xl">
            {/* Connection lines */}
            {outerServices.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180;
              const x = cx + radius * Math.cos(rad);
              const y = cy + radius * Math.sin(rad);
              return (
                <line
                  key={`line-${i}`}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                </line>
              );
            })}

            {/* Center - S3 */}
            <circle cx={cx} cy={cy} r="45" fill="hsl(var(--primary))" opacity="0.2" />
            <circle cx={cx} cy={cy} r="35" fill="hsl(var(--primary))" opacity="0.3" />
            <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Amazon</text>
            <text x={cx} y={cy + 12} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">S3</text>

            {/* Outer services */}
            {outerServices.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180;
              const x = cx + radius * Math.cos(rad);
              const y = cy + radius * Math.sin(rad);
              return (
                <g key={`svc-${i}`}>
                  <circle cx={x} cy={y} r="28" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
                  <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                    {s.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SlideAWSDataDriven;
