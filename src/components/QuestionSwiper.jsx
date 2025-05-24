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
    <div style={{ position: 'relative' }}>
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
        className="swiper-container"
        style={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          height: '100%',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          width: '100%',
          overscrollBehaviorX: 'contain',
          justifyContent: 'flex-start'
        }}
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