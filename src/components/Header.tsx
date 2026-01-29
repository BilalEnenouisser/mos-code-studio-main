import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dobrosoft-logo.png";
import BrandName from "@/components/BrandName";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Услуги" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "Контакты" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${isScrolled ? 'bg-background/98 backdrop-blur-md shadow-lg' : 'bg-background/98 backdrop-blur-sm shadow-sm'}`}>
      <div className="container mx-auto px-3 sm:px-4 max-w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 min-w-0">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1">
            <img
              src={logo}
              alt="ДОБРОсофт Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain flex-shrink-0"
            />
            <div className="flex flex-col min-w-0 overflow-hidden">
              <BrandName size="md" className="text-base sm:text-lg truncate" />
              <span className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5 hidden xs:block">с 2010 года</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <a
              href="tel:+79258454832"
              className="text-sm text-foreground font-semibold hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              +7 (925) 845-48-32
            </a>
            <a href="/contacts">
              <Button variant="hero" size="default" className="group">
                <span className="transition-transform duration-300 group-hover:scale-105">Обсудить проект</span>
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden text-foreground p-2 transition-transform duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
          </button>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out z-40 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
        >
          <div className="flex flex-col h-full overflow-y-auto px-6 py-8">
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center min-h-[400px]">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+79258454832"
                className={`text-xl font-bold text-primary mt-8 ${isOpen ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: '400ms' }}
              >
                +7 (925) 845-48-32
              </a>
              <a href="/contacts" onClick={() => setIsOpen(false)} className="w-full max-w-xs">
                <Button
                  variant="hero"
                  size="xl"
                  className={`mt-8 w-full ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: '500ms' }}
                >
                  Обсудить проект
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
