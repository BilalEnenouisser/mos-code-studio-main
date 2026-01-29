import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import BrandName from "@/components/BrandName";

const stats = [
  { value: 15, suffix: "+", label: "Лет опыта", emoji: "🏆" },
  { value: 200, suffix: "+", label: "Проектов", emoji: "📊" },
  { value: 50, suffix: "+", label: "Госзаказчиков", emoji: "🏛️" },
  { value: 35, suffix: "", label: "Специалистов", emoji: "👨‍💻" },
];

const advantages = [
  {
    emoji: "🔒",
    title: "NDA и безопасность",
    description: "Полная конфиденциальность проектов. Работаем с гостайной."
  },
  {
    emoji: "🤝",
    title: "Персональный менеджер",
    description: "Выделенный менеджер проекта на всех этапах работы."
  },
  {
    emoji: "✅",
    title: "Гарантия качества",
    description: "12 месяцев гарантии на все разработки. Техподдержка 24/7."
  },
];

const values = [
  {
    emoji: "💡",
    title: "Инновации",
    description: "Используем передовые технологии и современные подходы к разработке."
  },
  {
    emoji: "🎯",
    title: "Результат",
    description: "Фокусируемся на достижении бизнес-целей клиента."
  },
  {
    emoji: "⚡",
    title: "Скорость",
    description: "Оперативная разработка без потери качества."
  },
  {
    emoji: "🛡️",
    title: "Надёжность",
    description: "Стабильные решения, которые работают годами."
  },
];

const timeline = [
  { year: "2010", title: "Основание компании", description: "Начало работы с первыми корпоративными клиентами" },
  { year: "2010", title: "Первый госзаказ", description: "Выход на рынок государственных закупок" },
  { year: "2016", title: "Расширение команды", description: "Рост до 20 специалистов, открытие офиса на Тверской" },
  { year: "2019", title: "100+ проектов", description: "Преодоление рубежа в 100 успешных проектов" },
  { year: "2022", title: "Мобильная разработка", description: "Запуск направления мобильных приложений" },
  { year: "2024", title: "200+ проектов", description: "Лидирующие позиции на рынке enterprise-решений" },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{count}{suffix}</span>;
};

const AboutPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: govRef, isVisible: govVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                О компании
              </p>
              <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">
                <BrandName size="xl" />
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ведущая московская веб-студия полного цикла. 15 лет создаём цифровые продукты 
                для крупного бизнеса и государственного сектора. Более 200 успешных проектов.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className={`relative transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={teamImage} 
                    alt="Команда ДОБРОсофт" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-card shadow-xl animate-float hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🎯</span>
                    <div>
                      <p className="font-bold text-foreground text-xl">С 2010 года</p>
                      <p className="text-sm text-muted-foreground">на рынке разработки</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Почему выбирают нас?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  За 15 лет мы реализовали более <strong className="text-foreground font-semibold">200 проектов</strong> для ведущих компаний России. 
                  Наша команда из 35 специалистов имеет опыт работы с крупнейшими корпоративными 
                  заказчиками и государственным сектором.
                </p>
                
                <div className="space-y-4 mb-10">
                  {advantages.map((adv, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-5 p-5 rounded-2xl bg-card shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: contentVisible ? `${300 + idx * 150}ms` : '0ms' }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                        <span className="text-2xl">{adv.emoji}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-lg group-hover:text-primary transition-colors duration-300">{adv.title}</h4>
                        <p className="text-muted-foreground">{adv.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {["React", "React Native", "Next.js", "Node.js", "JavaScript", "HTML", "CSS", "Python", "Laravel", "WordPress", "Flutter", "D3.js", "PostgreSQL", "1C", "СМЭВ", "ЭЦП"].map((tech, idx) => (
                    <div 
                      key={tech} 
                      className={`px-4 py-2 rounded-full bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 cursor-default ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                      style={{ transitionDelay: contentVisible ? `${600 + idx * 50}ms` : '0ms' }}
                    >
                      <span className="text-sm text-muted-foreground font-medium hover:text-primary transition-colors duration-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-2 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: statsVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <span className="text-4xl mb-4 block transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{stat.emoji}</span>
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                Наши ценности
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Принципы нашей работы
              </h2>
            </div>
            <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-2 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: valuesVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <span className="text-4xl mb-4 block transition-transform duration-500 group-hover:scale-125">{value.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                История компании
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Наш путь развития
              </h2>
            </div>
            <div ref={timelineRef} className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full hidden md:block" />
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: timelineVisible ? `${index * 150}ms` : '0ms', transition: 'all 0.7s ease' }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government experience */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div 
              ref={govRef}
              className={`p-10 rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all duration-700 ${govVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                🏛️ Опыт работы с государственным сектором
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                {["Министерства РФ", "Региональные администрации", "Госкорпорации", "Образовательные учреждения"].map((item, idx) => (
                  <span 
                    key={item} 
                    className={`px-5 py-2.5 rounded-full bg-secondary text-muted-foreground font-medium transition-all duration-500 hover:bg-primary/10 hover:text-primary cursor-default ${govVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: govVisible ? `${200 + idx * 100}ms` : '0ms' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-center text-muted-foreground mb-8">
                ✅ Готовы к участию в государственных тендерах и закупках по 44-ФЗ и 223-ФЗ
              </p>
              <div className="text-center">
                <a 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Обсудить проект
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

export default AboutPage;
