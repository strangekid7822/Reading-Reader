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
      className={`fixed bottom-0 w-full bg-gray-300 flex flex-col justify-start items-center pt-4 transition-all duration-300 ease-in-out ${submitted ? 'pb-16 h-3/5' : 'pb-8 h-2/5'}`}
    >
      <div
        className={`flex-1 w-full min-h-0 ${submitted ? 'overflow-y-auto' : 'overflow-hidden'}`}
      >
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
      <div className="flex justify-center mt-2.5">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full mx-1 ${idx === currentIndex ? 'bg-gray-700' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}