import mascotFlag from '../../assets/벨로 국기 정면.png';

export function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-[1080px]">
        <div
          className="relative rounded-[40px] overflow-hidden min-h-[340px] shadow-[0_30px_60px_rgba(15,118,110,0.2)] bg-[#11b8a6]"
          style={{ background: 'linear-gradient(135deg, rgba(20,196,176,0.3) 0%, rgba(34,211,187,0.3) 30%, rgba(52,217,195,0.3) 50%, rgba(20,184,166,0.3) 70%, rgba(17,168,152,0.3) 100%)' }}
        >
          {/* Animated Gradient Mesh Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(0,0,0,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_60%)] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(20,196,176,0.3),transparent_60%)] -ml-32 -mb-32" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,transparent_40%,transparent_60%,rgba(0,0,0,0.05)_100%)]" />

          <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 relative z-10 w-full h-full">
            {/* Mascot Image - Moderate size and integrated */}
            <div className="mb-5">
              <img
                src={mascotFlag}
                alt="vello mascot"
                className="w-[130px] md:w-[160px] h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.15)] animate-float"
              />
            </div>

            <div className="flex flex-col items-center max-w-[620px]">
              <div className="font-bold text-[30px] md:text-[38px] tracking-tight leading-[1.3] font-[Paperozi] mb-3 text-[#0f172a]">
                지금 바로 상담을 신청하세요
              </div>
              <div className="text-[16px] md:text-[18px] text-[#334155] font-medium font-[Paperozi] mb-8">
                클릭 한 번으로 빠르게 시작할 수 있어요.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#consult"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-white text-[#11b8a6] font-extrabold text-[16px] md:text-[17px] hover:bg-white/95 hover:scale-105 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                >
                  무료 상담 신청
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-white/10 text-white border border-white/40 font-bold text-[16px] md:text-[17px] hover:bg-white/20 active:translate-y-[1px] transition-all backdrop-blur-sm"
                >
                  소개서 다운받기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
