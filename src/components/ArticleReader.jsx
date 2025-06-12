// Scrollable article container with first-line indent and paragraph spacing
export default function ArticleReader({ children }) {
  return (
    <main className="flex-1 min-h-0 overflow-y-auto py-4 px-2 sm:px-4 md:px-8 bg-white/80 backdrop-blur-sm my-4 shadow-sm border border-gray-100 scrolling-touch select-none">
      <div className="max-w-4xl mx-auto pt-8 pb-[50vh]" style={{ textIndent: '2em' }}>
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