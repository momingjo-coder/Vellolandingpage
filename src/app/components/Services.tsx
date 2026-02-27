import { ImageWithFallback } from './figma/ImageWithFallback';
import managingServiceImg from 'figma:asset/맞춤형 매니징 서비스.png';
import matchingServiceImg from 'figma:asset/검증된 베트남 인재 매칭.png';
import legalServiceImg from 'figma:asset/법률, 세무, 계약 지원.png';
import cultureServiceImg from 'figma:asset/양방향 문화관리.png';

export function Services() {
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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#AAE4E0] to-[#E1F2FB]" id="services">
      <div className="container mx-auto max-w-[1080px]">
        <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold tracking-tight mb-10 text-center text-black font-[Paperozi]">
          vello<span style={{ color: '#17BAA8' }}>만의 핵심 서비스</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/95 border-2 border-[#11b8a6]/30 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow"
            >
              <div className={`aspect-[4/3] overflow-hidden bg-[#f8fbfa] flex items-center justify-center ${idx >= 2 ? 'p-3' : ''}`}>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className={`transition-transform duration-500 hover:scale-110 ${idx >= 2 ? 'max-w-[90%] max-h-[90%] object-contain' : 'w-full h-full object-cover'}`}
                />
              </div>
              <div className="p-5">
                <div className="font-bold text-[17px] mb-2.5 text-[#0f172a]">{service.title}</div>
                <p className="text-[13px] leading-[1.65] text-[#475569]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}