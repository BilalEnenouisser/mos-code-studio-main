import { useEffect, useState } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  startOnVisible?: boolean;
  isVisible?: boolean;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  startOnVisible = true,
  isVisible = true,
}: UseAnimatedCounterOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startOnVisible && !isVisible) return;
    if (hasStarted) return;

    setHasStarted(true);
    
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startOnVisible, isVisible, hasStarted]);

  return count;
};

export const parseNumericValue = (value: string): { number: number; prefix: string; suffix: string } => {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      number: parseFloat(match[2]),
      suffix: match[3] || "",
    };
  }
  return { prefix: "", number: 0, suffix: value };
};
