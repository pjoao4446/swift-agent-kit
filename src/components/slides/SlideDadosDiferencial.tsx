import NuageLogo from "./NuageLogo";
import { Brain, Store, ArrowRight, MessageSquare } from "lucide-react";

const SlideDadosDiferencial = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            SEUS <span className="text-gradient-gold">DADOS</span> SÃO O SEU <span className="text-gradient-magenta">DIFERENCIAL COMPETITIVO</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* IA Genérica */}
            <div className="opacity-0 animate-fade-in-up delay-100">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">IA Generativa Genérica</h3>
                <p className="text-muted-foreground">Sabe sobre <span className="text-foreground font-medium">o mundo</span></p>
              </div>
              <div className="bg-primary rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-foreground" />
                  <p className="text-foreground">"Qual a melhor estratégia de marketing digital?"</p>
                </div>
              </div>
              <div className="card-glass p-8 rounded-xl min-h-[180px] flex items-center justify-center">
                <Brain className="w-24 h-24 text-muted-foreground/50" />
              </div>
            </div>

            {/* IA que conhece seu negócio */}
            <div className="opacity-0 animate-fade-in-up delay-200">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">IA Generativa que conhece o seu negócio</h3>
                <p className="text-muted-foreground">Sabe sobre <span className="text-nuage-cyan font-medium">seu negócio e os seus clientes</span></p>
              </div>
              <div className="bg-primary rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-foreground" />
                  <p className="text-foreground text-sm">"Qual foi a taxa de churn dos clientes premium do segmento varejo no Q3 e quais as ações sugeridas?"</p>
                </div>
              </div>
              <div className="card-glass p-8 rounded-xl min-h-[180px] flex items-center justify-center">
                <Store className="w-24 h-24 text-nuage-cyan/70" />
              </div>
            </div>
          </div>

          {/* Seta central */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-8 hidden md:block opacity-0 animate-fade-in delay-300">
            <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-foreground" />
            </div>
          </div>

          {/* Pergunta-chave */}
          <div className="mt-8 opacity-0 animate-fade-in-up delay-400">
            <div className="inline-block">
              <span className="bg-nuage-gold px-3 py-1 text-background font-bold text-sm rounded">A Pergunta-Chave:</span>
            </div>
            <p className="text-xl mt-3 text-muted-foreground">
              Como conectar o poder dos FMs aos <span className="bg-nuage-gold/20 px-2 py-1 rounded text-nuage-gold font-medium">meus dados</span> de forma segura, privada e eficaz?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDadosDiferencial;
