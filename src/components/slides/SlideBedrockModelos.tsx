import NuageLogo from "./NuageLogo";

const SlideBedrockModelos = () => {
  const models = [
    { name: "Claude", provider: "Anthropic", color: "bg-nuage-cyan" },
    { name: "Titan", provider: "Amazon", color: "bg-nuage-gold" },
    { name: "Llama", provider: "Meta", color: "bg-primary" },
    { name: "Command", provider: "Cohere", color: "bg-nuage-cyan" },
    { name: "Stable Diffusion", provider: "Stability AI", color: "bg-nuage-gold" },
    { name: "Mistral", provider: "Mistral AI", color: "bg-primary" },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Amazon Bedrock
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Hub de <span className="text-gradient-magenta">Modelos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Diversos modelos fundacionais disponíveis em um só lugar
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="pillar-card text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.25 + index * 0.08}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${model.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-black text-background">{model.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{model.name}</h3>
                <p className="text-sm text-muted-foreground">{model.provider}</p>
              </div>
            ))}
          </div>

          <div className="text-center opacity-0 animate-fade-in-up delay-600">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                <span className="text-gradient-gold font-bold">+20 modelos</span> de diferentes provedores disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockModelos;
