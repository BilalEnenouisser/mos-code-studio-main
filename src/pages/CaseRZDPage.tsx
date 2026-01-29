import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink, 
  Users, 
  Calendar, 
  Target, 
  Lightbulb,
  Pencil,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake
} from "lucide-react";
import rzdLogo from "@/assets/rzd-logo.svg";
import StageCard from "@/components/case-study/StageCard";
import ResultCard from "@/components/case-study/ResultCard";
import TechBadge from "@/components/case-study/TechBadge";
import LogoCard from "@/components/case-study/LogoCard";

const stages = [
  {
    icon: Lightbulb,
    title: "Исследование и аналитика",
    duration: "4 недели",
    description: "Анализ требований к крупнейшему транспортному порталу страны",
    tasks: [
      "Аудит существующей инфраструктуры РЖД",
      "Анализ пользовательских сценариев бронирования",
      "Исследование нагрузки в пиковые периоды",
      "Формирование требований к отказоустойчивости",
      "Проектирование интеграций с системами продажи билетов"
    ]
  },
  {
    icon: Pencil,
    title: "UX/UI Дизайн",
    duration: "6 недель",
    description: "Создание удобного интерфейса для миллионов пользователей",
    tasks: [
      "Редизайн системы поиска и бронирования",
      "Проектирование адаптивного личного кабинета",
      "Оптимизация мобильного опыта",
      "Дизайн интерактивной карты маршрутов",
      "A/B тестирование ключевых сценариев"
    ]
  },
  {
    icon: Code2,
    title: "Разработка",
    duration: "18 недель",
    description: "Создание высоконагруженной платформы федерального уровня",
    tasks: [
      "Разработка фронтенда на React с серверным рендерингом",
      "Микросервисная архитектура на Java и Spring",
      "Интеграция с Oracle и системами бронирования",
      "Реализация real-time отслеживания поездов",
      "Разработка системы электронных билетов"
    ]
  },
  {
    icon: TestTube,
    title: "Тестирование",
    duration: "5 недель",
    description: "Многоуровневое тестирование для критической инфраструктуры",
    tasks: [
      "Нагрузочное тестирование на 1M+ одновременных пользователей",
      "Интеграционное тестирование с системами РЖД",
      "Тестирование безопасности платёжных операций",
      "Кроссбраузерное и мобильное тестирование",
      "Тестирование отказоустойчивости"
    ]
  },
  {
    icon: Rocket,
    title: "Запуск",
    duration: "3 недели",
    description: "Поэтапный запуск с минимизацией рисков",
    tasks: [
      "Canary-деплой на ограниченную аудиторию",
      "Миграция данных без простоя сервиса",
      "Настройка CDN и геораспределённого кэширования",
      "Мониторинг метрик в реальном времени",
      "Координация с IT-службами РЖД"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Поддержка",
    duration: "Ongoing",
    description: "Круглосуточная поддержка критической инфраструктуры",
    tasks: [
      "Техническая поддержка 24/7/365",
      "SLA 99.99% доступности",
      "Регулярные обновления безопасности",
      "Масштабирование под сезонные нагрузки",
      "Развитие функциональности по roadmap"
    ]
  }
];

const results = [
  { value: "50M+", label: "пользователей в месяц" },
  { value: "10M+", label: "проданных билетов онлайн" },
  { value: "99.99%", label: "uptime системы" },
  { value: "2 сек", label: "среднее время отклика" }
];

const technologies = ["React", "Java", "Oracle", "Spring", "Микросервисы", "Kubernetes"];

const CaseRZDPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: stagesRef, isVisible: stagesVisible } = useScrollAnimation();
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-secondary via-background to-secondary/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div ref={heroRef}>
              <a 
                href="/portfolio" 
                className={`inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all mb-8 group ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: '100ms', transitionDuration: '500ms' }}
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Вернуться к портфолио
              </a>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <Badge 
                    className={`mb-4 bg-primary/10 text-primary border-0 transition-all duration-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: '150ms' }}
                  >
                    Корпоративный сайт
                  </Badge>
                  <h1 
                    className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    Официальный сайт РЖД
                  </h1>
                  <p 
                    className={`text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '250ms' }}
                  >
                    Главный веб-портал крупнейшей транспортной компании России с системой 
                    онлайн-бронирования билетов, личным кабинетом пассажира и интерактивной 
                    картой железнодорожных маршрутов.
                  </p>

                  <div 
                    className={`flex flex-wrap gap-6 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Users className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>РЖД</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>9 месяцев разработки</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Target className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>50M+ пользователей</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {technologies.map((tech, index) => (
                      <TechBadge key={tech} tech={tech} index={index} isVisible={heroVisible} />
                    ))}
                  </div>

                  <a 
                    href="https://rzd.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <Button variant="hero" size="lg" className="group">
                      Посетить сайт
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                <div className="lg:w-1/3">
                  <LogoCard 
                    logo={rzdLogo}
                    alt="РЖД Logo"
                    isVisible={heroVisible}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div ref={stagesRef}>
              <div className="text-center mb-16">
                <p 
                  className={`text-primary font-semibold mb-3 tracking-wide uppercase text-sm transition-all duration-500 ${stagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  Процесс
                </p>
                <h2 
                  className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${stagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Стадии разработки
                </h2>
                <p 
                  className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${stagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '200ms' }}
                >
                  Проект реализован с применением методологии SAFe для крупных enterprise-систем
                </p>
              </div>

              <div className="relative">
                {/* Timeline line with gradient */}
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 lg:-translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                  {stages.map((stage, index) => (
                    <StageCard 
                      key={index}
                      stage={stage}
                      index={index}
                      isVisible={stagesVisible}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div ref={resultsRef}>
              <div className="text-center mb-12">
                <p 
                  className={`text-primary font-semibold mb-3 tracking-wide uppercase text-sm transition-all duration-500 ${resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  Результаты
                </p>
                <h2 
                  className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Достигнутые показатели
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <ResultCard 
                    key={index}
                    result={result}
                    index={index}
                    isVisible={resultsVisible}
                  />
                ))}
              </div>

              <div 
                className={`mt-16 text-center transition-all duration-700 ${resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <a href="/contacts">
                  <Button variant="hero" size="lg">
                    Обсудить ваш проект
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

export default CaseRZDPage;
