export default function ExerciseCard({ exercise, onSelect }) {
  const gradientColors = {
    'from-blue-400 to-cyan-400': 'from-blue-400 to-cyan-400',
    'from-purple-400 to-pink-400': 'from-purple-400 to-pink-400',
    'from-green-400 to-teal-400': 'from-green-400 to-teal-400',
    'from-orange-400 to-red-400': 'from-orange-400 to-red-400'
  };

  return (
    <div
      onClick={() => onSelect(exercise.id)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-[1.02]"
    >
      <div className={`h-2 bg-gradient-to-r ${gradientColors[exercise.color]}`}></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800 flex-1 mr-2">
            {exercise.title}
          </h3>
          {exercise.completed && (
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {exercise.category}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            {exercise.difficulty}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{exercise.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>{exercise.questions} 题</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 pt-2">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${gradientColors[exercise.color]} transition-all duration-300`}
            style={{ width: exercise.completed ? '100%' : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}