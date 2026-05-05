import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/3f60a1a4-54a1-472e-a879-82d73aeda833/files/28954d18-022a-45e9-a6c5-b87b675147b6.jpg";

const SERVICES = [
  { icon: "Scale", title: "Юридический консалтинг", desc: "Комплексное правовое сопровождение бизнеса, корпоративные споры, договорное право", tag: "Право" },
  { icon: "Building2", title: "Операции с недвижимостью", desc: "Купля-продажа, аренда, девелопмент. Полное юридическое сопровождение сделок", tag: "Недвижимость" },
  { icon: "Video", title: "Онлайн-консультации", desc: "Видеоконференции с юристом в удобное для вас время. Без очередей и поездок", tag: "Онлайн" },
  { icon: "FileText", title: "Составление договоров", desc: "Разработка и экспертиза любых договоров. Защита ваших интересов на каждом этапе", tag: "Документы" },
  { icon: "Shield", title: "Защита в суде", desc: "Представление интересов в арбитражных и гражданских судах всех инстанций", tag: "Суд" },
  { icon: "Handshake", title: "M&A сделки", desc: "Слияния и поглощения, due diligence, структурирование инвестиционных сделок", tag: "Бизнес" },
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

interface HeroSectionProps {
  scrollTo: (href: string) => void;
  formData: { name: string; phone: string; service: string; date: string; comment: string };
  setFormData: (v: { name: string; phone: string; service: string; date: string; comment: string }) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}

export default function HeroSection({ scrollTo, formData, setFormData, submitted, setSubmitted }: HeroSectionProps) {
  return (
    <>
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
              <img src={HERO_IMAGE} alt="ЭквилибрЪ" className="w-full h-[520px] object-cover" />
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
    </>
  );
}
