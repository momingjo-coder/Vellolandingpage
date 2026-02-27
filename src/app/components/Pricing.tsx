import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      description: '백로그 간편한 협업 채용',
      rank: '인재 랭크 : D~C',
      price: '월 100만원~',
      bullets: [
        '베트남 현지 비대면 근무 전용',
        '인재 Pool 기업 1:1 매칭',
        '인터뷰 및 계약서 제공',
        '출결관리',
        '외주 계약 구조 적용',
      ],
    },
    {
      name: 'Standard',
      tag: 'Popular',
      description: '프리미엄 채용 & 전담 관리',
      rank: '인재 랭크 : B~A',
      price: '월 150만원~',
      bullets: [
        '모든 Basic 기능 포함',
        '인재 Pool 상위 20% 추천',
        '채용 전담 매니저 배정',
        '직무 교육/훈련 지원',
        '전용 커뮤니케이션 채널 제공',
        '온라인 계약 및 결제 시스템 이용',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      description: '최고급 명품 인재 & 맞춤 솔루션',
      rank: '인재 랭크 : A~S',
      price: '월 200만원~',
      bullets: [
        '모든 Standard 기능 포함',
        '인재 Pool 최상위 5% 독점 제공',
        '전문 헤드헌팅 및 스카우팅',
        '직무별 맞춤형 인재 육성',
        '프라이빗 인터뷰/세미나 지원',
        '전용 법률/세무 자문 서비스',
      ],
      featured: true,
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#EAF8F5]/30" id="pricing">
      <div className="container mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-16 px-4">
          <div className="text-[16px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">구독 PLAN</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight leading-[1.2] font-[Paperozi] text-[#0f172a] break-keep">
            가성비 높은 인재 큐레이터<br />
            <span className="relative inline-block">
              현지 명품 인재를 만나보세요
              <div className="absolute bottom-1 left-0 w-full h-[12px] bg-[#fde047]/60 -z-10" />
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-[40px] p-10 md:p-12 flex flex-col items-center transition-all duration-300 hover:translate-y-[-10px] min-h-[640px] ${plan.featured
                ? 'shadow-[0_30px_70px_rgba(15,23,42,0.12)] border-2 border-transparent'
                : plan.highlight
                  ? 'border-[6px] border-[#fde047] shadow-[0_30px_60px_rgba(253,224,71,0.25)]'
                  : 'border border-[#e2e8f0] shadow-[0_15px_40px_rgba(0,0,0,0.04)]'
                }`}
            >
              {plan.tag && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#fde047] text-[#0f172a] px-8 py-2 rounded-full font-bold text-[15px] shadow-md z-10 transition-transform hover:scale-110">
                  {plan.tag}
                </div>
              )}

              <div className="text-center mb-10 w-full">
                <h3 className="text-[32px] md:text-[36px] font-bold text-[#0f172a] mb-4 font-[Paperozi] tracking-tight">{plan.name}</h3>
                <div className="text-[17px] font-bold text-[#475569] mb-2 font-[Paperozi] opacity-90 whitespace-nowrap">{plan.description}</div>
                <div className="text-[15px] font-medium text-[#64748b] font-[Paperozi]">{plan.rank}</div>
              </div>

              <div className="w-[80%] h-px bg-[#f1f5f9] mb-10" />

              <ul className="w-full space-y-5 mb-12 flex-1 px-2 md:px-4">
                {plan.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start gap-3.5 text-[15px] md:text-[16px] text-[#334155] font-semibold leading-[1.6] whitespace-nowrap">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-[#EAF8F5] text-[#11b8a6] flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4" strokeWidth={4} />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-8 border-t border-[#f1f5f9] text-center">
                <div className="text-[32px] font-bold text-[#0f172a] font-[Paperozi] tracking-tight whitespace-nowrap">
                  {plan.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes */}
        <div className="mt-12 text-right text-[12px] text-[#64748b] font-medium leading-[1.8] font-[Paperozi] opacity-80">
          * 인건비 + 운영비 모든 포함 (VAT 별도)<br />
          * 헤드헌팅 수수료 별도 (15~20%)<br />
          * 금액은 베트남 현지의 평균 연봉으로 책정한 금액이므로 변동될 수 있습니다.
        </div>
      </div>
    </section>
  );
}
