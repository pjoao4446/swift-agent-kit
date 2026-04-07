import NuageLogo from "./NuageLogo";
import icebergImg from "@/assets/iceberg-data.png";

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
          <div className="w-full max-w-4xl">
            <img
              src={icebergImg}
              alt="Iceberg dos Dados - IA Generativa e Analytics acima, Fundação de Dados abaixo"
              className="w-full h-auto rounded-2xl border border-primary/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideJornadaIceberg;
