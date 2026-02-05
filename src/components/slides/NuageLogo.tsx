import nuageLogo from "@/assets/nuage-logo.png";

interface NuageLogoProps {
  className?: string;
}

const NuageLogo = ({ className = "" }: NuageLogoProps) => {
  return (
    <img 
      src={nuageLogo} 
      alt="NuageIT" 
      className={`h-8 w-auto ${className}`}
    />
  );
};

export default NuageLogo;
