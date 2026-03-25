import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import Slide01Cover from "@/components/slides/Slide01Cover";
import SlideConquistas from "@/components/slides/SlideConquistas";
import SlideTop3Brasil from "@/components/slides/SlideTop3Brasil";
import SlideOfertasServicos from "@/components/slides/SlideOfertasServicos";
import SlideCoverInfra from "@/components/slides/SlideCoverInfra";
import SlideInfraTI from "@/components/slides/SlideInfraTI";
import SlideLinhaDoTempo from "@/components/slides/SlideLinhaDoTempo";
import SlidePreNuvem from "@/components/slides/SlidePreNuvem";
import SlideRevolucaoNuvem from "@/components/slides/SlideRevolucaoNuvem";
import SlideResponsabilidadeCompartilhada from "@/components/slides/SlideResponsabilidadeCompartilhada";
import SlideConhecaAWS from "@/components/slides/SlideConhecaAWS";
import SlideServicosAWS from "@/components/slides/SlideServicosAWS";
import SlideCoverIA from "@/components/slides/SlideCoverIA";
import SlideAIOrigin from "@/components/slides/SlideAIOrigin";
import SlideIATradicional from "@/components/slides/SlideIATradicional";
import SlideMachineLearning from "@/components/slides/SlideMachineLearning";
import SlideDeepLearning from "@/components/slides/SlideDeepLearning";
import SlideIAGenerativa from "@/components/slides/SlideIAGenerativa";
import SlideModelosFundacionais from "@/components/slides/SlideModelosFundacionais";
import SlideDadosDiferencial from "@/components/slides/SlideDadosDiferencial";
import SlideAWSSimplificaNovo from "@/components/slides/SlideAWSSimplificaNovo";
import SlideAWSToolbox from "@/components/slides/SlideAWSToolbox";
import SlideBedrockIntro from "@/components/slides/SlideBedrockIntro";
import SlideBedrockModelos from "@/components/slides/SlideBedrockModelos";
import SlideBedrockEscolha from "@/components/slides/SlideBedrockEscolha";
import SlideBedrockCustomizacao from "@/components/slides/SlideBedrockCustomizacao";
import SlideBedrockArquitetura from "@/components/slides/SlideBedrockArquitetura";
import Slide19NextSteps from "@/components/slides/Slide19NextSteps";
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const slides = [
  // Módulo 1: Abertura NuageIT
  Slide01Cover,
  SlideConquistas,
  SlideTop3Brasil,
  SlideOfertasServicos,
  // Módulo Infraestrutura de Tecnologia
  SlideCoverInfra,
  SlideInfraTI,
  SlideLinhaDoTempo,
  SlidePreNuvem,
  SlideRevolucaoNuvem,
  SlideResponsabilidadeCompartilhada,
  SlideConhecaAWS,
  SlideServicosAWS,
  // Módulo 2: Capa IA + Evolução
  SlideCoverIA,
  SlideAIOrigin,
  SlideIATradicional,
  SlideMachineLearning,
  SlideDeepLearning,
  SlideIAGenerativa,
  SlideModelosFundacionais,
  SlideDadosDiferencial,
  SlideAWSSimplificaNovo,
  SlideAWSToolbox,
  // Módulo 3: Amazon Bedrock
  SlideBedrockIntro,
  SlideBedrockModelos,
  SlideBedrockEscolha,
  SlideBedrockCustomizacao,
  SlideBedrockArquitetura,
  // Módulo 6: Encerramento
  Slide19NextSteps,
  Slide20ThankYou,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        key={currentSlide}
        className="animate-fade-in"
      >
        <CurrentSlideComponent />
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
    </div>
  );
};

export default Index;
