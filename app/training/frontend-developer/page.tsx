import Link from 'next/link'
import { CheckCircle, Clock, Users, Star, PlayCircle, Download, Code, Zap } from 'lucide-react'
import ProgressTracker from '@/components/ProgressTracker'

export default function FrontendDeveloperPage() {
  const modules = [
    {
      week: 1,
      title: 'HTML Semántico y Accesibilidad',
      lessons: [
        'Estructura HTML moderna',
        'Elementos semánticos',
        'Accesibilidad web (a11y)',
        'SEO básico'
      ],
      project: 'Landing page responsive',
      duration: '6 horas'
    },
    {
      week: 2,
      title: 'CSS Moderno y Responsive Design',
      lessons: [
        'Flexbox mastery',
        'CSS Grid layout',
        'Variables CSS',
        'Mobile-first design'
      ],
      project: 'Portfolio responsive',
      duration: '8 horas'
    },
    {
      week: 3,
      title: 'JavaScript Fundamentals',
      lessons: [
        'ES6+ sintaxis',
        'DOM manipulation',
        'Event handling',
        'Async/await y Promises'
      ],
      project: 'Calculadora interactiva',
      duration: '10 horas'
    },
    {
      week: 4,
      title: 'JavaScript Avanzado',
      lessons: [
        'Closures y scope',
        'Prototypes y clases',
        'Modules ES6',
        'Error handling'
      ],
      project: 'App de tareas',
      duration: '12 horas'
    },
    {
      week: 5,
      title: 'APIs y Fetch',
      lessons: [
        'REST APIs',
        'Fetch API',
        'JSON handling',
        'Error management'
      ],
      project: 'Weather app',
      duration: '8 horas'
    },
    {
      week: 6,
      title: 'React Foundations',
      lessons: [
        'Components y JSX',
        'Props y State',
        'Event handling',
        'Conditional rendering'
      ],
      project: 'Counter app',
      duration: '10 horas'
    },
    {
      week: 7,
      title: 'React Hooks',
      lessons: [
        'useState y useEffect',
        'Custom hooks',
        'useContext',
        'useReducer'
      ],
      project: 'Todo app avanzada',
      duration: '12 horas'
    },
    {
      week: 8,
      title: 'React Router y State Management',
      lessons: [
        'React Router v6',
        'Global state',
        'Context API',
        'State patterns'
      ],
      project: 'Multi-page app',
      duration: '10 horas'
    },
    {
      week: 9,
      title: 'TypeScript para React',
      lessons: [
        'Types básicos',
        'Interfaces',
        'Generic types',
        'React con TypeScript'
      ],
      project: 'Typed React app',
      duration: '8 horas'
    },
    {
      week: 10,
      title: 'Next.js Fundamentals',
      lessons: [
        'App Router',
        'Server components',
        'Static generation',
        'API routes'
      ],
      project: 'Blog con Next.js',
      duration: '10 horas'
    },
    {
      week: 11,
      title: 'Testing y Deployment',
      lessons: [
        'Jest testing',
        'React Testing Library',
        'E2E con Playwright',
        'CI/CD basics'
      ],
      project: 'App con tests',
      duration: '8 horas'
    },
    {
      week: 12,
      title: 'Proyecto Final',
      lessons: [
        'Planning y arquitectura',
        'Development sprint',
        'Code review',
        'Deployment'
      ],
      project: 'Portfolio completo',
      duration: '20 horas'
    }
  ]

  const prerequisites = [
    'Conocimientos básicos de computación',
    'Ganas de aprender y practicar',
    'Dedicar 10-15 horas por semana',
    'Tener una computadora con internet'
  ]

  const outcomes = [
    'Crear aplicaciones web modernas con React',
    'Dominar HTML, CSS y JavaScript',
    'Implementar responsive design',
    'Trabajar con APIs y datos dinámicos',
    'Usar TypeScript para código más robusto',
    'Deployar aplicaciones en producción',
    'Preparación para entrevistas frontend',
    'Portfolio profesional completo'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Frontend Developer
                  </h1>
                  <p className="text-blue-100">De cero a React Developer profesional</p>
                </div>
              </div>

              <p className="text-xl text-blue-100 mb-6">
                Conviértete en Frontend Developer en 12 semanas. Aprende HTML, CSS, JavaScript, 
                React, TypeScript y Next.js con proyectos reales que podrás mostrar en tu portfolio.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>12 semanas</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>3,200+ estudiantes</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  <span>8 proyectos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Comenzar Gratis
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Ver Temario Completo
                </button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Stack Tecnológico</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    HTML5
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                    CSS3
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    JavaScript ES6+
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></div>
                    React 18
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    TypeScript
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full mr-2"></div>
                    Next.js 14
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Outcomes */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué necesitas para empezar?
              </h2>
              <div className="space-y-4">
                {prerequisites.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Lo que lograrás al completar la serie
              </h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Curriculum Detallado
            </h2>
            <p className="text-xl text-gray-600">
              12 semanas de contenido estructurado con proyectos prácticos
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-4">
                        {module.week}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {module.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {module.duration}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Ver Detalles
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-medium text-gray-900 mb-3">Lecciones:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {module.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Proyecto:</h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Code className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium text-blue-900">{module.project}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para convertirte en Frontend Developer?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 3,200 estudiantes que ya han transformado su carrera 
            con nuestra serie de entrenamiento más popular.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              <PlayCircle className="h-6 w-6 mr-2" />
              Comenzar Gratis Ahora
            </button>
            <Link href="/ebook" className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
              <Download className="h-6 w-6 mr-2" />
              Descargar Ebook Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
