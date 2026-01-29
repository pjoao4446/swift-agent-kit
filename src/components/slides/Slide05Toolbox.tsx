import NuageLogo from "./NuageLogo";
import { Mic, Eye, MessageSquare, Brain, Image, FileText } from "lucide-react";

const Slide05Toolbox = () => {
  const tools = [
    {
      icon: Mic,
      name: "Transcribe",
      description: "Speech-to-Text automático com alta precisão",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Eye,
      name: "Rekognition",
      description: "Análise de imagens e vídeos com ML",
      color: "bg-nuage-cyan/20 text-nuage-cyan",
    },
    {
      icon: Brain,
      name: "Bedrock",
      description: "Foundation Models gerenciados",
      color: "bg-nuage-gold/20 text-nuage-gold",
    },
    {
      icon: MessageSquare,
      name: "Lex",
      description: "Chatbots conversacionais inteligentes",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Image,
      name: "Textract",
      description: "Extração de texto de documentos",
      color: "bg-nuage-cyan/20 text-nuage-cyan",
    },
    {
      icon: FileText,
      name: "Comprehend",
      description: "NLP e análise de sentimentos",
      color: "bg-nuage-gold/20 text-nuage-gold",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 2 • Ecossistema AWS AI
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Toolbox de <span className="text-gradient-magenta">IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Serviços gerenciados prontos para uso em produção
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="pillar-card group opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in-up delay-700">
          <p className="text-muted-foreground">
            E mais de <span className="text-primary font-bold">25+ serviços</span> de IA/ML disponíveis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide05Toolbox;
