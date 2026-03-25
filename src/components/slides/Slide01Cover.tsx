import NuageLogo from "./NuageLogo";
import unicepLogo from "@/assets/logouniceplac.png";

const Slide01Cover = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="network-lines" />

      {/* Main Content */}
      <div className="slide-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-8">
            AWS Partner Network
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="text-foreground">AMAZON DAY</span>
          <br />
          <span className="text-gradient-magenta">UNICEPLAC</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 opacity-0 animate-fade-in-up delay-200">
          Transformando o seu negócio através de tecnologias de{" "}
          <span className="text-nuage-cyan font-semibold">inteligência artificial</span> na{" "}
          <span className="text-nuage-cyan font-semibold">AWS</span>
        </p>

        <div className="flex gap-4 opacity-0 animate-fade-in-up delay-300">
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-magenta">
            Iniciar Amazon Day
          </button>
        </div>

        <div className="mt-10 opacity-0 animate-fade-in-up delay-500 flex items-center justify-center gap-6">
          <NuageLogo className="h-14 md:h-16" />
          <img src={unicepLogo} alt="Uniceplac" className="h-16 md:h-19 object-contain rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
