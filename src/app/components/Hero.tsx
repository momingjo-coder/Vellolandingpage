import heroBg from 'figma:asset/f2d3e5f3fd8cc53ccdad04b5bed3f82c3fe23d60.png';
import mascotImage from 'figma:asset/3ee6e1764b158e427cb686c321150dec433460bd.png';

export function Hero() {
  return (
    <section className="py-16 px-4 bg-cover bg-center bg-no-repeat relative overflow-visible" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container mx-auto max-w-[1080px] relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>


            <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold tracking-tight leading-[1.2] mb-5 whitespace-pre-line font-[Paperozi] p-[0px]">{"인건비 거품 없이\n베트남 경력직으로\n팀을 확장하세요"}</h1>

            <p className="text-[16px] leading-[1.65] text-[#334155] mb-8 font-[Paperozi]">정해진 프로세스와 전담 매니저 케어,<br />벨로의 구독형 서비스로 안전하게 매칭하고 함께 성장합니다.</p>

            <a
              href="#consult"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#11b8a6] text-white rounded-full font-bold text-[18px] shadow-[0_10px_25px_rgba(17,184,166,0.3)] hover:bg-[#0f9d8e] hover:translate-y-[-2px] transition-all"
            >
              상담 신청하기
            </a>
          </div>

          <div className="min-h-[320px] rounded-[18px] relative overflow-visible">
            <div className="absolute top-3.5 right-3.5 bg-[rgba(255,255,255,0.92)] border border-[rgba(15,23,42,0.08)] rounded-[14px] p-2.5 leading-[1.4] w-[min(260px,calc(100%-28px))] shadow-[0_10px_26px_rgba(2,6,23,0.08)] font-[Paperozi] speech-bubble text-center text-[14px] animate-float">저는 벨루(Vellu)라고 합니다.<br />스마트 내비게이터가 되어드릴게요!</div>
            <img
              src={mascotImage}
              alt="vello mascot"
              className="absolute right-0 bottom-[-140px] w-[380px] h-[380px] object-contain z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}