"use client"

import BookCard from "./BookCard"

export default function BookGrid({ books, onSelectBook }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
      {books.map((book, index) => (
        <BookCard key={`${book.key}-${index}`} book={book} index={index} onSelect={onSelectBook} />
      ))}
    </div>
  )
}
