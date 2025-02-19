export default function Home() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to arXiv-txt.org
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full mb-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <p className="mb-6 text-gray-700">
          A simple tool that makes arXiv papers instantly available in LLM-friendly formats.
          Just change <code className="bg-gray-100 px-2 py-1 rounded">arxiv.org</code> to
          <code className="bg-gray-100 px-2 py-1 rounded ml-2">arxiv-txt.org</code> in the URL.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg text-left">
          <div className="mb-2 text-sm text-gray-500">Original URL:</div>
          <code className="block mb-4 text-sm">
            https://arxiv.org/abs/2502.10248
          </code>

          <div className="mb-2 text-sm text-gray-500">Changed to:</div>
          <code className="block text-sm font-semibold">
            https://arxiv-txt.org/abs/2502.10248
          </code>
        </div>
      </div>

      <div className="text-left w-full">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Identical URL structure to arXiv (just different domain)</li>
          <li>Key metadata extraction (title, authors, abstract, categories, date)</li>
          <li>Clean, structured text format optimized for LLMs</li>
          <li>Zero-interaction UX - results appear instantly</li>
          <li>Cached responses for better performance</li>
        </ul>
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-xl font-semibold mb-4">Try an Example</h2>
        <a
          href="/abs/2401.08406"
          className="block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 transition-colors"
        >
          View Sample Paper
        </a>
      </div>
    </div>
  );
}