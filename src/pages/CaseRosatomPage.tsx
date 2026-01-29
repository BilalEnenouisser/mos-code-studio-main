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
import rosatomLogo from "@/assets/rosatom-logo.svg";
import StageCard from "@/components/case-study/StageCard";
import ResultCard from "@/components/case-study/ResultCard";
import TechBadge from "@/components/case-study/TechBadge";
import LogoCard from "@/components/case-study/LogoCard";

const stages = [
  {
    icon: Lightbulb,
    title: "Исследование и аналитика",
    duration: "5 недель",
    description: "Глубокий анализ требований к порталу госкорпорации атомной отрасли",
    tasks: [
      "Аудит информационной безопасности",
      "Анализ требований 44-ФЗ и 223-ФЗ",
      "Исследование потребностей подразделений",
      "Интеграция с системой СМЭВ",
      "Формирование архитектуры документооборота"
    ]
  },
  {
    icon: Pencil,
    title: "UX/UI Дизайн",
    duration: "5 недель",
    description: "Разработка интерфейса с учётом требований госсектора",
    tasks: [
      "Дизайн в соответствии с брендбуком Росатома",
      "Проектирование системы навигации по структуре корпорации",
      "Создание дашбордов для руководства",
      "Дизайн публичного и закрытого разделов",
      "Адаптация для людей с ограниченными возможностями"
    ]
  },
  {
    icon: Code2,
    title: "Разработка",
    duration: "16 недель",
    description: "Создание защищённой платформы федерального уровня",
    tasks: [
      "Разработка фронтенда на React с SSR",
      "Backend на Python с Django и FastAPI",
      "Интеграция с системой электронного документооборота",
      "Реализация системы управления контентом",
      "Подключение к СМЭВ и ГИС"
    ]
  },
  {
    icon: TestTube,
    title: "Тестирование",
    duration: "4 недели",
    description: "Комплексное тестирование с учётом требований безопасности",
    tasks: [
      "Аудит информационной безопасности ФСТЭК",
      "Тестирование на соответствие 152-ФЗ",
      "Нагрузочное тестирование",
      "Тестирование интеграций с госсистемами",
      "Приёмочное тестирование с заказчиком"
    ]
  },
  {
    icon: Rocket,
    title: "Запуск",
    duration: "3 недели",
    description: "Ввод в эксплуатацию с соблюдением регламентов",
    tasks: [
      "Развёртывание в защищённом контуре",
      "Миграция данных со старой платформы",
      "Настройка резервного копирования",
      "Получение аттестата соответствия",
      "Обучение администраторов и редакторов"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Поддержка",
    duration: "Ongoing",
    description: "Сопровождение критически важной инфраструктуры",
    tasks: [
      "Техническая поддержка в режиме 24/7",
      "Регулярные обновления безопасности",
      "Развитие функциональности по roadmap",
      "Мониторинг и реагирование на инциденты",
      "Ежегодный аудит безопасности"
    ]
  }
];

const results = [
  { value: "100+", label: "подразделений в системе" },
  { value: "500K+", label: "документов в обороте" },
  { value: "99.9%", label: "uptime системы" },
  { value: "ФСТЭК", label: "аттестация безопасности" }
];

const technologies = ["React", "Python", "PostgreSQL", "Django", "СМЭВ", "Docker"];

const CaseRosatomPage = () => {
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
                    Госсектор
                  </Badge>
                  <h1 
                    className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    Корпоративный портал Росатома
                  </h1>
                  <p 
                    className={`text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '250ms' }}
                  >
                    Официальный веб-портал государственной корпорации по атомной энергии 
                    с системой электронного документооборота, интеграцией с СМЭВ и 
                    защищённым контуром для внутренних коммуникаций.
                  </p>

                  <div 
                    className={`flex flex-wrap gap-6 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Users className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>Госкорпорация Росатом</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>8 месяцев разработки</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground group">
                      <Target className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span>Федеральный уровень</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {technologies.map((tech, index) => (
                      <TechBadge key={tech} tech={tech} index={index} isVisible={heroVisible} />
                    ))}
                  </div>

                  <a 
                    href="https://rosatom.ru" 
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
                    logo={rosatomLogo}
                    alt="Росатом Logo"
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
                  Проект реализован с соблюдением требований 44-ФЗ и стандартов информационной безопасности
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

export default CaseRosatomPage;
