interface TechBadgeProps {
  tech: string;
  index: number;
  isVisible: boolean;
}

const TechBadge = ({ tech, index, isVisible }: TechBadgeProps) => {
  return (
    <span 
      className={`px-4 py-2 rounded-full bg-card text-muted-foreground text-sm font-medium shadow-sm transition-all duration-500 hover:shadow-md hover:bg-primary/10 hover:text-primary cursor-default ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}
      style={{ transitionDelay: isVisible ? `${400 + index * 50}ms` : '0ms' }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
