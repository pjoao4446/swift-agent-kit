import nuageLogo from "@/assets/nuage-logo.png";

interface NuageLogoProps {
  className?: string;
}

const NuageLogo = ({ className = "" }: NuageLogoProps) => {
  return (
    <img 
      src={nuageLogo} 
      alt="NuageIT" 
      className={`h-16 w-auto ${className}`}
    />
  );
};

export default NuageLogo;
