import { MessageCircle, X, Send, Phone, Home, MessageSquare, Settings, Zap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import chatVelloImg from 'figma:asset/채팅 벨로 이미지.png';

export function FixedChat() {
  const [showBubble, setShowBubble] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setShowBubble(false);
      setActiveTab('home');
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-[10000] flex flex-col items-end pointer-events-none">
      <AnimatePresence mode="wait">
        {!isChatOpen ? (
          <motion.div
            key="button-group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-end gap-3 pointer-events-none"
          >
            {showBubble && (
              <div className="pointer-events-auto relative bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 pl-5 pr-12 min-w-[240px] mb-1 animate-in fade-in slide-in-from-bottom-3 duration-500">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  className="absolute top-3 right-3 p-1 rounded-full bg-gray-100/80 text-[#94a3b8] hover:text-[#64748b] transition-colors"
                >
                  <X className="w-3.5 h-3.5" strokeWidth={3} />
                </button>

                <div className="flex flex-col gap-0.5 cursor-pointer" onClick={toggleChat}>
                  <div className="text-[15px] font-bold text-[#0f172a] tracking-tight whitespace-nowrap">
                    궁금한 건 채팅으로 문의하세요
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] text-[#22c55e] font-medium opacity-90">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-[#64748b] font-normal">몇 분 내 답변 받으실 수 있어요</span>
                  </div>
                </div>

                {/* Speech bubble pointer */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white transform rotate-45 shadow-[4px_4px_10px_rgba(0,0,0,0.02)]" />
              </div>
            )}

            <button
              id="fixedChat"
              onClick={toggleChat}
              className="pointer-events-auto w-16 h-16 rounded-[24px] bg-[#FFE082] text-[#854d0e] shadow-[0_12px_30px_rgba(254,240,138,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 grid place-items-center animate-bounce-subtle"
              aria-label="24시간 채팅 상담"
            >
              <MessageCircle className="w-8 h-8 fill-[#854d0e]/10" strokeWidth={2.5} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="pointer-events-auto relative w-[min(380px,calc(100vw-48px))] h-[min(650px,calc(100vh-120px))] bg-[#f4f4f4] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-white/50"
          >
            {/* Header */}
            <div className="bg-white p-7 pt-9 pb-6 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center relative overflow-visible shadow-sm">
                  <img src={chatVelloImg} alt="vello" className="w-full h-full object-cover rounded-full" />
                  <div className="absolute top-0 -right-1 w-4 h-4 rounded-full border-4 border-white bg-blue-500 z-10" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0f172a] flex items-center gap-1.5 font-[Paperozi]">
                    벨로 상담
                  </h3>
                  <p className="text-[14px] text-[#64748b] flex items-center gap-1 font-[Paperozi]">
                    <Zap className="w-3.5 h-3.5 fill-gray-400 text-gray-400" />
                    24시간 운영해요
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="채팅창 닫기"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-5 space-y-4 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'home' && (
                  <motion.div
                    key="home-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col items-center text-center">
                      <p className="text-[15px] font-medium text-[#334155] leading-relaxed mb-6 font-[Paperozi]">
                        벨로 방문해주셔서 감사합니다 :)<br />어떻게 도와드릴까요?
                      </p>
                      <button className="w-full h-14 bg-[#FFE082] rounded-2xl text-[#854d0e] font-bold text-[16px] flex items-center justify-center gap-2 hover:opacity-90 transition-colors shadow-sm font-[Paperozi]">
                        문의하기 <Send className="w-4 h-4 fill-current" />
                      </button>
                      <div className="mt-4 flex items-center gap-1.5 text-[12px] text-[#64748b] font-[Paperozi]">
                        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                        몇 분 내 답변 받으실 수 있어요
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-5 py-4 shadow-sm flex items-center justify-between">
                      <span className="text-[14px] text-[#64748b] font-[Paperozi]">다른 방법으로 문의</span>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                        <Phone className="w-5 h-5 fill-current" />
                      </div>
                    </div>

                    <div className="text-center text-[12px] text-[#94a3b8] flex items-center justify-center gap-1.5 mt-2 font-[Paperozi]">
                      <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-[8px] text-gray-500">
                        C
                      </div>
                      채널톡 이용중
                    </div>
                  </motion.div>
                )}

                {activeTab === 'messages' && (
                  <motion.div
                    key="messages-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center h-full text-center p-10 pt-20"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-10 h-10 text-gray-300" />
                    </div>
                    <h4 className="text-gray-900 font-bold mb-1 font-[Paperozi]">진행 중인 대화가 없어요</h4>
                    <p className="text-gray-500 text-sm font-[Paperozi]">새로운 대화를 시작해보세요!</p>
                  </motion.div>
                )}

                {activeTab === 'settings' && (
                  <motion.div
                    key="settings-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="bg-white rounded-2xl p-4 shadow-sm font-[Paperozi] text-sm text-gray-600">준비 중인 기능입니다.</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Bar */}
            <div className="bg-white border-t border-gray-100 h-20 flex items-center justify-around px-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-[#d8b4fe]' : 'text-[#94a3b8]'}`}
              >
                <Home className="w-6 h-6" />
                <span className="text-[11px] font-bold font-[Paperozi]">홈</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'messages' ? 'text-[#d8b4fe]' : 'text-[#94a3b8]'}`}
              >
                <MessageSquare className="w-6 h-6" />
                <span className="text-[11px] font-bold font-[Paperozi]">대화</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'settings' ? 'text-[#d8b4fe]' : 'text-[#94a3b8]'}`}
              >
                <Settings className="w-6 h-6" />
                <span className="text-[11px] font-bold font-[Paperozi]">설정</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
