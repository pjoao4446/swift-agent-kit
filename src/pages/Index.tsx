import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Purpose from "@/components/slides/Slide02Purpose";
import SlideConquistas from "@/components/slides/SlideConquistas";
import SlideTop3Brasil from "@/components/slides/SlideTop3Brasil";
import SlideOfertasServicos from "@/components/slides/SlideOfertasServicos";
import SlideCoverIA from "@/components/slides/SlideCoverIA";
import Slide04AWSSimplifies from "@/components/slides/Slide04AWSSimplifies";
import Slide05Toolbox from "@/components/slides/Slide05Toolbox";
import Slide06GenAIPotential from "@/components/slides/Slide06GenAIPotential";
import Slide07KiroIntro from "@/components/slides/Slide07KiroIntro";
import Slide08KiroUseCases from "@/components/slides/Slide08KiroUseCases";
import Slide09KiroVsCopilot from "@/components/slides/Slide09KiroVsCopilot";
import Slide10KiroVsCursor from "@/components/slides/Slide10KiroVsCursor";
import Slide11QuickSuiteCapabilities from "@/components/slides/Slide11QuickSuiteCapabilities";
import Slide12Spaces from "@/components/slides/Slide12Spaces";
import Slide13BrowserExtension from "@/components/slides/Slide13BrowserExtension";
import Slide14QuickSuiteDifferentials from "@/components/slides/Slide14QuickSuiteDifferentials";
import Slide15AgentCoreIntro from "@/components/slides/Slide15AgentCoreIntro";
import Slide16SevenPillars from "@/components/slides/Slide16SevenPillars";
import Slide17TechnicalDetail from "@/components/slides/Slide17TechnicalDetail";
import Slide18UseCases from "@/components/slides/Slide18UseCases";
import Slide19NextSteps from "@/components/slides/Slide19NextSteps";
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const slides = [
  Slide01Cover,
  Slide02Purpose,
  SlideConquistas,
  SlideTop3Brasil,
  SlideOfertasServicos,
  SlideCoverIA,
  Slide04AWSSimplifies,
  Slide05Toolbox,
  Slide06GenAIPotential,
  Slide07KiroIntro,
  Slide08KiroUseCases,
  Slide09KiroVsCopilot,
  Slide10KiroVsCursor,
  Slide11QuickSuiteCapabilities,
  Slide12Spaces,
  Slide13BrowserExtension,
  Slide14QuickSuiteDifferentials,
  Slide15AgentCoreIntro,
  Slide16SevenPillars,
  Slide17TechnicalDetail,
  Slide18UseCases,
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
