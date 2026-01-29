import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Purpose from "@/components/slides/Slide02Purpose";
import SlideConquistas from "@/components/slides/SlideConquistas";
import SlideTop3Brasil from "@/components/slides/SlideTop3Brasil";
import SlideOfertasServicos from "@/components/slides/SlideOfertasServicos";
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
import SlideCoverNovidades2026 from "@/components/slides/SlideCoverNovidades2026";
import SlideCoverKiro from "@/components/slides/SlideCoverKiro";
import Slide07KiroIntro from "@/components/slides/Slide07KiroIntro";
import Slide08KiroUseCases from "@/components/slides/Slide08KiroUseCases";
import Slide09KiroVsCopilot from "@/components/slides/Slide09KiroVsCopilot";
import Slide10KiroVsCursor from "@/components/slides/Slide10KiroVsCursor";
import SlideCoverQuickSuite from "@/components/slides/SlideCoverQuickSuite";
import Slide11QuickSuiteCapabilities from "@/components/slides/Slide11QuickSuiteCapabilities";
import Slide12Spaces from "@/components/slides/Slide12Spaces";
import SlideQuickSuiteIntegracoes from "@/components/slides/SlideQuickSuiteIntegracoes";
import Slide13BrowserExtension from "@/components/slides/Slide13BrowserExtension";
import Slide14QuickSuiteDifferentials from "@/components/slides/Slide14QuickSuiteDifferentials";
import SlideCoverAgentCore from "@/components/slides/SlideCoverAgentCore";
import Slide15AgentCoreIntro from "@/components/slides/Slide15AgentCoreIntro";
import Slide16SevenPillars from "@/components/slides/Slide16SevenPillars";
import Slide17TechnicalDetail from "@/components/slides/Slide17TechnicalDetail";
import Slide18UseCases from "@/components/slides/Slide18UseCases";
import Slide19NextSteps from "@/components/slides/Slide19NextSteps";
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const slides = [
  // Módulo 1: Abertura NuageIT
  Slide01Cover,
  Slide02Purpose,
  SlideConquistas,
  SlideTop3Brasil,
  SlideOfertasServicos,
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
  // Capa Novidades 2026
  SlideCoverNovidades2026,
  // Módulo 4: Amazon Kiro
  SlideCoverKiro,
  Slide07KiroIntro,
  Slide08KiroUseCases,
  Slide09KiroVsCopilot,
  Slide10KiroVsCursor,
  // Módulo 5: Quick Suite
  SlideCoverQuickSuite,
  Slide11QuickSuiteCapabilities,
  Slide12Spaces,
  SlideQuickSuiteIntegracoes,
  Slide13BrowserExtension,
  Slide14QuickSuiteDifferentials,
  // Módulo 6: AgentCore
  SlideCoverAgentCore,
  Slide15AgentCoreIntro,
  Slide16SevenPillars,
  Slide17TechnicalDetail,
  Slide18UseCases,
  // Módulo 7: Encerramento
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
