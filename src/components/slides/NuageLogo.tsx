interface NuageLogoProps {
  className?: string;
}

const NuageLogo = ({ className = "" }: NuageLogoProps) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-2xl font-black tracking-tight text-foreground">NUAGE</span>
      <span className="text-2xl font-black tracking-tight text-primary">IT</span>
    </div>
  );
};

export default NuageLogo;
