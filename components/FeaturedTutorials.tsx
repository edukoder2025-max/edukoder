import Link from 'next/link'
import { Clock, ArrowRight, Code2 } from 'lucide-react'

export default function FeaturedTutorials() {
  const tutorials = [
    {
      id: 1,
      title: 'Introducción a TypeScript',
      description: 'Aprende los fundamentos de TypeScript en 5 minutos',
      duration: '5 min',
      level: 'Principiante',
      technology: 'TypeScript',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Hooks de React: useState',
      description: 'Domina el hook useState con ejemplos prácticos',
      duration: '7 min',
      level: 'Intermedio',
      technology: 'React',
      color: 'bg-cyan-500',
    },
    {
      id: 3,
      title: 'CSS Grid Layout',
      description: 'Crea layouts modernos con CSS Grid',
      duration: '6 min',
      level: 'Intermedio',
      technology: 'CSS',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'PHP: Conexión a Base de Datos',
      description: 'Conecta PHP con MySQL de forma segura',
      duration: '8 min',
      level: 'Intermedio',
      technology: 'PHP',
      color: 'bg-indigo-500',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Microtutoriales Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende conceptos específicos en pocos minutos con nuestros tutoriales enfocados y prácticos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-card group cursor-pointer">
              <div className={`w-12 h-12 ${tutorial.color} rounded-lg flex items-center justify-center mb-4`}>
                <Code2 className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {tutorial.technology}
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
                <span className="text-xs font-medium text-secondary-600 bg-secondary-50 px-2 py-1 rounded">
                  {tutorial.level}
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tutorials" className="btn-primary inline-flex items-center">
            Ver Todos los Tutoriales
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
