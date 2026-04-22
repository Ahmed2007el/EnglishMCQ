import { AnimatePresence, motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Activity, ArrowLeft, CheckCircle2, Play, RefreshCcw, Stethoscope, Trophy, XCircle, RotateCcw } from 'lucide-react';
import { questions } from './data/questions';

type AppState = 'start' | 'quiz' | 'results';

const STORAGE_KEY = 'med-term-quiz-progress';

export default function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress on initial mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.appState === 'quiz' || parsed.appState === 'results') {
          setHasSavedProgress(true);
        }
      } catch (e) {
        console.error('Failed to parse saved progress', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Auto-save whenever quiz state changes
  useEffect(() => {
    if (!isLoaded) return;
    
    if (appState !== 'start') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        appState,
        currentIndex,
        selectedOption,
        score
      }));
    }
  }, [appState, currentIndex, selectedOption, score, isLoaded]);

  const startNewQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasSavedProgress(false);
    setAppState('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const resumeQuiz = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAppState(parsed.appState);
        setCurrentIndex(parsed.currentIndex);
        setScore(parsed.score);
        setSelectedOption(parsed.selectedOption);
      } catch(e) {
        startNewQuiz();
      }
    }
  };

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (optionId: string) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionId);
    if (optionId === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setAppState('results');
    }
  };

  const getOptionStatus = (optionId: string) => {
    if (!selectedOption) return 'default';
    if (optionId === currentQuestion.correctAnswer) return 'correct';
    if (optionId === selectedOption) return 'incorrect';
    return 'disabled';
  };

  // Prevent flash of incorrect state while loading local storage
  if (!isLoaded) return null;

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center sm:p-4 font-sans text-[#e0e0e0]">
      <div className="w-full max-w-3xl bg-[#0f0f0f] sm:border border-0 border-[#2a2a24] overflow-hidden flex flex-col min-h-screen sm:min-h-0 sm:rounded-xl relative shadow-2xl">
        
        {/* Header */}
        <div className="h-16 sm:h-20 border-b border-[#2a2a24] bg-[#0f0f0f] px-4 sm:px-6 lg:px-12 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#c5a059] flex items-center justify-center rotate-45 flex-shrink-0">
              <div className="-rotate-45 font-serif text-[#c5a059] font-bold"><Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" /></div>
            </div>
            <h1 className="font-serif text-sm sm:text-xl tracking-widest uppercase text-[#f5f5f5] leading-tight">
              اختبار <span className="text-[#c5a059]">المصطلحات</span><span className="hidden sm:inline"> الطبية</span>
            </h1>
          </div>
          {appState === 'quiz' && (
            <div className="flex gap-2 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500">
              <div className="flex flex-col text-center">
                <span>السؤال</span>
                <span className="text-[#c5a059] font-mono text-sm sm:text-lg">{currentIndex + 1} <span className="text-neutral-700">/</span> {questions.length}</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 md:p-12 flex-1 flex flex-col relative z-10 w-full overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* START SCREEN */}
            {appState === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center pb-8 pt-4 sm:py-4 flex flex-col justify-center flex-1 my-auto"
              >
                <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 border border-[#c5a059] bg-[#1a1a15] rotate-45 flex items-center justify-center mb-10 sm:mb-12 text-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.15)] flex-shrink-0">
                  <div className="-rotate-45">
                    <Activity className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#f5f5f5] mb-4 sm:mb-6 leading-snug tracking-wide">
                  مرحباً بك في تقييم<br className="sm:hidden" /> المصطلحات الطبية
                </h2>
                <p className="text-neutral-400 mb-10 max-w-md mx-auto leading-relaxed text-xs sm:text-sm px-2">
                  يحتوي هذا التقييم على {questions.length} سؤال متعدد الاختيارات مصمم بدقة لقياس مدى إلمامك بأسس المصطلحات في المجال الطبي. <strong className="text-[#c5a059] font-normal">سيتم حفظ تقدمك تلقائياً.</strong>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                  {hasSavedProgress && (
                    <button
                      onClick={resumeQuiz}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-[#d4b57a] text-black px-6 sm:px-12 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg shadow-[#c5a059]/10"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      متابعة الاختبار المحفوظ
                    </button>
                  )}
                  <button
                    onClick={startNewQuiz}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-12 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                      hasSavedProgress 
                        ? 'bg-[#111] border border-neutral-700 hover:border-[#c5a059] text-white hover:bg-[#1a1a15]'
                        : 'bg-[#c5a059] hover:bg-[#d4b57a] text-black shadow-lg shadow-[#c5a059]/10'
                    }`}
                  >
                    {hasSavedProgress ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    {hasSavedProgress ? 'بدء من جديد' : 'بدء الاختبار'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* QUIZ SCREEN */}
            {appState === 'quiz' && (
              <motion.div
                key={`quiz-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col flex-1"
              >
                {/* Progress Bar styled as the design */}
                <div className="mb-6 sm:mb-8 flex items-center">
                  <span className="font-serif italic text-[#c5a059] text-sm sm:text-xl ml-4 whitespace-nowrap">
                    السؤال {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[2px] w-full bg-neutral-800 relative grow">
                    <div 
                      className="absolute right-0 h-full bg-[#c5a059] transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(197,160,89,0.5)]" 
                      style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* English Question Box (LTR) */}
                <div dir="ltr" className="mb-6 mt-2 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed sm:leading-snug mb-8 text-[#f5f5f5]">
                    {currentQuestion.text}
                  </h3>

                  <div className="grid gap-3 sm:gap-4">
                    {currentQuestion.options.map((opt) => {
                      const status = getOptionStatus(opt.id);
                      
                      let btnClasses = "group flex items-center p-4 sm:p-5 border transition-all text-left w-full relative overflow-hidden focus:outline-none ";
                      let iconClasses = "w-7 h-7 sm:w-8 sm:h-8 border flex flex-shrink-0 items-center justify-center text-[10px] sm:text-xs font-mono mr-4 sm:mr-5 transition-colors duration-300 ";
                      let textClasses = "text-[15px] sm:text-lg transition-colors leading-snug ";

                      if (status === 'default') {
                        btnClasses += "border-neutral-800 bg-[#111] hover:border-[#c5a059] cursor-pointer hover:bg-[#1a1a15] active:border-[#c5a059]";
                        iconClasses += "border-neutral-700 group-hover:bg-[#c5a059] group-hover:text-black group-hover:border-[#c5a059]";
                        textClasses += "text-neutral-300 group-hover:text-white";
                      } else if (status === 'correct') {
                        btnClasses += "border-emerald-600/50 bg-[#1a251a] cursor-default ring-1 ring-emerald-500/20";
                        iconClasses += "bg-emerald-600 border-emerald-600 text-black";
                        textClasses += "text-white";
                      } else if (status === 'incorrect') {
                        btnClasses += "border-rose-900/50 bg-[#1f1313] cursor-default";
                        iconClasses += "bg-rose-900 border-rose-900 text-white/50";
                        textClasses += "text-neutral-500 line-through decoration-rose-900/50";
                      } else if (status === 'disabled') {
                        btnClasses += "border-neutral-900 bg-[#0a0a0a] cursor-default opacity-50";
                        iconClasses += "border-neutral-800 text-neutral-600";
                        textClasses += "text-neutral-600";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt.id)}
                          className={btnClasses}
                          disabled={selectedOption !== null}
                        >
                          <span className={iconClasses}>
                            {status === 'correct' ? <CheckCircle2 className="w-4 h-4" /> : 
                             status === 'incorrect' ? <XCircle className="w-4 h-4" /> :
                             opt.id}
                          </span>
                          <span className={textClasses}>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Controls (RTL) */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-neutral-800 flex flex-col sm:flex-row-reverse items-center justify-between gap-4 sm:gap-0 pb-4 sm:pb-0">
                   <button
                    onClick={nextQuestion}
                    disabled={selectedOption === null}
                    className={`w-full sm:w-auto px-6 sm:px-12 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2
                      ${selectedOption !== null 
                        ? 'bg-[#c5a059] text-black hover:bg-[#d4b57a] shadow-[0_0_15px_rgba(197,160,89,0.2)]' 
                        : 'bg-[#111] border border-neutral-800 text-neutral-600 cursor-not-allowed'}`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {currentIndex < questions.length - 1 ? 'تأكيد ومتابعة' : 'إنهاء وعرض النتيجة'}
                  </button>

                  <div className="h-6 flex items-center w-full sm:w-auto justify-center sm:justify-start">
                    {selectedOption ? (
                      <motion.div 
                        key="feedback"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className={`font-serif italic text-sm sm:text-lg flex items-center gap-2 ${selectedOption === currentQuestion.correctAnswer ? 'text-emerald-500' : 'text-rose-400'}`}
                      >
                        {selectedOption === currentQuestion.correctAnswer ? 'استجابة دقيقة' : 'إجابة غير صحيحة'}
                      </motion.div>
                    ) : (
                      <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-600 font-bold text-center">يرجى الاختيار أولاً</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {appState === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col justify-center flex-1 my-auto"
              >
                <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 border border-[#c5a059] bg-[#1a1a15] rotate-45 flex items-center justify-center mb-10 sm:mb-12 text-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.15)] flex-shrink-0">
                  <div className="-rotate-45">
                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#c5a059]" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#f5f5f5] mb-2 uppercase tracking-widest">
                  تم إنجاز التقييم
                </h2>
                <p className="text-neutral-500 mb-8 sm:mb-10 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                  تقرير النتائج التفصيلي
                </p>
                
                <div className="bg-[#111] border border-[#2a2a24] p-6 sm:p-8 mb-10 sm:mb-12 inline-block min-w-[240px] sm:min-w-[280px]">
                  <div className="text-5xl sm:text-[4rem] font-mono text-white leading-none flex items-baseline justify-center">
                    {score}
                    <span className="text-lg sm:text-xl text-neutral-600 mx-2 font-sans font-light">/</span>
                    <span className="text-3xl text-[#c5a059]">{questions.length}</span>
                  </div>
                  <div className="mt-4 sm:mt-6 text-[9px] sm:text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <div className="h-[1px] w-4 bg-[#c5a059]/30"></div>
                    الإجابات الصحيحة
                    <div className="h-[1px] w-4 bg-[#c5a059]/30"></div>
                  </div>
                </div>

                <div className="flex justify-center w-full px-4 sm:px-0">
                  <button
                    onClick={startNewQuiz}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111] border border-neutral-700 hover:border-[#c5a059] text-white px-8 sm:px-10 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all group"
                  >
                    <RefreshCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500 group-hover:text-[#c5a059] transition-colors" />
                    إعادة المحاولة ومحو الخطة السابقة
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
