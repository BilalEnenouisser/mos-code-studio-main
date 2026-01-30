import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import { Link } from "react-router-dom";

const companies = ["Сбербанк", "Газпром", "РЖД", "Ростелеком", "МТС", "ВТБ"];

const services = [
  {
    id: "ui-ux-design",
    emoji: "🎨",
    title: "UI/UX Веб-дизайн",
    description: "Проектирование пользовательского опыта и создание уникального визуального стиля. Прототипирование, user research, дизайн-системы.",
    features: ["Прототипирование", "Дизайн-системы", "User Research", "Брендинг"],
    popular: false,
  },
  {
    id: "web-development",
    emoji: "🌐",
    title: "Разработка веб-сайтов",
    description: "Корпоративные сайты, лендинги, промо-сайты любой сложности. Адаптивный дизайн, SEO-оптимизация, интеграции.",
    features: ["Адаптивный дизайн", "SEO-оптимизация", "CMS-интеграция", "Аналитика"],
    popular: false,
  },
  {
    id: "mobile-apps",
    emoji: "📱",
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные приложения для iOS и Android с интуитивным интерфейсом.",
    features: ["iOS & Android", "Push-уведомления", "Офлайн-режим", "App Store"],
    popular: false,
  },
  {
    id: "web-portals",
    emoji: "🖥️",
    title: "Веб-порталы",
    description: "Корпоративные порталы, личные кабинеты, интранет-системы с высокой нагрузкой и масштабируемой архитектурой.",
    features: ["Высокая нагрузка", "API-интеграции", "Real-time данные", "Микросервисы"],
    popular: true,
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    title: "eCommerce решения",
    description: "Интернет-магазины и маркетплейсы с платёжными системами, складским учётом и аналитикой продаж.",
    features: ["Платёжные системы", "Складской учёт", "CRM-интеграция", "Маркетплейсы"],
    popular: false,
  },
  {
    id: "custom-software",
    emoji: "⚙️",
    title: "Кастомное ПО",
    description: "Разработка CRM, ERP и специализированного ПО любого уровня сложности под уникальные бизнес-процессы.",
    features: ["CRM/ERP системы", "Автоматизация", "Интеграции 1С", "СМЭВ/ЭЦП"],
    popular: true,
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();
  const parallaxOffset = useParallax({ speed: 0.1 });

  return (
    <section id="services" className="py-24 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Parallax background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      />
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            Наши услуги
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Полный цикл разработки
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            От идеи до запуска и поддержки. Создаём цифровые продукты, которые решают бизнес-задачи.
            Работаем с корпоративными клиентами и госзаказчиками.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${service.popular ? 'ring-2 ring-primary shadow-primary/10' : ''} ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold animate-pulse-glow">
                    Популярно
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                  <span className="text-3xl transition-transform duration-500 group-hover:scale-110">{service.emoji}</span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 transition-transform duration-300 group-hover:scale-150" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-end pt-5 border-t border-border/50">
                  <Link
                    to={`/services#${service.id}`}
                    className="flex items-center gap-1.5 text-primary font-medium hover:gap-2.5 transition-all text-sm group/btn"
                  >
                    Подробнее
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust section */}
        <div
          ref={trustRef}
          className={`mt-20 text-center transition-all duration-700 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm text-muted-foreground mb-8 font-medium">Нам доверяют крупнейшие компании России</p>
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company, idx) => (
              <div
                key={company}
                className={`px-8 py-4 rounded-xl bg-card shadow-md text-muted-foreground font-semibold text-lg transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:text-foreground cursor-default ${trustVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: trustVisible ? `${idx * 80}ms` : '0ms' }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
