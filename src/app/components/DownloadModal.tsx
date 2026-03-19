import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import pdfFile from '../../assets/벨로_서비스_소개서.pdf';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    experience: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [showAgreeError, setShowAgreeError] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleAgreeToggle = () => {
    setAgreed(!agreed);
    if (!agreed) setShowAgreeError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzmUc3TBEh6wiaCbobt0sv23Hla-pl7LtcnXVPyy1WPDt3RJUi7HC2DnwZnlh_jUqQZ/exec';

    // 가장 원시적인 방법으로 전송 테스트
    const testData = new URLSearchParams();
    testData.append('company', form.company);
    testData.append('name', form.name);
    testData.append('email', form.email);
    testData.append('phone', form.phone);
    testData.append('budget', form.budget);
    testData.append('experience', form.experience);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // CORS 무시
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: testData.toString(),
      });
      console.log('전송 요청 보냄');
    } catch (err) {
      console.error('네트워크 에러:', err);
    }

    // 2. PDF 다운로드 로직 (기존과 동일)
    try {
      const response = await fetch(pdfFile);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '벨로_서비스_소개서.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('다운로드 오류:', error);
    }

    onClose();
    setTimeout(() => {
      setForm({ company: '', name: '', email: '', phone: '', budget: '', experience: '' });
      setAgreed(false);
    }, 300);
  };

  const inputClass = (field: string) => `w-full px-4 py-3 bg-[#f5f5f5] rounded-xl text-[14px] text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all font-[Paperozi] ${errors[field] ? 'ring-2 ring-red-400 bg-red-50/50' : 'focus:ring-2 focus:ring-[#11b8a6]/30'}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex items-center justify-center px-4" onClick={onClose}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[520px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-7 pb-2">
              <h3 className="text-[22px] font-bold text-[#0f172a] font-[Paperozi]">서비스 소개서 다운로드</h3>
              <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#f1f5f9] transition-colors">
                <X className="w-5 h-5 text-[#64748b]" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8 pt-4">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">기업명</label>
                  <input type="text" placeholder="입력필수*" value={form.company} onChange={(e) => handleChange('company', e.target.value)} className={inputClass('company')} />
                  {errors.company && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">기업명을 입력해주세요.</p>}
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">성함</label>
                  <input type="text" placeholder="입력필수*" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">성함을 입력해주세요.</p>}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">업무용 이메일</label>
                <input type="email" placeholder="입력필수*" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} />
                {errors.email && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">이메일을 입력해주세요.</p>}
              </div>

              <div className="mb-6">
                <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">연락처</label>
                <input type="tel" placeholder="입력필수*" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass('phone')} />
                {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">연락처를 입력해주세요.</p>}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">예산 (월급여)</label>
                  <input type="text" placeholder="100만원 이상" value={form.budget} onChange={(e) => handleChange('budget', e.target.value)} className={inputClass('budget')} />
                  {errors.budget && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">예산을 입력해주세요.</p>}
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#0f172a] mb-2 font-[Paperozi]">채용 직무 연차</label>
                  <input type="text" placeholder="3년 이상" value={form.experience} onChange={(e) => handleChange('experience', e.target.value)} className={inputClass('experience')} />
                  {errors.experience && <p className="text-red-500 text-[11px] mt-1 font-[Paperozi]">연차를 입력해주세요.</p>}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <button type="button" onClick={handleAgreeToggle} className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${agreed ? 'bg-[#11b8a6] border-[#11b8a6]' : showAgreeError ? 'bg-white border-red-400' : 'bg-white border-[#cbd5e1]'}`}>
                  {agreed && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className={`text-[13px] font-medium font-[Paperozi] ${showAgreeError ? 'text-red-500' : 'text-[#11b8a6]'}`}>
                  개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                </span>
              </div>

              <button type="submit" className="w-full py-4 rounded-2xl bg-[#1a1a2e] text-white font-bold text-[16px] font-[Paperozi] hover:bg-[#2a2a3e] active:scale-[0.98] transition-all shadow-lg">
                서비스 소개서 다운로드
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
