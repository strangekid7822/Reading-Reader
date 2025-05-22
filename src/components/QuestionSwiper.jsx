import QuestionCard from './QuestionCard';

// Horizontal list of QuestionCard slides
export default function QuestionSwiper({
  questions,
  answers,
  submitted,
  handleSelect,
  correctAnswers,
  handleScroll
}) {
  return (
    <div className="relative">
      <div
        className="swiper-container flex overflow-x-auto overflow-y-hidden h-full snap-x snap-mandatory scroll-smooth overscroll-x-contain justify-start touch-pan-y hide-scrollbar"
        onScroll={handleScroll}
      >
        {questions.map((q, i) => (
          <QuestionCard
            key={i}
            question={q}
            index={i}
            answers={answers}
            submitted={submitted}
            handleSelect={handleSelect}
            correctIndex={correctAnswers[i]}
          />
        ))}
      </div>
    </div>
  );
}