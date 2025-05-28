export default function SubmitButton({ disabled, onSubmit }) {
    return (
      <button
        disabled={disabled}
        onClick={onSubmit}
        className="mt-2.5"
      >
        提交
      </button>
    );
  }