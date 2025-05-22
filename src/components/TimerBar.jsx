// Top fixed bar – shows timer before submit, score after submit
export default function TimerBar({ seconds, submitted, timerText, allAnswered, onSubmit }) {
    const timerColorClass = seconds >= 300 ? 'text-red-500' : 'text-black';
    const timerAnimationClass = seconds >= 360 ? 'animate-blink' : '';

    return (
      <header className="fixed top-0 w-full h-12 bg-gray-200 z-10 flex justify-between items-center px-5 box-border">
        <h2 className={`m-0 text-lg font-medium ${timerColorClass} ${timerAnimationClass}`}>{timerText}</h2>
        
        {!submitted && (
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            className={`text-white border-none px-4 py-1.5 min-w-[80px] rounded-md text-sm ${allAnswered ? 'bg-green-500 cursor-pointer' : 'bg-gray-400 cursor-default'}`}
          >
            提交
          </button>
        )}
      </header>
    );
  }