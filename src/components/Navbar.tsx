import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#pricing" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  navScrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Navbar({ navScrolled, mobileOpen, setMobileOpen, scrollTo }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.1)] py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#C9A84C] to-[#9B7A2A] flex items-center justify-center">
            <span className="text-[#050A14] font-cormorant font-bold text-sm">Э</span>
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
  );
}