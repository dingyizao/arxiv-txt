'use client';

import { Toaster, toast } from 'react-hot-toast';

export default function PaperView({ paper, plainText }) {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', {
        duration: 2000,
        style: {
          background: '#4ade80',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10b981',
        }
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.error('Failed to copy text', {
        duration: 2000,
      });
    }
  };

  const copyAllContent = () => {
    const paperContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.";
    const combinedText = `Summary:\n${plainText}\n\nPaper Content:\n${paperContent}`;
    copyToClipboard(combinedText);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h1 className="card-title text-2xl">{paper.title}</h1>
              <p className="text-sm text-gray-500">
                arXiv: <a
                  href={`https://arxiv.org/abs/${paper.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-500"
                >
                  {paper.id}
                </a>
              </p>
            </div>
            <button
              onClick={copyAllContent}
              className="btn btn-primary btn-sm gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy All
            </button>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">Summary</h3>
                <button
                  onClick={() => copyToClipboard(plainText)}
                  className="btn btn-primary btn-sm gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="relative">
                <pre className="bg-base-200 p-4 rounded-box overflow-auto text-sm font-mono whitespace-pre-wrap h-[400px]">
                  {plainText}
                </pre>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">Paper Content</h3>
                <button
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.");
                      toast.success('Copied to clipboard!', {
                        duration: 2000,
                        style: {
                          background: '#4ade80',
                          color: '#fff',
                        },
                        iconTheme: {
                          primary: '#fff',
                          secondary: '#10b981',
                        }
                      });
                    } catch (err) {
                      console.error('Failed to copy: ', err);
                      toast.error('Failed to copy text', {
                        duration: 2000,
                      });
                    }
                  }}
                  className="btn btn-primary btn-sm gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="relative">
                <pre className="bg-base-200 p-4 rounded-box overflow-auto text-sm font-mono whitespace-pre-wrap h-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
