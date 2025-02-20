import { Highlight, themes } from "prism-react-renderer";

export default function Home() {
  const pythonCode = `
import requests

arxiv_url = "https://arxiv.org/abs/1706.03762"
summary: str = requests.get(
  arxiv_url.replace("arxiv.org", "arxiv-txt.org/raw/")
).text
print(summary)

# Pass this to your favorite agent`;

  const bashCode = `# Download with curl
curl -o paper.txt https://arxiv-txt.org/raw/abs/1706.03762

# Use with @simonw LLM library
curl -s https://arxiv-txt.org/raw/abs/1706.03762 | llm -s "ELI5"
`;


  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">
        arXiv-txt.org
      </h1>
      <p className="mb-6 text-gray-700">
        Make arXiv papers easily available in LLM-friendly formats.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-md w-full mb-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <p className="mb-6 text-gray-700">
          Just change <code className="bg-gray-100 px-2 py-1 rounded">arxiv.org</code> to
          <code className="bg-gray-100 px-2 py-1 rounded ml-2">arxiv-txt.org</code> in the URL.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg text-left">
          <div className="mb-2 text-sm text-gray-500">Original URL:</div>
          <div className="block mb-4 text-sm">
            <a href="https://arxiv.org/abs/1706.03762" className="text-blue-600 hover:text-blue-800">https://arxiv.org/abs/1706.03762</a>
          </div>

          <div className="mb-2 text-sm text-gray-500">Change to:</div>
          <div className="block mb-4 text-sm">
            <a href="https://arxiv-txt.org/abs/1706.03762" className="text-blue-600 hover:text-blue-800">https://arxiv-txt.org/abs/1706.03762</a>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-xl font-semibold mb-4">Try Some Examples</h2>
        <div className="grid grid-cols-3 gap-2">
          <a
            href="/abs/1706.03762"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
          >
            arxiv-txt.org/
            <br />
            abs/1706.03762
          </a>
          <a
            href="/abs/2402.17764"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
          >
            arxiv-txt.org/
            <br />
            abs/2402.17764
          </a>
          <a
            href="/abs/2501.12948"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
          >
            arxiv-txt.org/
            <br />
            abs/2501.12948
          </a>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full mb-8 mt-16 border-t border-gray-100">
        <h2 className="text-xl font-semibold mb-4">API Usage Guide</h2>
        <div className="flex flex-col gap-4">
          <p>
            To fetch the raw text directly, use <code className="bg-gray-100 px-2 py-1 rounded">https://arxiv-txt.org/raw/</code>:
            <br />
            <br />
            For example:
            <a href="https://arxiv-txt.org/raw/abs/1706.03762" className="text-blue-600 hover:text-blue-800">https://arxiv-txt.org/raw/abs/1706.03762</a>
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Python</h3>
          <div className="bg-gray-50 p-4 rounded-lg text-left">
            <Highlight theme={themes.github} code={pythonCode} language="python">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-sm overflow-x-auto`} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Command Line</h3>
          <div className="bg-gray-50 p-4 rounded-lg text-left">
            <Highlight theme={themes.github} code={bashCode} language="bash">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-sm overflow-x-auto`} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </div>


      <footer className="mt-16 text-sm text-gray-600">
        <p className="flex items-center justify-center gap-1">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://twitter.com/jerpint"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jerpint
          </a>
        </p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/jerpint/arxiv-txt"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://jerpint.io"
            className="text-blue-600 hover:text-blue-800"
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