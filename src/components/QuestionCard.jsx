// One question slide
export default function QuestionCard({
    question,
    index,
    answers,
    submitted,
    handleSelect,
    correctIndex
  }) {
    return (
      <div className="min-w-[85%] max-w-[85%] flex-shrink-0 p-4 px-2 sm:px-4 scroll-snap-start">
        <div 
          className={`h-full pr-1 ${submitted ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
          style={{ WebkitOverflowScrolling: submitted ? 'touch' : 'auto' }}
        >
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
            {question.text}
          </h4>
          
          <ul className="list-none p-0 space-y-2">
            {question.options.map((opt, j) => {
              const isChosen = answers[index] === j;
              const isCorrect = j === correctIndex;
              
              let buttonClasses = `
                w-full box-border text-left whitespace-normal break-words
                py-2 sm:py-3 md:py-4 px-4
                rounded-xl mx-auto my-2
                transition-all duration-200 font-medium border-2 shadow-sm
                text-base sm:text-lg md:text-xl
                max-w-[90%] sm:max-w-[75%] md:max-w-lg
              `;
              
              if (submitted) {
                if (isCorrect) {
                  buttonClasses += ' bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-300 text-emerald-800 shadow-emerald-100';
                } else if (isChosen) {
                  buttonClasses += ' bg-gradient-to-r from-red-50 to-rose-50 border-red-300 text-red-800 shadow-red-100';
                } else {
                  buttonClasses += ' bg-white border-gray-200 text-gray-700';
                }
              } else {
                if (isChosen) {
                  buttonClasses += ' bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 text-blue-800 shadow-blue-100 transform scale-[1.02]';
                } else {
                  buttonClasses += ' bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md hover:bg-gray-50';
                }
              }
    
              return (
                <li key={j}>
                  <button
                    className={buttonClasses}
                    disabled={submitted}
                    onClick={() => !submitted && handleSelect(index, j)}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>
          
          {submitted && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl border border-gray-200 max-h-[30%] overflow-y-auto shadow-inner"
                 style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex items-start space-x-2">
                <span className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 flex-shrink-0">解析：</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{question.explanation}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }