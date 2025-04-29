// Top fixed bar – shows timer before submit, score after submit
export default function TimerBar({ submitted, timerText, allAnswered, onSubmit }) {
    return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '48px',
          background: '#eee',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1.2rem',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ margin: 0 }}>{timerText}</h2>
        
        {!submitted && (
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            style={{
              backgroundColor: allAnswered ? '#4CAF50' : '#ccc',
              color: 'white',
              border: 'none',
              padding: '6px 16px',
              minWidth: '80px',
              borderRadius: '6px',
              textAlign: 'center',
              fontSize: '14px',
              cursor: allAnswered ? 'pointer' : 'default'
            }}
          >
            提交
          </button>
        )}
      </header>
    );
  }