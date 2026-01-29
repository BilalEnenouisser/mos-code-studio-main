import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import rzdLogo from "@/assets/rzd-logo.svg";
import rosatomLogo from "@/assets/rosatom-logo.svg";

const projects = [
  {
    title: "Карьерный портал Альфа-Банка",
    category: "Веб-портал",
    description: "Корпоративный HR-портал для поиска вакансий и управления карьерой в одном из крупнейших банков России",
    tags: ["React", "Node.js", "PostgreSQL", "HR-интеграции"],
    url: "https://job.alphabank.ru",
    caseUrl: "/portfolio/alfa-bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Alfa-Bank.svg",
    client: "Альфа-Банк",
    result: "1M+ посетителей",
  },
  {
    title: "Официальный сайт РЖД",
    category: "Корпоративный сайт",
    description: "Главный веб-портал крупнейшей транспортной компании России с системой бронирования и личным кабинетом",
    tags: ["React", "Java", "Oracle", "Микросервисы"],
    url: "https://rzd.ru",
    caseUrl: "/portfolio/rzd",
    logo: rzdLogo,
    client: "РЖД",
    result: "50M+ пользователей",
  },
  {
    title: "Корпоративный портал Росатома",
    category: "Госсектор",
    description: "Официальный веб-портал государственной корпорации по атомной энергии с системой документооборота",
    tags: ["React", "Python", "PostgreSQL", "СМЭВ"],
    url: "https://rosatom.ru",
    caseUrl: "/portfolio/rosatom",
    logo: rosatomLogo,
    client: "Госкорпорация Росатом",
    result: "Федеральный уровень",
  },
];

const Portfolio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            Портфолио
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реализованные кейсы для крупных корпоративных клиентов и государственных заказчиков.
            Более 200 проектов за 15 лет работы.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CardWrapper = project.caseUrl ? 'a' : 'div';
            const cardProps = project.caseUrl 
              ? { href: project.caseUrl } 
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`group block overflow-hidden bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Logo Header */}
                <div className="h-48 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center p-8 relative overflow-hidden">
                  <img 
                    src={project.logo} 
                    alt={`${project.client} logo`}
                    className="max-h-24 max-w-[200px] object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5">
                    <Badge className="bg-card/95 text-foreground shadow-md font-medium transition-transform duration-300 group-hover:scale-105">
                      {project.category}
                    </Badge>
                  </div>
                  {project.caseUrl && (
                    <div className="absolute top-5 right-5">
                      <div className="w-11 h-11 rounded-full bg-card/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-md transform translate-y-2 group-hover:translate-y-0">
                        <ArrowRight className="text-primary" size={18} />
                      </div>
                    </div>
                  )}
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <div className="p-7">
                  <p className="text-xs text-muted-foreground mb-2 font-medium transition-colors duration-300 group-hover:text-primary">{project.client}</p>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    {project.caseUrl ? (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Подробнее о проекте
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Посетить сайт
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <span className="text-sm font-bold text-primary">{project.result}</span>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <div 
          ref={ctaRef}
          className={`mt-16 text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <a href="/contacts" className="inline-flex items-center gap-5 px-8 py-5 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer group">
            <span className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">📊</span>
            <div className="text-left">
              <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">Хотите увидеть больше?</p>
              <p className="text-sm text-muted-foreground">Запросите полное портфолио с кейсами из вашей отрасли</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
