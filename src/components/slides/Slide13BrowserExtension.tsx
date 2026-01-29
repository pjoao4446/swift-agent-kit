import NuageLogo from "./NuageLogo";
import { Globe, MessageCircle, Zap, Shield } from "lucide-react";

const Slide13BrowserExtension = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full card-glass text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in">
            Módulo 4 • Amazon Quick Suite
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
            Extensão de <span className="text-gradient-magenta">Navegador</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            IA assistente disponível em qualquer contexto web
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="pillar-card opacity-0 animate-slide-in-left delay-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Chrome Extension</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Acesse o Amazon Q diretamente do navegador, sem trocar de contexto.
                Disponível para Chrome e Edge.
              </p>
              <div className="space-y-3">
                {["Summarize páginas web", "Tradução instantânea", "Pesquisa em documentos"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-nuage-gold" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pillar-card opacity-0 animate-slide-in-right delay-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-nuage-cyan/20 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-nuage-cyan" />
                </div>
                <h3 className="text-2xl font-bold">Chat IA Contextual</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Converse com IA que entende o contexto da página atual e 
                pode acessar seu Knowledge Space.
              </p>
              <div className="space-y-3">
                {["Perguntas sobre o conteúdo", "Integração com Spaces", "Histórico de conversas"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-nuage-gold" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pillar-card flex items-center justify-center gap-8 p-8 opacity-0 animate-fade-in-up delay-500">
            <Shield className="w-12 h-12 text-nuage-gold" />
            <div>
              <h4 className="text-xl font-bold mb-2">Segurança Enterprise</h4>
              <p className="text-muted-foreground">
                Dados processados na sua conta AWS. Nenhuma informação compartilhada com terceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide13BrowserExtension;
