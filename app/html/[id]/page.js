'use client';

import { use } from 'react';
import LoadingState from '@/app/components/LoadingState';
import Layout from '@/app/components/Layout';
import { usePaperContent } from '@/app/hooks/usePaperContent';
import { usePaperMetadata } from '@/app/hooks/usePaperMetadata';
import PaperView from '@/app/components/PaperView';

export default function HTMLPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { paper, loading: paperLoading, error: paperError, plainTextMetadata } = usePaperMetadata(id);
  const { paperContent, loading: paperContentLoading, error: paperContentError } = usePaperContent(id);

  if (paperLoading || paperContentLoading) {
    return <LoadingState />;
  }

  if (paperError || paperContentError) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-error justify-center">Error</h2>
          <p>{paperError || paperContentError}</p>
          <p className="text-base-content/70">
            Please check that you have entered a valid arXiv paper ID.
          </p>
        </div>
      </div>
    );
  }

  if (!paperContent) {
    return null;
  }

  return (
    <>
      <PaperView
        paper={paper}
        plainText={paperContent}
        type="html"
      />
      <Layout />
    </>
  );
}
