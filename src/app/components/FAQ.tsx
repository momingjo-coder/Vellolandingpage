import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      q: '업무 소통은 잘 되나요?',
      a: '사전 커뮤니케이션 평가로 소통 적합성을 확인합니다. 전담 매니저가 정기적으로 관리하며 협업 이슈를 조율합니다.',
    },
    {
      q: '어떤 직무와 역할까지 요청할 수 있나요?',
      a: '디자인, 마케팅, 개발 등 모든 직무에 대한 매칭이 가능합니다. 요구하시는 직무와 역할에 맞춰 적합한 인재를 찾아 매칭해 드립니다.',
    },
    {
      q: '바로 투입 가능한 수준인가요?',
      a: 'HR 진단과 2단계 인터뷰, 계약 전 직무·문화 오리엔테이션을 거쳐 매칭됩니다. 즉시 협업이 가능하도록 준비된 인재만 최종 투입합니다.',
    },
    {
      q: '성과가 기대에 못 미치면 어떻게 됩니까?',
      a: '업무 수행이 기준에 미치지 못하면 개선 프로세스를 우선 진행합니다. 지속적으로 기준에 미달할 경우 계약 종료 후 동일 조건의 인재로 교체해드립니다.',
    },
    {
      q: '플랜별 인재 수준은 어떻게 다릅니까?',
      a: '플랜별로 인재 등급과 운영 관리 범위가 다르며, 예산과 직무에 맞는 구성을 상담을 통해 제안합니다.',
    },
    {
      q: '중도 해지 시 비용은 어떻게 정산됩니까?',
      a: '해당 월 협업 기간만큼 일할 계산하여 정산합니다. 별도의 위약금은 발생하지 않습니다.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 px-4" id="faq">
      <div className="container mx-auto max-w-[1080px]">
        <h2 className="text-[clamp(24px,4vw,32px)] font-bold tracking-tight mb-8 font-[Paperozi] text-[#0f172a]">
          자주 묻는 질문
        </h2>
        <div className="bg-[rgba(255,255,255,0.96)] border border-[rgba(15,23,42,0.06)] rounded-[18px] shadow-[0_12px_36px_rgba(2,6,23,0.10)] px-[18px] py-1.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-t border-[rgba(15,23,42,0.08)] py-3.5"
            >
              <div
                className="flex justify-between items-center gap-3 cursor-pointer"
                onClick={() => toggleFAQ(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(idx);
                  }
                }}
              >
                <span className="font-bold text-[15px] md:text-[16px] text-[#0f172a] font-[Paperozi]">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''
                    }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 pr-7 ${openIndex === idx ? 'max-h-[220px]' : 'max-h-0'
                  }`}
              >
                <div className="h-2.5" />
                <div className="text-[13px] leading-[1.7] text-[#475569]">{faq.a}</div>
                <div className="h-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
