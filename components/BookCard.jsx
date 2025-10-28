"use client"

export default function BookCard({ book, index, onSelect }) {
  const title = book.title || "Unknown Title"
  const author = book.author_name?.[0] || "Unknown Author"
  const year = book.first_publish_year || "N/A"
  const coverId = book.cover_i

  const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : "/book-cover.jpg"

  return (
    <div
      className="group h-full cursor-pointer animate-fade-in-up hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${(index % 4) * 0.1}s` }}
      onClick={() => onSelect(book)}
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Book Cover */}
        <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
          <img
            src={coverUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/book-cover.jpg"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Book Info */}
        <div className="p-5 relative z-10">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-sm group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs mb-4 line-clamp-1">{author}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-primary bg-accent-light/40 px-3 py-1.5 rounded-lg">{year}</span>
            <span className="text-xs text-muted-foreground">Published</span>
          </div>
        </div>
      </div>
    </div>
  )
}
