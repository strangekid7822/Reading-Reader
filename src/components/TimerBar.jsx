// Top fixed bar – shows timer before submit, score after submit
export default function TimerBar({ submitted, timerText, allAnswered, onSubmit, seconds }) {
  const isDanger = seconds >= 300;
  const isCritical = seconds >= 360;
  
  return (
    <header className="fixed top-0 w-full h-15 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 flex justify-between items-center px-5 shadow-sm">
      <h2 className={`m-0 font-semibold text-lg ${
        submitted 
          ? 'text-gray-800' 
          : isDanger 
            ? isCritical 
              ? 'timer-danger font-bold' 
              : 'text-red-600'
            : 'text-gray-700'
      }`}>
        {timerText}
      </h2>
      
      {!submitted && (
        <button
          onClick={onSubmit}
          disabled={!allAnswered}
          className={`
            px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 min-w-20 shadow-sm
            ${allAnswered 
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-green-200 hover:shadow-md transform hover:scale-105' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          提交
        </button>
      )}
    </header>
  );
}