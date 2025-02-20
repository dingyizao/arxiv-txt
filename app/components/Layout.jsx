export default function Layout({ children = null }) {
  return (
    <div>
      {children}
      <footer className="text-sm opacity-75">
        <p className="flex items-center justify-center gap-1">
          Made with <span className="text-error">❤</span> by{" "}
          <a
            href="https://twitter.com/jerpint"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jerpint
          </a>
        </p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/jerpint/arxiv-txt"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://jerpint.io"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </footer>
    </div>
  );
}