import NuageLogo from "./NuageLogo";
import { Mic, Volume2, FileText, Eye, MessageCircle, Languages, Bot, Brain, Layers, Code } from "lucide-react";

const SlideAWSToolbox = () => {
  const services = [
    { name: "Transcribe", description: "Speech-to-text", icon: Mic, color: "bg-nuage-cyan" },
    { name: "Polly", description: "Text-to-speech", icon: Volume2, color: "bg-primary" },
    { name: "Textract", description: "OCR inteligente", icon: FileText, color: "bg-nuage-gold" },
    { name: "Rekognition", description: "Visão computacional", icon: Eye, color: "bg-nuage-cyan" },
    { name: "Comprehend", description: "NLP & Análise", icon: MessageCircle, color: "bg-primary" },
    { name: "Translate", description: "Tradução neural", icon: Languages, color: "bg-nuage-gold" },
    { name: "Lex", description: "Chatbots", icon: Bot, color: "bg-nuage-cyan" },
    { name: "SageMaker", description: "ML Platform", icon: Brain, color: "bg-primary" },
    { name: "Bedrock", description: "Modelos fundacionais", icon: Layers, color: "bg-nuage-gold" },
    { name: "Kiro", description: "IDE agêntico", icon: Code, color: "bg-primary" },
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
            Ecossistema AWS AI
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Caixa de <span className="text-gradient-magenta">Ferramentas</span> AWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Serviços especializados para cada necessidade de IA
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="pillar-card text-center py-6 opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-3`}>
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-bold text-sm mb-1">{service.name}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 opacity-0 animate-fade-in-up delay-700">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                Todos integrados e prontos para uso via <span className="text-gradient-gold font-bold">APIs da AWS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAWSToolbox;
