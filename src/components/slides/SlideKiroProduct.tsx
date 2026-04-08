import { FileCode, GitBranch, CheckCircle, Cpu, Users, Lightbulb } from "lucide-react";
import kiroIcon from "@/assets/aws-icons/kiro.jpg";

const SlideKiroProduct = () => {
  const features = [
    {
      icon: FileCode,
      name: "Spec-Driven Development",
      description: "Escreva specs em linguagem natural e o Kiro gera código completo de produção seguindo boas práticas",
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
    {
      icon: GitBranch,
      name: "Agentes Autônomos",
      description: "Agentes de IA que navegam pelo codebase, entendem contexto e executam tarefas complexas de forma independente",
      color: "text-nuage-cyan",
      bgColor: "bg-nuage-cyan/15",
    },
    {
      icon: CheckCircle,
      name: "Qualidade Garantida",
      description: "Testes automatizados, code review assistido e documentação gerada automaticamente a cada iteração",
      color: "text-nuage-gold",
      bgColor: "bg-nuage-gold/15",
    },
    {
      icon: Cpu,
      name: "Hooks Automatizados",
      description: "Steering hooks que guiam a IA para seguir padrões, convenções e regras do seu projeto automaticamente",
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Amazon <span className="text-gradient-magenta">Kiro</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-100">
            O IDE agêntico da AWS que transforma especificações em código de produção
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left - O que é */}
          <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="card-glass rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">O que é?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O Amazon Kiro é um <strong className="text-foreground">IDE (ambiente de desenvolvimento) com agentes de IA integrados</strong> que 
                permite que desenvolvedores transformem ideias em software de produção usando linguagem natural. 
                Diferente de assistentes de código tradicionais, o Kiro usa uma abordagem <strong className="text-foreground">spec-driven</strong> — 
                você descreve o que quer e ele gera a arquitetura, o código e os testes.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Para quem é?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Desenvolvedores:</strong> Acelera o desenvolvimento com specs que viram código real de produção</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-nuage-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Times de produto:</strong> Prototipar e validar ideias rapidamente sem depender de ciclos longos</p>
                </div>
                <div className="flex items-start gap-3">
                  <GitBranch className="w-5 h-5 text-nuage-cyan flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Empresas:</strong> Manter padrões, governança e qualidade de código em escala com IA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-3 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
            <h3 className="text-xl font-bold mb-2">Funcionalidades Principais</h3>
            {features.map((feat, index) => (
              <div
                key={feat.name}
                className="card-glass rounded-xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className={`w-12 h-12 rounded-xl ${feat.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <feat.icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{feat.name}</h4>
                  <p className="text-xs text-muted-foreground">{feat.description}</p>
                </div>
              </div>
            ))}

            <div className="card-glass rounded-xl p-4 flex items-center justify-center gap-6 mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Free</p>
                <p className="text-xs text-muted-foreground">Tier disponível</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-nuage-cyan">VS Code</p>
                <p className="text-xs text-muted-foreground">Compatível</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-nuage-gold">Cloud</p>
                <p className="text-xs text-muted-foreground">Based IDE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideKiroProduct;
