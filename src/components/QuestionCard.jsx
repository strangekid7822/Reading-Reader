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
      <div style={{ minWidth: '85%', maxWidth: '85%', flexShrink: 0, padding: '10px', scrollSnapAlign: 'start' }}>
        <div style={{
          height: '100%',
          overflowY: submitted ? 'auto' : 'hidden',
          WebkitOverflowScrolling: submitted ? 'touch' : 'auto',
          paddingRight: '4px'
        }}>
          <h4>{question.text}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {question.options.map((opt, j) => {
              const isChosen = answers[index] === j;
              const isCorrect = j === correctIndex;
              const bg = submitted
                ? isCorrect
                  ? 'lightgreen'
                  : isChosen
                  ? '#f88'
                  : 'white'
                : isChosen
                ? '#bbb'
                : 'white';
    
              return (
                <li key={j}>
                  <button
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      background: bg,
                      padding: '5px 10px',
                      marginBottom: '5px'
                    }}
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
            <div
              style={{
                marginTop: '10px',
                backgroundColor: '#f0f0f0',
                padding: '8px',
                borderRadius: '4px',
                maxHeight: '30%',  // show a hint of the explanation
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <strong>解析：</strong> {question.explanation}
            </div>
          )}
        </div>
      </div>
    );
  }