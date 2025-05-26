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
      <div className="min-w-[92%] max-w-[92%] flex-shrink-0 px-4 sm:px-6 snap-start snap-always">
        <div 
          className={`h-full pr-1 ${submitted ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
          style={{ WebkitOverflowScrolling: submitted ? 'touch' : 'auto' }}
        >
          {submitted && (
            <div
              className={`
                mb-4 bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl border border-gray-200 shadow-inner
                transition-all duration-800
                ${submitted ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'}
              `}
              style={{
                animation: submitted ? 'slideDown 0.8s cubic-bezier(0, 0, 0.58, 1) forwards' : 'none'
              }}
            >
              <div className="flex items-start space-x-2">
                <span className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 flex-shrink-0">解析：</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{question.explanation}</span>
              </div>
            </div>
          )}
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 leading-relaxed">
            {question.text}
          </h4>
          
          <ul className="list-none p-0 space-y-1">
            {question.options.map((opt, j) => {
              const isChosen = answers[index] === j;
              const isCorrect = j === correctIndex;
              
              let buttonClasses = `
                w-full box-border text-left whitespace-normal break-words
                py-1 sm:py-1.5 md:py-2 px-4
                rounded-xl
                transition-all duration-200 font-medium border-2 shadow-sm
                text-base sm:text-lg md:text-xl
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
                  buttonClasses += ' bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 text-blue-800 shadow-blue-100';
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
        </div>
      </div>
    );
  }