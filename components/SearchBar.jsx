"use client"

import { useState } from "react"

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-3 gradient-border rounded-2xl p-1 bg-card animate-fade-in-up">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search by book title..."
          disabled={isLoading}
          className="flex-1 px-6 py-4 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all mr-1 hover:scale-105 active:scale-95"
        >
          {isLoading ? <span className="animate-pulse">Searching...</span> : "Search"}
        </button>
      </div>
    </form>
  )
}
