import NuageLogo from "./NuageLogo";
import awsLogo from "@/assets/aws-logo.png";

const Slide01Cover = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-8">
            AWS Partner Network
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="text-foreground">EVENTO</span>
          <br />
          <span className="text-gradient-magenta">DATA FOUNDATION</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Descubra como transformar{" "}
          <span className="text-nuage-cyan font-semibold">dados em vantagem competitiva</span>{" "}
          e construir uma{" "}
          <span className="text-nuage-cyan font-semibold">fundação sólida para decisões inteligentes</span>
        </p>

        <div className="flex gap-4 opacity-0 animate-fade-in-up delay-300">
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-magenta">
            Iniciar Evento
          </button>
        </div>

        <div className="mt-10 opacity-0 animate-fade-in-up delay-500 flex items-center justify-center gap-6">
          <NuageLogo className="h-14 md:h-16" />
          <img src={awsLogo} alt="AWS" className="h-10 md:h-12 object-contain brightness-0 invert" />
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
