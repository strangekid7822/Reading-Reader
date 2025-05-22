export default function SubmitButton({ disabled, onSubmit }) {
    return (
      <button
        disabled={disabled}
        onClick={onSubmit}
        className="mt-2.5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        提交
      </button>
    );
  }