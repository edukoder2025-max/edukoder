import Link from 'next/link'
import { CheckCircle, Clock, Users, Star, PlayCircle, Download, Database, Server } from 'lucide-react'

export default function BackendDeveloperPage() {
  const modules = [
    {
      week: 1,
      title: 'PHP Orientado a Objetos',
      lessons: [
        'Classes y Objects',
        'Herencia y Polimorfismo',
        'Traits y Interfaces',
        'Namespaces y Autoloading'
      ],
      project: 'Sistema de usuarios OOP',
      duration: '8 horas'
    },
    {
      week: 2,
      title: 'Laravel Fundamentals',
      lessons: [
        'MVC Architecture',
        'Routing y Controllers',
        'Blade Templates',
        'Middleware'
      ],
      project: 'Blog básico con Laravel',
      duration: '10 horas'
    },
    {
      week: 3,
      title: 'Base de Datos y Eloquent',
      lessons: [
        'Migrations y Schema',
        'Eloquent ORM',
        'Relationships',
        'Query Builder'
      ],
      project: 'Sistema de posts y comentarios',
      duration: '10 horas'
    },
    {
      week: 4,
      title: 'APIs REST',
      lessons: [
        'API Routes',
        'Resource Controllers',
        'JSON Responses',
        'Status Codes'
      ],
      project: 'API RESTful completa',
      duration: '12 horas'
    },
    {
      week: 5,
      title: 'Autenticación y Autorización',
      lessons: [
        'Laravel Sanctum',
        'JWT Tokens',
        'Roles y Permisos',
        'Rate Limiting'
      ],
      project: 'Sistema de auth con roles',
      duration: '10 horas'
    },
    {
      week: 6,
      title: 'Testing y Documentación',
      lessons: [
        'PHPUnit Testing',
        'Feature Tests',
        'API Documentation',
        'Postman Collections'
      ],
      project: 'API con tests completos',
      duration: '8 horas'
    },
    {
      week: 7,
      title: 'Optimización y Performance',
      lessons: [
        'Database Indexing',
        'Caching Strategies',
        'Queue Jobs',
        'N+1 Query Problem'
      ],
      project: 'API optimizada y escalable',
      duration: '10 horas'
    },
    {
      week: 8,
      title: 'Docker y Deployment',
      lessons: [
        'Docker Containers',
        'Docker Compose',
        'Production Setup',
        'CI/CD Pipeline'
      ],
      project: 'App containerizada',
      duration: '12 horas'
    },
    {
      week: 9,
      title: 'GraphQL y APIs Avanzadas',
      lessons: [
        'GraphQL Basics',
        'Lighthouse PHP',
        'Schema Design',
        'Resolvers'
      ],
      project: 'GraphQL API',
      duration: '10 horas'
    },
    {
      week: 10,
      title: 'Proyecto Final',
      lessons: [
        'E-commerce Backend',
        'Payment Integration',
        'Email Notifications',
        'Admin Dashboard'
      ],
      project: 'E-commerce completo',
      duration: '20 horas'
    }
  ]

  const prerequisites = [
    'Conocimientos básicos de PHP',
    'Familiaridad con HTML y CSS',
    'Entender conceptos de base de datos',
    'Tener Composer y PHP 8+ instalado'
  ]

  const outcomes = [
    'Crear APIs REST robustas con Laravel',
    'Implementar autenticación y autorización',
    'Manejar bases de datos con Eloquent ORM',
    'Escribir tests automatizados',
    'Optimizar performance de aplicaciones',
    'Deployar aplicaciones en producción',
    'Trabajar con Docker y containerización',
    'Preparación para roles de Backend Developer'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Backend Developer
                  </h1>
                  <p className="text-purple-100">APIs robustas y escalables</p>
                </div>
              </div>

              <p className="text-xl text-purple-100 mb-6">
                Domina el desarrollo backend con PHP y Laravel. Aprende a crear APIs REST, 
                manejar bases de datos, implementar autenticación y deployar aplicaciones escalables.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>10 semanas</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>2,100+ estudiantes</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>4.8/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  <span>6 proyectos API</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Comenzar Gratis
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Ver Temario Completo
                </button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Stack Tecnológico</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                    PHP 8+
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    Laravel 10
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                    MySQL/PostgreSQL
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    Docker
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    Redis
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-2"></div>
                    GraphQL
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
                    <Server className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
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
              10 semanas intensivas de desarrollo backend con Laravel
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold mr-4">
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
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Ver Detalles
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-medium text-gray-900 mb-3">Lecciones:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {module.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Proyecto:</h4>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Database className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="font-medium text-purple-900">{module.project}</span>
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
      <section className="py-16 bg-purple-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para dominar el Backend?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 2,100 estudiantes que ya dominan el desarrollo backend 
            y están trabajando en empresas top.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
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
