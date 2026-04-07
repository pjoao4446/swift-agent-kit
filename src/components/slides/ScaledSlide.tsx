import { useEffect, useState, useRef, ReactNode } from "react";

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;

interface ScaledSlideProps {
  children: ReactNode;
}

const ScaledSlide = ({ children }: ScaledSlideProps) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
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
      className="w-screen h-screen overflow-hidden bg-background relative"
    >
      <div
        className="absolute"
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
