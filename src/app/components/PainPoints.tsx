import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import growthImage from 'figma:asset/23a321af7e071fa2a35d856a844191822f10fec3.png';
import costImage from 'figma:asset/bf8a72be0eb4835873f82efdf768791b1d0694b0.png';
import timeMoneyImage from 'figma:asset/9132aea163c6f09486200e2de97576f91caced63.png';

export function PainPoints() {
  const cards = [
    {
      title: '높은 급여 기대치',
      desc1: '산업 구직자 평균 희망 초봉',
      desc2: '4,140만원',
      imageUrl: growthImage,
    },
    {
      title: '조기 퇴사율 증가',
      desc1: '기업 60.9%',
      desc2: '"신입사원 평균 1~3년 내 퇴사"',
      imageUrl: costImage,
    },
    {
      title: '높은 매몰 비용',
      desc1: '신입 교육 기간 평균 20.3개월',
      desc2: '소요 비용 6,200만원',
      imageUrl: timeMoneyImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section className="py-16 px-4 bg-[#E8F6F4]">
      <div className="container mx-auto max-w-[900px]">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-3 leading-tight font-[Paperozi]">
          애써 가르쳐 놓으면 1년 내 퇴사,
        </h2>
        <p className="text-center font-bold text-2xl md:text-3xl mb-12 leading-tight font-[Paperozi]">
          언제까지 밑 빠진 독에 물 붓는 채용만 반복해야 할까요?
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center text-center animate-nudge-once"
              style={{ animationDelay: `${idx * 0.4}s` }}
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <ImageWithFallback
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-contain scale-125"
                />
              </div>
              <h3 className="font-bold text-[#11b8a6] mb-3 font-[Paperozi] text-[20px]">{card.title}</h3>
              <p className="font-bold text-xs text-[#0f172a] mb-1 font-[Paperozi]">{card.desc1}</p>
              <p className="font-bold text-xs text-[#0f172a] font-[Paperozi]">{card.desc2}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}