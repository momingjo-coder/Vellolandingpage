import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function FloatingBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isDismissed) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Show after scrolling past first viewport
            if (scrollY > viewportHeight * 0.6) {
                // Hide when CTA form section is in view
                const ctaSection = document.getElementById('consult');
                if (ctaSection) {
                    const ctaRect = ctaSection.getBoundingClientRect();
                    const isCtaVisible = ctaRect.top < viewportHeight && ctaRect.bottom > 0;
                    setIsVisible(!isCtaVisible);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleClick = () => {
        const ctaSection = document.getElementById('consult');
        if (ctaSection) {
            const navHeight = 64;
            const y = ctaSection.getBoundingClientRect().top + window.scrollY - navHeight - 12;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none"
                >
                    <div className="pointer-events-auto">
                        {/* Gradient fade edge */}
                        <div className="h-4 bg-gradient-to-t from-white/90 to-transparent" />

                        <div className="bg-white/95 backdrop-blur-md border-t border-[#11b8a6]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
                            <div className="container mx-auto max-w-[1080px] px-4 py-3 flex items-center justify-between gap-4">
                                {/* Left: Text */}
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#EAF8F5] items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-4 h-4 text-[#11b8a6]" />
                                    </div>
                                    <p className="text-[13px] sm:text-[14px] font-medium text-[#334155] font-[Paperozi] truncate">
                                        <span className="font-bold text-[#11b8a6]">1분 만에</span> 맞춤 인재 제안받기
                                    </p>
                                </div>

                                {/* Right: CTA button + close */}
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button
                                        onClick={handleClick}
                                        className="px-5 py-2.5 bg-[#11b8a6] text-white text-[13px] sm:text-[14px] font-bold rounded-full shadow-[0_4px_12px_rgba(17,184,166,0.3)] hover:bg-[#0f9d8e] hover:shadow-[0_6px_16px_rgba(17,184,166,0.4)] active:scale-95 transition-all font-[Paperozi] whitespace-nowrap"
                                    >
                                        무료 상담 신청
                                    </button>
                                    <button
                                        onClick={() => setIsDismissed(true)}
                                        className="p-1.5 rounded-full text-[#94a3b8] hover:text-[#64748b] hover:bg-gray-100 transition-colors"
                                        aria-label="닫기"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
