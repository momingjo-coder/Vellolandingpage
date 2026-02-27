import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import person1 from '../../assets/인물 1.png';
import person2 from '../../assets/인물 2.png';
import person3 from '../../assets/인물 3.png';
import person4 from '../../assets/인물 4.png';
import person5 from '../../assets/인물 5.png';
import person6 from '../../assets/인물 6.png';
import person7 from '../../assets/인물 7.png';
import person8 from '../../assets/인물 8.png';
import person9 from '../../assets/인물 9.png';
import person10 from '../../assets/인물 10.png';
import person11 from '../../assets/인물 11.png';
import person12 from '../../assets/인물 12.png';

export function TalentPool() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', '디자인', '마케팅', '개발', '서비스 기획'];

  const talents = [
    // 개발
    {
      name: 'Nguyen Thanh',
      role: 'Full-Stack Developer',
      category: '개발',
      tags: ['React', 'Node.js', 'AWS'],
      exp: '7년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person1,
    },
    {
      name: 'Pham Hoang Nam',
      role: 'Backend Developer',
      category: '개발',
      tags: ['Java', 'Spring', 'MySQL'],
      exp: '9년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person2,
    },
    {
      name: 'Bui Minh Tuan',
      role: 'Mobile Developer',
      category: '개발',
      tags: ['Flutter', 'React Native', 'iOS'],
      exp: '5년 차',
      availability: '1주 후 가능',
      status: 'pending',
      avatar: person3,
    },
    // 디자인
    {
      name: 'Nguyen Lan Anh',
      role: 'UI/UX Designer',
      category: '디자인',
      tags: ['Figma', 'Sketch', 'Adobe XD'],
      exp: '5년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person4,
    },
    {
      name: 'Tran Duc Duy',
      role: 'Graphic Designer',
      category: '디자인',
      tags: ['Photoshop', 'Illustrator', 'Brand'],
      exp: '4년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person5,
    },
    {
      name: 'Le Thi Mai',
      role: 'Product Designer',
      category: '디자인',
      tags: ['Prototyping', 'UX Research'],
      exp: '6년 차',
      availability: '2주 후 가능',
      status: 'pending',
      avatar: person6,
    },
    // 마케팅
    {
      name: 'Vu Thi Hong',
      role: 'Digital Marketer',
      category: '마케팅',
      tags: ['SEO', 'Google Ads', 'Content'],
      exp: '4년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person7,
    },
    {
      name: 'Nguyen Minh Triet',
      role: 'Performance Marketer',
      category: '마케팅',
      tags: ['FB Ads', 'Data Analysis'],
      exp: '5년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person8,
    },
    {
      name: 'Hoang Thu Ha',
      role: 'Social Media Manager',
      category: '마케팅',
      tags: ['Instagram', 'TikTok', 'Growth'],
      exp: '3년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person9,
    },
    // 서비스 기획
    {
      name: 'Dang Huu Long',
      role: 'Service Planner',
      category: '서비스 기획',
      tags: ['Documentation', 'Strategy'],
      exp: '6년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person10,
    },
    {
      name: 'Trinh Bao Ngoc',
      role: 'Product Manager',
      category: '서비스 기획',
      tags: ['Agile', 'Roadmap', 'Scrum'],
      exp: '7년 차',
      availability: '즉시 가능',
      status: 'available',
      avatar: person11,
    },
    {
      name: 'Ly Hai Yen',
      role: 'Business Analyst',
      category: '서비스 기획',
      tags: ['Data Viz', 'Requirements', 'SQL'],
      exp: '5년 차',
      availability: '1주 후 가능',
      status: 'pending',
      avatar: person12,
    },
  ];

  const filteredTalents = activeCategory === '전체'
    ? talents
    : talents.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 px-4 bg-[#F1F9F8]">
      <div className="container mx-auto max-w-[1080px]">
        {/* Top Tagline */}
        <div className="text-center mb-10">
          <p className="text-[18px] md:text-[20px] font-bold text-black mb-14 font-[Paperozi]">
            1년 내 떠나는 아쉬운 만남 대신,<br className="hidden md:block" />
            우리 회사에 몰입하는 '진짜 팀원'을 만나세요.
          </p>

          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D1EBE9] text-[#11b8a6] text-[12px] font-black mb-6 tracking-wider">
            TALENT POOL
          </div>

          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight mb-4 font-[Paperozi] text-[#0f172a]">
            인재풀
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#475569] font-medium font-[Paperozi]">
            VELLO가 검증한 베트남 인재를 만나보세요.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-bold text-[14px] ${activeCategory === cat
                ? 'bg-[#A7E2DE] border-[#A7E2DE] text-[#0f172a]'
                : 'bg-white border-[#e2e8f0] text-[#94a3b8] hover:border-[#cbd5e1]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {filteredTalents.slice(0, 6).map((talent, idx) => (
            <motion.div
              key={talent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(17,184,166,0.12)" }}
              className="group relative bg-white rounded-[32px] overflow-hidden border border-[#e2e8f0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="p-8 pb-10">
                {/* Header Badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute top-7 right-7 flex items-center gap-1.5 text-[#059669] font-bold text-[13px] bg-[#EAF8F5] px-3 py-1 rounded-full border border-[#10b981]/20 shadow-sm z-10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  검증완료
                </motion.div>

                {/* Avatar */}
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center overflow-hidden">
                  <img src={talent.avatar} alt={talent.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="mb-10">
                  <h3 className="text-[22px] font-bold text-[#0f172a] mb-1.5 font-[Paperozi] tracking-tight">{talent.name}</h3>
                  <p className="text-[15px] font-bold text-[#475569] mb-5 font-[Paperozi]">{talent.role}</p>

                  <div className="flex flex-wrap gap-2">
                    {talent.tags.map(tag => (
                      <span key={tag} className="px-3.5 py-1 bg-[#F8FAFC] border border-[#e2e8f0] rounded-full text-[12px] font-bold text-[#64748b] group-hover:border-[#11b8a6]/30 group-hover:text-[#11b8a6] transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Part */}
                <div className="pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
                  <div className="font-bold text-[15px] text-[#0f172a]">{talent.exp}</div>
                  <div className={`px-4 py-2 rounded-full text-[12px] font-black ${talent.status === 'available' ? 'bg-[#D1EBE9] text-[#11b8a6]' : 'bg-[#FEF3C7] text-[#D97706]'
                    }`}>
                    {talent.availability}
                  </div>
                </div>
              </div>

              {/* Hover Slide-up Button */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                <a
                  href="#consult"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#11b8a6] text-white rounded-2xl font-bold text-[15px] shadow-[0_10px_30px_rgba(17,184,166,0.3)] hover:bg-[#0f9d8e] transition-all"
                >
                  이 인재 제안받기
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="bg-[#D1EBE9]/30 rounded-[32px] p-8 md:p-10 text-center flex flex-col items-center gap-6 border border-[#D1EBE9]/50">
          <div className="space-y-2">
            <p className="text-[20px] md:text-[28px] font-bold text-[#0f172a] font-[Paperozi]">
              원하는 직무나 연차가 따로 있으신가요?
            </p>
            <p className="text-[14px] md:text-[18px] font-medium text-[#475569] font-[Paperozi]">
              간단한 정보만 남겨주시면, 조건에 맞는 최적의 인재 이력서를 보내드립니다.
            </p>
          </div>
          <a
            href="#consult"
            className="group flex items-center gap-2 px-8 py-4 bg-[#11b8a6] text-white rounded-full font-bold text-[16px] shadow-[0_10px_25px_rgba(17,184,166,0.3)] hover:bg-[#0f9d8e] transition-all"
          >
            우리 팀 맞춤 인재 추천받기
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

