import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/3f60a1a4-54a1-472e-a879-82d73aeda833/files/28954d18-022a-45e9-a6c5-b87b675147b6.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#pricing" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Scale", title: "Юридический консалтинг", desc: "Комплексное правовое сопровождение бизнеса, корпоративные споры, договорное право", tag: "Право" },
  { icon: "Building2", title: "Операции с недвижимостью", desc: "Купля-продажа, аренда, девелопмент. Полное юридическое сопровождение сделок", tag: "Недвижимость" },
  { icon: "Video", title: "Онлайн-консультации", desc: "Видеоконференции с юристом в удобное для вас время. Без очередей и поездок", tag: "Онлайн" },
  { icon: "FileText", title: "Составление договоров", desc: "Разработка и экспертиза любых договоров. Защита ваших интересов на каждом этапе", tag: "Документы" },
  { icon: "Shield", title: "Защита в суде", desc: "Представление интересов в арбитражных и гражданских судах всех инстанций", tag: "Суд" },
  { icon: "Handshake", title: "M&A сделки", desc: "Слияния и поглощения, due diligence, структурирование инвестиционных сделок", tag: "Бизнес" },
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

const TEAM = [
  { name: "Александр Волков", role: "Партнёр, корпоративное право", exp: "18 лет опыта" },
  { name: "Марина Соколова", role: "Партнёр, недвижимость", exp: "14 лет опыта" },
  { name: "Дмитрий Орлов", role: "Старший юрист, суды", exp: "11 лет опыта" },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: (i % 3 + 1) + "px",
            height: (i % 3 + 1) + "px",
            left: ((i * 37 + 11) % 100) + "%",
            top: ((i * 53 + 7) % 100) + "%",
            background: `rgba(201,168,76,${0.1 + (i % 4) * 0.08})`,
            animation: `particle-drift ${15 + i * 2}s linear ${i * 0.8}s infinite`,
            boxShadow: `0 0 ${3 + i % 4}px rgba(201,168,76,0.4)`,
          }}
        />
      ))}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Index() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050A14] font-golos">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.1)] py-4" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#C9A84C] to-[#9B7A2A] flex items-center justify-center">
              <span className="text-[#050A14] font-cormorant font-bold text-sm">L</span>
            </div>
            <span className="font-cormorant text-xl tracking-widest text-[#E8C97A]">ЭквилибрЪ</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link">{l.label}</button>
            ))}
          </div>

          <button onClick={() => scrollTo("#contacts")} className="hidden md:block btn-gold px-5 py-2.5 rounded-sm text-sm font-golos">
            Записаться
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#C9A84C]">
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#0A1020]/98 backdrop-blur-xl border-t border-[rgba(201,168,76,0.1)] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link text-left text-base">{l.label}</button>
            ))}
            <button onClick={() => scrollTo("#contacts")} className="btn-gold px-5 py-3 rounded-sm text-sm w-full mt-2">
              Записаться на консультацию
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center hero-bg grid-bg overflow-hidden">
        <Particles />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(76,107,201,0.07) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.2)] rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="ping-gold absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]"></span>
              </span>
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-golos">Премиум юридические услуги</span>
            </div>

            <h1 className="font-cormorant text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Право и<br />
              <span className="text-gold-gradient italic">Недвижимость</span><br />
              на высшем уровне
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg font-golos font-light">
              Комплексная юридическая защита ваших активов и сопровождение сделок с недвижимостью. Онлайн-консультации с ведущими юристами.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("#booking")} className="btn-gold px-8 py-4 rounded-sm text-sm">
                Записаться онлайн
              </button>
              <button onClick={() => scrollTo("#services")} className="btn-outline-gold px-8 py-4 rounded-sm text-sm">
                Наши услуги
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              {[["200+", "клиентов"], ["98%", "выигранных дел"], ["15 лет", "на рынке"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl text-[#E8C97A] font-semibold">{num}</div>
                  <div className="text-white/40 text-xs tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden animate-float"
              style={{ boxShadow: "0 0 80px rgba(201,168,76,0.15), 0 40px 80px rgba(0,0,0,0.5)" }}>
              <img src={HERO_IMAGE} alt="LexNova" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-8 glass-card rounded-xl px-6 py-4 border border-[rgba(201,168,76,0.2)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.2)] flex items-center justify-center">
                  <Icon name="CalendarCheck" size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-white/80 text-xs">Следующий слот</div>
                  <div className="text-[#C9A84C] text-sm font-semibold">Сегодня, 16:00</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-6 glass-card rounded-xl px-5 py-3 border border-[rgba(201,168,76,0.2)]">
              <div className="text-white/60 text-xs mb-1">Онлайн сейчас</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-green-400 text-sm font-semibold">3 юриста</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/20 text-xs tracking-widest uppercase">Прокрутите вниз</span>
          <div className="w-px h-12 bg-gradient-to-b from-[rgba(201,168,76,0.3)] to-transparent"></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Что мы делаем</span>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-white mt-6 mb-4">
              Наши <span className="text-gold-gradient italic">услуги</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                    <Icon name={s.icon} size={22} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-[rgba(201,168,76,0.5)] text-xs border border-[rgba(201,168,76,0.15)] px-3 py-1 rounded-full">{s.tag}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-white font-medium mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                <button onClick={() => scrollTo("#booking")} className="mt-6 flex items-center gap-2 text-[#C9A84C] text-sm hover:gap-3 transition-all duration-300">
                  Записаться <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* BOOKING */}
      <section id="booking" className="relative py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Онлайн-запись</span>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-white mt-6 mb-4">
              Записаться на <span className="text-gold-gradient italic">консультацию</span>
            </h2>
            <p className="text-white/40 text-sm mt-4">Выберите удобное время — юрист свяжется с вами точно по расписанию</p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 reveal">
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Ваше имя</label>
                  <input className="input-dark rounded-lg px-4 py-3 text-sm font-golos"
                    placeholder="Иван Петров" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Телефон</label>
                  <input className="input-dark rounded-lg px-4 py-3 text-sm font-golos"
                    placeholder="+7 (999) 000-00-00" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Направление</label>
                  <select className="input-dark rounded-lg px-4 py-3 text-sm font-golos"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="" className="bg-[#0A1020]">Выберите услугу...</option>
                    <option value="legal" className="bg-[#0A1020]">Юридический консалтинг</option>
                    <option value="realty" className="bg-[#0A1020]">Операции с недвижимостью</option>
                    <option value="contract" className="bg-[#0A1020]">Составление договоров</option>
                    <option value="court" className="bg-[#0A1020]">Защита в суде</option>
                    <option value="ma" className="bg-[#0A1020]">M&A сделки</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Желаемая дата</label>
                  <input type="date" className="input-dark rounded-lg px-4 py-3 text-sm font-golos"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[rgba(201,168,76,0.7)] text-xs tracking-wider uppercase">Краткое описание вопроса</label>
                  <textarea rows={3} className="input-dark rounded-lg px-4 py-3 text-sm font-golos resize-none"
                    placeholder="Опишите вашу ситуацию..." value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-gold w-full py-4 rounded-lg text-sm tracking-wider">
                    Записаться на консультацию
                  </button>
                  <p className="text-white/25 text-xs text-center mt-3">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[rgba(201,168,76,0.2)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-cormorant text-3xl text-white mb-3">Заявка принята!</h3>
                <p className="text-white/50 text-sm">Наш юрист свяжется с вами в течение 30 минут</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", service: "", date: "", comment: "" }); }}
                  className="btn-outline-gold mt-6 px-6 py-3 rounded-lg text-sm">
                  Новая запись
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

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

      {/* TEAM */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase border border-[rgba(201,168,76,0.2)] px-4 py-1.5 rounded-full">Команда</span>
            <h2 className="font-cormorant text-5xl font-light text-white mt-6">
              Наши <span className="text-gold-gradient italic">юристы</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((t, i) => (
              <div key={i} className="glass-card rounded-xl p-8 text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[rgba(201,168,76,0.2)] to-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.2)]">
                  <span className="font-cormorant text-3xl text-[#C9A84C] font-bold">{t.name[0]}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-white mb-1">{t.name}</h3>
                <p className="text-[rgba(201,168,76,0.6)] text-xs mb-3 tracking-wide">{t.role}</p>
                <span className="text-white/30 text-xs border border-white/10 px-3 py-1 rounded-full">{t.exp}</span>
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
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", val: "info@lexnova.ru" },
                  { icon: "MapPin", label: "Адрес", val: "Москва, Пресненская наб. 12" },
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
              <span className="text-[#050A14] font-cormorant font-bold text-xs">L</span>
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

    </div>
  );
}