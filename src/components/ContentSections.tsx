import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#pricing" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const PRICING = [
  {
    name: "Стартовый", price: "5 000", period: "/ консультация", popular: false,
    features: ["Онлайн-консультация 60 мин", "Анализ документов (до 5 стр.)", "Письменное заключение", "Email-поддержка 3 дня"],
  },
  {
    name: "Бизнес", price: "45 000", period: "/ месяц", popular: true,
    features: ["Безлимитные консультации", "Составление договоров", "Представительство в суде", "Персональный юрист", "Приоритетный ответ 2 часа", "Ежемесячный правовой аудит"],
  },
  {
    name: "Премиум", price: "120 000", period: "/ месяц", popular: false,
    features: ["Всё из тарифа «Бизнес»", "Команда юристов 3 чел.", "M&A и due diligence", "Международное право", "Личный выезд к клиенту", "Доступ 24/7"],
  },
];

const BLOG = [
  { date: "28 апр 2026", tag: "Недвижимость", title: "Что изменилось в законе об ипотеке в 2026 году", desc: "Новые правила льготной ипотеки, изменения ставок и что это значит для покупателей жилья." },
  { date: "15 апр 2026", tag: "Корпоративное право", title: "Как защитить бизнес от рейдерских захватов", desc: "Практические инструменты корпоративной защиты: от структурирования до превентивных мер." },
  { date: "3 апр 2026", tag: "Цифровое право", title: "Законодательство о персональных данных: новые штрафы", desc: "С 2026 года штрафы за утечку данных выросли в 10 раз. Как подготовить компанию." },
];


interface ContentSectionsProps {
  scrollTo: (href: string) => void;
}

export default function ContentSections({ scrollTo }: ContentSectionsProps) {
  return (
    <>
      <div className="gold-divider" />

      {/* PRICING */}
      <section id="pricing" className="relative py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Стоимость</span>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-white mt-6 mb-4">
              Тарифные <span className="text-gold-gradient italic">планы</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PRICING.map((p, i) => (
              <div key={i}
                className={`relative rounded-2xl p-8 reveal transition-all duration-500 ${p.popular
                  ? "border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.05)]"
                  : "glass-card"}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#050A14] text-xs font-bold px-5 py-1.5 rounded-full tracking-wider">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="mb-8">
                  <div className="text-[rgba(201,168,76,0.6)] text-xs tracking-widest uppercase mb-4">{p.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-cormorant text-5xl text-white font-light">{p.price}</span>
                    <span className="text-[rgba(201,168,76,0.5)] text-sm">₽{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <Icon name="Check" size={14} className="text-[#C9A84C] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("#booking")}
                  className={`w-full py-3.5 rounded-lg text-sm ${p.popular ? "btn-gold" : "btn-outline-gold"}`}>
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* BLOG */}
      <section id="blog" className="py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Знания</span>
            <h2 className="font-cormorant text-5xl font-light text-white mt-6">
              Наш <span className="text-gold-gradient italic">блог</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG.map((b, i) => (
              <article key={i} className="glass-card rounded-xl overflow-hidden group cursor-pointer reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[rgba(201,168,76,0.5)] text-xs border border-[rgba(201,168,76,0.15)] px-3 py-1 rounded-full">{b.tag}</span>
                    <span className="text-white/25 text-xs">{b.date}</span>
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-medium mb-3 leading-snug group-hover:text-[#E8C97A] transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
                  <button className="mt-6 flex items-center gap-2 text-[rgba(201,168,76,0.6)] text-sm group-hover:text-[#C9A84C] group-hover:gap-3 transition-all duration-300">
                    Читать далее <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CONTACTS */}
      <section id="contacts" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Связь</span>
              <h2 className="font-cormorant text-5xl font-light text-white mt-6 mb-6">
                Свяжитесь <span className="text-gold-gradient italic">с нами</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-10 text-sm">
                Готовы ответить на любые вопросы. Запишитесь на консультацию или просто напишите нам — ответим в течение часа.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (909) 649-56-80" },
                  { icon: "Mail", label: "Email", val: "aequil@yandex.ru" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Пт: 9:00–20:00" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs">{label}</div>
                      <div className="text-white/80 text-sm mt-0.5">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 reveal">
              <h3 className="font-cormorant text-2xl text-white mb-6">Написать нам</h3>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Имя</label>
                  <input className="input-dark rounded-lg px-4 py-3 text-sm" placeholder="Ваше имя" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Email</label>
                  <input className="input-dark rounded-lg px-4 py-3 text-sm" type="email" placeholder="email@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Сообщение</label>
                  <textarea rows={4} className="input-dark rounded-lg px-4 py-3 text-sm resize-none" placeholder="Опишите ваш вопрос..." />
                </div>
                <button type="submit" className="btn-gold py-3.5 rounded-lg text-sm mt-2">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="py-20 border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-white font-light mb-8 text-center">
            Политика <span className="text-gold-gradient italic">конфиденциальности</span>
          </h2>
          <div className="glass-card rounded-xl p-8 space-y-6 text-white/45 text-sm leading-relaxed">
            {[
              ["1. Сбор данных", "Мы собираем только те персональные данные, которые вы добровольно предоставляете при заполнении форм на сайте: имя, телефон, email и сообщение. Иных данных без вашего согласия мы не собираем."],
              ["2. Использование данных", "Полученные сведения используются исключительно для обратной связи с вами и организации консультаций. Мы не передаём ваши данные третьим лицам без вашего явного согласия."],
              ["3. Хранение и защита", "Все данные хранятся на защищённых серверах с применением современного шифрования. Доступ к данным имеют только уполномоченные сотрудники компании."],
              ["4. Ваши права", "Вы вправе в любое время запросить удаление или исправление своих данных. Для этого напишите нам на email: privacy@lexnova.ru"],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-cormorant text-xl text-[#E8C97A] mb-2">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(201,168,76,0.1)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#C9A84C] to-[#9B7A2A] flex items-center justify-center">
              <span className="text-[#050A14] font-cormorant font-bold text-xs">Э</span>
            </div>
            <span className="font-cormorant text-lg tracking-widest text-[#E8C97A]">ЭквилибрЪ</span>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-white/25 hover:text-[rgba(201,168,76,0.7)] text-xs transition-colors uppercase tracking-wider">
                {l.label}
              </button>
            ))}
          </div>

          <p className="text-white/20 text-xs">© 2026 LexNova. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}