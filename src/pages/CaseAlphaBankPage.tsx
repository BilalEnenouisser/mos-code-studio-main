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
import StageCard from "@/components/case-study/StageCard";
import ResultCard from "@/components/case-study/ResultCard";
import TechBadge from "@/components/case-study/TechBadge";
import LogoCard from "@/components/case-study/LogoCard";

const stages = [
  {
    icon: Lightbulb,
    title: "Исследование и аналитика",
    duration: "3 недели",
    description: "Глубокий анализ потребностей HR-отдела и соискателей",
    tasks: [
      "Интервью с ключевыми стейкхолдерами банка",
      "Анализ конкурентных HR-порталов",
      "Исследование пользовательского опыта соискателей",
      "Формирование технических требований",
      "Определение KPI и метрик успеха"
    ]
  },
  {
    icon: Pencil,
    title: "UX/UI Дизайн",
    duration: "4 недели",
    description: "Создание интуитивного интерфейса в корпоративном стиле",
    tasks: [
      "Разработка информационной архитектуры",
      "Создание wireframes и прототипов",
      "Дизайн в соответствии с брендбуком Альфа-Банка",
      "Проектирование адаптивных макетов",
      "Тестирование прототипов с фокус-группами"
    ]
  },
  {
    icon: Code2,
    title: "Разработка",
    duration: "12 недель",
    description: "Создание высоконагруженной платформы с интеграциями",
    tasks: [
      "Разработка фронтенда на React с TypeScript",
      "Создание Node.js бэкенда с микросервисной архитектурой",
      "Интеграция с внутренними HR-системами банка",
      "Реализация системы поиска вакансий и фильтрации",
      "Разработка личного кабинета соискателя"
    ]
  },
  {
    icon: TestTube,
    title: "Тестирование",
    duration: "3 недели",
    description: "Комплексное тестирование качества и безопасности",
    tasks: [
      "Функциональное и регрессионное тестирование",
      "Нагрузочное тестирование на 100K+ пользователей",
      "Аудит безопасности и пентестинг",
      "Тестирование на различных устройствах",
      "UAT с представителями заказчика"
    ]
  },
  {
    icon: Rocket,
    title: "Запуск",
    duration: "2 недели",
    description: "Плавный переход с мониторингом стабильности",
    tasks: [
      "Поэтапный деплой в production",
      "Миграция данных со старой платформы",
      "Настройка мониторинга и алертинга",
      "Обучение администраторов системы",
      "Подготовка документации"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Поддержка",
    duration: "Ongoing",
    description: "Развитие и оптимизация платформы",
    tasks: [
      "Техническая поддержка 24/7",
      "Регулярные обновления безопасности",
      "Добавление новых функций по запросу",
      "Оптимизация производительности",
      "Аналитика и отчётность"
    ]
  }
];

const results = [
  { value: "1M+", label: "посетителей в месяц" },
  { value: "50K+", label: "зарегистрированных соискателей" },
  { value: "3x", label: "ускорение закрытия вакансий" },
  { value: "98%", label: "uptime системы" }
];

const technologies = ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker", "Kubernetes"];

const CaseAlphaBankPage = () => {
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
                    Веб-портал
                  </Badge>
                  <h1 
                    className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    Карьерный портал Альфа-Банка
                  </h1>
                  <p 
                    className={`text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '250ms' }}
                  >
                    Корпоративный HR-портал для поиска вакансий и управления карьерой в одном из 
                    крупнейших банков России. Платформа объединяет соискателей и рекрутеров, 
                    автоматизируя процесс найма.
                  </p>

                  <div 
                    className={`flex flex-wrap gap-6 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Users className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>Альфа-Банк</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>6 месяцев разработки</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Target className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>1M+ посетителей</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {technologies.map((tech, index) => (
                      <TechBadge key={tech} tech={tech} index={index} isVisible={heroVisible} />
                    ))}
                  </div>

                  <a 
                    href="https://job.alphabank.ru" 
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
                    logo="https://upload.wikimedia.org/wikipedia/commons/7/77/Alfa-Bank.svg"
                    alt="Alfa-Bank Logo"
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
                  Проект реализован по методологии Agile с итерациями по 2 недели
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

export default CaseAlphaBankPage;
