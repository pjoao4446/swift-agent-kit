import NuageLogo from "./NuageLogo";
import { Server, Lock, Cpu, Clock } from "lucide-react";

const Slide17TechnicalDetail = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 5 • AgentCore
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Detalhe <span className="text-gradient-magenta">Técnico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Isolamento de sessão via Micro VMs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left delay-300">
              <div className="pillar-card p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Firecracker Micro VMs</h3>
                      <p className="text-sm text-muted-foreground">
                        Cada execução de agente roda em uma VM isolada, garantindo segurança total entre tenants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-nuage-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-nuage-cyan" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Isolamento de Sessão</h3>
                      <p className="text-sm text-muted-foreground">
                        Memória, rede e filesystem completamente isolados por sessão de agente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-nuage-gold/20 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-nuage-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cold Start Otimizado</h3>
                      <p className="text-sm text-muted-foreground">
                        Inicialização de VM em menos de 125ms para latência mínima.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Execução Longa</h3>
                      <p className="text-sm text-muted-foreground">
                        Suporte a execuções de até 24 horas para tarefas complexas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-in-right delay-400">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-nuage-cyan/20 rounded-3xl blur-3xl" />
                <div className="relative pillar-card p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">Arquitetura de Isolamento</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/50 border border-primary/30">
                      <p className="text-sm font-mono text-center text-primary">Agent Session 1</p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-center text-muted-foreground">
                        <span className="p-1 rounded bg-background/50">Memory</span>
                        <span className="p-1 rounded bg-background/50">Network</span>
                        <span className="p-1 rounded bg-background/50">Storage</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/50 border border-nuage-cyan/30">
                      <p className="text-sm font-mono text-center text-nuage-cyan">Agent Session 2</p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-center text-muted-foreground">
                        <span className="p-1 rounded bg-background/50">Memory</span>
                        <span className="p-1 rounded bg-background/50">Network</span>
                        <span className="p-1 rounded bg-background/50">Storage</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Zero compartilhamento entre sessões
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide17TechnicalDetail;
