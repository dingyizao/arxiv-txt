import { Highlight, themes } from "prism-react-renderer";
import Layout from '@/app/components/Layout';

export default function Home() {
  const pythonCode = `import requests

arxiv_url = "https://arxiv.org/abs/1706.03762"
summary: str = requests.get(
  arxiv_url.replace("arxiv.org", "arxiv-txt.org/raw/")
).text
print(summary)

# Pass this to your favorite agent`;

  const bashCode = `# Download with curl
curl -o paper.txt https://arxiv-txt.org/raw/abs/1706.03762

# Use direcly in CLI
# Install the 'llm' library first: https://github.com/simonw/llm
curl -L https://arxiv-txt.org/raw/abs/1706.03762 | \\
llm -s "ELI5"
`;


  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">
        arXiv-txt.org
      </h1>
      <p className="text-lg opacity-90 mb-8">
        LLM-friendly arXiv papers | <a href="https://github.com/jerpint/arxiv-txt" className="link inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
          GitHub
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </p>

      <div className="card bg-base-100 w-full max-w-2xl shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title">How It Works</h2>
          <p className="mb-6">
            Just change <code className="badge badge-ghost">arxiv.org</code> to
            <code className="badge badge-ghost ml-2">arxiv-txt.org</code> in the URL.
          </p>

          <div className="bg-base-200 p-4 rounded-lg">
            <div className="text-sm opacity-75 mb-2">Original URL:</div>
            <a href="https://arxiv.org/abs/1706.03762" className="link link-primary block mb-4">
              https://arxiv.org/abs/1706.03762
            </a>

            <div className="text-sm opacity-75 mb-2">Change to:</div>
            <a href="/abs/1706.03762" className="link link-primary block mb-4">
              https://arxiv-txt.org/abs/1706.03762
            </a>
          </div>
            <p> To fetch the raw text directly, use <code className="badge badge-ghost">https://arxiv-txt.org/raw/</code>:</p>
            <p>
              <a href="/raw/abs/1706.03762" className="link link-primary block mb-4">
                https://arxiv-txt.org/raw/abs/1706.03762
              </a>
            </p>
        </div>
      </div>

      {/* <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-bold mb-6">Try Some Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/abs/1706.03762"
            className="btn btn-primary"
          >
            arxiv-txt.org/
            <br />
            abs/1706.03762
          </a>
          <a
            href="/abs/2402.17764"
            className="btn btn-primary"
          >
            arxiv-txt.org/
            <br />
            abs/2402.17764
          </a>
          <a
            href="/abs/2501.12948"
            className="btn btn-primary"
          >
            arxiv-txt.org/
            <br />
            abs/2501.12948
          </a>
        </div>
      </div> */}

      <div className="card bg-base-100 w-full max-w-2xl shadow-xl my-16">
        <h1 className="text-2xl font-bold text-center">
          API Usage Guide
        </h1>
        <div className="card-body">
          {/* <h2 className="card-title">API Usage Guide</h2> */}
          <div className="space-y-4">
            <p>
              To fetch the raw text directly, use <code className="badge badge-ghost">https://arxiv-txt.org/raw/</code>:
              <br />
              <br />
              For example:
              <a href="https://arxiv-txt.org/raw/abs/1706.03762" className="link link-primary block mt-2">
                https://arxiv-txt.org/raw/abs/1706.03762
              </a>
            </p>
          </div>

          <div className="divider"></div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Python</h3>
            <div className="mockup-code relative overflow-hidden rounded-lg">
              <Highlight theme={themes.gruvboxMaterialDark} code={pythonCode} language="python">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} p-6`} style={{...style, lineHeight: 1.5}}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} className="pl-4">
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
            <h3 className="text-xl font-semibold mb-3">Command Line</h3>
            <div className="mockup-code relative overflow-hidden rounded-lg">
              <Highlight theme={themes.gruvboxMaterialDark} code={bashCode} language="python">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} p-6`} style={{...style, lineHeight: 1.5}}>
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
      </div>
    <Layout></Layout>
    </div>
  );
}