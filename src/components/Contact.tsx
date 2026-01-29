import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();



  // ... existing imports

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Update this URL to your actual server URL where the PHP file is hosted
      // For local testing with PHP: http://localhost/send-email.php
      // For production: https://yourdomain.com/send-email.php
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "✅ Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "❌ Ошибка отправки",
        description: "Что-то пошло не так. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactCards = [
    {
      emoji: "📍",
      title: "Офис в Москве",
      lines: ["г. Москва, ул. Тверская, 12"],
      highlight: "5 мин от м. Тверская"
    },
    {
      emoji: "📞",
      title: "Телефон",
      lines: ["+7 (925) 845-48-32"],
      subline: "Пн-Пт: 9:00 - 20:00",
      highlight: "Отвечаем за 5 минут"
    },
    {
      emoji: "✉️",
      title: "Email",
      lines: ["info@добрософт.рф"],
      subline: "sales@добрософт.рф",
      highlight: "Ответим за 30 минут"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            Контакты
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Обсудим ваш проект?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 30 минут для обсуждения деталей.
            Бесплатная консультация и оценка проекта.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            ref={formRef}
            className={`p-10 bg-card rounded-3xl shadow-xl transition-all duration-700 hover:shadow-2xl ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl animate-bounce-subtle">📝</span>
              <h3 className="text-2xl font-bold text-foreground">Оставить заявку</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@company.ru"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (925) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Опишите ваш проект
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Расскажите о вашей идее, задачах и ожидаемых сроках..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-0 resize-none focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-14 text-base group relative overflow-hidden"
                disabled={isSubmitting}
              >
                <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Отправить заявку
                  <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          <div ref={infoRef} className="space-y-6">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className={`p-7 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: infoVisible ? `${idx * 150}ms` : '0ms' }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                    <span className="text-3xl">{card.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                    {card.lines.map((line, lineIdx) => (
                      <p key={lineIdx} className={lineIdx === 0 && card.lines.length > 1 ? "text-muted-foreground" : "text-xl font-semibold text-foreground"}>{line}</p>
                    ))}
                    {card.subline && <p className="text-sm text-muted-foreground">{card.subline}</p>}
                    <p className="text-sm text-primary mt-2 font-medium">{card.highlight}</p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`p-7 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all duration-500 group ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: infoVisible ? '450ms' : '0ms' }}
            >
              <div className="flex items-center gap-5">
                <span className="text-4xl transition-transform duration-500 group-hover:scale-110">💬</span>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Мессенджеры</h3>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 rounded-full bg-card shadow-sm text-sm font-medium hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:bg-primary/5">Telegram</span>
                    <span className="px-4 py-2 rounded-full bg-card shadow-sm text-sm font-medium hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:bg-primary/5">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
