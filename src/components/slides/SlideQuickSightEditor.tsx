import NuageLogo from "./NuageLogo";
import { MousePointer, Smartphone } from "lucide-react";
import qsEditor1 from "@/assets/quicksight-editor1.png";
import qsEditor2 from "@/assets/quicksight-editor2.png";

const SlideQuickSightEditor = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-foreground">QUICKSIGHT</span>{" "}
            <span className="text-gradient-magenta">EDITOR</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="opacity-0 animate-fade-in-up delay-100 space-y-4" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-xl p-5 flex items-start gap-3">
              <MousePointer className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                O Editor do QuickSight é reconhecido por sua <span className="text-foreground font-semibold">interface intuitiva</span> que 
                simplifica significativamente a análise de dados. A ferramenta é projetada para ser amigável, com funcionalidades de{" "}
                <span className="text-nuage-cyan font-semibold">arrastar e soltar</span> que facilitam a criação de visualizações e dashboards personalizados.
              </p>
            </div>
            <div className="card-glass rounded-xl p-5 flex items-start gap-3">
              <Smartphone className="w-6 h-6 text-nuage-cyan flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Um dos pontos fortes do QuickSight é sua <span className="text-foreground font-semibold">otimização para dispositivos móveis</span>, 
                que garante acesso fácil e imediato a relatórios e dashboards.
              </p>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-200 space-y-4" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-6 min-h-[140px] flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <ImageIcon className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-muted-foreground/50 text-xs">Imagem 1</p>
              </div>
            </div>
            <div className="card-glass rounded-2xl p-6 min-h-[140px] flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <ImageIcon className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-muted-foreground/50 text-xs">Imagem 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideQuickSightEditor;
