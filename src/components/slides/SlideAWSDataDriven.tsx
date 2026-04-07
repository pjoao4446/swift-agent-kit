import NuageLogo from "./NuageLogo";
import awsDiagram from "@/assets/aws-data-driven-diagram.png";

const SlideAWSDataDriven = () => {
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
          <img
            src={awsDiagram}
            alt="Diagrama de serviços AWS para jornada Data-Driven"
            className="w-full max-w-5xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideAWSDataDriven;
