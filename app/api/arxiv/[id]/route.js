import { getArxivApiUrl, normalizePaperId } from '@/app/lib/arxiv';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    // Get paper ID from route parameters
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: 'Paper ID is required' },
        { status: 400 }
      );
    }

    const normalizedId = normalizePaperId(id);

    // Make a request to arXiv API
    const arxivUrl = getArxivApiUrl(normalizedId);
    const response = await fetch(arxivUrl, {
      headers: {
        'Accept': 'application/xml',
        'User-Agent': 'arXiv-txt.org (https://arxiv-txt.org; mailto:contact@arxiv-txt.org)'
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `arXiv API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    // Get the XML response
    const xmlData = await response.text();

    // Return the raw XML response
    return new NextResponse(xmlData, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400' // Cache for 1 day
      }
    });

  } catch (error) {
    console.error('Error fetching paper data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch paper data' },
      { status: 500 }
    );
  }
}

// Define how long this route segment should be revalidated
export const revalidate = 86400; // 24 hours in seconds