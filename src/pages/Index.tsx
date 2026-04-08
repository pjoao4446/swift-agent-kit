import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import ScaledSlide from "@/components/slides/ScaledSlide";
import Slide01Cover from "@/components/slides/Slide01Cover";
// Módulo IA
import SlideCoverIA from "@/components/slides/SlideCoverIA";
import SlideEvolucaoIA from "@/components/slides/SlideEvolucaoIA";
import SlideModelosFundacionais from "@/components/slides/SlideModelosFundacionais";
import SlideDadosDiferencial from "@/components/slides/SlideDadosDiferencial";
import SlideAWSSimplificaNovo from "@/components/slides/SlideAWSSimplificaNovo";
import SlideAWSToolbox from "@/components/slides/SlideAWSToolbox";
// Módulo Bedrock
import SlideBedrockIntro from "@/components/slides/SlideBedrockIntro";
import SlideBedrockModelos from "@/components/slides/SlideBedrockModelos";
import SlideBedrockEscolha from "@/components/slides/SlideBedrockEscolha";
import SlideBedrockCustomizacao from "@/components/slides/SlideBedrockCustomizacao";
import SlideBedrockArquitetura from "@/components/slides/SlideBedrockArquitetura";
// Produtos
import SlideQuickSuiteProduct from "@/components/slides/SlideQuickSuiteProduct";
import SlideKiroProduct from "@/components/slides/SlideKiroProduct";
// Encerramento
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const slides = [
  // Capa
  Slide01Cover,
  // Módulo IA
  SlideEvolucaoIA,
  SlideModelosFundacionais,
  SlideDadosDiferencial,
  SlideAWSSimplificaNovo,
  SlideAWSToolbox,
  // Módulo Bedrock
  SlideBedrockIntro,
  SlideBedrockModelos,
  SlideBedrockEscolha,
  SlideBedrockCustomizacao,
  SlideBedrockArquitetura,
  // Produtos
  SlideQuickSuiteProduct,
  SlideKiroProduct,
  // Encerramento
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

  const safeIndex = Math.min(currentSlide, slides.length - 1);
  const CurrentSlideComponent = slides[safeIndex];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <ScaledSlide>
        <div key={currentSlide} className="animate-fade-in">
          <CurrentSlideComponent />
        </div>
      </ScaledSlide>
      
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
