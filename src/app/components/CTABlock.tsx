import { useState } from 'react';
import { motion } from 'motion/react';

interface FloatingInputProps {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

function FloatingInput({ label, type = "text", placeholder, required }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative group">
      <label
        className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold ${isFloating
            ? "-top-2.5 text-[12px] text-[#11b8a6] bg-white px-2 ml-[-4px] z-20"
            : "top-4 text-[15px] text-[#94a3b8]"
          }`}
      >
        {label} {required && <span className="text-[#11b8a6]/50">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-5 py-4 rounded-2xl bg-white border transition-all outline-none font-medium h-[56px] ${isFocused
            ? "border-[#11b8a6] ring-4 ring-[#11b8a6]/10"
            : "border-[#D1EBE9]"
          }`}
      />
    </div>
  );
}

export function CTABlock() {
  return (
    <section className="py-24 px-4 bg-[#F8FBFA]" id="consult">
      <div className="container mx-auto max-w-[1080px]">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_rgba(17,184,166,0.08)] border border-[#e2e8f0] relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#11b8a6]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#11b8a6]/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 relative z-10">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8F5] text-[#11b8a6] text-[13px] font-bold mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11b8a6] animate-pulse" />
                인재 매칭 상담 신청
              </div>

              <h2 className="text-[clamp(26px,5vw,44px)] font-bold mb-8 font-[Paperozi] leading-[1.3] text-[#0f172a]">
                우리 예산으로<br />
                어떤 인재를<br />
                만날 수 있을지<br />
                먼저 확인해 보세요.
              </h2>

              <div className="space-y-10">
                <p className="text-[17px] md:text-[19px] font-medium leading-[1.8] text-[#475569] font-[Paperozi] opacity-90 break-keep max-w-[500px]">
                  단 1분, 폼을 작성해 주시면 평균 11일 이내에 귀사에 꼭 맞는 인재 프로필을 무료로 찾아 보내드립니다.
                </p>

                <div className="grid sm:grid-cols-1 gap-4 mt-10">
                  <div className="flex items-center gap-3.5 text-[16px] md:text-[18px] font-bold text-[#0f172a] font-[Paperozi]">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#EAF8F5] text-[#11b8a6]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    맞춤형 인재 무료 추천
                  </div>
                  <div className="flex items-center gap-3.5 text-[16px] md:text-[18px] font-bold text-[#0f172a] font-[Paperozi]">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#EAF8F5] text-[#11b8a6]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    예산 대비 최고 효율 매칭
                  </div>
                  <div className="flex items-center gap-3.5 text-[16px] md:text-[18px] font-bold text-[#0f172a] font-[Paperozi]">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#EAF8F5] text-[#11b8a6]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    채용 전문가 1:1 컨설팅
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="w-full lg:w-[480px] bg-[#F1F9F8] rounded-[32px] p-8 md:p-10 border border-[#D1EBE9]">
              <form className="space-y-6">
                <FloatingInput label="회사명" placeholder="회사명을 입력해주세요" required />
                <FloatingInput label="담당자 이름" placeholder="성함을 입력해주세요" required />
                <FloatingInput label="회사 이메일" type="email" placeholder="email@vello.com" required />
                <FloatingInput label="찾고 계신 직무 (예: React 개발자)" placeholder="직무를 입력해주세요" required />

                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-[#11b8a6] ml-1">
                    휴대전화번호 <span className="text-[#11b8a6]/50">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input type="text" maxLength={3} placeholder="010" className="w-[80px] px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                    <span className="text-[#cbd5e1] font-bold">-</span>
                    <input type="text" maxLength={4} className="w-full px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                    <span className="text-[#cbd5e1] font-bold">-</span>
                    <input type="text" maxLength={4} className="w-full px-2 py-4 rounded-2xl bg-white border border-[#D1EBE9] focus:border-[#11b8a6] focus:ring-4 focus:ring-[#11b8a6]/10 outline-none text-center font-medium transition-all" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="relative w-full py-5 bg-[#11b8a6] text-white rounded-2xl font-bold text-[18px] shadow-[0_12px_30px_rgba(17,184,166,0.25)] hover:bg-[#0f9d8e] hover:translate-y-[-2px] hover:shadow-[0_15px_35px_rgba(17,184,166,0.3)] transition-all active:scale-[0.98] overflow-hidden group"
                  >
                    <span className="relative z-10">무료 맞춤 인재 제안받기</span>

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                      animate={{
                        x: ['100%', '-100%'],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                    />
                  </button>
                  <p className="mt-4 text-[12px] text-[#94a3b8] text-center font-medium">
                    개인정보 보호법에 따라 안심하고 이용하실 수 있습니다.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
