import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import checklistMascot from '../../assets/체크리스트 벨루.png';

interface ChecklistProps {
  checkedItems?: boolean[];
  onToggleItem?: (index: number) => void;
}

export function Checklist({ checkedItems = [], onToggleItem }: ChecklistProps) {
  const items = [
    '신입 채용 후 온보딩과 교육에 예상보다 많은 시간이 든다.',
    '연봉 기준이 맞지 않아 채용이 마지막 단계에서 자주 멈춘다.',
    '사업 성장 속도에 비해 팀 확장이 더디게 느껴진다.',
    '예산 부담 때문에 시니어 채용을 쉽게 결정하기 어렵다.',
    '단순 보조가 아닌, 프로젝트를 주도할 실무형 인력이 필요하다.',
    '채용•관리 부담을 줄이고 핵심 업무에 더 집중하고 싶다.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section className="py-14 pb-28 px-4 bg-[#E8F6F4]">
      <div className="container mx-auto max-w-[1080px]">
        <h2 className="text-[clamp(20px,3vw,30px)] font-bold tracking-tight mb-4 font-[Paperozi] text-center">
          인재 채용이 어려움이 있는 기업 <span style={{ color: '#17BAA8' }}>'체크리스트'</span>
        </h2>
        <div className="bg-white rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-8 pb-14 relative overflow-visible">
          <motion.ul
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {items.map((item, idx) => {
              const isChecked = checkedItems[idx] || false;
              return (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  onClick={() => onToggleItem?.(idx)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  <div className="flex gap-3 items-center py-4 text-[15px] leading-[1.6] text-[#0f172a]">
                    <span
                      className="w-5 h-5 rounded-full border-2 flex-shrink-0 grid place-items-center transition-all duration-300"
                      style={{
                        borderColor: isChecked ? '#11b8a6' : '#cbd5e1',
                        backgroundColor: isChecked ? '#11b8a6' : '#FFCFBB',
                        transform: isChecked ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      <Check
                        className="w-3 h-3 transition-colors duration-300"
                        style={{ color: isChecked ? '#ffffff' : '#64748b' }}
                        strokeWidth={4}
                      />
                    </span>
                    <span
                      className="font-medium font-[Paperozi] text-[20px] transition-colors duration-300"
                      style={{ color: isChecked ? '#11b8a6' : '#0f172a' }}
                    >
                      {item}
                    </span>
                  </div>
                  {idx < items.length - 1 && (
                    <div className="h-[1px] bg-[#e2e8f0]" />
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
          {/* 마스코트 이미지 + 말풍선 - 카드 좌측 하단 모서리에 걸침 */}
          <div className="absolute -bottom-14 -left-8 z-10 flex items-center">
            <img src={checklistMascot} alt="vello mascot" className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-md flex-shrink-0 relative top-[5px]" />
            {/* 말풍선 - 캐릭터 오른쪽 */}
            <div className="relative -ml-2">
              <div
                className="bg-[#11b8a6] text-white text-xs font-bold font-[Paperozi] break-keep px-4 py-2.5 rounded-xl shadow-md whitespace-nowrap"
              >
                위의 항목 중 하나라도 해당된다면, 지금 <span className="text-[#FBBF24]">Vello</span>로 해결하세요.
              </div>
              {/* 말풍선 꼬리 - 왼쪽 */}
              <div
                className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: '10px solid #11b8a6',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}