import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-6 sm:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span>🏆</span>
              <span>15+ лет успешной работы</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-accent">Создаём{" "}
                <span className="text-primary">цифровые{" "}
                  <span className="relative inline-block">
                    решения
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10C50 4 150 2 298 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300" style={{ animation: 'draw 1s ease-out 0.5s forwards' }} />
                    </svg>
                  </span>
                </span>
                <br />
                для бизнеса и госсектора</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Разрабатываем современные веб-сайты, мобильные приложения и кастомное
              программное обеспечение. Более <strong className="text-foreground font-semibold">200 успешных проектов</strong> для корпоративных клиентов и госсектора.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 sm:mb-10 text-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: <CheckCircle size={18} className="text-primary" />, text: "Госзаказчики" },
                { icon: <CheckCircle size={18} className="text-primary" />, text: "Enterprise-решения" },
                { icon: <CheckCircle size={18} className="text-primary" />, text: "NDA гарантия" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a href="/contacts" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group relative overflow-hidden h-12 sm:h-14">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Обсудить проект
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              <a href="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-transparent hover:bg-secondary group h-12 sm:h-14">
                  <span className="transition-transform duration-300 group-hover:scale-105">Смотреть портфолио</span>
                </Button>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-6 pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground text-sm font-bold ring-2 ring-background transition-transform duration-300 hover:scale-110 hover:z-10"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-accent mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="transition-transform duration-300 hover:scale-125"
                      style={{ animationDelay: `${0.7 + i * 0.05}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Отзывы 200+ клиентов</p>
              </div>
            </div>
          </div>

          <div
            className="relative opacity-0 animate-fade-in-right mt-8 lg:mt-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group mx-auto max-w-md lg:max-w-none">
              <img
                src={heroImage}
                alt="Команда ДОБРОсофт за работой"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Stats cards - visible only on larger screens to prevent cutoff */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 p-4 md:p-5 rounded-2xl bg-card shadow-xl animate-float hover:shadow-2xl transition-all duration-300 max-w-[180px] md:max-w-none">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl md:text-3xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg md:text-2xl">15+ лет</p>
                  <p className="text-xs md:text-sm text-muted-foreground">на рынке</p>
                </div>
              </div>
            </div>

            <div
              className="hidden sm:block absolute -top-4 -right-4 md:-top-6 md:-right-6 p-4 md:p-5 rounded-2xl bg-card shadow-xl animate-float hover:shadow-2xl transition-all duration-300 max-w-[180px] md:max-w-none"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-xl md:text-3xl">📊</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg md:text-2xl">200+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">проектов</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services preview - clean cards with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          {[
            { emoji: "🌐", title: "Веб-сайты", desc: "От лендингов до порталов" },
            { emoji: "📱", title: "Приложения", desc: "iOS и Android" },
            { emoji: "⚙️", title: "Кастом ПО", desc: "CRM, ERP, автоматизация" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.8 + idx * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-3xl">{item.emoji}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
