import NuageLogo from "./NuageLogo";

const SlideCaseSurf = () => {
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
                <h3 className="text-3xl font-black tracking-tight">surf</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                A <strong>Surf Telecom</strong> é uma das maiores MVNOs do Brasil, referência em soluções de telefonia white label. Com mais de <strong>1,2 milhão de usuários ativos</strong>, presença em <strong>5 mil municípios</strong> e parcerias com marcas como <strong>Correios Celular e Uber Chip</strong>, a Surf se destaca pela inovação, capilaridade e qualidade de serviço. Além de operar com a infraestrutura da <strong>TIM no Brasil</strong> e <strong>T-Mobile nos EUA</strong>, atua também como <strong>MVNE</strong>, habilitando provedores regionais e empresas a lançarem suas próprias operadoras móveis com agilidade e escala.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-white/70 font-semibold">+ 100 Operadoras Móveis</p>
            </div>
          </div>

          {/* Right Panel - Case Details */}
          <div className="bg-white p-8 flex flex-col">
            <div className="mb-4">
              <div className="bg-[hsl(230,50%,20%)] text-white px-6 py-3 rounded-lg mb-2">
                <h2 className="text-2xl font-black tracking-tight">CASE DE SUCESSO: SURF</h2>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium">
                Data Lake – CDR (Dados ligação, navegação e SMS)
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Implementamos um processo de modernização na infraestrutura de dados da SURF, com a criação de um <strong>Data Lake transacional na AWS</strong>, capaz de processar e armazenar <strong>milhões de registros CDR por dia</strong> com <strong>baixa latência</strong> e <strong>alta confiabilidade</strong>. A solução utiliza <strong>serviços serverless</strong>, como Lambda, Kinesis e S3 com Iceberg, permitindo <strong>ingestão em tempo real</strong>, organização eficiente dos dados e <strong>integração com consultas via Athena</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-auto">
              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-[hsl(280,80%,50%)] text-white text-center py-4 px-3">
                  <span className="text-4xl font-black">96</span>
                  <span className="text-lg font-bold">%</span>
                </div>
                <div className="bg-[hsl(230,50%,20%)] text-white text-center py-3 px-3">
                  <p className="text-xs font-bold uppercase mb-1">Redução Tempo de Consulta</p>
                  <p className="text-[10px] text-white/70">caindo de 45 minutos para menos de 2 minutos.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[hsl(230,50%,20%)] to-[hsl(260,50%,30%)] text-white text-center py-4 px-3">
                  <span className="text-lg font-semibold leading-tight">Latência média de 0,2 segundos por CDR</span>
                </div>
                <div className="bg-primary/10 text-gray-800 text-center py-3 px-3">
                  <p className="text-[10px]">garantindo performance para mais de <strong>3 milhões de linhas ativas</strong></p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-[hsl(280,80%,50%)] text-white text-center py-4 px-3">
                  <span className="text-4xl font-black">40</span>
                  <span className="text-lg font-bold">%</span>
                </div>
                <div className="bg-[hsl(230,50%,20%)] text-white text-center py-3 px-3">
                  <p className="text-xs font-bold uppercase mb-1">Redução de Custos</p>
                  <p className="text-[10px] text-white/70">de USD 80K para USD 30k mês com framework serverless.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCaseSurf;
