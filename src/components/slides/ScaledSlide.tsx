import { useEffect, useState, useRef, ReactNode } from "react";

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

interface ScaledSlideProps {
  children: ReactNode;
}

const ScaledSlide = ({ children }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = window.innerHeight / BASE_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-background"
    >
      <div
        className="absolute origin-center"
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          left: "50%",
          top: "50%",
          marginLeft: `-${BASE_WIDTH / 2}px`,
          marginTop: `-${BASE_HEIGHT / 2}px`,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
