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
      <style>
        {`
          .swiper-container::-webkit-scrollbar {
            display: none;
          }
          .swiper-container {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }
        `}
      </style>
      <div
        className="swiper-container flex overflow-x-auto overflow-y-hidden h-full w-full snap-x snap-mandatory pl-4 scroll-smooth scrolling-touch overscroll-x-contain"
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