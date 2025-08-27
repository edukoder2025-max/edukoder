'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, TrendingUp } from 'lucide-react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const trendingSearches = [
    'JavaScript variables',
    'React hooks',
    'CSS flexbox',
    'TypeScript types',
    'PHP arrays',
    'HTML forms',
    'API fetch',
    'Git commands'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/tutorials?search=${encodeURIComponent(searchTerm.trim())}`)
      setIsOpen(false)
    }
  }

  const handleTrendingClick = (term: string) => {
    setSearchTerm(term)
    router.push(`/tutorials?search=${encodeURIComponent(term)}`)
    setIsOpen(false)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            placeholder="Buscar tutoriales... (ej: JavaScript, React, CSS)"
            className="w-full pl-12 pr-4 py-4 text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-colors shadow-lg"
          />
        </div>
      </form>

      {/* Trending Searches Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <TrendingUp className="h-4 w-4 mr-2" />
              Búsquedas populares
            </div>
            <div className="space-y-2">
              {trendingSearches.map((term, index) => (
                <button
                  key={index}
                  onClick={() => handleTrendingClick(term)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
