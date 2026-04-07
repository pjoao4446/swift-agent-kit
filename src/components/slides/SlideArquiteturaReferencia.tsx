import NuageLogo from "./NuageLogo";
import arquitetura from "@/assets/arquitetura-referencia.png";

const SlideArquiteturaReferencia = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">ARQUITETURA DE</span>{" "}
            <span className="text-gradient-cyan">REFERÊNCIA</span>
          </h2>
        </div>

        <div className="w-full max-w-6xl opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
          <img
            src={arquitetura}
            alt="Arquitetura de Referência AWS"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideArquiteturaReferencia;
