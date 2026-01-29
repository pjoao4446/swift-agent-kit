import NuageLogo from "./NuageLogo";
import { MoreHorizontal } from "lucide-react";

const SlideBedrockModelos = () => {
  const models = [
    { name: "Claude", provider: "Anthropic", color: "bg-nuage-cyan" },
    { name: "Titan", provider: "Amazon", color: "bg-nuage-gold" },
    { name: "Llama", provider: "Meta", color: "bg-primary" },
    { name: "Command", provider: "Cohere", color: "bg-nuage-cyan" },
    { name: "Stable Diffusion", provider: "Stability AI", color: "bg-nuage-gold" },
    { name: "Mistral", provider: "Mistral AI", color: "bg-primary" },
    { name: "Jamba", provider: "AI21 Labs", color: "bg-nuage-cyan" },
    { name: "Nova", provider: "Amazon", color: "bg-nuage-gold" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Hub de <span className="text-gradient-magenta">Modelos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Diversos modelos fundacionais disponíveis em um só lugar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="pillar-card text-center py-4 opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.15 + index * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${model.color} flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-xl font-black text-background">{model.name.charAt(0)}</span>
                </div>
                <h3 className="text-sm font-bold mb-1">{model.name}</h3>
                <p className="text-xs text-muted-foreground">{model.provider}</p>
              </div>
            ))}
            
            {/* More models indicator */}
            <div
              className="pillar-card text-center py-4 opacity-0 animate-scale-in flex flex-col items-center justify-center"
              style={{ animationDelay: `${0.15 + models.length * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto mb-3">
                <MoreHorizontal className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-bold mb-1">E mais...</h3>
              <p className="text-xs text-muted-foreground">muitos outros</p>
            </div>

            {/* Ghost cards to show infinity */}
            <div
              className="pillar-card text-center py-4 opacity-0 animate-scale-in bg-secondary/20 border-dashed"
              style={{ animationDelay: `${0.15 + (models.length + 1) * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-black text-muted-foreground/50">?</span>
              </div>
              <h3 className="text-sm font-bold mb-1 text-muted-foreground/50">Novo</h3>
              <p className="text-xs text-muted-foreground/50">Em breve</p>
            </div>
          </div>

          <div className="text-center opacity-0 animate-fade-in-up delay-500">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                <span className="text-gradient-gold font-bold">+200 modelos</span> de diferentes provedores disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockModelos;
