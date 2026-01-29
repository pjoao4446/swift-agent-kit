import NuageLogo from "./NuageLogo";
import { Box } from "lucide-react";

const SlideBedrockArquitetura = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Amazon Bedrock
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient-magenta">Arquitetura</span> de Referência
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Placeholder para arquitetura animada
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="card-glass p-16 rounded-3xl opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Box className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Arquitetura em Construção</h3>
              <p className="text-muted-foreground max-w-lg">
                Este slide será atualizado com uma arquitetura animada detalhando o fluxo completo de uma aplicação com Bedrock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockArquitetura;
