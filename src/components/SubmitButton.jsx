export default function SubmitButton({ disabled, onSubmit }) {
    return (
      <button
        disabled={disabled}
        onClick={onSubmit}
        style={{ marginTop: '10px' }}
      >
        提交
      </button>
    );
  }