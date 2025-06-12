// Top fixed bar – shows different content based on mode
export default function TimerBar({ mode = 'exercise', submitted, timerText, allAnswered, onSubmit, seconds, username, onLogout }) {
  const isDanger = seconds >= 300;
  const isCritical = seconds >= 360;
  
  return (
    <header className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-50 shadow-md">
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="relative h-full flex justify-between items-center px-4 sm:px-6 md:px-8">
        
        {/* Left side */}
        <div className="flex items-center space-x-3">
          {mode === 'exercise' && (
            <button
              onClick={() => window.location.href = '/'}
              className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-200 hover:bg-blue-400 transition-all duration-200 shadow-sm hover:shadow-none"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 21h6" />
              </svg>
            </button>
          )}
          
          {(mode === 'welcome' || mode === 'list') && (
            <>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                英语阅读练习
              </h1>
            </>
          )}
        </div>

        {/* Center */}
        {mode === 'exercise' && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
            {!submitted && (
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
            )}
            <h2 className="text-blue-400 font-bold text-lg sm:text-xl tracking-tight text-center">
              {timerText}
            </h2>
          </div>
        )}
        
        {/* Right side */}
        <div className="flex items-center space-x-4">
          {mode === 'list' && username && (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-700 font-medium hidden sm:inline">{username}</span>
              </div>
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </>
          )}
          
          {mode === 'exercise' && !submitted && (
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
      </div>
    </header>
  );
}