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
        backdrop-blur-md border-t border-gray-200 flex flex-col justify-start items-center 
        shadow-2xl transition-all duration-300 ease-in-out pt-2
        ${submitted ? 'h-[55vh]' : 'h-[40vh]'}
      `}
    >
      <div className="flex-1 w-full overflow-y-auto min-h-0" style={{ WebkitOverflowScrolling: 'touch' }}>
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
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-sm' 
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}