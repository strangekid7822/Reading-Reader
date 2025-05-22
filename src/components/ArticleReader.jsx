// Scrollable article container with first-line indent and paragraph spacing
export default function ArticleReader({ height, children }) {
  return (
    <main
      className="mt-12 overflow-y-auto p-2.5" // Removed select-none
      style={{ height }}
    >
      <div className="indent-8">
        {typeof children === 'string'
          ? children
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para.trim()}
                </p>
              ))
          : children}
      </div>
    </main>
  );
}