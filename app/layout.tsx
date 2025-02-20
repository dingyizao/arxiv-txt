import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'arXiv-txt.org - LLM-friendly arXiv papers',
  description: 'Get arXiv papers in a format optimized for large language models instantly',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <Link href="/" className="text-xl font-bold">arXiv-txt.org</Link>
                <span className="ml-4 text-sm opacity-70">LLM-friendly arXiv papers</span>
              </div>
            </div>
            {/* Page content */}
            <main className="container mx-auto px-4 py-8 max-w-3xl">
              {children}
              <Analytics />
            </main>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              <li><Link href="/">Home</Link></li>
              {/* Add more menu items here */}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}