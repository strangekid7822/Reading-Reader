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
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#ddd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: submitted ? '60px' : '30px',
        overflow: 'hidden',
        transition: 'padding-bottom 0.3s ease'
      }}
    >
      {/* swiper */}
      <QuestionSwiper
        questions={questions}
        answers={answers}
        submitted={submitted}
        handleSelect={handleSelect}
        correctAnswers={correctAnswers}
        handleScroll={handleScroll}
      />

      {/* dots pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {questions.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: idx === currentIndex ? '#555' : '#ccc',
              margin: '0 4px'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}