import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- 부속 컴포넌트: FloatingInput (동일) ---
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
      <input type={type} required={required} value={value} placeholder=" " onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChange={(e) => onChange(e.target.value)} className="w-full bg-white border border-[#D1EBE9] rounded-2xl px-5 pt-6 pb-3 outline-none transition-all focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 font-[Paperozi]" />
      <label className={`absolute left-5 px-1 bg-white transition-all duration-200 pointer-events-none font-[Paperozi] ${isFloating ? 'top-2 text-xs text-[#11b8a6]' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
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

  const [submitted, setSubmitted] = useState(false); // 성공 화면 전환용
  const [formData, setFormData] = useState({ company: '', name: '', email: '', job: '', budget: '', career: '' });
  const [phone, setPhone] = useState({ p1: '010', p2: '', p3: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 데이터 준비
    const data = new FormData();
    data.append('company', formData.company);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('job', formData.job);
    data.append('budget', formData.budget);
    data.append('career', formData.career);
    data.append('phone', `${phone.p1}-${phone.p2}-${phone.p3}`);

    // 2. 백그라운드 전송 (Non-blocking)
    fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data }).catch((err) => console.error(err));

    // 3. UI 즉시 변경 (성공 메시지로 교체)
    setSubmitted(true);

    // 4. 5초 후 다시 폼으로 돌아가고 싶다면 (선택 사항)
    // setTimeout(() => { setSubmitted(false); resetForm(); }, 5000);
  };

  const resetForm = () => {
    setFormData({ company: '', name: '', email: '', job: '', budget: '', career: '' });
    setPhone({ p1: '010', p2: '', p3: '' });
  };

  return (
    <section className="py-24 px-4 bg-[#F8FBFA]" id="consult">
      <div className="container mx-auto max-w-[1080px]">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_rgba(17,184,166,0.08)] border border-[#e2e8f0] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 relative z-10">
            {/* 왼쪽 섹션 (문구 동일) */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-[clamp(26px,5vw,44px)] font-bold mb-4 font-[Paperozi] leading-[1.3] text-[#0f172a]">
                예산과 직무만 남기면,
                <br />
                <span className="text-[#11b8a6]">'익명 이력서 3부'</span>가<br />
                무료로 도착합니다.
              </h2>
              <p className="text-[17px] font-medium text-[#475569] font-[Paperozi]">24시간 내 프로필을 보내드립니다.</p>
            </div>

            {/* 오른쪽 섹션 (폼 혹은 성공 메시지) */}
            <div className="w-full lg:w-[480px] min-h-[500px] flex flex-col bg-[#F1F9F8] rounded-[32px] p-8 md:p-10 border border-[#D1EBE9]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5" onSubmit={handleSubmit}>
                    <FloatingInput label="회사명*" required value={formData.company} onChange={(v) => setFormData({ ...formData, company: v })} />
                    <FloatingInput label="담당자명*" required value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} />
                    <FloatingInput label="이메일*" type="email" required value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
                    <div className="grid grid-cols-2 gap-3">
                      <FloatingInput label="직무*" required value={formData.job} onChange={(v) => setFormData({ ...formData, job: v })} />
                      <FloatingInput label="예산*" required value={formData.budget} onChange={(v) => setFormData({ ...formData, budget: v })} />
                    </div>
                    <FloatingInput label="채용 연차*" required value={formData.career} onChange={(v) => setFormData({ ...formData, career: v })} />

                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-[#11b8a6] font-[Paperozi]">휴대전화번호*</label>
                      <div className="flex items-center gap-2">
                        <input maxLength={3} value={phone.p1} onChange={(e) => setPhone({ ...phone, p1: e.target.value })} className="w-20 p-3 rounded-xl border border-[#D1EBE9] outline-none text-center" />
                        <input maxLength={4} value={phone.p2} onChange={(e) => setPhone({ ...phone, p2: e.target.value })} className="w-full p-3 rounded-xl border border-[#D1EBE9] outline-none text-center" />
                        <input maxLength={4} value={phone.p3} onChange={(e) => setPhone({ ...phone, p3: e.target.value })} className="w-full p-3 rounded-xl border border-[#D1EBE9] outline-none text-center" />
                      </div>
                    </div>

                    <button type="submit" className="w-full py-5 bg-[#11b8a6] text-white rounded-2xl font-bold text-lg hover:bg-[#0f9d8e] transition-all font-[Paperozi]">
                      무료 맞춤 인재 제안받기
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-[#11b8a6] rounded-full flex items-center justify-center text-white mb-4">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] font-[Paperozi]">신청 완료!</h3>
                    <p className="text-[#475569] font-[Paperozi] leading-relaxed">
                      상담 신청이 정상적으로 접수되었습니다.
                      <br />
                      24시간 내에 담당자가 연락드리겠습니다.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="text-[#11b8a6] font-bold text-sm underline pt-4">
                      다시 신청하기
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
