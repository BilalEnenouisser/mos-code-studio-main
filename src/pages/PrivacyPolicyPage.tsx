import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PrivacyPolicyPage = () => {
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
                Политика конфиденциальности
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
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                    пользователей веб-сайта ДОБРОсофт (далее — «Компания»).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Использование сайта означает согласие пользователя с настоящей Политикой и условиями обработки 
                    его персональных данных.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Какие данные мы собираем</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы можем собирать следующие категории персональных данных:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Имя, фамилия и отчество</li>
                    <li>Контактный номер телефона</li>
                    <li>Адрес электронной почты</li>
                    <li>Название организации и должность</li>
                    <li>Информация о проекте и технические требования</li>
                    <li>IP-адрес и данные о посещении сайта</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки данных</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Персональные данные обрабатываются в следующих целях:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Обработка заявок и обращений пользователей</li>
                    <li>Подготовка коммерческих предложений</li>
                    <li>Исполнение договорных обязательств</li>
                    <li>Информирование о новых услугах и акциях</li>
                    <li>Улучшение качества обслуживания</li>
                    <li>Аналитика и статистика посещаемости сайта</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Защита персональных данных</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Компания принимает все необходимые организационные и технические меры для защиты персональных 
                    данных от неправомерного доступа, изменения, раскрытия или уничтожения:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Шифрование данных при передаче (SSL/TLS)</li>
                    <li>Ограничение доступа к персональным данным</li>
                    <li>Регулярное резервное копирование</li>
                    <li>Мониторинг и аудит систем безопасности</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Передача данных третьим лицам</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Компания не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных 
                    законодательством Российской Федерации, или при наличии согласия пользователя. Мы можем 
                    использовать сервисы аналитики (Яндекс.Метрика, Google Analytics), которые собирают обезличенные 
                    данные о посещении сайта.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Права пользователей</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Пользователь имеет право:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Получить информацию об обработке своих персональных данных</li>
                    <li>Требовать уточнения, блокирования или уничтожения данных</li>
                    <li>Отозвать согласие на обработку персональных данных</li>
                    <li>Обжаловать действия Компании в уполномоченный орган</li>
                  </ul>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Сайт использует файлы cookies для улучшения работы и персонализации контента. Пользователь 
                    может отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Контактная информация</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    По вопросам, связанным с обработкой персональных данных, вы можете обратиться:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li><strong className="text-foreground">Email:</strong> privacy@добрософт.рф</li>
                    <li><strong className="text-foreground">Телефон:</strong> +7 (925) 845-48-32</li>
                    <li><strong className="text-foreground">Адрес:</strong> г. Москва, ул. Тверская, 12, БЦ «Технопарк»</li>
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

export default PrivacyPolicyPage;
