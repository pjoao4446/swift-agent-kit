import { useState, ComponentType } from "react";
import { Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ExportPDFButtonProps {
  slides: ComponentType[];
}

const ExportPDFButton = ({ slides }: ExportPDFButtonProps) => {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const exportToPDF = async () => {
    setExporting(true);
    setProgress(0);

    // Inject a global style to force all animated elements to their final visible state
    const overrideStyle = document.createElement("style");
    overrideStyle.id = "pdf-export-overrides";
    overrideStyle.textContent = `
      .pdf-export-container * {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
        transition: none !important;
        animation-delay: 0s !important;
        animation-fill-mode: forwards !important;
      }
      .pdf-export-container .particles,
      .pdf-export-container .network-lines {
        display: none !important;
      }
      .pdf-export-container .slide {
        overflow: hidden !important;
      }
      /* html2canvas does not support background-clip:text – replace gradient text with solid colors */
      .pdf-export-container .text-gradient-magenta,
      .pdf-export-container .text-gradient-cyan,
      .pdf-export-container .text-gradient-gold {
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
        background: none !important;
      }
      .pdf-export-container .text-gradient-magenta {
        color: #FF007A !important;
      }
      .pdf-export-container .text-gradient-cyan {
        color: #00d4ff !important;
      }
      .pdf-export-container .text-gradient-gold {
        color: #f0a500 !important;
      }
    `;
    document.head.appendChild(overrideStyle);

    try {
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });

      const container = document.createElement("div");
      container.className = "pdf-export-container";
      container.style.position = "fixed";
      container.style.left = "-9999px";
      container.style.top = "0";
      container.style.width = "1280px";
      container.style.height = "720px";
      container.style.overflow = "hidden";
      container.style.zIndex = "-1";
      document.body.appendChild(container);

      for (let i = 0; i < slides.length; i++) {
        setProgress(Math.round(((i + 1) / slides.length) * 100));

        const slideWrapper = document.createElement("div");
        slideWrapper.style.width = "1280px";
        slideWrapper.style.height = "720px";
        slideWrapper.style.position = "relative";
        slideWrapper.style.overflow = "hidden";
        container.innerHTML = "";
        container.appendChild(slideWrapper);

        const { createRoot } = await import("react-dom/client");
        const SlideComp = slides[i];

        await new Promise<void>((resolve) => {
          const root = createRoot(slideWrapper);
          root.render(
            <div style={{ width: 1280, height: 720, position: "relative", overflow: "hidden" }}>
              <SlideComp />
            </div>
          );
          setTimeout(() => {
            resolve();
          }, 1000);
        });

        const canvas = await html2canvas(slideWrapper, {
          width: 1280,
          height: 720,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#0f0a2e",
          logging: false,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720);
      }

      document.body.removeChild(container);
      document.head.removeChild(overrideStyle);
      pdf.save("NuageIT-Apresentacao.pdf");
    } catch (err) {
      console.error("Erro ao exportar PDF:", err);
      if (document.getElementById("pdf-export-overrides")) {
        document.head.removeChild(overrideStyle);
      }
    } finally {
      setExporting(false);
      setProgress(0);
    }
  };

  return (
    <button
      onClick={exportToPDF}
      disabled={exporting}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full card-glass hover:bg-primary/20 transition-all disabled:opacity-70 text-sm font-medium text-foreground"
    >
      {exporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Exportando… {progress}%</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>Exportar PDF</span>
        </>
      )}
    </button>
  );
};

export default ExportPDFButton;
