import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return new NextResponse('Paper ID is required', {
        status: 400,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Use your existing API endpoint to get the data
    const apiResponse = await fetch(`${new URL(request.url).origin}/api/arxiv/${id}`);

    if (!apiResponse.ok) {
      return new NextResponse(
        `Error fetching paper data: ${apiResponse.status} ${apiResponse.statusText}`,
        {
          status: apiResponse.status,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        }
      );
    }

    // Get the XML data
    const xmlData = await apiResponse.text();

    // Simple regex-based extraction of key information
    // These patterns match the expected arXiv API structure
    const title = extractData(xmlData, /<title>(.*?)<\/title>/s);
    const abstract = extractData(xmlData, /<summary>(.*?)<\/summary>/s);
    const authors = extractAllData(xmlData, /<author><name>(.*?)<\/name><\/author>/g);
    const categories = extractAllData(xmlData, /<category term="(.*?)"/g);
    const published = extractData(xmlData, /<published>(.*?)<\/published>/s);
    const updated = extractData(xmlData, /<updated>(.*?)<\/updated>/s);
    const arxivId = extractId(xmlData);
    const doi = extractData(xmlData, /<arxiv:doi>(.*?)<\/arxiv:doi>/s) ||
                extractData(xmlData, /<arxiv\\:doi>(.*?)<\/arxiv\\:doi>/s);
    const journalRef = extractData(xmlData, /<arxiv:journal_ref>(.*?)<\/arxiv:journal_ref>/s) ||
                        extractData(xmlData, /<arxiv\\:journal_ref>(.*?)<\/arxiv\\:journal_ref>/s);

    // Format dates if present
    const publishedDate = formatDate(published);
    const updatedDate = formatDate(updated);

    // Generate plain text format
    const plainTextContent = `# ${title}

## Authors
${authors.join(', ')}

## Categories
${categories.join(', ')}

## Publication Details
- Published: ${publishedDate}
- arXiv ID: ${arxivId}
${doi ? `- DOI: ${doi}` : ''}
${journalRef ? `- Journal Reference: ${journalRef}` : ''}

## Abstract
${abstract}
`;

    return new NextResponse(plainTextContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400' // Cache for 1 day
      }
    });

  } catch (error) {
    console.error('Error processing paper data:', error);
    return new NextResponse(
      `Failed to process paper data: ${error.message}`,
      {
        status: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      }
    );
  }
}

// Helper functions
function extractData(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

function extractAllData(text, regex) {
  const results = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    results.push(match[1].trim());
  }
  return results;
}

function extractId(text) {
  // Extract ID from the pattern in arXiv responses
  const idMatch = text.match(/<id>https?:\/\/arxiv\.org\/abs\/(.*?)<\/id>/);
  return idMatch ? idMatch[1] : '';
}

function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

export const revalidate = 86400; // 24 hours in seconds