import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import Slide01Cover from "@/components/slides/Slide01Cover";
import SlideConquistas from "@/components/slides/SlideConquistas";
import SlideTop3Brasil from "@/components/slides/SlideTop3Brasil";
import SlideOfertasServicos from "@/components/slides/SlideOfertasServicos";
// Módulo Dados
import SlideDadosCapa from "@/components/slides/SlideDadosCapa";
import SlideDadosGerados from "@/components/slides/SlideDadosGerados";
import SlideDadosRepresados from "@/components/slides/SlideDadosRepresados";
import SlideDadosDesafio from "@/components/slides/SlideDadosDesafio";
import SlideDadosLabirinto from "@/components/slides/SlideDadosLabirinto";
import SlideCustoDemora from "@/components/slides/SlideCustoDemora";
import SlideDataDrivenCapa from "@/components/slides/SlideDataDrivenCapa";
import SlideDataDrivenConceito from "@/components/slides/SlideDataDrivenConceito";
import SlideJornadaDecisao from "@/components/slides/SlideJornadaDecisao";
import SlideJornadaIceberg from "@/components/slides/SlideJornadaIceberg";
import SlideJornadaInicio from "@/components/slides/SlideJornadaInicio";
import SlideDataLakeVsWarehouse from "@/components/slides/SlideDataLakeVsWarehouse";
import SlidePilaresDataDriven from "@/components/slides/SlidePilaresDataDriven";
import SlideAWSDataDriven from "@/components/slides/SlideAWSDataDriven";
import SlideArquiteturaReferencia from "@/components/slides/SlideArquiteturaReferencia";
import SlideQuickSightIntro from "@/components/slides/SlideQuickSightIntro";
import SlideQuickSightEditor from "@/components/slides/SlideQuickSightEditor";
import SlideQuickSuiteBrief from "@/components/slides/SlideQuickSuiteBrief";
import SlideCaseSurf from "@/components/slides/SlideCaseSurf";
import SlideCaseCleartech from "@/components/slides/SlideCaseCleartech";
// Módulo Infraestrutura
import SlideCoverInfra from "@/components/slides/SlideCoverInfra";
import SlideInfraTI from "@/components/slides/SlideInfraTI";
import SlideLinhaDoTempo from "@/components/slides/SlideLinhaDoTempo";
import SlidePreNuvem from "@/components/slides/SlidePreNuvem";
import SlideRevolucaoNuvem from "@/components/slides/SlideRevolucaoNuvem";
import SlideResponsabilidadeCompartilhada from "@/components/slides/SlideResponsabilidadeCompartilhada";
import SlideConhecaAWS from "@/components/slides/SlideConhecaAWS";
import SlideServicosAWS from "@/components/slides/SlideServicosAWS";
// Módulo IA
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
// Módulo Bedrock
import SlideBedrockIntro from "@/components/slides/SlideBedrockIntro";
import SlideBedrockModelos from "@/components/slides/SlideBedrockModelos";
import SlideBedrockEscolha from "@/components/slides/SlideBedrockEscolha";
import SlideBedrockCustomizacao from "@/components/slides/SlideBedrockCustomizacao";
import SlideBedrockArquitetura from "@/components/slides/SlideBedrockArquitetura";
// Encerramento
import Slide19NextSteps from "@/components/slides/Slide19NextSteps";
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const slides = [
  // Módulo 1: Abertura NuageIT
  Slide01Cover,
  SlideConquistas,
  SlideTop3Brasil,
  SlideOfertasServicos,
  // Módulo Dados
  SlideDadosCapa,
  SlideDadosGerados,
  SlideDadosRepresados,
  SlideDadosDesafio,
  SlideDadosLabirinto,
  SlideCustoDemora,
  SlideDataDrivenCapa,
  SlideDataDrivenConceito,
  SlideJornadaDecisao,
  SlideJornadaIceberg,
  SlideJornadaInicio,
  SlideDataLakeVsWarehouse,
  SlidePilaresDataDriven,
  SlideAWSDataDriven,
  SlideArquiteturaReferencia,
  SlideQuickSightIntro,
  SlideQuickSightEditor,
  SlideQuickSuiteBrief,
  SlideCaseSurf,
  SlideCaseCleartech,
  // Módulo Infraestrutura
  SlideCoverInfra,
  SlideInfraTI,
  SlideLinhaDoTempo,
  SlidePreNuvem,
  SlideRevolucaoNuvem,
  SlideResponsabilidadeCompartilhada,
  SlideConhecaAWS,
  SlideServicosAWS,
  // Módulo IA
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
  // Módulo Bedrock
  SlideBedrockIntro,
  SlideBedrockModelos,
  SlideBedrockEscolha,
  SlideBedrockCustomizacao,
  SlideBedrockArquitetura,
  // Encerramento
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
