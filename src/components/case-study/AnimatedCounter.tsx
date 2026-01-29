import { useAnimatedCounter, parseNumericValue } from "@/hooks/use-animated-counter";

interface AnimatedCounterProps {
  value: string;
  isVisible: boolean;
  className?: string;
}

const AnimatedCounter = ({ value, isVisible, className = "" }: AnimatedCounterProps) => {
  const { prefix, number, suffix } = parseNumericValue(value);
  
  const animatedNumber = useAnimatedCounter({
    end: number,
    duration: 2000,
    isVisible,
  });

  // Handle special cases like "ФСТЭК" that have no numbers
  if (number === 0 && suffix === value) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span className={className}>
      {prefix}
      {animatedNumber}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
