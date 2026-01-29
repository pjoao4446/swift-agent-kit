import NuageLogo from "./NuageLogo";
import { Smartphone, Shield, Cpu, Brain, Database, Cloud, ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const SlideBedrockArquitetura = () => {
  const [flowStep, setFlowStep] = useState(0);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  // Loop de animação infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowStep((prev) => (prev + 1) % 7);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const getFlowColor = (step: number) => {
    if (flowStep >= step) {
      return flowStep === 6 ? "#10B981" : "#FF007A"; // Verde no final, magenta durante
    }
    return "#1e1b4b";
  };

  const isActive = (component: string) => {
    const stepMap: Record<string, number[]> = {
      app: [0, 6],
      gateway: [1],
      lambda: [2, 5],
      bedrock: [3, 4],
      database: [3, 4],
    };
    return stepMap[component]?.includes(flowStep) || hoveredComponent === component;
  };

  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-3 opacity-0 animate-fade-in">
            Amazon Bedrock
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient-magenta">Arquitetura</span> de Referência
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Fluxo completo de uma aplicação com IA Generativa
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            {/* Lado Esquerdo - Animação de Fluxo */}
            <div className="card-glass p-6 rounded-2xl opacity-0 animate-fade-in-up delay-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-nuage-cyan/5" />
              
              <h3 className="text-sm font-bold text-nuage-cyan uppercase tracking-wider mb-4 relative">
                <Zap className="w-4 h-4 inline mr-2" />
                Sequence Flow
              </h3>

              <div className="relative h-[320px]">
                {/* SVG para linhas de conexão */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  {/* Linha App -> Gateway */}
                  <path
                    d="M 60 150 L 120 150"
                    stroke={getFlowColor(1)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 1 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Gateway -> Lambda */}
                  <path
                    d="M 160 150 L 200 150"
                    stroke={getFlowColor(2)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 2 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Lambda -> Bedrock */}
                  <path
                    d="M 240 150 Q 280 150 300 100"
                    stroke={getFlowColor(3)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 3 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Lambda -> Database */}
                  <path
                    d="M 240 150 Q 280 150 300 200"
                    stroke={getFlowColor(3)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 3 ? 'drop-shadow(0 0 8px #00D1FF)' : 'none' }}
                  />

                  {/* Linhas de retorno */}
                  <path
                    d="M 300 100 Q 320 80 340 100 Q 360 120 340 150 Q 320 180 300 200"
                    stroke={flowStep >= 5 ? "#10B981" : "#1e1b4b"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 5 ? 'drop-shadow(0 0 6px #10B981)' : 'none' }}
                  />
                </svg>

                {/* Componentes do fluxo */}
                
                {/* App/Smartphone */}
                <div 
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive('app') ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredComponent('app')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive('app') 
                      ? 'bg-primary shadow-lg shadow-primary/50' 
                      : 'bg-primary/20 border border-primary/30'
                  }`}>
                    <Smartphone className="w-8 h-8 text-foreground" />
                  </div>
                  <p className="text-xs text-center mt-2 font-mono text-muted-foreground">Client App</p>
                </div>

                {/* API Gateway */}
                <div 
                  className={`absolute left-24 top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive('gateway') ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredComponent('gateway')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive('gateway') 
                      ? 'bg-nuage-gold shadow-lg shadow-nuage-gold/50' 
                      : 'bg-nuage-gold/20 border border-nuage-gold/30'
                  }`}>
                    <Shield className="w-7 h-7 text-foreground" />
                  </div>
                  <p className="text-xs text-center mt-2 font-mono text-muted-foreground">API GW</p>
                </div>

                {/* Lambda */}
                <div 
                  className={`absolute left-44 top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive('lambda') ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredComponent('lambda')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive('lambda') 
                      ? 'bg-nuage-cyan shadow-lg shadow-nuage-cyan/50' 
                      : 'bg-nuage-cyan/20 border border-nuage-cyan/30'
                  }`}>
                    <Cpu className="w-8 h-8 text-foreground" />
                  </div>
                  <p className="text-xs text-center mt-2 font-mono text-muted-foreground">Lambda</p>
                </div>

                {/* Bedrock */}
                <div 
                  className={`absolute right-12 top-8 transition-all duration-300 ${isActive('bedrock') ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredComponent('bedrock')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                    isActive('bedrock') 
                      ? 'bg-primary shadow-lg shadow-primary/50' 
                      : 'bg-primary/20 border border-primary/30'
                  }`}>
                    <Brain className={`w-10 h-10 text-foreground ${isActive('bedrock') ? 'animate-pulse' : ''}`} />
                    {isActive('bedrock') && (
                      <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping" />
                    )}
                  </div>
                  <p className="text-xs text-center mt-2 font-mono text-primary font-bold">Bedrock</p>
                </div>

                {/* Database */}
                <div 
                  className={`absolute right-12 bottom-8 transition-all duration-300 ${isActive('database') ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredComponent('database')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive('database') 
                      ? 'bg-nuage-cyan shadow-lg shadow-nuage-cyan/50' 
                      : 'bg-nuage-cyan/20 border border-nuage-cyan/30'
                  }`}>
                    <Database className="w-8 h-8 text-foreground" />
                  </div>
                  <p className="text-xs text-center mt-2 font-mono text-muted-foreground">DynamoDB</p>
                </div>

                {/* Partícula animada */}
                <div 
                  className="absolute w-3 h-3 rounded-full transition-all duration-1000"
                  style={{
                    background: flowStep === 6 ? '#10B981' : '#FF007A',
                    boxShadow: `0 0 20px ${flowStep === 6 ? '#10B981' : '#FF007A'}`,
                    left: flowStep === 0 ? '40px' : flowStep === 1 ? '120px' : flowStep === 2 ? '180px' : flowStep >= 3 && flowStep <= 4 ? '300px' : flowStep === 5 ? '180px' : '40px',
                    top: flowStep === 0 ? '150px' : flowStep === 1 ? '150px' : flowStep === 2 ? '150px' : flowStep === 3 ? '80px' : flowStep === 4 ? '200px' : flowStep === 5 ? '150px' : '150px',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-4">
                <div className={`w-2 h-2 rounded-full ${flowStep === 6 ? 'bg-green-500' : 'bg-primary'} animate-pulse`} />
                <span className="text-xs font-mono text-muted-foreground">
                  {flowStep === 0 && "Enviando request..."}
                  {flowStep === 1 && "Validando API Gateway..."}
                  {flowStep === 2 && "Roteando Lambda..."}
                  {flowStep === 3 && "Consultando Bedrock + DB..."}
                  {flowStep === 4 && "Processando IA..."}
                  {flowStep === 5 && "Consolidando resposta..."}
                  {flowStep === 6 && "✓ Response enviado com sucesso"}
                </span>
              </div>
            </div>

            {/* Lado Direito - Diagrama Técnico Neon */}
            <div className="card-glass p-6 rounded-2xl opacity-0 animate-fade-in-up delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-nuage-cyan/5 via-transparent to-primary/5" />
              
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 relative">
                <Cloud className="w-4 h-4 inline mr-2" />
                Neon Blueprint
              </h3>

              <div className="space-y-4 relative">
                {/* Client Layer */}
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    hoveredComponent === 'app' 
                      ? 'border-primary bg-primary/10' 
                      : 'border-primary/30 bg-transparent'
                  }`}
                  style={{ boxShadow: hoveredComponent === 'app' ? '0 0 20px rgba(255, 0, 122, 0.3)' : 'none' }}
                  onMouseEnter={() => setHoveredComponent('app')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="flex items-center gap-4">
                    <Smartphone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="font-mono text-sm text-foreground">Mobile/Web App</p>
                      <p className="text-xs text-muted-foreground">React Native • Flutter • Web</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-nuage-gold rotate-90" />
                </div>

                {/* API Gateway */}
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    hoveredComponent === 'gateway' 
                      ? 'border-nuage-gold bg-nuage-gold/10' 
                      : 'border-nuage-gold/30 bg-transparent'
                  }`}
                  style={{ boxShadow: hoveredComponent === 'gateway' ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none' }}
                  onMouseEnter={() => setHoveredComponent('gateway')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-nuage-gold" strokeWidth={1.5} />
                    <div>
                      <p className="font-mono text-sm text-foreground">AWS::ApiGateway</p>
                      <p className="text-xs text-muted-foreground">REST API • Auth • Rate Limiting</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-nuage-cyan rotate-90" />
                </div>

                {/* Lambda + Integrations */}
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    hoveredComponent === 'lambda' 
                      ? 'border-nuage-cyan bg-nuage-cyan/10' 
                      : 'border-nuage-cyan/30 bg-transparent'
                  }`}
                  style={{ boxShadow: hoveredComponent === 'lambda' ? '0 0 20px rgba(0, 209, 255, 0.3)' : 'none' }}
                  onMouseEnter={() => setHoveredComponent('lambda')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="flex items-center gap-4">
                    <Cpu className="w-6 h-6 text-nuage-cyan" strokeWidth={1.5} />
                    <div>
                      <p className="font-mono text-sm text-foreground">AWS::Lambda</p>
                      <p className="text-xs text-muted-foreground">Orchestrator • Python/Node • Timeout: 30s</p>
                    </div>
                  </div>
                </div>

                {/* Split to Bedrock and DB */}
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredComponent === 'bedrock' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-primary/30 bg-transparent'
                    }`}
                    style={{ boxShadow: hoveredComponent === 'bedrock' ? '0 0 20px rgba(255, 0, 122, 0.3)' : 'none' }}
                    onMouseEnter={() => setHoveredComponent('bedrock')}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <div>
                        <p className="font-mono text-xs text-foreground">Bedrock</p>
                        <p className="text-[10px] text-muted-foreground">Claude-3.5</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredComponent === 'database' 
                        ? 'border-nuage-cyan bg-nuage-cyan/10' 
                        : 'border-nuage-cyan/30 bg-transparent'
                    }`}
                    style={{ boxShadow: hoveredComponent === 'database' ? '0 0 20px rgba(0, 209, 255, 0.3)' : 'none' }}
                    onMouseEnter={() => setHoveredComponent('database')}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-nuage-cyan" strokeWidth={1.5} />
                      <div>
                        <p className="font-mono text-xs text-foreground">DynamoDB</p>
                        <p className="text-[10px] text-muted-foreground">User Data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legenda */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">IA/ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-nuage-cyan" />
                  <span className="text-xs text-muted-foreground">Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-nuage-gold" />
                  <span className="text-xs text-muted-foreground">Infra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pergunta do cenário */}
          <div className="mt-6 opacity-0 animate-fade-in-up delay-500">
            <div className="card-glass px-6 py-4 rounded-xl max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">Cenário de exemplo:</p>
              <p className="text-foreground italic">
                "Baseado nas minhas compras do ano passado, qual o melhor plano de investimento para o meu perfil atual?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockArquitetura;
