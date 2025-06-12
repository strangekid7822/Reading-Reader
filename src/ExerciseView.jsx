import { useState, useRef } from 'react';
import exercises from './data/questions.json';
import TimerBar from './components/TimerBar';
import ArticleReader from './components/ArticleReader';
import BottomPanel from './components/BottomPanel';
import useTimer from './hooks/useTimer';
import useFooterHeight from './hooks/useFooterHeight';

export default function ExerciseView() {
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

  // UI Layout: Timer (top), Reading (scrollable), Questions (bottom)
  return (
    <div className="font-sans h-screen flex flex-col bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Fixed timer / score bar */}
      <TimerBar
        mode="exercise"
        submitted={submitted}
        timerText={
          !submitted
            ? `Timer: ${formatTime(seconds)}`
            : (
              <>
                用时：{Math.floor(usedTime / 60)}分{usedTime % 60}秒<br />
                正确率：{Math.round(
                  answers.filter((ans, i) => ans === correctAnswers[i]).length / questions.length * 100
                )}%
              </>
            )
        }
        allAnswered={answers.every(ans => ans !== null)}
        onSubmit={() => {
          setUsedTime(seconds);
          setSubmitted(true);
        }}
        seconds={seconds}
      />

      {/* Scrollable article */}
      <ArticleReader>
        {article.title && <h3 className="text-2xl font-bold text-gray-800 mb-6">{article.title}</h3>}
        {article.body
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-gray-700">
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
          @keyframes pulse-red {
            0%, 100% { color: #dc2626; }
            50% { color: #ef4444; }
          }
          .timer-danger {
            animation: pulse-red 1s ease-in-out infinite;
          }
          /* Add slideDown animation for explanation card */
          @keyframes slideDown {
            0% {
              transform: translateY(-150%) scale(0.95);
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
          /* Hide scrollbar for bottom panel */
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Safari/Chrome */
          }
        `}
      </style>
    </div>
  );
}