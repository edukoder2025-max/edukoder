import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Briefcase } from 'lucide-react'

export default function TrainingSeries() {
  const series = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Ruta completa desde HTML básico hasta React avanzado',
      modules: ['HTML & CSS', 'JavaScript ES6+', 'React & Next.js', 'TypeScript'],
      students: '3,200+',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Aprende a crear APIs robustas y escalables',
      modules: ['PHP Básico', 'Laravel Framework', 'APIs REST', 'Base de Datos'],
      students: '2,100+',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Carrera Profesional',
      description: 'Guías para conseguir tu primer empleo tech',
      modules: ['CV Profesional', 'Portfolio', 'Entrevistas', 'Negociación'],
      students: '5,800+',
      icon: Briefcase,
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Series de Entrenamiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rutas estructuradas de aprendizaje que te llevarán desde principiante hasta profesional
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {series.map((serie) => {
            const Icon = serie.icon
            return (
              <div key={serie.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className={`h-32 bg-gradient-to-r ${serie.color} flex items-center justify-center`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {serie.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {serie.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Módulos incluidos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {serie.modules.map((module, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {serie.students} estudiantes
                    </div>
                    <Link 
                      href={`/training/${serie.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Ver Serie
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
