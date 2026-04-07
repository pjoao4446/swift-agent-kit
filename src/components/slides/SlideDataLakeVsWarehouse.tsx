import NuageLogo from "./NuageLogo";
import { Waves, Archive, Database, FileText, Video, MessageCircle, ShoppingCart, BarChart3, DollarSign, TrendingUp, ArrowRight, Droplets } from "lucide-react";

const SlideDataLakeVsWarehouse = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up">
            <span className="text-gradient-cyan">DATA LAKE</span>{" "}
            <span className="text-foreground">vs</span>{" "}
            <span className="text-gradient-magenta">DATA WAREHOUSE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Data Lake */}
          <div className="opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-5 h-full border border-nuage-cyan/20 glow-cyan">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-nuage-cyan/20">
                  <Waves className="w-8 h-8 text-nuage-cyan animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-nuage-cyan">DATA LAKE</h3>
              </div>

              {/* Visual: data types flowing in */}
              <div className="flex items-center justify-center gap-3 mb-3 py-2">
                <div className="flex flex-col items-center gap-1 group">
                  <Video className="w-5 h-5 text-nuage-cyan/70 group-hover:text-nuage-cyan group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Vídeos</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <FileText className="w-5 h-5 text-nuage-cyan/70 group-hover:text-nuage-cyan group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Textos</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <MessageCircle className="w-5 h-5 text-nuage-cyan/70 group-hover:text-nuage-cyan group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Social</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <Database className="w-5 h-5 text-nuage-cyan/70 group-hover:text-nuage-cyan group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Sensores</span>
                </div>
                <ArrowRight className="w-4 h-4 text-nuage-cyan/40 animate-pulse" />
                <div className="p-2 rounded-lg bg-nuage-cyan/10 border border-nuage-cyan/30">
                  <Droplets className="w-6 h-6 text-nuage-cyan" />
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Repositório central de <span className="text-foreground font-semibold">baixo custo</span> para todos os dados, 
                em qualquer formato, prontos para análise futura.
              </p>

              <div className="bg-nuage-cyan/10 rounded-lg p-3 border border-nuage-cyan/20">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingCart className="w-4 h-4 text-nuage-cyan" />
                  <p className="text-xs font-semibold text-nuage-cyan">Exemplo — E-commerce</p>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Logs de navegação, avaliações de clientes, imagens de produtos, dados de campanhas e registros de vendas — tudo no formato original.
                </p>
              </div>
            </div>
          </div>

          {/* Data Warehouse */}
          <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-5 h-full border border-primary/20 glow-magenta">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-primary/20">
                  <Archive className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-primary">DATA WAREHOUSE</h3>
              </div>

              {/* Visual: organized data */}
              <div className="flex items-center justify-center gap-3 mb-3 py-2">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-4 h-4 text-primary/40 animate-pulse" />
                <div className="flex flex-col items-center gap-1 group">
                  <ShoppingCart className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Vendas</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <DollarSign className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Custos</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <BarChart3 className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Margem</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                  <TrendingUp className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-125 transition-all" />
                  <span className="text-[10px] text-muted-foreground">Tendência</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Dados <span className="text-foreground font-semibold">limpos e organizados</span> para 
                responder rapidamente a perguntas de negócio pré-definidas.
              </p>

              <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingCart className="w-4 h-4 text-primary" />
                  <p className="text-xs font-semibold text-primary">Exemplo — E-commerce</p>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  "Qual o ticket médio por categoria na região Sul no último trimestre?" — resposta em segundos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDataLakeVsWarehouse;
