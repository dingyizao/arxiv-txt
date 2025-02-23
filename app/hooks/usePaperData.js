import { useState, useEffect } from 'react';

export function usePaperData(id) {
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [plainTextContent, setPlainTextContent] = useState('');

  useEffect(() => {
    console.log('0. Starting fetch for ID:', id);

    async function fetchPaper() {
      setLoading(true);
      setError(null);

      console.log('1. Starting fetch for ID:', id);


      try {
        const response = await fetch(`/raw/abs/${id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch paper: ${response.status} ${response.statusText}`);
        }

        const content = await response.text();

        console.log('Fetched content:', content);
        setPlainTextContent(content);
        // Parse the plain text content to extract structured data
        const sections = content.split('\n\n');
        const paperData = {
          title: sections[0].replace('# ', ''),
          authors: sections[1].replace('## Authors\n', '').split(', '),
          categories: sections[2].replace('## Categories\n', '').split(', '),
          abstract: sections[sections.length - 1].replace('## Abstract\n', ''),
          id: id
        };

        // Extract DOI if present
        const doiMatch = content.match(/DOI: (.*)/);
        if (doiMatch) {
          paperData.doi = doiMatch[1];
        }

        setPaper(paperData);
      } catch (err) {
        console.error('Error loading paper:', err);
        setError(err.message || 'Failed to load paper information');
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchPaper();
    }
  }, [id]);

  return { paper, loading, error, plainTextContent };
}