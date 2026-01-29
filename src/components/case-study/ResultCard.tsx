import AnimatedCounter from "./AnimatedCounter";

interface Result {
  value: string;
  label: string;
}

interface ResultCardProps {
  result: Result;
  index: number;
  isVisible: boolean;
}

const ResultCard = ({ result, index, isVisible }: ResultCardProps) => {
  return (
    <div 
      className={`bg-card rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-default ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="relative overflow-hidden">
        <p className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:scale-110">
          <AnimatedCounter value={result.value} isVisible={isVisible} />
        </p>
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>
      <p className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground">
        {result.label}
      </p>
    </div>
  );
};

export default ResultCard;
