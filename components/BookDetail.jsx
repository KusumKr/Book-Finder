"use client"

export default function BookDetail({ book, isOpen, onClose }) {
  if (!book || !isOpen) return null

  const title = book.title || "Unknown Title"
  const author = book.author_name?.[0] || "Unknown Author"
  const year = book.first_publish_year || "N/A"
  const coverId = book.cover_i
  const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : "/book-cover.jpg"
  const description = book.description || "No description available"
  const pages = book.number_of_pages_median || "N/A"
  const isbn = book.isbn?.[0] || "N/A"
  const publisher = book.publisher?.[0] || "Unknown Publisher"
  const language = book.language?.[0] || "Unknown"

  const editionCount = book.edition_count || "N/A"
  const subjects = book.subject?.slice(0, 6) || []
  const allAuthors = book.author_name || []
  const firstEditionYear = book.first_publish_year || "N/A"
  const hasMultipleAuthors = allAuthors.length > 1
  const authorCount = allAuthors.length
  const latestYear = book.publish_year?.sort((a, b) => b - a)?.[0] || year
  const totalEditions = book.edition_count || 0

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-card border border-border/40 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-accent-light/20 rounded-lg transition-colors hover:scale-110 active:scale-95 text-foreground text-2xl leading-none"
          >
            ×
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {/* Book Cover */}
            <div
              className="md:col-span-1 animate-fade-in flex items-center justify-center"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-sm bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={coverUrl || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.src = "/book-cover.jpg"
                  }}
                />
              </div>
            </div>

            {/* Book Details - Comprehensive */}
            <div className="md:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Title and Author Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-lg text-primary font-semibold">{author}</p>
                  {hasMultipleAuthors && (
                    <span className="text-xs bg-accent-light/20 text-accent px-2 py-1 rounded-full font-medium">
                      +{authorCount - 1} more
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{publisher}</p>
              </div>

              {/* Genres/Subjects - Enhanced Display */}
              {subjects.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3 font-semibold">
                    Genres & Subjects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200/50 hover:shadow-md transition-shadow"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y border-border/40">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">First Published</p>
                  <p className="text-sm font-semibold text-foreground">{firstEditionYear}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Latest Edition</p>
                  <p className="text-sm font-semibold text-foreground">{latestYear}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Total Editions</p>
                  <p className="text-sm font-semibold text-foreground">{totalEditions}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Pages</p>
                  <p className="text-sm font-semibold text-foreground">{pages}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Language</p>
                  <p className="text-sm font-semibold text-foreground capitalize">{language}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">ISBN</p>
                  <p className="text-sm font-semibold text-foreground">{isbn}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">{description}</p>
              </div>

              {/* Action Button */}
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                View on Open Library →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
