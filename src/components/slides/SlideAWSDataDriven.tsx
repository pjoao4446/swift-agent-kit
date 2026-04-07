import NuageLogo from "./NuageLogo";
import awsS3 from "@/assets/aws-s3.png";
import awsRedshift from "@/assets/aws-redshift.png";
import awsGlue from "@/assets/aws-glue.png";
import awsQuicksight from "@/assets/aws-quicksight.png";
import awsKinesis from "@/assets/aws-kinesis.png";
import awsLakeformation from "@/assets/aws-lakeformation.png";
import awsSagemaker from "@/assets/aws-sagemaker.png";
import awsEmr from "@/assets/aws-emr.png";

const SlideAWSDataDriven = () => {
  const services = [
    { name: "OpenSearch", angle: 0, icon: awsQuicksight },
    { name: "Kinesis", angle: 30, icon: awsKinesis },
    { name: "MSK", angle: 60, icon: awsKinesis },
    { name: "SageMaker", angle: 90, icon: awsSagemaker },
    { name: "QuickSight", angle: 120, icon: awsQuicksight },
    { name: "Lake Formation", angle: 150, icon: awsLakeformation },
    { name: "DataZone", angle: 180, icon: awsRedshift },
    { name: "Athena", angle: 210, icon: awsEmr },
    { name: "EMR", angle: 240, icon: awsEmr },
    { name: "AI Services", angle: 270, icon: awsSagemaker },
    { name: "Redshift", angle: 300, icon: awsRedshift },
    { name: "Glue", angle: 330, icon: awsGlue },
  ];

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
            {services.map((s, i) => {
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
            <circle cx={cx} cy={cy} r="35" fill="hsl(var(--primary))" opacity="0.1" />
            <clipPath id="clip-center">
              <circle cx={cx} cy={cy} r="32" />
            </clipPath>
            <image href={awsS3} x={cx - 32} y={cy - 32} width="64" height="64" clipPath="url(#clip-center)" />
            <text x={cx} y={cy + 48} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Amazon S3</text>

            {/* Outer services */}
            {services.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180;
              const x = cx + radius * Math.cos(rad);
              const y = cy + radius * Math.sin(rad);
              const clipId = `clip-svc-${i}`;
              return (
                <g key={`svc-${i}`}>
                  <circle cx={x} cy={y} r="28" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
                  <clipPath id={clipId}>
                    <circle cx={x} cy={y} r="22" />
                  </clipPath>
                  <image href={s.icon} x={x - 22} y={y - 22} width="44" height="44" clipPath={`url(#${clipId})`} />
                  <text x={x} y={y + 36} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
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
