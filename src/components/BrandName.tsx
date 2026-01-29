import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const BrandName = ({ className, size = "md" }: BrandNameProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl md:text-6xl",
  };

  return (
    <span className={cn("font-display font-extrabold tracking-tight", sizeClasses[size], className)}>
      <span className="text-gradient-brand">ДОБРОсофт</span>
      <span className="text-gradient-brand text-[0.5em] align-super">™</span>
    </span>
  );
};

export default BrandName;
