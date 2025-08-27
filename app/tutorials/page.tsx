'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Filter, Clock, ArrowRight, Code2, Eye, Users } from 'lucide-react'

interface Tutorial {
  id: number
  title: string
  description: string
  duration: string
  level: string
  category: string
  views: string
  author?: string
}

export default function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedLevel, setSelectedLevel] = useState('Todos')
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const categories = ['Todos', 'JavaScript', 'TypeScript', 'React', 'PHP', 'CSS', 'HTML', 'Laravel', 'Next.js']
  const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado']

  // Mock tutorials data - in real app would come from API
  const allTutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Variables en JavaScript: let, const, var',
      description: 'Aprende las diferencias fundamentales entre let, const y var en JavaScript',
      duration: '4 min',
      level: 'Principiante',
      category: 'JavaScript',
      views: '12.5k',
      author: 'CodeMentor Pro'
    },
    {
      id: 2,
      title: 'Arrow Functions vs Function Declaration',
      description: 'Comprende las diferencias sintácticas y de comportamiento entre arrow functions y declaraciones',
      duration: '6 min',
      level: 'Intermedio',
      category: 'JavaScript',
      views: '8.3k',
      author: 'CodeMentor Pro'
    },
    {
      id: 3,
      title: 'Tipos de datos en TypeScript',
      description: 'Explora los tipos básicos y avanzados que ofrece TypeScript para código más robusto',
      duration: '5 min',
      level: 'Principiante',
      category: 'TypeScript',
      views: '9.7k',
      author: 'CodeMentor Pro'
    },
    {
      id: 4,
      title: 'useEffect Hook en React',
      description: 'Domina el hook useEffect para efectos secundarios y ciclo de vida en componentes',
      duration: '8 min',
      level: 'Intermedio',
      category: 'React',
      views: '15.2k',
      author: 'CodeMentor Pro'
    },
    {
      id: 5,
      title: 'CSS Grid Layout Completo',
      description: 'Crea layouts modernos y responsive usando CSS Grid de forma efectiva',
      duration: '7 min',
      level: 'Intermedio',
      category: 'CSS',
      views: '11.8k',
      author: 'CodeMentor Pro'
    },
    {
      id: 6,
      title: 'PHP Orientado a Objetos Básico',
      description: 'Fundamentos de POO en PHP: clases, objetos, herencia y encapsulación',
      duration: '10 min',
      level: 'Principiante',
      category: 'PHP',
      views: '7.9k',
      author: 'CodeMentor Pro'
    },
    {
      id: 7,
      title: 'HTML Semántico y Accesibilidad',
      description: 'Escribe HTML más accesible usando elementos semánticos correctamente',
      duration: '6 min',
      level: 'Principiante',
      category: 'HTML',
      views: '13.4k',
      author: 'CodeMentor Pro'
    },
    {
      id: 8,
      title: 'Laravel Eloquent Relationships',
      description: 'Maneja relaciones entre modelos en Laravel usando Eloquent ORM',
      duration: '12 min',
      level: 'Avanzado',
      category: 'Laravel',
      views: '6.1k',
      author: 'CodeMentor Pro'
    },
    {
      id: 9,
      title: 'Next.js App Router Fundamentals',
      description: 'Aprende el nuevo App Router de Next.js 13+ con ejemplos prácticos',
      duration: '9 min',
      level: 'Intermedio',
      category: 'Next.js',
      views: '14.7k',
      author: 'CodeMentor Pro'
    },
    {
      id: 10,
      title: 'TypeScript Generics Explicados',
      description: 'Domina los tipos genéricos en TypeScript para código más flexible',
      duration: '11 min',
      level: 'Avanzado',
      category: 'TypeScript',
      views: '5.8k',
      author: 'CodeMentor Pro'
    },
    {
      id: 11,
      title: 'React Custom Hooks',
      description: 'Crea tus propios hooks personalizados para reutilizar lógica en React',
      duration: '8 min',
      level: 'Avanzado',
      category: 'React',
      views: '10.3k',
      author: 'CodeMentor Pro'
    },
    {
      id: 12,
      title: 'CSS Flexbox Masterclass',
      description: 'Todo lo que necesitas saber sobre Flexbox para layouts modernos',
      duration: '9 min',
      level: 'Intermedio',
      category: 'CSS',
      views: '16.9k',
      author: 'CodeMentor Pro'
    }
  ]

  // Filter tutorials based on search and filters
  useEffect(() => {
    setIsLoading(true)
    
    // Simulate API delay
    const timer = setTimeout(() => {
      let filtered = allTutorials

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(tutorial =>
          tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      // Filter by category
      if (selectedCategory !== 'Todos') {
        filtered = filtered.filter(tutorial => tutorial.category === selectedCategory)
      }

      // Filter by level
      if (selectedLevel !== 'Todos') {
        filtered = filtered.filter(tutorial => tutorial.level === selectedLevel)
      }

      setFilteredTutorials(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory, selectedLevel])

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('Todos')
    setSelectedLevel('Todos')
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'React': 'bg-cyan-100 text-cyan-800',
      'PHP': 'bg-purple-100 text-purple-800',
      'CSS': 'bg-pink-100 text-pink-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'Laravel': 'bg-red-100 text-red-800',
      'Next.js': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Principiante': 'bg-green-100 text-green-800',
      'Intermedio': 'bg-yellow-100 text-yellow-800',
      'Avanzado': 'bg-red-100 text-red-800'
    }
    return colors[level] || 'bg-gray-100 text-gray-800'
  }

  const activeFiltersCount = [
    searchTerm ? 1 : 0,
    selectedCategory !== 'Todos' ? 1 : 0,
    selectedLevel !== 'Todos' ? 1 : 0
  ].reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="section-container py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Microtutoriales de Programación
              </h1>
              <p className="text-lg text-gray-600">
                {filteredTutorials.length} tutoriales disponibles
              </p>
            </div>
            
            {activeFiltersCount > 0 && (
              <button
                onClick={handleClearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Limpiar filtros ({activeFiltersCount})
              </button>
            )}
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Aprende conceptos específicos en pocos minutos. Cada tutorial está diseñado 
            para enseñarte una sola cosa de manera clara y práctica.
          </p>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar tutoriales..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel
              </label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Filter Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filtros rápidos:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-100 border-primary-300 text-primary-800'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <span className="ml-3 text-gray-600">Buscando tutoriales...</span>
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No encontramos tutoriales
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otros términos de búsqueda o filtros diferentes
            </p>
            <button
              onClick={handleClearFilters}
              className="btn-primary"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Tutorials Grid */}
        {!isLoading && filteredTutorials.length > 0 && (
          <>
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {filteredTutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer group h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(tutorial.category)}`}>
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {tutorial.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {tutorial.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className={`px-2 py-1 rounded ${getLevelColor(tutorial.level)}`}>
                          {tutorial.level}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {tutorial.views}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="btn-primary">
                Cargar Más Tutoriales
              </button>
            </div>
          </>
        )}

        {/* Popular Categories */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Categorías Populares
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', count: '150+', icon: '⚡', color: 'from-yellow-400 to-yellow-500' },
              { name: 'React', count: '80+', icon: '⚛️', color: 'from-cyan-400 to-cyan-500' },
              { name: 'TypeScript', count: '60+', icon: '🔷', color: 'from-blue-400 to-blue-500' },
              { name: 'PHP', count: '90+', icon: '🐘', color: 'from-purple-400 to-purple-500' }
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className="group text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-xl mb-3`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} tutoriales
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
