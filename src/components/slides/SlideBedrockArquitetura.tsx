import NuageLogo from "./NuageLogo";
import { Smartphone, ArrowRight, Zap, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

// Import AWS service icons
import apiGatewayIcon from "@/assets/aws-icons/api-gateway.jpg";
import lambdaIcon from "@/assets/aws-icons/lambda.png";
import bedrockIcon from "@/assets/aws-icons/bedrock.png";
import dynamodbIcon from "@/assets/aws-icons/dynamodb.png";

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
      return flowStep === 6 ? "#10B981" : "#FF007A";
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

  // Posições da partícula ajustadas para seguir exatamente as linhas SVG
  // Coordenadas baseadas no viewBox 0 0 400 320
  const getParticlePosition = () => {
    switch (flowStep) {
      case 0: return { x: 60, y: 160 };       // App - início
      case 1: return { x: 155, y: 160 };      // Gateway - meio
      case 2: return { x: 237, y: 160 };      // Lambda - centro
      case 3: return { x: 340, y: 70 };       // Bedrock - topo
      case 4: return { x: 340, y: 250 };      // Database - base
      case 5: return { x: 237, y: 160 };      // Volta pro Lambda
      case 6: return { x: 60, y: 160 };       // Volta pro App
      default: return { x: 60, y: 160 };
    }
  };

  const particlePos = getParticlePosition();

  return (
    <div className="slide network-bg overflow-hidden">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 opacity-0 animate-fade-in-up delay-100">
            CRIE SUAS PRÓPRIAS <span className="text-gradient-magenta">SOLUÇÕES DE IA</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Fluxo completo de uma aplicação com IA Generativa
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Lado Esquerdo - Animação de Fluxo */}
            <div className="card-glass p-6 rounded-2xl opacity-0 animate-fade-in-up delay-300 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-nuage-cyan/5" />
              
              <h3 className="text-sm font-bold text-nuage-cyan uppercase tracking-wider mb-4 relative">
                <Zap className="w-4 h-4 inline mr-2" />
                Sequence Flow
              </h3>

              <div className="relative flex-1 min-h-[320px]">
                {/* SVG para linhas de conexão */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
                  {/* Linha App -> Gateway */}
                  <path
                    d="M 60 160 L 140 160"
                    stroke={getFlowColor(1)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 1 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Gateway -> Lambda */}
                  <path
                    d="M 170 160 L 220 160"
                    stroke={getFlowColor(2)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 2 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Lambda -> Bedrock */}
                  <path
                    d="M 255 160 C 290 160, 310 120, 340 70"
                    stroke={getFlowColor(3)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 3 ? 'drop-shadow(0 0 8px #FF007A)' : 'none' }}
                  />
                  
                  {/* Linha Lambda -> Database */}
                  <path
                    d="M 255 160 C 290 160, 310 200, 340 250"
                    stroke={getFlowColor(3)}
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 3 ? 'drop-shadow(0 0 8px #00D1FF)' : 'none' }}
                  />

                  {/* Linha de retorno Bedrock -> Lambda */}
                  <path
                    d="M 340 70 C 360 90, 360 130, 255 160"
                    stroke={flowStep >= 5 ? "#10B981" : "#1e1b4b"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 5 ? 'drop-shadow(0 0 6px #10B981)' : 'none' }}
                  />

                  {/* Linha de retorno Database -> Lambda */}
                  <path
                    d="M 340 250 C 360 230, 360 190, 255 160"
                    stroke={flowStep >= 5 ? "#10B981" : "#1e1b4b"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 5 ? 'drop-shadow(0 0 6px #10B981)' : 'none' }}
                  />

                  {/* Linha de retorno Lambda -> App */}
                  <path
                    d="M 220 160 L 60 160"
                    stroke={flowStep >= 6 ? "#10B981" : "transparent"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ filter: flowStep >= 6 ? 'drop-shadow(0 0 6px #10B981)' : 'none' }}
                  />
                </svg>

                {/* Componentes do fluxo */}
                
                {/* App/Smartphone - alinhado com linha y=160 */}
                <div 
                  className={`absolute transition-all duration-300 ${isActive('app') ? 'scale-110' : ''}`}
                  style={{ left: '28px', top: '50%', transform: 'translateY(-50%)' }}
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
                  <p className="text-sm text-center mt-2 font-mono text-muted-foreground">Client App</p>
                </div>

                {/* API Gateway - alinhado com linha y=160 */}
                <div 
                  className={`absolute transition-all duration-300 ${isActive('gateway') ? 'scale-110' : ''}`}
                  style={{ left: '120px', top: '50%', transform: 'translateY(-50%)' }}
                  onMouseEnter={() => setHoveredComponent('gateway')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    isActive('gateway') 
                      ? 'shadow-lg shadow-nuage-gold/50' 
                      : 'border border-nuage-gold/30'
                  }`}>
                    <img src={apiGatewayIcon} alt="API Gateway" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-center mt-2 font-mono text-muted-foreground">API GW</p>
                </div>

                {/* Lambda - alinhado com linha y=160 */}
                <div 
                  className={`absolute transition-all duration-300 ${isActive('lambda') ? 'scale-110' : ''}`}
                  style={{ left: '205px', top: '50%', transform: 'translateY(-50%)' }}
                  onMouseEnter={() => setHoveredComponent('lambda')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    isActive('lambda') 
                      ? 'shadow-lg shadow-nuage-cyan/50' 
                      : 'border border-nuage-cyan/30'
                  }`}>
                    <img src={lambdaIcon} alt="Lambda" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-center mt-2 font-mono text-muted-foreground">Lambda</p>
                </div>

                {/* Bedrock - posição: 340, 70 */}
                <div 
                  className={`absolute transition-all duration-300 ${isActive('bedrock') ? 'scale-110' : ''}`}
                  style={{ right: '24px', top: '30px' }}
                  onMouseEnter={() => setHoveredComponent('bedrock')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
                    isActive('bedrock') 
                      ? 'shadow-lg shadow-primary/50' 
                      : 'border border-primary/30'
                  }`}>
                    <img src={bedrockIcon} alt="Bedrock" className={`w-full h-full object-cover ${isActive('bedrock') ? 'animate-pulse' : ''}`} />
                    {isActive('bedrock') && (
                      <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping" />
                    )}
                  </div>
                  <p className="text-sm text-center mt-2 font-mono text-primary font-bold">Bedrock</p>
                </div>

                {/* Database - posição: 340, 250 */}
                <div 
                  className={`absolute transition-all duration-300 ${isActive('database') ? 'scale-110' : ''}`}
                  style={{ right: '28px', bottom: '30px' }}
                  onMouseEnter={() => setHoveredComponent('database')}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    isActive('database') 
                      ? 'shadow-lg shadow-nuage-cyan/50' 
                      : 'border border-nuage-cyan/30'
                  }`}>
                    <img src={dynamodbIcon} alt="DynamoDB" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-center mt-2 font-mono text-muted-foreground">DynamoDB</p>
                </div>

                {/* Partícula animada dentro do SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
                  <circle
                    cx={particlePos.x}
                    cy={particlePos.y}
                    r="8"
                    fill={flowStep === 6 ? '#10B981' : '#FF007A'}
                    className="transition-all duration-1000"
                    style={{
                      filter: `drop-shadow(0 0 12px ${flowStep === 6 ? '#10B981' : '#FF007A'}) drop-shadow(0 0 20px ${flowStep === 6 ? '#10B981' : '#FF007A'})`,
                    }}
                  />
                </svg>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30">
                <div className={`w-2 h-2 rounded-full ${flowStep === 6 ? 'bg-green-500' : 'bg-primary'} animate-pulse`} />
                <span className="text-sm font-mono text-muted-foreground">
                  {flowStep === 0 && "Enviando request..."}
                  {flowStep === 1 && "Validando API Gateway..."}
                  {flowStep === 2 && "Roteando Lambda..."}
                  {flowStep === 3 && "Consultando Bedrock..."}
                  {flowStep === 4 && "Buscando dados históricos..."}
                  {flowStep === 5 && "Consolidando resposta..."}
                  {flowStep === 6 && "✓ Response enviado com sucesso"}
                </span>
              </div>
            </div>

            {/* Lado Direito - Diagrama Técnico Neon */}
            <div className="card-glass p-6 rounded-2xl opacity-0 animate-fade-in-up delay-400 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-bl from-nuage-cyan/5 via-transparent to-primary/5" />
              
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 relative">
                <Cloud className="w-4 h-4 inline mr-2" />
                Neon Blueprint
              </h3>

              <div className="space-y-3 relative flex-1">
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
                      <p className="text-sm text-muted-foreground">React Native • Flutter • Web</p>
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
                    <img src={apiGatewayIcon} alt="API Gateway" className="w-8 h-8 rounded object-cover" />
                    <div>
                      <p className="font-mono text-sm text-foreground">AWS::ApiGateway</p>
                      <p className="text-sm text-muted-foreground">REST API • Auth • Rate Limiting</p>
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
                    <img src={lambdaIcon} alt="Lambda" className="w-8 h-8 rounded object-cover" />
                    <div>
                      <p className="font-mono text-sm text-foreground">AWS::Lambda</p>
                      <p className="text-sm text-muted-foreground">Orchestrator • Python/Node • Timeout: 30s</p>
                    </div>
                  </div>
                </div>

                {/* Split to Bedrock and DB */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div 
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredComponent === 'bedrock' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-primary/30 bg-transparent'
                    }`}
                    style={{ boxShadow: hoveredComponent === 'bedrock' ? '0 0 20px rgba(255, 0, 122, 0.3)' : 'none' }}
                    onMouseEnter={() => setHoveredComponent('bedrock')}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    <div className="flex items-center gap-3">
                      <img src={bedrockIcon} alt="Bedrock" className="w-8 h-8 rounded object-cover" />
                      <div>
                        <p className="font-mono text-sm text-foreground">Bedrock</p>
                        <p className="text-sm text-muted-foreground">Claude-3.5</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredComponent === 'database' 
                        ? 'border-nuage-cyan bg-nuage-cyan/10' 
                        : 'border-nuage-cyan/30 bg-transparent'
                    }`}
                    style={{ boxShadow: hoveredComponent === 'database' ? '0 0 20px rgba(0, 209, 255, 0.3)' : 'none' }}
                    onMouseEnter={() => setHoveredComponent('database')}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    <div className="flex items-center gap-3">
                      <img src={dynamodbIcon} alt="DynamoDB" className="w-8 h-8 rounded object-cover" />
                      <div>
                        <p className="font-mono text-sm text-foreground">DynamoDB</p>
                        <p className="text-sm text-muted-foreground">User Data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legenda */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">IA/ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-nuage-cyan" />
                  <span className="text-sm text-muted-foreground">Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-nuage-gold" />
                  <span className="text-sm text-muted-foreground">Infra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pergunta do cenário */}
          <div className="mt-4 opacity-0 animate-fade-in-up delay-500">
            <div className="card-glass px-6 py-3 rounded-xl max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground mb-1">Cenário de exemplo:</p>
              <p className="text-sm text-foreground italic">
                "Baseado no desempenho dos meus alunos no último semestre, quais disciplinas precisam de reforço e qual a melhor estratégia pedagógica?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBedrockArquitetura;
