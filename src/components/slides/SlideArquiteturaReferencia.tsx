import NuageLogo from "./NuageLogo";
import { Layout, ImageIcon } from "lucide-react";

const SlideArquiteturaReferencia = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">ARQUITETURA DE</span>{" "}
            <span className="text-gradient-cyan">REFERÊNCIA</span>
          </h2>
        </div>

        <div className="w-full max-w-5xl opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="card-glass rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground/50 text-sm">Espaço reservado para diagrama de arquitetura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideArquiteturaReferencia;
