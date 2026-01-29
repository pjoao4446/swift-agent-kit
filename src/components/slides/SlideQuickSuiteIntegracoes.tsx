import NuageLogo from "./NuageLogo";
import { 
  FileText, 
  Cloud, 
  Database, 
  MessageSquare, 
  Mail, 
  Users, 
  Calendar,
  Folder,
  Globe,
  Shield,
  Workflow,
  BarChart3,
  Search,
  Bot
} from "lucide-react";

const SlideQuickSuiteIntegracoes = () => {
  const integrations = [
    { name: "Amazon S3", description: "Armazenamento de objetos", icon: Cloud },
    { name: "Amazon RDS", description: "Bancos de dados relacionais", icon: Database },
    { name: "Amazon Redshift", description: "Data warehouse", icon: BarChart3 },
    { name: "Amazon Athena", description: "Query em S3", icon: Search },
    { name: "Microsoft SharePoint", description: "Documentos corporativos", icon: Folder },
    { name: "Microsoft 365", description: "Office apps e dados", icon: FileText },
    { name: "Slack", description: "Mensageria corporativa", icon: MessageSquare },
    { name: "Salesforce", description: "CRM e vendas", icon: Users },
    { name: "ServiceNow", description: "ITSM e workflows", icon: Workflow },
    { name: "Jira", description: "Gestão de projetos", icon: Calendar },
    { name: "Confluence", description: "Wiki e documentação", icon: Globe },
    { name: "Google Workspace", description: "Drive, Docs, Sheets", icon: Mail },
    { name: "IAM Identity Center", description: "SSO corporativo", icon: Shield },
    { name: "Amazon Bedrock", description: "Modelos fundacionais", icon: Bot },
  ];

  return (
    <div className="slide network-bg">
      <div className="particles" />
      
      <div className="absolute top-8 left-8 z-10">
        <NuageLogo />
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            <span className="text-gradient-cyan">Integrações</span> Quick Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Conecte todos os seus dados e ferramentas em um só lugar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="pillar-card text-center py-4 px-2 opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.1 + index * 0.03}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-nuage-cyan/20 flex items-center justify-center mx-auto mb-2">
                  <integration.icon className="w-5 h-5 text-nuage-cyan" />
                </div>
                <h3 className="font-bold text-xs mb-1 truncate">{integration.name}</h3>
                <p className="text-xs text-muted-foreground truncate">{integration.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center opacity-0 animate-fade-in-up delay-600">
            <div className="inline-block card-glass px-8 py-4 rounded-2xl">
              <p className="text-lg">
                <span className="text-gradient-gold font-bold">+40 conectores</span> prontos para uso, incluindo APIs personalizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideQuickSuiteIntegracoes;
