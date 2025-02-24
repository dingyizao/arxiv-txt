# arXiv-txt.org

A simple tool that makes arXiv papers instantly available in LLM-friendly formats by just changing the URL.

## How It Works

1. Find a paper on arXiv: `https://arxiv.org/abs/2502.10248`
2. Change the URL to: `https://arxiv-txt.org/abs/2502.10248`
3. copy an LLM-optimized version

## API Usage

See example use-cases in the [/examples/]() directory.

## Development

This project is built with Next.js and Tailwind CSS.

### Prerequisites

- Node.js (16.x or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/arxiv-txt.git
cd arxiv-txt

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

## Deployment

The site is configured for easy deployment on Vercel with the included `vercel.json` configuration.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Technical Implementation

- **Frontend**: Next.js with App Router, React, and Tailwind CSS
- **API Proxy**: Next.js API routes handle CORS and rate limiting
- **Caching**: Response caching via Next.js and HTTP headers
- **Deployment**: Vercel with custom configuration

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
