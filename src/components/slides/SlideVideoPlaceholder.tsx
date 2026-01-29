import NuageLogo from "./NuageLogo";
import { Play, Video } from "lucide-react";

interface SlideVideoPlaceholderProps {
  title: string;
  subtitle?: string;
  accentColor?: "magenta" | "cyan" | "gold";
}

const SlideVideoPlaceholder = ({ 
  title, 
  subtitle = "Demonstração ao vivo",
  accentColor = "magenta" 
}: SlideVideoPlaceholderProps) => {
  const colorClasses = {
    magenta: {
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/30 hover:border-primary/60",
      icon: "text-primary",
      glow: "shadow-primary/20",
    },
    cyan: {
      gradient: "from-nuage-cyan/20 to-nuage-cyan/5",
      border: "border-nuage-cyan/30 hover:border-nuage-cyan/60",
      icon: "text-nuage-cyan",
      glow: "shadow-nuage-cyan/20",
    },
    gold: {
      gradient: "from-nuage-gold/20 to-nuage-gold/5",
      border: "border-nuage-gold/30 hover:border-nuage-gold/60",
      icon: "text-nuage-gold",
      glow: "shadow-nuage-gold/20",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
            {title.split(' - ')[0]} - <span className="text-gradient-magenta">{title.split(' - ')[1] || 'ADICIONE O TÍTULO AQUI'}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Video Container */}
        <div className="flex-1 max-w-5xl mx-auto w-full opacity-0 animate-scale-in delay-200">
          <div 
            className={`
              card-glass rounded-2xl border-2 ${colors.border} 
              h-full min-h-[400px] 
              flex flex-col items-center justify-center 
              transition-all duration-500 
              bg-gradient-to-br ${colors.gradient}
              shadow-xl ${colors.glow}
              group cursor-pointer
            `}
          >
            {/* Play Button */}
            <div className={`
              w-24 h-24 rounded-full 
              bg-background/50 backdrop-blur
              flex items-center justify-center 
              mb-6 
              group-hover:scale-110 transition-transform duration-300
              border border-border/50
            `}>
              <Play className={`w-12 h-12 ${colors.icon} ml-1`} />
            </div>

            {/* Video Icon */}
            <div className="flex items-center gap-3 mb-4">
              <Video className={`w-6 h-6 ${colors.icon}`} />
              <span className="text-lg font-semibold text-foreground">Espaço para Vídeo</span>
            </div>

            {/* Instructions */}
            <p className="text-sm text-muted-foreground text-center max-w-md px-4">
              Clique para reproduzir o vídeo demonstrativo ou insira o embed do vídeo aqui
            </p>

            {/* Aspect Ratio Indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-muted-foreground/50">
              <span className="px-2 py-1 rounded bg-background/30">16:9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideVideoPlaceholder;
