import NuageLogo from "./NuageLogo";
import { Waves, Archive } from "lucide-react";

const SlideDataLakeVsWarehouse = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
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
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-8 h-8 text-nuage-cyan" />
                <h3 className="text-xl font-black text-nuage-cyan">DATA LAKE</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Imagine um grande lago onde você armazena tudo – desde garrafas de água (dados brutos e não estruturados como fotos ou textos) 
                até caixas organizadas (dados estruturados). Não importa o formato, tudo vai para o lago. Ele serve como um{" "}
                <span className="text-foreground font-semibold">repositório central de baixo custo</span> para a totalidade dos seus dados, 
                prontos para qualquer análise futura.
              </p>
              <div className="bg-nuage-cyan/10 rounded-lg p-4 border border-nuage-cyan/20">
                <p className="text-xs font-semibold text-nuage-cyan mb-2">Exemplo Prático:</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Uma montadora armazena todos os vídeos de testes de colisão, dados de sensores de carros autônomos, posts de redes 
                  sociais sobre seus veículos e registros de vendas. Tudo isso, em seu formato original, está no Data Lake.
                </p>
              </div>
            </div>
          </div>

          {/* Data Warehouse */}
          <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-5 h-full border border-primary/20 glow-magenta">
              <div className="flex items-center gap-3 mb-4">
                <Archive className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-black text-primary">DATA WAREHOUSE</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pense em uma despensa super organizada e otimizada para consulta. Nela, você só guarda ingredientes (dados) que já 
                foram limpos, preparados e categorizados especificamente para fazer as receitas (análises) mais comuns e importantes. 
                É ideal para <span className="text-foreground font-semibold">responder rapidamente a perguntas de negócio</span> pré-definidas.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-xs font-semibold text-primary mb-2">Exemplo Prático:</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A montadora pega os dados de vendas e custos do Data Lake, organiza-os em tabelas de fácil acesso para responder: 
                  "Qual a margem de lucro por modelo de carro na região X no último trimestre?" O Data Warehouse entrega essa resposta em segundos.
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
