import { MoreHorizontal } from "lucide-react";

import mistralLogo from "@/assets/model-providers/mistral.png";
import stabilityLogo from "@/assets/model-providers/stability.png";
import ai21Logo from "@/assets/model-providers/ai21labs.png";
import amazonLogo from "@/assets/model-providers/amazon.png";
import cohereLogo from "@/assets/model-providers/cohere.png";
import metaLogo from "@/assets/model-providers/meta.png";

const SlideBedrockModelos = () => {
  const models = [
    { name: "Claude", provider: "Anthropic", logo: null, initial: "C", color: "bg-nuage-cyan" },
    { name: "Titan", provider: "Amazon", logo: amazonLogo },
    { name: "Llama", provider: "Meta", logo: metaLogo },
    { name: "Command", provider: "Cohere", logo: cohereLogo },
    { name: "Stable Diffusion", provider: "Stability AI", logo: stabilityLogo },
    { name: "Mistral", provider: "Mistral AI", logo: mistralLogo },
    { name: "Jamba", provider: "AI21 Labs", logo: ai21Logo },
    { name: "Nova", provider: "Amazon", logo: amazonLogo },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Modelos <span className="text-gradient-magenta">Disponíveis</span>
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="pillar-card text-center py-4 opacity-0 animate-scale-in flex flex-col items-center justify-center"
              style={{ animationDelay: `${0.15 + index * 0.05}s` }}
            >
              <div className="w-16 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-3 overflow-hidden">
                {model.logo ? (
                  <img src={model.logo} alt={model.provider} className="w-10 h-10 object-contain" />
                ) : (
                  <span className="text-xl font-black text-primary">{model.initial}</span>
                )}
              </div>
              <h3 className="text-sm font-bold mb-1">{model.name}</h3>
              <p className="text-sm text-muted-foreground">{model.provider}</p>
            </div>
          ))}

          <div
            className="pillar-card text-center py-4 opacity-0 animate-scale-in flex flex-col items-center justify-center"
            style={{ animationDelay: `${0.15 + models.length * 0.05}s` }}
          >
            <div className="w-16 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto mb-3">
              <MoreHorizontal className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-sm font-bold mb-1">E mais...</h3>
            <p className="text-sm text-muted-foreground">muitos outros</p>
          </div>

          <div
            className="pillar-card text-center py-4 opacity-0 animate-scale-in bg-secondary/20 border-dashed"
            style={{ animationDelay: `${0.15 + (models.length + 1) * 0.05}s` }}
          >
            <div className="w-16 h-12 rounded-xl bg-muted/30 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-black text-muted-foreground/50">?</span>
            </div>
            <h3 className="text-sm font-bold mb-1 text-muted-foreground/50">Novo</h3>
            <p className="text-sm text-muted-foreground/50">Em breve</p>
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
  );
};

export default SlideBedrockModelos;
