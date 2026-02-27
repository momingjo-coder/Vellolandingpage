import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function SupportProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"]
    });

    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const steps = [
        {
            id: '01',
            title: '사전평가',
            desc: (
                <>
                    응답 속도, 책임감 등<br />
                    <span className="text-[#6BC4B5] font-bold">사전 커뮤니케이션</span> 평가<br />
                    기록 제공
                </>
            ),
            color: '#AAE4E0',
        },
        {
            id: '02',
            title: '문화 교육',
            desc: (
                <>
                    현지 매니저와<br />
                    오리엔테이션을 통해<br />
                    <span className="text-[#6BC4B5] font-bold">한국 기업 문화</span> 교육
                </>
            ),
            color: '#C0D5E1',
        },
        {
            id: '03',
            title: '사후 지원',
            desc: (
                <>
                    지속적인 문제 발생 시<br />
                    <span className="text-[#6BC4B5] font-bold">동일 조건 인재</span><br />
                    우선 교체
                </>
            ),
            color: '#E1F2FB',
        },
    ];

    return (
        <section className="py-24 px-4 bg-white overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-[1000px]">
                {/* Title */}
                <h2 className="text-center text-[clamp(20px,4vw,32px)] font-bold leading-[1.3] mb-20 font-[Paperozi]">
                    Vello는 인재 선발부터 교육, 문제 처리까지<br />
                    처음부터 끝까지 책임지고 관리해 드립니다
                </h2>

                {/* Process Circles Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-10 pr-0 md:pr-10">

                    {/* Background Progress Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[3px] bg-[#6BC4B5]/10 z-0">
                        <motion.div
                            className="h-full bg-[#11b8a6]"
                            style={{ width: lineWidth }}
                        />
                    </div>

                    {/* Background Progress Line (Mobile) */}
                    <div className="md:hidden absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-[#6BC4B5]/10 z-0">
                        <motion.div
                            className="w-full bg-[#11b8a6]"
                            style={{ height: lineWidth }}
                        />
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: idx * 0.2,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full flex flex-col items-center justify-center text-center p-8 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-white/50 backdrop-blur-sm group hover:shadow-[0_20px_60px_rgba(17,184,166,0.15)] transition-all duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${step.color}99 0%, white 100%)`,
                                marginLeft: idx === 0 ? '0' : 'md:-55px', // Conditional class handling in Next/Tailwind
                                zIndex: 10 - idx,
                            }}
                        >
                            {/* Circle Decorative Dot */}
                            <div
                                className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#11b8a6] border-4 border-white shadow-sm z-20 group-hover:scale-125 transition-transform"
                                style={{
                                    display: idx === 0 ? 'none' : 'block'
                                }}
                            />

                            <div className="text-[20px] font-bold mb-1 opacity-60 text-[#11b8a6]">0{idx + 1}</div>
                            <div className="text-[32px] font-bold mb-4 text-[#0f172a] font-[Paperozi] tracking-tight group-hover:scale-105 transition-transform duration-500">{step.title}</div>
                            <div className="text-[15px] leading-[1.6] text-[#475569] font-medium">
                                {step.desc}
                            </div>
                        </motion.div>
                    ))}

                    {/* Support Process Label (Desktop only line) */}
                    <div className="hidden lg:flex absolute right-[-140px] top-1/2 -translate-y-1/2 items-center gap-3">
                        <div className="w-16 h-[1.5px] bg-[#6BC4B5]/40" />
                        <span className="text-[#6BC4B5] text-[13px] font-bold leading-tight">
                            Vello 기업 지원<br />프로세스
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#6BC4B5] animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}

