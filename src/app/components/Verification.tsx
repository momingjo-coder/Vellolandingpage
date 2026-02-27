import { motion } from 'motion/react';
import { MessageSquare, FilePlus, MessagesSquare, Users, FileCheck, BookOpen, Sprout } from 'lucide-react';

export function Verification() {
  const steps = [
    {
      step: 'STEP 01',
      title: '상담 진행',
      desc: '맞춤형 상담 진행 및\n요구사항 분석',
      icon: MessageSquare,
    },
    {
      step: 'STEP 02',
      title: '채용 공고',
      desc: '인재상 업무 범위\n공고 등록',
      icon: FilePlus,
    },
    {
      step: 'STEP 03',
      title: '1차 인터뷰',
      desc: '지원 인재 인터뷰\nVello 단독 진행',
      icon: MessagesSquare,
    },
    {
      step: 'STEP 04',
      title: '2차 인터뷰',
      desc: '귀사와 Vello가 함께\n지원 인재 인터뷰 진행',
      icon: Users,
    },
    {
      step: 'STEP 05',
      title: '계약 체결',
      desc: '최종 선발 인재와\n계약 체결',
      icon: FileCheck,
    },
    {
      step: 'STEP 06',
      title: '문화 교육',
      desc: '인재가 귀사에 빠르게\n적응할 수 있도록 지원',
      icon: BookOpen,
    },
    {
      step: 'STEP 07',
      title: '사후 지원',
      desc: '지속적인 모니터링과\n피드백으로 협업의 질 상승',
      icon: Sprout,
    },
  ];

  const areas = [
    ['개발', 'Frontend / Backend / Full-stack'],
    ['디자인', 'UI/UX / Product Design'],
    ['PM/운영', '프로젝트 운영 / PM 지원'],
    ['기타', '데이터/QA 등(상담 후 확정)'],
  ];

  return (
    <section className="py-16 px-4 bg-[#F1F8F7]" id="verify">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight mb-3 font-[Paperozi] text-[#0f172a]">
            <span className="text-[#11b8a6]">Vello</span> 도입 절차
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#475569] font-medium font-[Paperozi]">
            Vello만의 철저한 인재 검증 시스템
          </p>
        </motion.div>

        {/* Horizontal Process Steps */}
        <div className="relative mb-10">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="min-w-[1100px]">
              {/* Top Row: Icons + Connectors */}
              <div className="flex items-center justify-between mb-6 px-4">
                {steps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center flex-1 last:flex-initial">
                      {/* Icon Circle */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.12, duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="w-[68px] h-[68px] md:w-[76px] md:h-[76px] rounded-full bg-gradient-to-br from-[#d5f5f0] to-[#eafaf7] border-[3px] border-[#11b8a6]/25 flex items-center justify-center shadow-[0_8px_24px_rgba(17,184,166,0.12)] hover:shadow-[0_12px_32px_rgba(17,184,166,0.2)] transition-all hover:scale-105 relative z-10">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#11b8a6]" strokeWidth={1.8} />
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#11b8a6] text-white text-[10px] font-black flex items-center justify-center shadow-md z-20 border-2 border-white">
                          {idx + 1}
                        </div>
                      </motion.div>

                      {/* Connector line between icons */}
                      {idx < steps.length - 1 && (
                        <div className="flex-1 flex items-center mx-2 relative">
                          <div className="w-full h-[2px] bg-[#EAF8F5] rounded-full relative overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ delay: 0.3 + idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-[#11b8a6] to-[#11b8a6]/50 rounded-full"
                            />
                          </div>
                          {/* Arrow head */}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 -ml-1">
                            <path d="M4 2l4 4-4 4" stroke="#11b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Row: Text Content */}
              <div className="flex justify-between px-4">
                {steps.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.12, duration: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center text-center"
                    style={{ width: `${100 / steps.length}%` }}
                  >
                    <span className="text-[10px] font-bold text-[#11b8a6] tracking-wider uppercase mb-1 font-[Paperozi]">
                      {item.step}
                    </span>
                    <h4 className="text-[14px] md:text-[15px] font-bold text-[#0f172a] mb-1 font-[Paperozi] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#64748b] font-medium leading-[1.5] whitespace-pre-line font-[Paperozi]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
