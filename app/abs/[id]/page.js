'use client';

import { use } from 'react';
import LoadingState from '@/app/components/LoadingState';
import Layout from '@/app/components/Layout';
import { usePaperMetadata } from '@/app/hooks/usePaperMetadata';
import { usePaperContent } from '@/app/hooks/usePaperContent';
import PaperView from '@/app/components/PaperView';

export default function AbstractPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { paper, loading: paperLoading, error: paperError, plainTextMetadata } = usePaperMetadata(id);
  const { paperContent, loading: paperContentLoading, error: paperContentError } = usePaperContent(id);

  if (paperLoading || paperContentLoading) {
    return <LoadingState />;
  }

  if (paperError && paperContentError) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-error justify-center">Error</h2>
          <p>Failed to fetch paper information and content.</p>
          <p className="text-base-content/70">
            Please check that you have entered a valid arXiv paper ID.
          </p>
        </div>
      </div>
    );
  }

  if (!paper && !paperError) {
    return null;
  }

  return (
    <>
      <PaperView
        paper={paper || { title: "Error fetching paper metadata", error: paperError }}
        plainText={plainTextMetadata || ""}
        paperContent={paperContent?.text || "Error fetching the paper content."}
        paperContentError={paperContent?.error}
        buttonText="Abstract"
        type="abs"
      />
      <Layout />
    </>
  );
}
