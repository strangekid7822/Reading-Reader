import QuestionSwiper from './QuestionSwiper';

// Footer: holds swiper + submit / explanation
export default function BottomPanel({
  footerRef,
  submitted,
  explanations,
  currentIndex,
  answers,
  onSubmit,
  questions,
  handleSelect,
  correctAnswers,
  handleScroll
}) {
  return (
    <section
      ref={footerRef}
      className={`
        fixed bottom-0 w-full bg-gradient-to-t from-white via-white/95 to-white/90 
        backdrop-blur-md border-gray-200 flex flex-col justify-start items-center 
        shadow-[0_-8px_20px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out
        ${submitted ? 'h-[43vh]' : 'h-[38vh]'}
      `}
    >
      <div className="flex-1 w-full overflow-y-auto min-h-0 scrolling-touch hide-scrollbar">
        <QuestionSwiper
          questions={questions}
          answers={answers}
          submitted={submitted}
          handleSelect={handleSelect}
          correctAnswers={correctAnswers}
          handleScroll={handleScroll}
        />
      </div>

      {/* dots pagination */}
      <div className="flex justify-center mt-2 pb-safe pb-4">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`
              w-2 h-2 rounded-full mx-1.5 transition-all duration-200
              ${idx === currentIndex 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 scale-125 shadow-sm' 
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}