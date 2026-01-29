import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TermsOfUsePage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div 
              ref={headerRef}
              className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                Правовая информация
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                Условия использования
              </h1>
              <p className="text-lg text-muted-foreground">
                Последнее обновление: 25 января 2026 года
              </p>
            </div>
            
            <div 
              ref={contentRef}
              className={`prose prose-lg max-w-none transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="space-y-8">
                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО «ДОБРОсофт» 
                    (далее — «Компания») и пользователями веб-сайта добрософт.рф (далее — «Сайт»).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Использование Сайта означает полное и безоговорочное принятие настоящих Условий. Если вы не 
                    согласны с какими-либо положениями, пожалуйста, прекратите использование Сайта.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Услуги Компании</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Компания предоставляет услуги в области разработки программного обеспечения:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Проектирование и разработка веб-сайтов</li>
                    <li>Разработка мобильных приложений</li>
                    <li>Создание корпоративных порталов и интранет-систем</li>
                    <li>Разработка кастомного программного обеспечения</li>
                    <li>UI/UX дизайн и консалтинг</li>
                    <li>Техническая поддержка и сопровождение проектов</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Заключение договора</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Информация на Сайте носит информационный характер и не является публичной офертой. Для 
                    заключения договора на оказание услуг необходимо:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Оставить заявку на Сайте или связаться с нами по телефону/email</li>
                    <li>Обсудить требования к проекту с менеджером</li>
                    <li>Получить и согласовать коммерческое предложение</li>
                    <li>Подписать договор на оказание услуг</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Интеллектуальная собственность</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Все материалы, размещённые на Сайте (тексты, изображения, логотипы, дизайн), являются 
                    интеллектуальной собственностью Компании и защищены законодательством РФ об авторском праве.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Запрещается копирование, воспроизведение, распространение или иное использование материалов 
                    Сайта без письменного согласия Компании.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Конфиденциальность и NDA</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Компания гарантирует конфиденциальность информации, полученной от клиентов. По запросу 
                    клиента мы готовы подписать соглашение о неразглашении (NDA).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Работа с государственными заказчиками осуществляется в соответствии с требованиями 
                    44-ФЗ и 223-ФЗ с соблюдением всех норм информационной безопасности.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Гарантии и ответственность</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Компания предоставляет гарантию на выполненные работы в соответствии с условиями договора. 
                    Стандартный гарантийный срок составляет 12 месяцев с момента сдачи проекта.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Компания не несёт ответственности за убытки, возникшие в результате использования 
                    информации с Сайта без заключения договора на оказание услуг.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Порядок разрешения споров</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Все споры, возникающие между Компанией и пользователями/клиентами, разрешаются путём 
                    переговоров. При невозможности достижения согласия спор передаётся на рассмотрение в 
                    Арбитражный суд города Москвы.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Изменение условий</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Компания оставляет за собой право вносить изменения в настоящие Условия без 
                    предварительного уведомления. Актуальная версия Условий всегда доступна на данной странице.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Реквизиты компании</h2>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li><strong className="text-foreground">Юридический адрес:</strong> 125009, г. Москва, ул. Тверская, д. 12</li>
                    <li><strong className="text-foreground">Email:</strong> info@добрософт.рф</li>
                    <li><strong className="text-foreground">Телефон:</strong> +7 (925) 845-48-32</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
