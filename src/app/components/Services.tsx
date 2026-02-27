import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import managingServiceImg from 'figma:asset/맞춤형 매니징 서비스.png';
import matchingServiceImg from 'figma:asset/검증된 베트남 인재 매칭.png';
import legalServiceImg from 'figma:asset/법률, 세무, 계약 지원.png';
import cultureServiceImg from 'figma:asset/양방향 문화관리.png';

interface ServicesProps {
  checkedCount?: number;
}

export function Services({ checkedCount = 0 }: ServicesProps) {
  const services = [
    {
      title: '맞춤형 매니징 서비스',
      desc: '기업 맞춤 PM으로 프로젝트를 효율적으로 관리합니다',
      image: managingServiceImg,
    },
    {
      title: '검증된 베트남 인재 매칭',
      desc: 'Vello는 검증된 베트남 인재를 전문성과 신뢰성을 기반으로 매칭합니다',
      image: matchingServiceImg,
    },
    {
      title: '법률, 세무, 계약 지원',
      desc: 'Vello는 법률, 세무, 구독형 서비스를 제공합니다',
      image: legalServiceImg,
    },
    {
      title: '양방향 문화 관리',
      desc: '중소기업의 언어, 문화 장벽을 양방향 소통으로 해소합니다',
      image: cultureServiceImg,
    },
  ];

  // Scale from 1.0 to 1.15 based on checked count (0-6)
  const imageScale = 1 + (checkedCount / 6) * 0.15;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#AAE4E0] to-[#E1F2FB]" id="services">
      <div className="container mx-auto max-w-[1080px]">
        <p className="text-[16px] md:text-[18px] text-[#475569] font-bold font-[Paperozi] text-center mb-3">"벨로는 글로벌 채용 파트너입니다."</p>
        <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold tracking-tight mb-10 text-center text-black font-[Paperozi]">
          Vello<span style={{ color: '#17BAA8' }}>만의 핵심 서비스</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/95 border-2 border-[#11b8a6]/30 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow"
              animate={{
                scale: checkedCount > 0 ? [1, 1.02, 1] : 1,
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
              }}
            >
              <div className={`aspect-[4/2.5] overflow-hidden bg-[#f8fbfa] flex items-center justify-center py-4 ${idx >= 2 ? 'px-3' : ''}`}>
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{
                    scale: imageScale,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    mass: 0.8,
                  }}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className={`object-contain ${idx >= 2 ? 'max-w-[85%] max-h-[85%]' : 'max-w-full max-h-full scale-110'}`}
                  />
                </motion.div>
              </div>
              <div className="p-5">
                <div className="font-bold text-[17px] mb-2.5 text-[#0f172a]">{service.title}</div>
                <p className="text-[13px] leading-[1.65] text-[#475569]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}