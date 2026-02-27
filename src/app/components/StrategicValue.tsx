import { motion } from 'motion/react';
import { Banknote, Trees, ShieldCheck, BarChart3 } from 'lucide-react';

export function StrategicValue() {
    const values = [
        {
            title: '비용 효율성',
            desc: '한국 인력 1명으로 베트남 인력 3명\n→ 33% 비용 절감',
            Icon: Banknote,
            iconColor: '#FF8A7A',
            bgColor: '#FFF5F4',
        },
        {
            title: '다양한 역량 확보',
            desc: '단일 역할만 가능한 한국 인력 대비\n디자인, 기획, 개발 등 다방면의\n업무 지원 가능',
            Icon: Trees,
            iconColor: '#6BC4B5',
            bgColor: '#F0F9F8',
        },
        {
            title: '리스크 관리',
            desc: '퇴사, 휴직 등의 리스크 없이\n파트타임 교대 가능하여\n안정적 업무 유지',
            Icon: ShieldCheck,
            iconColor: '#4FD1C5',
            bgColor: '#F0FAFB',
        },
        {
            title: '높은 확장성',
            desc: '업무량 증가 시 신속한 인력 투입\n빠른 대응 가능',
            Icon: BarChart3,
            iconColor: '#FBBF24',
            bgColor: '#FFFBF0',
        },
    ];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-[1000px]">
                <h2 className="text-center text-[clamp(24px,4.5vw,40px)] font-bold mb-14 font-[Paperozi] tracking-tight">
                    Vello의 전략적 가치
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center gap-6 group hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                        >
                            <div
                                className="w-24 h-24 md:w-28 md:h-28 rounded-[24px] flex-shrink-0 grid place-items-center transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <item.Icon
                                    className="w-12 h-12 md:w-16 md:h-16 stroke-[1.5]"
                                    style={{ color: item.iconColor }}
                                />
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-[20px] md:text-[22px] font-bold mb-2 pb-1 font-[Paperozi]"
                                    style={{ color: item.iconColor }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#475569] font-medium whitespace-pre-line break-keep font-[Paperozi]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
