import logoImage from 'figma:asset/11d4b486adefc3fe9ae66248b8906e4e76840bcb.png';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const links = [
    { label: '핵심 서비스', href: '#services' },
    { label: '검증 시스템', href: '#verify' },
    { label: '요금제', href: '#pricing' },
    { label: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] flex items-center transition-all duration-300 ${scrolled
        ? 'h-[64px] bg-white/78 backdrop-blur-[10px] shadow-[0_6px_18px_rgba(2,6,23,0.06)]'
        : 'h-[92px] bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 max-w-[1080px] h-full relative flex items-center justify-center">
        <a
          href="/"
          className="absolute left-4 flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="홈으로 이동 및 새로고침"
        >
          <img
            src={logoImage}
            alt="vello"
            className={`transition-all duration-300 ${scrolled ? 'h-[20px]' : 'h-[26px]'}`}
          />
          <span className={`text-[10px] text-[#64748b] font-extrabold transition-all duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            by intwin
          </span>
        </a>

        <nav className={`hidden md:flex font-bold text-[#0f172a] transition-all duration-300 ${scrolled ? 'gap-6 text-sm' : 'gap-9 text-base'
          }`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-2 rounded-[10px] hover:bg-[rgba(15,23,42,0.06)] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}