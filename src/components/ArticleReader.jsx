// Scrollable article container with first-line indent and paragraph spacing
export default function ArticleReader({ height, children }) {
  return (
    <main
      className="mt-15 overflow-y-auto p-6 bg-white/80 backdrop-blur-sm mx-4 my-4 rounded-xl shadow-sm border border-gray-100"
      style={{
        height,
        WebkitOverflowScrolling: 'touch',
        WebkitTouchCallout: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <div className="max-w-4xl mx-auto" style={{ textIndent: '2em' }}>
        {typeof children === 'string'
          ? children
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((para, idx) => (
                <p key={idx} className="mb-4 leading-relaxed text-gray-700 text-base">
                  {para.trim()}
                </p>
              ))
          : children}
      </div>
    </main>
  );
}