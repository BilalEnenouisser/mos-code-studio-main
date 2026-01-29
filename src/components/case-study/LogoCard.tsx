interface LogoCardProps {
  logo: string;
  alt: string;
  isVisible: boolean;
}

const LogoCard = ({ logo, alt, isVisible }: LogoCardProps) => {
  return (
    <div 
      className={`bg-card rounded-2xl shadow-xl p-8 flex items-center justify-center transition-all duration-700 hover:shadow-2xl group ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}
      style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
    >
      <img 
        src={logo}
        alt={alt}
        className="max-w-[200px] h-auto transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default LogoCard;
