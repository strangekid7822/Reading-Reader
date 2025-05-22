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
      <div className="min-w-[85%] max-w-[85%] flex-shrink-0 p-2.5 snap-start">
        <div className={`h-full p-1 touch-pan-y ${submitted ? 'overflow-y-auto' : 'overflow-hidden'}`}>
          <h4 className="text-lg font-semibold mb-2">{question.text}</h4>
          <ul className="list-none p-0">
            {question.options.map((opt, j) => {
              const isChosen = answers[index] === j;
              const isCorrect = j === correctIndex;
              
              let buttonClass = "w-full text-left whitespace-normal break-words p-2 mb-1.5 rounded";
              if (submitted) {
                if (isCorrect) {
                  buttonClass += " bg-green-300";
                } else if (isChosen) {
                  buttonClass += " bg-red-300";
                } else {
                  buttonClass += " bg-white";
                }
              } else {
                if (isChosen) {
                  buttonClass += " bg-gray-300";
                } else {
                  buttonClass += " bg-white hover:bg-gray-100";
                }
              }
    
              return (
                <li key={j}>
                  <button
                    className={buttonClass}
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
            <div className="mt-2.5 bg-gray-100 p-2 rounded max-h-[30%] overflow-y-auto touch-pan-y">
              <strong className="font-bold">解析：</strong> {question.explanation}
            </div>
          )}
        </div>
      </div>
    );
  }