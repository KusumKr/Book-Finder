"use client"

import { useState } from "react"
import SearchBar from "@/components/SearchBar"
import BookGrid from "@/components/BookGrid"
import BookDetail from "@/components/BookDetail"

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a book title")
      return
    }

    setLoading(true)
    setError(null)
    setSearched(true)

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=20`)

      if (!response.ok) {
        throw new Error("Failed to fetch books")
      }

      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs)
      } else {
        setBooks([])
        setError("No books found. Try a different search.")
      }
    } catch (err) {
      setError("An error occurred while searching. Please try again.")
      console.error("Search error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSelectBook = (book) => {
    setSelectedBook(book)
    setIsDetailOpen(true)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        {/* Light gradient base layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />

        {/* Animated gradient mesh background - soft and light */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30 animate-gradient-shift"
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        {/* Soft floating orbs with light colors */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/20 to-purple-100/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-pink-300/20 to-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 w-[500px] h-[500px] bg-gradient-to-t from-blue-300/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-fast animation-delay-4000" />

        {/* Additional soft accent orbs */}
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-l from-cyan-300/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-1000" />
        <div className="absolute -bottom-20 -left-40 w-[450px] h-[450px] bg-gradient-to-r from-purple-300/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-medium animation-delay-3000" />

        {/* Subtle accent orbs */}
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-gradient-to-b from-pink-300/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-fast animation-delay-1000" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-purple-300/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-3000" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-purple-200/40">
        <div className="animate-fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-fade-in">📚</div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Book Finder
              </h1>
              <p className="text-sm text-purple-600/60 mt-1">Discover your next great read</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {!searched && (
          <div className="animate-fade-in-up mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-5xl font-bold text-foreground mb-4">
                  Find Your Next{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Great Read
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Search through millions of books and discover your next favorite story. Explore by title, author, or
                  genre.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-2xl">📖</span> Millions of books
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-2xl">⭐</span> Instant results
                  </div>
                </div>
              </div>
              {/* SVG Illustration */}
              <div className="flex justify-center">
                <svg viewBox="0 0 400 400" className="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Person reading */}
                  <g>
                    {/* Head */}
                    <circle cx="200" cy="100" r="35" fill="#f4a460" />
                    {/* Hair */}
                    <path d="M 165 100 Q 165 65 200 65 Q 235 65 235 100" fill="#2c2c2c" />
                    {/* Body */}
                    <rect x="175" y="140" width="50" height="80" rx="10" fill="#dc143c" />
                    {/* Arms */}
                    <rect
                      x="140"
                      y="150"
                      width="35"
                      height="20"
                      rx="10"
                      fill="#f4a460"
                      transform="rotate(-30 157.5 160)"
                    />
                    <rect
                      x="225"
                      y="150"
                      width="35"
                      height="20"
                      rx="10"
                      fill="#f4a460"
                      transform="rotate(30 242.5 160)"
                    />
                    {/* Legs */}
                    <rect x="180" y="220" width="15" height="60" rx="7" fill="#1a1a1a" />
                    <rect x="205" y="220" width="15" height="60" rx="7" fill="#1a1a1a" />
                    {/* Shoes */}
                    <ellipse cx="187.5" cy="285" rx="12" ry="8" fill="#333" />
                    <ellipse cx="212.5" cy="285" rx="12" ry="8" fill="#333" />
                  </g>
                  {/* Book */}
                  <g>
                    {/* Book cover - left page */}
                    <rect
                      x="100"
                      y="120"
                      width="80"
                      height="120"
                      rx="5"
                      fill="#f4d03f"
                      stroke="#d4a017"
                      strokeWidth="2"
                    />
                    {/* Book cover - right page */}
                    <rect
                      x="180"
                      y="120"
                      width="80"
                      height="120"
                      rx="5"
                      fill="#f9e79f"
                      stroke="#d4a017"
                      strokeWidth="2"
                    />
                    {/* Book spine */}
                    <rect x="175" y="120" width="10" height="120" fill="#d4a017" />
                    {/* Book text decoration */}
                    <text x="140" y="160" fontSize="14" fill="#8b4513" fontWeight="bold" textAnchor="middle">
                      BOOK
                    </text>
                    <line x1="110" y1="180" x2="170" y2="180" stroke="#8b4513" strokeWidth="1" />
                    <line x1="110" y1="190" x2="170" y2="190" stroke="#8b4513" strokeWidth="1" />
                    <line x1="110" y1="200" x2="170" y2="200" stroke="#8b4513" strokeWidth="1" />
                    <line x1="110" y1="210" x2="160" y2="210" stroke="#8b4513" strokeWidth="1" />
                  </g>
                  {/* Decorative elements */}
                  <circle cx="80" cy="80" r="8" fill="#ff69b4" opacity="0.6" />
                  <circle cx="320" cy="150" r="6" fill="#87ceeb" opacity="0.6" />
                  <circle cx="350" cy="280" r="7" fill="#dda0dd" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <div className="animate-fade-in-up mb-16">
          <SearchBar onSearch={handleSearch} isLoading={loading} />
        </div>

        {/* Results Section */}
        {loading && (
          <div className="animate-fade-in flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-3 border-purple-300 border-t-purple-600 rounded-full mb-4 animate-spin" />
            <p className="text-purple-600/70 font-medium">Searching for books...</p>
          </div>
        )}

        {error && !loading && (
          <div className="animate-fade-in bg-red-100/50 border border-red-300 rounded-xl p-4 mb-8">
            <p className="text-red-700 font-medium">⚠️ {error}</p>
          </div>
        )}

        {searched && !loading && books.length === 0 && !error && (
          <div className="animate-fade-in text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-muted-foreground text-lg">No results found</p>
            <p className="text-muted-foreground/70 text-sm mt-2">Try searching with different keywords</p>
          </div>
        )}

        {books.length > 0 && !loading && (
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-8 font-medium">
              Found <span className="text-purple-600 font-semibold">{books.length}</span> book
              {books.length !== 1 ? "s" : ""}
            </p>
            <BookGrid books={books} onSelectBook={handleSelectBook} />
          </div>
        )}
      </main>

      <BookDetail book={selectedBook} isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} />

      <footer className="border-t border-purple-200/40 mt-20 py-12 bg-gradient-to-t from-purple-100/20 to-transparent relative z-10">
        <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">📚 Book Finder by Kusum Kharayat</p>
        </div>
      </footer>
    </div>
  )
}
