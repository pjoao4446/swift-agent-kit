import NuageLogo from "./NuageLogo";
import { Brain, ArrowRight, MessageSquare, TrendingUp, Database, BarChart3, ShoppingCart, Warehouse } from "lucide-react";

const SlideDadosDiferencial = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            SEUS <span className="text-gradient-gold">DADOS</span> SÃO O SEU <span className="text-gradient-magenta">DIFERENCIAL COMPETITIVO</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_60px_1fr] gap-4 items-center mb-8">
            {/* IA Genérica */}
            <div className="opacity-0 animate-fade-in-up delay-100">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">IA Generativa Genérica</h3>
                <p className="text-muted-foreground">Sabe sobre <span className="text-foreground font-medium">o mundo</span></p>
              </div>
              <div className="bg-primary rounded-xl p-4 mb-4 h-[72px] flex items-center">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-foreground flex-shrink-0" />
                  <p className="text-foreground text-sm">"Quais são as melhores estratégias de retenção de clientes?"</p>
                </div>
              </div>
              <div className="card-glass p-6 rounded-xl h-[200px] flex flex-col items-center justify-center">
                <Brain className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground text-sm text-center">Respostas genéricas baseadas em conhecimento público</p>
              </div>
            </div>

            {/* Seta central */}
            <div className="hidden md:flex items-center justify-center h-full opacity-0 animate-fade-in delay-200">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-nuage-cyan flex items-center justify-center shadow-lg shadow-primary/30">
                <ArrowRight className="w-7 h-7 text-foreground" />
              </div>
            </div>

            {/* IA que conhece seu negócio */}
            <div className="opacity-0 animate-fade-in-up delay-300">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">IA Generativa que conhece o seu negócio</h3>
                <p className="text-muted-foreground">Sabe sobre <span className="text-nuage-cyan font-medium">seus clientes, vendas e operações</span></p>
              </div>
              <div className="bg-primary rounded-xl p-4 mb-4 h-[72px] flex items-center">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-foreground flex-shrink-0" />
                  <p className="text-foreground text-sm">"Qual a taxa de churn dos últimos 3 meses e quais os segmentos com maior risco?"</p>
                </div>
              </div>
              <div className="card-glass p-6 rounded-xl h-[200px] border border-nuage-cyan/30 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-nuage-cyan/10 rounded-lg p-3 flex flex-col items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-nuage-cyan mb-2" />
                    <span className="text-sm text-muted-foreground">Vendas</span>
                  </div>
                  <div className="bg-nuage-gold/10 rounded-lg p-3 flex flex-col items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-nuage-gold mb-2" />
                    <span className="text-sm text-muted-foreground">E-commerce</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 flex flex-col items-center justify-center">
                    <Database className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Data Lake</span>
                  </div>
                  <div className="bg-nuage-cyan/10 rounded-lg p-3 flex flex-col items-center justify-center">
                    <Warehouse className="w-8 h-8 text-nuage-cyan mb-2" />
                    <span className="text-sm text-muted-foreground">Data Warehouse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conexão Data Lake / Data Warehouse */}
          <div className="mt-6 opacity-0 animate-fade-in-up delay-400 text-center">
            <div className="inline-block">
              <span className="bg-nuage-gold px-4 py-2 text-background font-bold text-sm rounded-lg">A Pergunta-Chave:</span>
            </div>
            <p className="text-xl mt-4 text-muted-foreground">
              Como conectar o poder dos FMs aos <span className="bg-nuage-gold/20 px-3 py-1 rounded-lg text-nuage-gold font-medium">meus dados</span> — 
              no <span className="text-nuage-cyan font-semibold">Data Lake</span> ou <span className="text-primary font-semibold">Data Warehouse</span> — 
              de forma segura, privada e eficaz?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDadosDiferencial;
