import Link from 'next/link'
import { CheckCircle, Clock, Users, Star, PlayCircle, Download, Briefcase, TrendingUp } from 'lucide-react'

export default function CareerDevelopmentPage() {
  const modules = [
    {
      week: 1,
      title: 'CV Técnico Optimizado',
      lessons: [
        'Estructura ATS-friendly',
        'Keywords por tecnología',
        'Sección de proyectos destacados',
        'Formato visual profesional'
      ],
      project: 'Tu CV técnico perfecto',
      duration: '6 horas'
    },
    {
      week: 2,
      title: 'Portfolio que Convierte',
      lessons: [
        'Arquitectura de portfolio',
        'Casos de estudio efectivos',
        'GitHub profile optimization',
        'Hosting y dominio profesional'
      ],
      project: 'Portfolio en GitHub Pages',
      duration: '8 horas'
    },
    {
      week: 3,
      title: 'LinkedIn para Developers',
      lessons: [
        'Perfil optimizado',
        'Networking estratégico',
        'Content marketing',
        'Personal branding'
      ],
      project: 'Perfil LinkedIn optimizado',
      duration: '5 horas'
    },
    {
      week: 4,
      title: 'Job Search Strategy',
      lessons: [
        'Dónde buscar empleos tech',
        'Aplicación estratégica',
        'Follow-up efectivo',
        'Salary research'
      ],
      project: 'Plan de búsqueda personalizado',
      duration: '6 horas'
    },
    {
      week: 5,
      title: 'Preparación de Entrevistas',
      lessons: [
        'Entrevistas técnicas',
        'Behavioral questions',
        'System design basics',
        'Presentación de proyectos'
      ],
      project: 'Mock interviews grabadas',
      duration: '10 horas'
    },
    {
      week: 6,
      title: 'Negociación y Career Growth',
      lessons: [
        'Salary negotiation',
        'Benefits package',
        'Career progression',
        'Freelance vs Full-time'
      ],
      project: 'Estrategia de crecimiento',
      duration: '5 horas'
    }
  ]

  const prerequisites = [
    'Conocimientos básicos de programación',
    'Al menos 2-3 proyectos personales',
    'Ganas de conseguir tu primer empleo tech',
    'Tiempo para práctica de entrevistas'
  ]

  const outcomes = [
    'CV que pase sistemas ATS y llame la atención',
    'Portfolio profesional que genere entrevistas',
    'Perfil LinkedIn optimizado para recruiters',
    'Estrategia de búsqueda de empleo efectiva',
    'Preparación completa para entrevistas técnicas',
    'Habilidades de negociación salarial',
    'Network profesional en la industria tech',
    'Plan de crecimiento profesional a largo plazo'
  ]

  const successStats = [
    { label: 'Empleos Conseguidos', value: '2,500+' },
    { label: 'Tiempo Promedio', value: '6 semanas' },
    { label: 'Incremento Salarial', value: '45%' },
    { label: 'Tasa de Éxito', value: '87%' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Desarrollo de Carrera
                  </h1>
                  <p className="text-green-100">Tu primer empleo tech garantizado</p>
                </div>
              </div>

              <p className="text-xl text-green-100 mb-6">
                Estrategias probadas para conseguir tu primer trabajo tech. CV optimizado, 
                portfolio que convierte, preparación de entrevistas y negociación salarial.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>6 semanas</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>5,800+ estudiantes</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <span>87% consegue empleo</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Comenzar Gratis
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-6">Resultados Garantizados</h3>
                <div className="grid grid-cols-2 gap-4">
                  {successStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-yellow-300 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-green-100">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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
                    <Briefcase className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historias de Éxito Reales
            </h2>
            <p className="text-xl text-gray-600">
              Desarrolladores que transformaron su carrera siguiendo esta serie
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mr-4">
                  👩‍💻
                </div>
                <div>
                  <div className="font-semibold text-gray-900">María González</div>
                  <div className="text-sm text-gray-500">Frontend Developer en Spotify</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Siguiendo esta guía conseguí 8 entrevistas en 2 semanas. Mi salario inicial 
                fue 40% más alto de lo que esperaba. El mock interview fue clave."
              </p>
              <div className="text-sm text-green-600 font-medium">
                De estudiante a $45k/año en 6 semanas
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mr-4">
                  👨‍💻
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                  <div className="text-sm text-gray-500">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Mi portfolio anterior era terrible. Con las estrategias de esta serie, 
                ahora los recruiters me contactan a mí. Conseguí 3 ofertas simultáneas."
              </p>
              <div className="text-sm text-green-600 font-medium">
                De freelancer a $52k/año en startup
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mr-4">
                  👩‍🔧
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Torres</div>
                  <div className="text-sm text-gray-500">DevOps Engineer en AWS</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Las técnicas de entrevista cambiaron todo. Pasé de nervioso a confiado. 
                Ahora trabajo en mi empresa soñada y gano el doble que en mi trabajo anterior."
              </p>
              <div className="text-sm text-green-600 font-medium">
                Cambio de carrera: de marketing a tech
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
              Roadmap de 6 Semanas
            </h2>
            <p className="text-xl text-gray-600">
              Plan estructurado para conseguir tu primer empleo tech
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold mr-4">
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
                    <button className="text-green-600 hover:text-green-700 font-medium">
                      Ver Detalles
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-medium text-gray-900 mb-3">Lecciones:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {module.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Entregable:</h4>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Briefcase className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium text-green-900">{module.project}</span>
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

      {/* Guarantee */}
      <section className="py-16 bg-green-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Garantía de Empleo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Si sigues el programa completo y no consigues al menos 3 entrevistas 
              en 8 semanas, te devolvemos tu dinero.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">📋</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sigue el Plan</h3>
                  <p className="text-sm text-gray-600">Completa las 6 semanas según nuestro roadmap</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Aplica Estratégicamente</h3>
                  <p className="text-sm text-gray-600">Usa nuestras técnicas y templates</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💼</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consigue el Empleo</h3>
                  <p className="text-sm text-gray-600">O te devolvemos el 100% de tu inversión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para conseguir tu primer empleo tech?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 5,800 estudiantes que ya han transformado su carrera 
            y están trabajando en las mejores empresas tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
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
