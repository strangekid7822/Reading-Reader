// Scrollable article container with first-line indent and paragraph spacing
export default function ArticleReader({ height, children }) {
  return (
    <main
      className="mt-15 overflow-y-auto py-4 px-2 sm:px-4 md:px-8 bg-white/80 backdrop-blur-sm my-4 shadow-sm border border-gray-100"
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
                <p key={idx} className="mb-4 leading-relaxed text-gray-700 text-base sm:text-lg md:text-xl">
                  {para.trim()}
                </p>
              ))
          : children}
      </div>
    </main>
  );
}