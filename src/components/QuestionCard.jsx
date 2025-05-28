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
                bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-b-xl border-b border-x border-gray-200
                transition-all duration-800
                ${submitted ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'}
              `}
              style={{
                animation: submitted ? 'slideDown 0.8s cubic-bezier(0, 0, 0.58, 1) forwards' : 'none'
              }}
            >
              <div className="flex items-start space-x-2">
                <span className="text-sm sm:text-base md:text-lg font-bold text-violet-700 flex-shrink-0">解析：</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{question.explanation}</span>
              </div>
            </div>
          )}
          <h4 className="pt-2 text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 leading-relaxed">
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
                  buttonClasses += ' bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-400 text-teal-900 shadow-emerald-100';
                } else if (isChosen) {
                  buttonClasses += ' bg-gradient-to-r from-rose-50 to-red-50 border-rose-400 text-rose-900 shadow-red-100';
                } else {
                  buttonClasses += ' bg-white border-gray-200 text-gray-700';
                }
              } else {
                if (isChosen) {
                  buttonClasses += ' bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400 text-blue-900 shadow-blue-100';
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