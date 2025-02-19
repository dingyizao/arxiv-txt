import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'arXiv-txt.org - LLM-friendly arXiv papers',
  description: 'Get arXiv papers in a format optimized for large language models instantly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-800 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center">
            <a href="/" className="text-xl font-bold">arXiv-txt.org</a>
            <span className="ml-4 text-sm text-slate-300">LLM-friendly arXiv papers</span>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 max-w-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}