import Link from 'next/link'
import { Download, CheckCircle, Users, Star, ArrowRight, FileText, Briefcase, DollarSign, Network } from 'lucide-react'

export default function CareerPage() {
  const careerGuides = [
    {
      id: 'cv-optimization',
      title: 'CV Técnico Optimizado',
      description: 'Crea un CV que pase los sistemas ATS y llame la atención de recruiters tech',
      icon: FileText,
      benefits: [
        'Plantillas ATS-friendly',
        'Keywords específicas por rol',
        'Sección de proyectos destacados',
        'Optimización para LinkedIn'
      ],
      downloadCount: '15,000+',
      rating: 4.9,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'portfolio-development',
      title: 'Portfolio que Convierte',
      description: 'Construye un portfolio que demuestre tus habilidades y consiga entrevistas',
      icon: Briefcase,
      benefits: [
        'Estructura de proyectos efectiva',
        'Casos de estudio detallados',
        'GitHub profile optimization',
        'Hosting y dominio profesional'
      ],
      downloadCount: '12,500+',
      rating: 4.8,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'interview-preparation',
      title: 'Preparación de Entrevistas',
      description: 'Domina las entrevistas técnicas y de comportamiento en empresas tech',
      icon: Users,
      benefits: [
        'Preguntas frecuentes por tecnología',
        'Coding challenges resueltos',
        'Mock interviews grabadas',
        'Técnicas de comunicación'
      ],
      downloadCount: '18,200+',
      rating: 4.9,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'salary-negotiation',
      title: 'Negociación Salarial',
      description: 'Estrategias para negociar salarios y benefits como un profesional',
      icon: DollarSign,
      benefits: [
        'Research de mercado salarial',
        'Scripts de negociación',
        'Timing perfecto para negociar',
        'Benefits más allá del salario'
      ],
      downloadCount: '9,800+',
      rating: 4.7,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const testimonials = [
    {
      name: 'Laura Rodríguez',
      role: 'Frontend Developer en Microsoft',
      content: 'Siguiendo la guía de CV conseguí 8 entrevistas en 2 semanas. Mi salario inicial fue 40% más alto de lo esperado.',
      avatar: '👩‍💻'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Full Stack Developer',
      content: 'El portfolio guide me ayudó a estructurar mis proyectos de forma profesional. Ahora los recruiters me contactan a mí.',
      avatar: '👨‍💻'
    },
    {
      name: 'Ana Torres',
      role: 'DevOps Engineer en AWS',
      content: 'Las técnicas de entrevista fueron game-changer. Pasé de nervioso a confiado en mis technical interviews.',
      avatar: '👩‍🔧'
    }
  ]

  const careerStats = [
    { label: 'Empleos Conseguidos', value: '2,500+' },
    { label: 'Incremento Salarial Promedio', value: '45%' },
    { label: 'Tiempo Promedio de Búsqueda', value: '6 semanas' },
    { label: 'Tasa de Éxito', value: '87%' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Guías de{' '}
              <span className="text-yellow-300">Carrera Tech</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Estrategias probadas para conseguir tu primer empleo tech, 
              negociar salarios y acelerar tu crecimiento profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#guides" className="btn-secondary inline-flex items-center">
                Ver Todas las Guías
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link href="/ebook" className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                Descargar Ebook Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-gray-600">
              Miles de desarrolladores han transformado su carrera con nuestras guías
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guides */}
      <section id="guides" className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Guías Especializadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada guía está diseñada para resolver un aspecto específico de tu desarrollo profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {careerGuides.map((guide) => {
              const Icon = guide.icon
              return (
                <div key={guide.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-4 bg-gradient-to-r ${guide.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${guide.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="mr-3">{guide.rating}/5</span>
                          <span>{guide.downloadCount} descargas</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {guide.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {guide.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary flex-1">
                        Descargar Gratis
                      </button>
                      <button className="border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                        Vista Previa
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Historias de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Desarrolladores reales que transformaron su carrera
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Calculadora de Tarifas Freelance
              </h2>
              <p className="text-xl text-gray-600">
                Herramienta gratuita para calcular tus tarifas como freelancer
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Cuánto deberías cobrar?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Cálculo basado en experiencia</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Ajuste por mercado local</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Comparación con el mercado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Tips de negociación incluidos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Calculadora Interactiva
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Descubre tu tarifa ideal en menos de 2 minutos
                    </p>
                    <button className="btn-secondary w-full">
                      Usar Calculadora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Acelera tu carrera tech hoy mismo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descarga nuestro ebook completo y accede a todas las guías, 
            plantillas y recursos para transformar tu carrera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ebook" className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
              <Download className="h-6 w-6 mr-2" />
              Descargar Ebook - $29
            </Link>
            <Link href="/training" className="inline-flex items-center border-2 border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
              Ver Series de Entrenamiento
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
