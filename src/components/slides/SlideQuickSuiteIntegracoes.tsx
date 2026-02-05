import NuageLogo from "./NuageLogo";
import { 
  Folder,
  Globe,
  Shield,
  Workflow,
  Search,
  Calendar
} from "lucide-react";

// Import AWS service icons
import bedrockIcon from "@/assets/aws-icons/bedrock.png";

// Third-party logos would need to be added separately
// For now, using placeholders for non-AWS services

const SlideQuickSuiteIntegracoes = () => {
  const integrations = [
    { name: "Amazon S3", description: "Armazenamento de objetos", isAws: true, initial: "S3" },
    { name: "Amazon RDS", description: "Bancos de dados relacionais", isAws: true, initial: "RDS" },
    { name: "Amazon Redshift", description: "Data warehouse", isAws: true, initial: "RS" },
    { name: "Amazon Athena", description: "Query em S3", icon: Search },
    { name: "Microsoft SharePoint", description: "Documentos corporativos", icon: Folder },
    { name: "Microsoft 365", description: "Office apps e dados", initial: "365" },
    { name: "Slack", description: "Mensageria corporativa", initial: "S" },
    { name: "Salesforce", description: "CRM e vendas", initial: "SF" },
    { name: "ServiceNow", description: "ITSM e workflows", icon: Workflow },
    { name: "Jira", description: "Gestão de projetos", icon: Calendar },
    { name: "Confluence", description: "Wiki e documentação", icon: Globe },
    { name: "Google Workspace", description: "Drive, Docs, Sheets", initial: "G" },
    { name: "IAM Identity Center", description: "SSO corporativo", icon: Shield },
    { name: "Amazon Bedrock", description: "Modelos fundacionais", awsIcon: bedrockIcon },
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
                <div className="w-10 h-10 rounded-lg bg-nuage-cyan/20 flex items-center justify-center mx-auto mb-2 overflow-hidden">
                  {integration.awsIcon ? (
                    <img src={integration.awsIcon} alt={integration.name} className="w-full h-full object-cover" />
                  ) : integration.icon ? (
                    <integration.icon className="w-5 h-5 text-nuage-cyan" />
                  ) : (
                    <span className="text-xs font-bold text-nuage-cyan">{integration.initial}</span>
                  )}
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
