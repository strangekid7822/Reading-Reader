// Scrollable article container with first-line indent and paragraph spacing
export default function ArticleReader({ height, children }) {
  return (
    <main
      style={{
        marginTop: '48px',
        height,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        WebkitTouchCallout: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        padding: '10px'
      }}
    >
      <div style={{ textIndent: '2em' }}>
        {typeof children === 'string'
          ? children
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((para, idx) => (
                <p key={idx} style={{ marginBottom: '1em' }}>
                  {para.trim()}
                </p>
              ))
          : children}
      </div>
    </main>
  );
}