import transcribeIcon from "@/assets/aws-icons/transcribe.jpg";
import pollyIcon from "@/assets/aws-icons/polly.png";
import textractIcon from "@/assets/aws-icons/textract.png";
import rekognitionIcon from "@/assets/aws-icons/rekognition.png";
import comprehendIcon from "@/assets/aws-icons/comprehend.png";
import translateIcon from "@/assets/aws-icons/translate.png";
import sagemakerIcon from "@/assets/aws-icons/sagemaker.png";
import bedrockIcon from "@/assets/aws-icons/bedrock.png";
import quicksuiteIcon from "@/assets/aws-icons/quicksuite.png";
import kiroIcon from "@/assets/aws-icons/kiro.jpg";

const SlideAWSToolbox = () => {
  const services = [
    { name: "Transcribe", description: "Speech-to-text", icon: transcribeIcon },
    { name: "Polly", description: "Text-to-speech", icon: pollyIcon },
    { name: "Textract", description: "OCR inteligente", icon: textractIcon },
    { name: "Rekognition", description: "Visão computacional", icon: rekognitionIcon },
    { name: "Comprehend", description: "NLP & Análise", icon: comprehendIcon },
    { name: "Translate", description: "Tradução neural", icon: translateIcon },
    { name: "SageMaker", description: "ML Platform", icon: sagemakerIcon },
    { name: "Bedrock", description: "Modelos fundacionais", icon: bedrockIcon },
    { name: "Quick Suite", description: "BI & Automação", icon: quicksuiteIcon },
    { name: "Kiro", description: "IDE agêntico", icon: kiroIcon },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Serviços AWS
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Sua <span className="text-gradient-magenta">Caixa de Ferramentas</span> de IA
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="pillar-card text-center opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.08}s`, animationFillMode: "forwards" }}
            >
              <img src={service.icon} alt={service.name} className="w-12 h-12 mx-auto mb-3 rounded-lg" />
              <h3 className="font-bold text-sm mb-1">{service.name}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
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
  );
};

export default SlideAWSToolbox;
