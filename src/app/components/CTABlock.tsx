import { useState } from 'react';
import { motion } from 'motion/react';

interface FloatingInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

function FloatingInput({ label, type = 'text', required, value, onChange }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        required={required}
        value={value}
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full bg-white
          border border-[#D1EBE9]
          rounded-2xl
          px-5 pt-6 pb-3
          outline-none
          transition-all
          focus:border-[#11b8a6]
          focus:ring-4 focus:ring-[#11b8a6]/10
          font-[Paperozi]
        "
      />
      <label
        className={`
          absolute left-5 px-1 bg-white
          transition-all duration-200 pointer-events-none
          font-[Paperozi]
          ${isFloating ? 'top-2 text-xs text-[#11b8a6]' : 'top-1/2 -translate-y-1/2 text-gray-400'}
        `}>
        {label.split('*').map((part, idx, arr) => (
          <span key={idx}>
            {part}
            {idx < arr.length - 1 && <span className="text-[#11b8a6]/80">*</span>}
          </span>
        ))}
      </label>
    </div>
  );
}

export function CTABlock() {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyIPGIzJqhrhwZCSPZGer-I2dizKR9kFqdmZVrHP8J0LxzznqM-hP5CNMCy3A2y8uSDxA/exec';

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    job: '',
    budget: '',
    career: '',
  });

  const [phone, setPhone] = useState({
    p1: '010',
    p2: '',
    p3: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('company', formData.company);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('job', formData.job);
    data.append('budget', formData.budget);
    data.append('career', formData.career);
    data.append('phone', `${phone.p1}-${phone.p2}-${phone.p3}`);

    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    }).catch((err) => console.error('전송 실패(백그라운드):', err));

    alert('상담 신청이 완료되었습니다! 24시간 내로 연락드리겠습니다.');

    // 4. 폼 즉시 초기화
    setFormData({
      company: '',
      name: '',
      email: '',
      job: '',
      budget: '',
      career: '',
    });
    setPhone({ p1: '010', p2: '', p3: '' });
  };

  return (
    <section className="py-24 px-4 bg-[#F8FBFA]" id="consult">
      <div className="container mx-auto max-w-[1080px]">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_rgba(17,184,166,0.08)] border border-[#e2e8f0] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#11b8a6]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#11b8a6]/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 relative z-10">
            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8F5] text-[#11b8a6] text-[13px] font-bold mb-6 w-fit font-[Paperozi]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11b8a6] animate-pulse" />
                인재 매칭 상담 신청
              </div>

              <h2 className="text-[clamp(26px,5vw,44px)] font-bold mb-4 font-[Paperozi] leading-[1.3] text-[#0f172a]">
                예산과 직무만 남기면,
                <br />
                <span className="text-[#11b8a6]">'익명 이력서 3부'</span>가
                <br />
                무료로 도착합니다.
              </h2>

              <div className="space-y-10">
                <p className="text-[17px] md:text-[19px] font-medium leading-[1.8] text-[#475569] font-[Paperozi] opacity-90 break-keep max-w-[500px]">24시간 내 실제 채용 가능한 인재 프로필을 보내드립니다.</p>

                <div className="grid sm:grid-cols-1 gap-4 mt-10">
                  {['맞춤형 인재 무료 추천', '예산 대비 최고 효율 매칭', '채용 전문가 1:1 컨설팅'].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 text-[16px] md:text-[18px] font-bold text-[#0f172a] font-[Paperozi]">
                      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#EAF8F5] text-[#11b8a6]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[480px] bg-[#F1F9F8] rounded-[32px] p-8 md:p-10 border border-[#D1EBE9]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <FloatingInput label="회사명*" required value={formData.company} onChange={(v) => setFormData({ ...formData, company: v })} />
                <FloatingInput label="담당자명*" required value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} />
                <FloatingInput label="이메일*" type="email" required value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
                <FloatingInput label="찾고 계신 직무*" required value={formData.job} onChange={(v) => setFormData({ ...formData, job: v })} />
                <FloatingInput label="예산*" required value={formData.budget} onChange={(v) => setFormData({ ...formData, budget: v })} />
                <FloatingInput label="채용 연차*" required value={formData.career} onChange={(v) => setFormData({ ...formData, career: v })} />

                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-[#11b8a6] ml-1 font-[Paperozi]">
                    휴대전화번호 <span className="text-[#11b8a6]/80">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input maxLength={3} placeholder="010" value={phone.p1} onChange={(e) => setPhone({ ...phone, p1: e.target.value })} className="w-[80px] px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                    <span>-</span>
                    <input maxLength={4} value={phone.p2} onChange={(e) => setPhone({ ...phone, p2: e.target.value })} className="w-full px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                    <span>-</span>
                    <input maxLength={4} value={phone.p3} onChange={(e) => setPhone({ ...phone, p3: e.target.value })} className="w-full px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    relative overflow-hidden w-full py-5
                    bg-[#11b8a6] text-white
                    rounded-2xl font-bold text-lg
                    transition-all
                    hover:bg-[#0f9d8e]
                    active:scale-[0.98]
                    font-[Paperozi]
                  ">
                  무료 맞춤 인재 제안받기
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: 'easeInOut',
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
