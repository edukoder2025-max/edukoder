import Link from 'next/link'
import { ArrowRight, Clock, Users, BookOpen, CheckCircle, Star, PlayCircle } from 'lucide-react'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function TrainingPage() {
  const trainingSeries = [
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      subtitle: 'De cero a React Developer profesional',
      description: 'Ruta completa desde HTML básico hasta aplicaciones React avanzadas. Incluye proyectos reales y preparación para entrevistas.',
      image: '🎨',
      duration: '12 semanas',
      level: 'Principiante a Intermedio',
      students: '3,200+',
      rating: 4.9,
      price: 'Gratis',
      modules: [
        'HTML semántico y accesibilidad',
        'CSS moderno (Grid, Flexbox, Variables)',
        'JavaScript ES6+ y APIs',
        'React Hooks y Context',
        'TypeScript fundamentals',
        'Next.js y SSR',
        'Testing con Jest',
        'Deployment y CI/CD'
      ],
      projects: [
        'Landing page responsive',
        'Calculadora JavaScript',
        'App de tareas con React',
        'Portfolio profesional'
      ],
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Ideal para comenzar tu carrera tech',
      outcomes: [
        'Crear apps React profesionales',
        'Dominar JavaScript moderno',
        'Manejar APIs y estado global',
        'Deployar en producción'
      ]
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      subtitle: 'APIs robustas y escalables',
      description: 'Aprende a crear APIs REST, manejar bases de datos y implementar autenticación. Desde PHP básico hasta arquitectura de microservicios.',
      image: '⚙️',
      duration: '10 semanas',
      level: 'Intermedio',
      students: '2,100+',
      rating: 4.8,
      price: 'Gratis',
      modules: [
        'PHP orientado a objetos',
        'Laravel framework',
        'APIs REST y GraphQL',
        'Base de datos y ORM',
        'Autenticación JWT',
        'Testing y documentación',
        'Docker y contenedores',
        'Deployment y monitoreo'
      ],
      projects: [
        'API de blog',
        'Sistema de autenticación',
        'E-commerce backend',
        'Microservicio de notificaciones'
      ],
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Requiere conocimientos básicos de programación',
      outcomes: [
        'Crear APIs REST escalables',
        'Manejar autenticación/autorización',
        'Optimizar performance de BD',
        'Implementar arquitectura limpia'
      ]
    },
    {
      id: 'career-development',
      title: 'Desarrollo de Carrera',
      subtitle: 'Tu primer empleo tech garantizado',
      description: 'Estrategias probadas para conseguir tu primer trabajo tech. CV, portfolio, entrevistas y negociación salarial.',
      image: '🚀',
      duration: '6 semanas',
      level: 'Todos los niveles',
      students: '5,800+',
      rating: 4.9,
      price: 'Gratis',
      modules: [
        'CV técnico optimizado',
        'Portfolio que convierte',
        'LinkedIn para developers',
        'Preparación de entrevistas',
        'Coding challenges',
        'Negociación salarial',
        'Freelancing y rates',
        'Networking efectivo'
      ],
      projects: [
        'CV ATS-friendly',
        'Portfolio en GitHub Pages',
        'Perfil LinkedIn optimizado',
        'Mock interviews grabadas'
      ],
      color: 'from-green-500 to-teal-500',
      difficulty: 'Perfecto para cambio de carrera',
      outcomes: [
        'CV que genere entrevistas',
        'Portfolio profesional',
        'Acing technical interviews',
        'Negociar salario efectivamente'
      ]
    }
  ]

  const learningPaths = [
    {
      title: 'Completo Principiante',
      description: 'Sin experiencia previa en programación',
      path: ['career-development', 'frontend-developer', 'backend-developer'],
      duration: '6 meses',
      outcome: 'Full Stack Developer'
    },
    {
      title: 'Tengo Conocimientos Básicos',
      description: 'Conozco HTML/CSS, algo de JavaScript',
      path: ['frontend-developer', 'backend-developer'],
      duration: '4 meses',
      outcome: 'Full Stack Developer'
    },
    {
      title: 'Busco Mi Primer Empleo',
      description: 'Sé programar pero no consigo trabajo',
      path: ['career-development', 'frontend-developer'],
      duration: '3 meses',
      outcome: 'Primer empleo tech'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Series de{' '}
              <span className="text-yellow-300">Entrenamiento</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Rutas estructuradas de aprendizaje que te llevarán desde principiante 
              hasta conseguir tu primer empleo tech en tiempo récord.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg mb-8">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                <span>11,000+ estudiantes</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-300" />
                <span>4.9/5 rating promedio</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-green-300" />
                <span>85% consigue empleo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Cuál es tu situación actual?
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra la ruta de aprendizaje perfecta para ti
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border-2 border-transparent hover:border-primary-200 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {path.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {path.path.map((seriesId, idx) => {
                    const series = trainingSeries.find(s => s.id === seriesId)
                    return (
                      <div key={idx} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 bg-gradient-to-r ${series?.color}`}>
                          {idx + 1}
                        </div>
                        <span className="font-medium text-gray-900">
                          {series?.title}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⏱️ {path.duration}</span>
                  <span>🎯 {path.outcome}</span>
                </div>

                <Link 
                  href={`/training/${path.path[0]}`}
                  className="block w-full text-center btn-primary"
                >
                  Comenzar Ruta
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Series */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Todas las Series Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Cada serie incluye proyectos reales y certificado de finalización
            </p>
          </div>

          <div className="space-y-12">
            {trainingSeries.map((series, index) => (
              <div key={series.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:grid lg:grid-cols-5 lg:gap-0">
                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${series.color} rounded-lg flex items-center justify-center text-2xl`}>
                        {series.image}
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {series.title}
                        </h2>
                        <p className="text-gray-600">{series.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-6">
                      {series.description}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{series.duration}</div>
                        <div className="text-sm text-gray-500">Duración</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{series.students}</div>
                        <div className="text-sm text-gray-500">Estudiantes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{series.rating}/5</div>
                        <div className="text-sm text-gray-500">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{series.price}</div>
                        <div className="text-sm text-gray-500">Precio</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                        {series.difficulty}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/training/${series.id}`} className="btn-primary inline-flex items-center justify-center">
                        <PlayCircle className="h-5 w-5 mr-2" />
                        Comenzar Serie
                      </Link>
                      <button className="border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors">
                        Ver Temario Completo
                      </button>
                    </div>
                  </div>

                  {/* Sidebar with details */}
                  <div className="lg:col-span-2 bg-gray-50 p-8 lg:p-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Lo que aprenderás:
                    </h3>
                    <div className="space-y-3 mb-6">
                      {series.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Módulos principales:
                    </h4>
                    <div className="space-y-2 mb-6">
                      {series.modules.slice(0, 4).map((module, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          <span className="text-gray-600 text-sm">{module}</span>
                        </div>
                      ))}
                      {series.modules.length > 4 && (
                        <div className="text-sm text-primary-600 font-medium">
                          +{series.modules.length - 4} módulos más...
                        </div>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Proyectos incluidos:
                    </h4>
                    <div className="space-y-2">
                      {series.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                          <span className="text-gray-600 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup variant="default" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para acelerar tu carrera tech?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya han transformado su vida profesional 
            con nuestras series de entrenamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ebook" className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
              <BookOpen className="h-6 w-6 mr-2" />
              Descargar Ebook Completo
            </Link>
            <Link href="/tutorials" className="inline-flex items-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Explorar Microtutoriales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
