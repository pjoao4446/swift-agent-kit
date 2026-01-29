import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavigationProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-2 rounded-full card-glass hover:bg-primary/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>

      <div className="flex items-center gap-1.5 px-3 py-1.5 card-glass rounded-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-4"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full card-glass hover:bg-primary/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      <div className="px-2 py-1 card-glass rounded-full text-xs font-medium">
        {currentSlide + 1}/{totalSlides}
      </div>
    </div>
  );
};

export default SlideNavigation;
