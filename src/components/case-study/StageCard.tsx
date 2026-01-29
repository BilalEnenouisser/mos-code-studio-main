import { CheckCircle2, LucideIcon } from "lucide-react";

interface Stage {
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
}

interface StageCardProps {
  stage: Stage;
  index: number;
  isVisible: boolean;
  isEven: boolean;
}

const StageCard = ({ stage, index, isVisible, isEven }: StageCardProps) => {
  const Icon = stage.icon;

  return (
    <div 
      className={`relative flex flex-col lg:flex-row gap-8 items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms', transition: 'all 0.5s ease-out' }}
    >
      {/* Timeline dot with pulse animation */}
      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full lg:-translate-x-1/2 -translate-x-1/2 mt-8 hidden md:block shadow-lg shadow-primary/30">
        <div 
          className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"
          style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}
        />
      </div>
      
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:order-2'}`}>
        <div 
          className={`bg-card rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${isEven ? 'lg:ml-auto' : ''} lg:max-w-xl`}
        >
          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
              <Icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <div className={isEven ? 'lg:text-right' : ''}>
              <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
              <p className="text-sm text-primary font-medium">{stage.duration}</p>
            </div>
          </div>
          
          <p className={`text-muted-foreground mb-6 ${isEven ? 'lg:text-right' : ''}`}>
            {stage.description}
          </p>
          
          <ul className={`space-y-3 ${isEven ? 'lg:text-right' : ''}`}>
            {stage.tasks.map((task, idx) => (
              <li 
                key={idx} 
                className={`flex items-start gap-3 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground ${isEven ? 'lg:flex-row-reverse' : ''}`}
                style={{ 
                  transitionDelay: isVisible ? `${(index * 100) + (idx * 50)}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : `translateX(${isEven ? '20px' : '-20px'})`
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Empty space for alternating layout */}
      <div className={`hidden lg:block flex-1 ${isEven ? 'lg:order-2' : ''}`} />
    </div>
  );
};

export default StageCard;
