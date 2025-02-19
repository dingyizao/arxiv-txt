/**
 * Helper functions for working with the arXiv API
 */

// arXiv API base URL
const ARXIV_API_BASE = 'http://export.arxiv.org/api/query';

/**
 * Normalize different arXiv ID formats to a standard format
 * @param {string} id - The arXiv paper ID in various formats
 * @returns {string} - Normalized ID
 */
export const normalizePaperId = (id) => {
  if (!id) return null;

  // Handle IDs like "2502.10248"
  if (/^\d{4}\.\d{5}(v\d+)?$/.test(id)) {
    return id;
  }

  // Handle IDs like "math/0211159v1"
  if (/^[a-z-]+\/\d{7}(v\d+)?$/.test(id)) {
    return id;
  }

  // Handle IDs that include "abs/" or "pdf/" prefix
  const match = id.match(/(?:abs|pdf)\/(.+)/);
  if (match) {
    return match[1];
  }

  return id;
};

/**
 * Get the arXiv API URL for a paper
 * @param {string} paperId - The normalized arXiv paper ID
 * @returns {string} - Full arXiv API URL
 */
export const getArxivApiUrl = (paperId) => {
  const normalizedId = normalizePaperId(paperId);
  return `${ARXIV_API_BASE}?id_list=${normalizedId}`;
};

/**
 * Parse XML response from arXiv API
 * @param {string} xmlData - XML response text from arXiv API
 * @returns {object} - Structured paper metadata
 */
export const parseArxivResponse = (xmlData) => {
  // We'll parse the XML in the browser
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");

  // Check for parsing errors
  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Failed to parse arXiv API response');
  }

  // Extract entry data
  const entry = xmlDoc.querySelector('entry');
  if (!entry) {
    throw new Error('Paper not found');
  }

  // Helper function to get text content from nodes
  const getNodeText = (parent, selector) => {
    const node = parent.querySelector(selector);
    return node ? node.textContent.trim() : '';
  };

  // Extract categories
  const getCategories = (entry) => {
    const primaryCategory = entry.querySelector('arxiv\\:primary_category')?.getAttribute('term');
    const categories = Array.from(entry.querySelectorAll('category'))
      .map(cat => cat.getAttribute('term'));

    // Ensure primary category is included and listed first
    const uniqueCategories = [primaryCategory, ...categories]
      .filter((cat, index, self) => cat && self.indexOf(cat) === index);

    return uniqueCategories;
  };

  // Format date to a more readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
        console.error('Error formatting date:', e);
        return dateString;
    }
  };

  // Extract and structure the data
  const normalizedId = normalizePaperId(getNodeText(entry, 'id').split('/').pop());

  const metadata = {
    id: normalizedId,
    title: getNodeText(entry, 'title'),
    abstract: getNodeText(entry, 'summary'),
    authors: Array.from(entry.querySelectorAll('author')).map(author =>
      getNodeText(author, 'name')
    ),
    categories: getCategories(entry),
    publishedDate: formatDate(getNodeText(entry, 'published')),
    updatedDate: formatDate(getNodeText(entry, 'updated')),
    pdfLink: entry.querySelector('link[title="pdf"]')?.getAttribute('href') || '',
    doi: getNodeText(entry, 'arxiv\\:doi') || null,
    journalRef: getNodeText(entry, 'arxiv\\:journal_ref') || null,
  };

  return metadata;
};

/**
 * Generate a plain text representation of paper metadata
 * @param {object} paper - Paper metadata object
 * @returns {string} - Plain text representation
 */
export const generatePlainTextFormat = (paper) => {
  return `TITLE: ${paper.title}
AUTHORS: ${paper.authors.join(', ')}
CATEGORIES: ${paper.categories.join(', ')}
PUBLISHED: ${paper.publishedDate}
${paper.updatedDate !== paper.publishedDate ? `UPDATED: ${paper.updatedDate}` : ''}
${paper.journalRef ? `JOURNAL-REF: ${paper.journalRef}` : ''}
${paper.doi ? `DOI: ${paper.doi}` : ''}
ARXIV-ID: ${paper.id}

ABSTRACT:
${paper.abstract}
`;
};