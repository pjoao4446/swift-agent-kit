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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-3 rounded-full card-glass hover:bg-primary/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-6"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full card-glass hover:bg-primary/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="ml-4 px-4 py-2 card-glass rounded-full text-sm font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default SlideNavigation;
