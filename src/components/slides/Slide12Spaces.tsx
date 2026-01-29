import NuageLogo from "./NuageLogo";
import { FolderOpen, FileText, Database, Brain } from "lucide-react";

const Slide12Spaces = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            Spaces & <span className="text-gradient-magenta">Conhecimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Gestão centralizada de conhecimento empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="opacity-0 animate-slide-in-left delay-300">
            <div className="pillar-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FolderOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Knowledge Spaces</h3>
                  <p className="text-muted-foreground">Organize por projeto ou domínio</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <FileText className="w-6 h-6 text-nuage-cyan" />
                  <div>
                    <p className="font-medium">100+ Arquivos Suportados</p>
                    <p className="text-sm text-muted-foreground">PDF, DOCX, TXT, Markdown...</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <Database className="w-6 h-6 text-nuage-gold" />
                  <div>
                    <p className="font-medium">Conexões de Dados</p>
                    <p className="text-sm text-muted-foreground">S3, SharePoint, Confluence...</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <Brain className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">RAG Integrado</p>
                    <p className="text-sm text-muted-foreground">Respostas contextuais precisas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-slide-in-right delay-400">
            <div className="pillar-card">
              <h4 className="font-bold mb-4 text-lg">Benefícios</h4>
              <ul className="space-y-3">
                {[
                  "Busca semântica em todo conteúdo",
                  "Permissões granulares por espaço",
                  "Sync automático com fontes",
                  "Versionamento de documentos",
                  "Auditoria completa de acesso",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pillar-card text-center">
              <p className="text-4xl font-black text-gradient-gold mb-2">100+</p>
              <p className="text-muted-foreground">formatos de arquivo suportados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide12Spaces;
