import NuageLogo from "./NuageLogo";

const SlideCaseCleartech = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-[1fr_1.6fr] gap-0 rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
          {/* Left Panel - Company Info */}
          <div className="bg-gradient-to-b from-[hsl(230,60%,30%)] to-[hsl(260,50%,25%)] p-8 flex flex-col justify-between text-white relative">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-black tracking-tight uppercase">Cleartech</h3>
                <p className="text-[10px] text-white/60 tracking-widest">TRUST AT THE HEART OF COMMUNICATIONS</p>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                A <strong>Cleartech</strong> é referência em tecnologia para o setor de telecom no Brasil desde 1999, com atuação em <strong>projetos de missão crítica</strong> e excelência no desenvolvimento de soluções reguladas, como o sistema de <strong>Portabilidade Numérica</strong>, bem como plataformas de medição de qualidade de banda larga e gestão de cadastro centralizado. Com mais de <strong>75 milhões de portabilidades realizadas no Brasil</strong> e atuação em <strong>270+ operadoras</strong>, a companhia mantém <strong>99,99% de disponibilidade</strong>. Além disso, expandiu sua presença internacional ao implantar a portabilidade numérica no <strong>Uruguai</strong>, marcando seu início na América Latina.
              </p>
            </div>
          </div>

          {/* Right Panel - Case Details */}
          <div className="bg-white p-8 flex flex-col">
            <div className="mb-4">
              <div className="bg-[hsl(230,50%,20%)] text-white px-6 py-3 rounded-lg mb-2">
                <h2 className="text-2xl font-black tracking-tight">CASE DE SUCESSO: CLEARTECH</h2>
              </div>
              <div className="bg-nuage-cyan/10 text-nuage-cyan px-4 py-2 rounded-md text-sm font-medium">
                Data Lake – StirShaken (Ligações telefônicas de todo Brasil)
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Implementamos um Data Lake escalável na AWS como parte do projeto STIR/SHAKEN, com o objetivo de combater fraudes telefônicas e atender exigências da ANATEL. A arquitetura foi desenhada para processar até <strong>2 bilhões de registros por dia</strong>, utilizando S3 com arquivos Parquet na camada Bronze e Apache Iceberg na camada Gold, adotando o modelo Lakehouse para garantir <strong>escalabilidade, versionamento e performance analítica</strong>. A solução oferece baixo custo, flexibilidade e suporte à evolução contínua da análise de dados.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-auto">
              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-nuage-cyan to-[hsl(200,80%,40%)] text-white text-center py-4 px-3">
                  <span className="text-3xl font-black">+60</span>
                  <span className="text-lg font-bold">BI</span>
                </div>
                <div className="bg-[hsl(230,50%,20%)] text-white text-center py-3 px-3">
                  <p className="text-xs font-bold uppercase mb-1">De Registros Mensais</p>
                  <p className="text-[10px] text-white/70">contendo dados de todas as ligações do Brasil, realizadas e recebidas</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[hsl(230,50%,20%)] to-[hsl(260,50%,30%)] text-white text-center py-4 px-3">
                  <span className="text-base font-semibold leading-tight">Estrutura utilizada para certificação das chamadas telefônicas</span>
                </div>
                <div className="bg-primary/10 text-gray-800 text-center py-3 px-3">
                  <p className="text-[10px]">realizadas, com <strong>baixa latência</strong> para não impactar o usuário final.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-nuage-cyan to-[hsl(200,80%,40%)] text-white text-center py-4 px-3">
                  <span className="text-3xl font-black">+99</span>
                  <span className="text-lg font-bold">,99%</span>
                </div>
                <div className="bg-[hsl(230,50%,20%)] text-white text-center py-3 px-3">
                  <p className="text-xs font-bold uppercase mb-1">De Disponibilidade</p>
                  <p className="text-[10px] text-white/70">de todo o ambiente, atendendo aos requisitos da Anatel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCaseCleartech;
