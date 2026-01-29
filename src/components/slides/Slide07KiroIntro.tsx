import NuageLogo from "./NuageLogo";
import { FileCode, GitBranch, CheckCircle, Sparkles } from "lucide-react";

const Slide07KiroIntro = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Amazon <span className="text-gradient-magenta">Kiro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-100">
            O IDE Agêntico que transforma specs em código de produção
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6 opacity-0 animate-slide-in-left delay-300">
            <div className="pillar-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileCode className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Spec-Driven Development</h3>
              </div>
              <p className="text-muted-foreground">
                Escreva especificações em linguagem natural e deixe o Kiro gerar o código completo,
                seguindo padrões enterprise e boas práticas.
              </p>
            </div>

            <div className="pillar-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-nuage-cyan/20 flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-nuage-cyan" />
                </div>
                <h3 className="text-xl font-bold">Agentes Autônomos</h3>
              </div>
              <p className="text-muted-foreground">
                Agentes de IA que entendem seu contexto, navegam pelo codebase e executam
                tarefas complexas de forma independente.
              </p>
            </div>

            <div className="pillar-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-nuage-gold/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-nuage-gold" />
                </div>
                <h3 className="text-xl font-bold">Qualidade Garantida</h3>
              </div>
              <p className="text-muted-foreground">
                Testes automatizados, code review assistido e documentação gerada
                automaticamente em cada iteração.
              </p>
            </div>
          </div>

          <div className="opacity-0 animate-slide-in-right delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-nuage-cyan/20 rounded-3xl blur-3xl" />
              <div className="relative pillar-card p-8 text-center">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-nuage-cyan flex items-center justify-center mx-auto mb-6 animate-float">
                  <Sparkles className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-3xl font-black mb-4">
                  <span className="text-gradient-magenta">Kiro</span> IDE
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Desenvolvido pela AWS para a nova era da programação assistida por IA
                </p>
                <div className="flex justify-center gap-4">
                  <div className="px-4 py-2 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-primary">Free</p>
                    <p className="text-xs text-muted-foreground">Tier disponível</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-nuage-cyan">VS Code</p>
                    <p className="text-xs text-muted-foreground">Compatível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide07KiroIntro;
