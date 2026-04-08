
// Import AWS service icons
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
    </div>
  );
};

export default SlideAWSToolbox;
