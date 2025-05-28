// Top fixed bar – shows timer before submit, score after submit
export default function TimerBar({ submitted, timerText, allAnswered, onSubmit, seconds }) {
  const isDanger = seconds >= 300;
  const isCritical = seconds >= 360;
  
  return (
    <header className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-50 shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-cyan-50/40"></div>
      <div className="relative h-full flex justify-between items-center px-4 sm:px-6 md:px-8">
        {/* Home button on the left */}
        <button
          onClick={() => window.location.href = '/'}
          className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-200 hover:bg-blue-400 transition-all duration-200 shadow-sm hover:shadow-none"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 21h6" />
          </svg>
        </button>

        {/* Timer in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          {!submitted && (
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
          )}
          <h2 className="text-blue-400 font-bold text-lg sm:text-xl tracking-tight text-center">
            {timerText}
          </h2>
        </div>
        
        {!submitted && (
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            className={`
              relative px-6 sm:px-8 py-2.5 rounded-full font-semibold text-sm sm:text-base
              transition-all duration-300 transform hover:scale-105
              ${allAnswered 
                ? 'bg-blue-300 text-white border-2 border-blue-500 hover:bg-blue-500 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden' 
                : 'bg-gray-200/80 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <span className="relative z-10">提交</span>
          </button>
        )}
      </div>
    </header>
  );
}