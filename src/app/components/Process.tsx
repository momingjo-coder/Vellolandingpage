import { motion } from 'motion/react';
import { CheckCircle2, Play, Layout, Check } from 'lucide-react';
import managerImg from '../../assets/인물 13.png';

export function Process() {
  const timeline = [
    { strong: '5분', span: '상담 신청' },
    { strong: '24시간', span: '담당자 연락' },
    { strong: '11일', span: '인재 추천' },
    { strong: '365일+', span: '채용/관리' },
  ];

  return (
    <section className="py-20 px-4 bg-[#F8FBFA] overflow-hidden" id="system">
      <div className="container mx-auto max-w-[1100px]">
        {/* Header + Timeline Block */}
        <div className="max-w-[900px] mx-auto mb-12 px-4">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight leading-[1.25] mb-6 font-[Paperozi] text-[#0f172a] break-keep">
              문의부터 채용 확정까지 단 <span className="text-[#11b8a6]">11일</span>,<br />
              Vello는 기업의 속도에 맞춥니다.
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#475569] font-medium font-[Paperozi] break-keep opacity-90 max-w-[680px] mx-auto">
              기약 없는 채용 대기는 이제 그만. 오늘 문의하시면 24시간 이내에 전담 매니저가 매칭을 시작하고, 11일 이내에 실무 투입이 가능한 최적의 인재를 찾아드립니다.
            </p>
          </div>

          {/* Micro Copy Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            <div className="flex items-center gap-3 bg-white border border-[#D1EBE9] rounded-2xl px-6 py-4 shadow-sm">
              <span className="text-[24px]">⏱️</span>
              <div>
                <strong className="block text-[14px] font-bold text-[#0f172a] font-[Paperozi]">24시간 내</strong>
                <span className="text-[12px] text-[#475569] font-medium font-[Paperozi]">1:1 전담 매니저 배정 및 니즈 분석</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white border border-[#D1EBE9] rounded-2xl px-6 py-4 shadow-sm">
              <span className="text-[24px]">🚀</span>
              <div>
                <strong className="block text-[14px] font-bold text-[#0f172a] font-[Paperozi]">11일 내</strong>
                <span className="text-[12px] text-[#475569] font-medium font-[Paperozi]">맞춤 인재 큐레이션 및 최종 채용 확정</span>
              </div>
            </div>
          </div>

          {/* Timeline - placed directly under header text */}
          <div className="bg-[rgba(255,255,255,0.98)] border border-[#D1EBE9] rounded-[28px] shadow-[0_20px_50px_rgba(17,184,166,0.08)] p-8 md:p-10 backdrop-blur-md mb-8">
            <div className="flex items-center gap-0 mb-6">
              {timeline.map((tick, idx) => (
                <div key={idx} className="flex-1 relative pt-5">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-[#EAF8F5] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.3 + idx * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#11b8a6]"
                    />
                  </div>
                  <strong className="block text-[20px] font-black text-[#0f172a] mt-4 font-[Paperozi]">{tick.strong}</strong>
                  <span className="block text-[14px] text-[#64748b] font-bold mt-1 font-[Paperozi]">{tick.span}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#consult" className="px-7 py-3.5 bg-[#11b8a6] text-white rounded-full font-bold text-[15px] hover:bg-[#0f9d8e] transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(17,184,166,0.2)]">
              자세히 알아보기
            </a>
            <a href="#consult" className="flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-[#11b8a6]/20 text-[#11b8a6] rounded-full font-bold text-[15px] hover:bg-[#F1F9F8] transition-all transform hover:-translate-y-1">
              <Play className="w-4 h-4 fill-current" />
              데모 시연 예약
            </a>
          </div>
        </div>

        {/* Dashboard Cards Section */}
        <div className="relative w-full max-w-[1000px] mx-auto min-h-[420px] lg:min-h-[460px]">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 -z-0 pointer-events-none opacity-[0.03]">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="border border-[#11b8a6]" />
            ))}
          </div>

          <div className="relative z-10 flex flex-col lg:block pt-2">
            {/* Left side cards */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[44%] space-y-4 lg:z-30">
              {/* User/Manager Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-5 shadow-[0_15px_40px_rgba(17,184,166,0.08)] border border-[#EAF8F5] flex items-center gap-4 max-w-[400px]"
              >
                <img src={managerImg} alt="Ana" className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                <div>
                  <div className="px-2 py-0.5 bg-[#EAF8F5] text-[#11b8a6] text-[10px] font-bold rounded-md w-fit mb-1 leading-none">전담 매니저</div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] leading-tight mb-0.5 font-[Paperozi]">안녕하세요. Ana👋</h3>
                  <p className="text-[11px] text-[#64748b] font-medium font-[Paperozi]">신규 인재 매칭이 진행중입니다.</p>
                </div>
              </motion.div>

              {/* Chart Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.7 }}
                className="bg-white rounded-[24px] p-6 shadow-[0_25px_50px_rgba(17,184,166,0.1)] border border-[#EAF8F5] max-w-[400px]"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex justify-between items-start mb-5"
                >
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-0.5 text-[15px] font-[Paperozi]">인재 투입 현황</h4>
                    <p className="text-[11px] text-[#64748b] font-medium font-[Paperozi] opacity-80">2025년 상반기 · 월별 추이</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#EAF8F5] px-2.5 py-1 rounded-lg">
                    <svg className="w-3 h-3 text-[#11b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-[11px] font-black text-[#11b8a6]">+32%</span>
                  </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex gap-4 mb-5"
                >
                  <div className="flex-1 bg-[#F8FBFA] rounded-xl p-3 border border-[#EAF8F5]">
                    <span className="text-[22px] font-black text-[#0f172a] font-[Paperozi] leading-none">127</span>
                    <p className="text-[9px] text-[#64748b] font-medium mt-1">총 투입 인원</p>
                  </div>
                  <div className="flex-1 bg-[#F8FBFA] rounded-xl p-3 border border-[#EAF8F5]">
                    <span className="text-[22px] font-black text-[#11b8a6] font-[Paperozi] leading-none">38</span>
                    <p className="text-[9px] text-[#64748b] font-medium mt-1">최고 월간 투입</p>
                  </div>
                  <div className="flex-1 bg-[#F8FBFA] rounded-xl p-3 border border-[#EAF8F5]">
                    <span className="text-[22px] font-black text-[#0f172a] font-[Paperozi] leading-none">21</span>
                    <p className="text-[9px] text-[#64748b] font-medium mt-1">월 평균</p>
                  </div>
                </motion.div>

                {/* Chart Area */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="relative mb-2"
                >
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between py-1">
                    <span className="text-[8px] text-[#94a3b8] font-medium">40</span>
                    <span className="text-[8px] text-[#94a3b8] font-medium">30</span>
                    <span className="text-[8px] text-[#94a3b8] font-medium">20</span>
                    <span className="text-[8px] text-[#94a3b8] font-medium">10</span>
                    <span className="text-[8px] text-[#94a3b8] font-medium">0</span>
                  </div>

                  {/* Grid + Chart */}
                  <div className="ml-7 relative">
                    {/* Horizontal grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} className="border-b border-dashed border-slate-100 w-full" />
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div className="flex items-end justify-between gap-2 h-[120px] relative z-10">
                      {[
                        { h: 30, val: 12 },
                        { h: 45, val: 18 },
                        { h: 35, val: 14 },
                        { h: 58, val: 23 },
                        { h: 95, val: 38 },
                        { h: 55, val: 22 },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer relative">
                          <span className="text-[9px] font-bold text-[#0f172a] opacity-0 group-hover:opacity-100 transition-all duration-200 absolute -top-4 bg-white px-1.5 py-0.5 rounded shadow-sm border border-slate-100 z-20 whitespace-nowrap">{bar.val}명</span>
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.h}%` }}
                            transition={{ delay: 1.0 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`w-full max-w-[30px] rounded-t-lg transition-all duration-300 group-hover:brightness-110 ${i === 4 ? 'bg-gradient-to-t from-[#0f9d8e] to-[#11b8a6] shadow-[0_5px_15px_rgba(17,184,166,0.3)]' : 'bg-gradient-to-t from-[#c5e8e4] to-[#D1EBE9] group-hover:from-[#b3ddd9] group-hover:to-[#a8d8d3]'}`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* SVG Line chart overlay */}
                    <svg className="absolute inset-0 w-full h-[120px] pointer-events-none z-20" viewBox="0 0 300 120" preserveAspectRatio="none">
                      <motion.path
                        d="M25,84 L75,66 L125,78 L175,50 L225,6 L275,54"
                        fill="none"
                        stroke="#11b8a6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                      {/* Data points */}
                      {[
                        { cx: 25, cy: 84 },
                        { cx: 75, cy: 66 },
                        { cx: 125, cy: 78 },
                        { cx: 175, cy: 50 },
                        { cx: 225, cy: 6 },
                        { cx: 275, cy: 54 },
                      ].map((pt, i) => (
                        <motion.circle
                          key={i}
                          cx={pt.cx}
                          cy={pt.cy}
                          r="4"
                          fill="white"
                          stroke="#11b8a6"
                          strokeWidth="2.5"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 + i * 0.15, duration: 0.3 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </svg>
                  </div>
                </motion.div>

                {/* X-axis labels */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex justify-between ml-7"
                >
                  {['1월', '2월', '3월', '4월', '5월', '6월'].map((m, i) => (
                    <span key={i} className={`text-[10px] font-medium flex-1 text-center ${i === 4 ? 'text-[#11b8a6] font-bold' : 'text-[#94a3b8]'}`}>{m}</span>
                  ))}
                </motion.div>

                {/* Legend */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-slate-50"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#D1EBE9]" />
                    <span className="text-[9px] text-[#64748b] font-medium">월별 투입 인원</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-0.5 bg-[#11b8a6] rounded-full" />
                    <span className="text-[9px] text-[#64748b] font-medium">추이선</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Status Card overlapping left */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-6 lg:w-[62%] lg:z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[28px] p-8 shadow-[0_20px_50px_rgba(17,184,166,0.1)] border border-[#EAF8F5] max-w-[400px] lg:ml-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#11b8a6] animate-pulse" />
                    <span className="text-[14px] font-bold text-[#0f172a] font-[Paperozi]">진행 상황</span>
                  </div>
                  <span className="text-[10px] font-black text-[#11b8a6]/60 px-2.5 py-1 bg-[#EAF8F5] rounded-lg">단계 {">>"}</span>
                </div>

                <div className="space-y-6 relative ml-1.5">
                  <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-[#f1f5f9]" />

                  {[
                    { label: '입력 내용 검토', date: '9월 26일까지', done: true },
                    { label: '1차 검토 완료', date: '9월 27일까지', done: true },
                    { label: '요청 사항 확인됨', date: '9월 27일까지', current: true },
                    { label: '사전 인터뷰 승인됨', date: '9월 28일까지' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 relative z-10">
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm mt-1 transition-all ${item.done ? 'bg-[#11b8a6]' : item.current ? 'bg-white border-[#11b8a6]' : 'bg-white border-slate-200'}`}>
                        {item.done && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                        {item.current && <div className="w-1.5 h-1.5 rounded-full bg-[#11b8a6] animate-ping" />}
                      </div>
                      <div>
                        <p className={`text-[13px] font-bold leading-none mb-1 font-[Paperozi] ${item.done || item.current ? 'text-[#0f172a]' : 'text-slate-400'}`}>{item.label}</p>
                        <p className="text-[10px] text-[#64748b] font-medium font-[Paperozi]">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
