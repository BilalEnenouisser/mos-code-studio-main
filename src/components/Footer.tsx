import logo from "@/assets/dobrosoft-logo.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import BrandName from "@/components/BrandName";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer ref={footerRef} className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <img
                src={logo}
                alt="ДОБРОсофт Logo"
                className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />
              <div>
                <BrandName size="md" />
                <p className="text-xs text-muted-foreground">Веб-студия с 2010 года</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Ведущая московская веб-студия полного цикла. 15+ лет создаём цифровые продукты
              для крупного бизнеса и государственного сектора. Более 200 успешных проектов.
            </p>
            <div className="flex gap-4">
              {["📱", "💬", "📧"].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center text-lg hover:shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-primary/5 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: footerVisible ? `${idx * 100}ms` : '0ms' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-100 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-foreground mb-5 text-lg">Услуги</h4>
            <ul className="space-y-3">
              {[
                { label: "UI/UX Дизайн", href: "/services" },
                { label: "Веб-сайты", href: "/services" },
                { label: "Мобильные приложения", href: "/services" },
                { label: "Веб-порталы", href: "/services" },
                { label: "Кастомное ПО", href: "/services" },
              ].map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 inline-block hover:translate-x-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-700 delay-200 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-foreground mb-5 text-lg">Компания</h4>
            <ul className="space-y-3">
              {[
                { label: "О нас", href: "/about" },
                { label: "Портфолио", href: "/portfolio" },
                { label: "Контакты", href: "/contacts" },
              ].map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 inline-block hover:translate-x-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700 delay-300 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-muted-foreground">
            © 2010-{new Date().getFullYear()} ДОБРОсофт™. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Политика конфиденциальности", href: "/privacy" },
              { label: "Условия использования", href: "/terms" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
