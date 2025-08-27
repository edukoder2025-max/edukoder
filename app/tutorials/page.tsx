import Link from 'next/link'
import { Search, Filter, Clock, ArrowRight } from 'lucide-react'

export default function TutorialsPage() {
  const categories = ['Todos', 'JavaScript', 'TypeScript', 'React', 'PHP', 'CSS', 'HTML']
  const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado']

  const tutorials = [
    {
      id: 1,
      title: 'Variables en JavaScript: let, const, var',
      description: 'Aprende las diferencias y cuándo usar cada tipo de variable',
      duration: '4 min',
      level: 'Principiante',
      category: 'JavaScript',
      views: '12.5k',
    },
    {
      id: 2,
      title: 'Arrow Functions vs Function Declaration',
      description: 'Comprende las diferencias sintácticas y de comportamiento',
      duration: '6 min',
      level: 'Intermedio',
      category: 'JavaScript',
      views: '8.3k',
    },
    {
      id: 3,
      title: 'Tipos de datos en TypeScript',
      description: 'Explora los tipos básicos y avanzados de TypeScript',
      duration: '5 min',
      level: 'Principiante',
      category: 'TypeScript',
      views: '9.7k',
    },
    // Add more tutorials as needed
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="section-container py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Microtutoriales de Programación
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Aprende conceptos específicos en pocos minutos. Cada tutorial está diseñado 
            para enseñarte una sola cosa de manera clara y práctica.
          </p>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tutorial.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded">
                      {tutorial.level}
                    </span>
                    <span>{tutorial.views} vistas</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Cargar Más Tutoriales
          </button>
        </div>
      </div>
    </div>
  )
}
