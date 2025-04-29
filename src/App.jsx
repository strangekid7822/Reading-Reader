import { useState, useRef } from 'react';
import exercises from './data/questions.json';
import TimerBar from './components/TimerBar';
import ArticleReader from './components/ArticleReader';
import BottomPanel from './components/BottomPanel';
import useTimer from './hooks/useTimer';
import useFooterHeight from './hooks/useFooterHeight';

function App() {
  // State for tracking how many seconds have passed since app loaded
  const seconds = useTimer();

  // State and ref for dynamic footer height
  const footerRef = useRef(null);
  const footerHeight = useFooterHeight(footerRef);

  const { article, questions } = exercises[0];   // use the first exercise for now

  // Track selected answers (one per question, initially null)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const [submitted, setSubmitted] = useState(false);
  const [usedTime, setUsedTime] = useState(null);

  // State to track the visible question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const correctAnswers = questions.map(q => q.answer);
  const explanations   = questions.map(q => q.explanation);

  const handleSelect = (questionIndex, optionIndex) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  // Scroll handler to update current question index
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentQuestionIndex(index);
  };

  // Format seconds into MM:SS string
  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  const timerStyle = {
    color: seconds >= 300 ? 'red' : 'black',
    animation: seconds >= 360 ? 'blink 1s step-start infinite' : 'none'
  };

  // UI Layout: Timer (top), Reading (scrollable), Questions (bottom)
  return (
    <div style={{ fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed timer / score bar */}
      <TimerBar
        submitted={submitted}
        timerText={
          !submitted
            ? `Timer: ${formatTime(seconds)}`
            : `用时：${Math.floor(usedTime / 60)}分${usedTime % 60}秒｜正确率：${Math.round(
                answers.filter((ans, i) => ans === correctAnswers[i]).length / questions.length * 100
              )}%`
        }
        allAnswered={answers.every(ans => ans !== null)}
        onSubmit={() => {
          setUsedTime(seconds);
          setSubmitted(true);
        }}
      />

      {/* Scrollable article */}
      <ArticleReader height={`calc(100dvh - ${footerHeight}px - 48px)`}>
        {article.title && <h3>{article.title}</h3>}
        {article.body
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((para, idx) => (
            <p key={idx} style={{ marginBottom: '1em' }}>
              {para.trim()}
            </p>
          ))}
      </ArticleReader>

      {/* Footer with questions and submit / explanation */}
      <BottomPanel
        footerRef={footerRef}
        submitted={submitted}
        explanations={explanations}
        currentIndex={currentQuestionIndex}
        answers={answers}
        onSubmit={() => {
          setUsedTime(seconds);
          setSubmitted(true);
        }}
        questions={questions}
        handleSelect={handleSelect}
        correctAnswers={correctAnswers}
        handleScroll={handleScroll}
      />
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            position: relative;
            -webkit-overflow-scrolling: touch;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

export default App;