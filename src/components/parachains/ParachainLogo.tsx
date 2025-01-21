interface ParachainLogoProps {
  logo: string;
  name: string;
}

const ParachainLogo = ({ logo, name }: ParachainLogoProps) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dot-primary/10">
      <img
        src={logo}
        alt={name}
        className="h-8 w-8"
      />
    </div>
  );
};

export default ParachainLogo;