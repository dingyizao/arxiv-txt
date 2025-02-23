export default function Metadata({ paper }) {
  if (!paper) return null;

  return (
    <section className="mb-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Authors</h2>
        <p className="text-gray-800">{paper.authors.join(', ')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {paper.categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Dates</h3>
          <p className="text-gray-800">
            <span className="font-medium">Published:</span> {paper.publishedDate}
            {paper.updatedDate !== paper.publishedDate && (
              <>
                <br />
                {/* <span className="font-medium">Last Updated:</span> {paper.updatedDate} */}
              </>
            )}
          </p>
        </div>

        {paper.journalRef && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Journal Reference</h3>
            <p className="text-gray-800">{paper.journalRef}</p>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">arXiv ID</h3>
          <p className="text-gray-800 font-mono">{paper.id}</p>
        </div>
      </div>
    </section>
  );
}