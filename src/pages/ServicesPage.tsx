import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const servicesDetailed = [
  {
    id: "ui-ux-design",
    emoji: "🎨",
    title: "UI/UX Веб-дизайн",
    shortDesc: "Проектирование пользовательского опыта и создание уникального визуального стиля",
    fullDesc: "Мы создаём дизайн, который не просто красиво выглядит, но и эффективно решает бизнес-задачи. Наши дизайнеры проводят глубокий анализ целевой аудитории, конкурентов и бизнес-целей, чтобы создать интерфейс, который повышает конверсию и удовлетворённость пользователей.",
    features: [
      "Глубокий User Research и анализ ЦА",
      "Прототипирование в Figma",
      "Создание дизайн-систем",
      "Юзабилити-тестирование",
      "Разработка брендбуков",
      "Адаптивный дизайн для всех устройств",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
    timeline: "от 2 недель",
    popular: false,
  },
  {
    id: "web-development",
    emoji: "🌐",
    title: "Разработка веб-сайтов",
    shortDesc: "Корпоративные сайты, лендинги и промо-сайты любой сложности",
    fullDesc: "Разрабатываем современные веб-сайты с чистым кодом, высокой производительностью и отличной SEO-оптимизацией. Каждый проект создаётся с учётом требований вашего бизнеса и масштабируется под будущий рост.",
    features: [
      "Полностью адаптивный дизайн",
      "SEO-оптимизация из коробки",
      "Интеграция с любыми CMS",
      "Подключение аналитики",
      "Высокая скорость загрузки",
      "Кроссбраузерная совместимость",
    ],
    technologies: ["React", "Next.js", "WordPress", "Laravel", "Node.js"],
    timeline: "от 3 недель",
    popular: false,
  },
  {
    id: "mobile-apps",
    emoji: "📱",
    title: "Мобильные приложения",
    shortDesc: "Нативные и кроссплатформенные приложения для iOS и Android",
    fullDesc: "Создаём мобильные приложения, которые пользователи любят использовать. От простых MVP до сложных enterprise-решений с миллионами пользователей. Публикуем в App Store и Google Play с полным сопровождением.",
    features: [
      "Нативная разработка iOS и Android",
      "Кроссплатформенные решения",
      "Push-уведомления и геолокация",
      "Офлайн-режим работы",
      "Интеграция с платёжными системами",
      "Публикация в магазинах приложений",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    timeline: "от 6 недель",
    popular: false,
  },
  {
    id: "web-portals",
    emoji: "🖥️",
    title: "Веб-порталы",
    shortDesc: "Корпоративные порталы, личные кабинеты и интранет-системы",
    fullDesc: "Проектируем и разрабатываем высоконагруженные веб-порталы с масштабируемой микросервисной архитектурой. Личные кабинеты, интранет-системы, B2B-платформы — решения любой сложности.",
    features: [
      "Микросервисная архитектура",
      "Real-time обновления данных",
      "Интеграция с внешними API",
      "Ролевая модель доступа",
      "Высокая отказоустойчивость",
      "Горизонтальное масштабирование",
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
    timeline: "от 8 недель",
    popular: true,
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    title: "eCommerce решения",
    shortDesc: "Интернет-магазины и маркетплейсы с полной автоматизацией",
    fullDesc: "Разрабатываем интернет-магазины и маркетплейсы с интеграцией платёжных систем, складского учёта, CRM и сервисов доставки. Автоматизируем все процессы от заказа до доставки.",
    features: [
      "Интеграция платёжных систем",
      "Автоматизация складского учёта",
      "Синхронизация с 1С и CRM",
      "Подключение служб доставки",
      "Аналитика продаж и воронки",
      "Программы лояльности",
    ],
    technologies: ["React", "Node.js", "1C-Битрикс", "PostgreSQL", "Elasticsearch"],
    timeline: "от 6 недель",
    popular: false,
  },
  {
    id: "custom-software",
    emoji: "⚙️",
    title: "Кастомное ПО",
    shortDesc: "CRM, ERP и специализированное ПО под уникальные бизнес-процессы",
    fullDesc: "Создаём программное обеспечение, которое точно соответствует вашим бизнес-процессам. CRM, ERP, системы документооборота, автоматизация — решаем задачи любой сложности, включая интеграцию с СМЭВ и работу с ЭЦП.",
    features: [
      "Разработка CRM/ERP систем",
      "Автоматизация бизнес-процессов",
      "Интеграция с 1С и госсистемами",
      "Работа с СМЭВ и ЭЦП",
      "Системы документооборота",
      "Техподдержка 24/7",
    ],
    technologies: ["Python", "Node.js", "PostgreSQL", "1C", "СМЭВ", "КриптоПро"],
    timeline: "от 12 недель",
    popular: true,
  },
];

const ServicesPage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div 
              ref={headerRef}
              className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                Наши услуги
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                Полный цикл разработки
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                От идеи до запуска и поддержки. Создаём цифровые продукты, которые решают бизнес-задачи.
                Работаем с корпоративными клиентами и госзаказчиками по 44-ФЗ и 223-ФЗ.
              </p>
            </div>
            
            <div ref={cardsRef} className="space-y-8">
              {servicesDetailed.map((service, index) => (
                <Card 
                  key={index}
                  id={service.id}
                  className={`group bg-card shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden ${service.popular ? 'ring-2 ring-primary shadow-primary/10' : ''} ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
                >
                  {service.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        Популярно
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-2">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                            <span className="text-3xl">{service.emoji}</span>
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {service.shortDesc}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
                            >
                              <CheckCircle size={18} className="text-primary shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                    
                    <div className="flex flex-col justify-between bg-secondary/50 rounded-2xl p-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Технологии</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1.5 text-xs rounded-full bg-card text-muted-foreground font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                          <span className="text-lg">⏱️</span>
                          <span>Сроки: <strong className="text-foreground">{service.timeline}</strong></span>
                        </div>
                      </div>
                      <a href="/contacts">
                        <Button variant="hero" className="w-full group/btn">
                          <span className="flex items-center gap-2">
                            Заказать
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div 
              ref={ctaRef}
              className={`mt-20 text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-card shadow-xl">
                <span className="text-5xl mb-4 block">💬</span>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Не нашли нужную услугу?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами — мы обсудим вашу задачу и предложим оптимальное решение
                </p>
                <a href="/contacts">
                  <Button variant="hero" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Обсудить проект
                      <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
