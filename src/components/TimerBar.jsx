// Top fixed bar – shows timer before submit, score after submit
export default function TimerBar({ submitted, timerText, allAnswered, onSubmit, seconds }) {
  const isDanger = seconds >= 300;
  const isCritical = seconds >= 360;
  
  return (
    <header className="fixed top-0 w-full h-16 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50"></div>
      <div className="relative h-full flex justify-between items-center px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <h2 className={`font-bold text-lg sm:text-xl tracking-tight ${
            submitted 
              ? 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent' 
              : isDanger 
                ? isCritical 
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent animate-pulse' 
                  : 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent'
          }`}>
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
                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden' 
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