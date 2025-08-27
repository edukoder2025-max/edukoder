import { Download, Star, CheckCircle, Users, Clock, Shield } from 'lucide-react'

export default function EbookPage() {
  const benefits = [
    'Fundamentos sólidos de JavaScript, TypeScript y PHP',
    'Proyectos prácticos con código fuente completo',
    'Guía paso a paso para tu primer empleo tech',
    'Estrategias de pricing para trabajos freelance',
    'Templates profesionales de CV y portfolio',
    'Acceso a comunidad privada de Discord',
    'Actualizaciones automáticas del contenido',
    'Garantía de reembolso de 30 días',
  ]

  const testimonials = [
    {
      name: 'Carlos Rodriguez',
      role: 'Frontend Developer en Spotify',
      content: 'Gracias a este ebook conseguí mi primer trabajo tech en solo 3 meses. Los proyectos prácticos fueron clave.',
      rating: 5,
    },
    {
      name: 'Ana Martinez',
      role: 'Freelance Full Stack',
      content: 'La guía de pricing me ayudó a triplicar mis tarifas. Ahora cobro lo que realmente vale mi trabajo.',
      rating: 5,
    },
    {
      name: 'Miguel Torres',
      role: 'Backend Developer',
      content: 'El contenido está actualizado y es muy práctico. Lo recomiendo a cualquiera que quiera entrar al mundo tech.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Guía Completa del{' '}
                <span className="text-yellow-300">Programador Moderno</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                El ebook más completo para aprender programación y conseguir tu primer empleo tech. 
                Actualizado automáticamente con IA.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  <span>2,500+ lectores</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 mr-2 text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  <span>300+ páginas</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg">
                  <Download className="h-6 w-6 mr-2" />
                  Descargar Ahora - $29
                </button>
                
                <button className="inline-flex items-center border-2 border-gray-300 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
                  Vista Previa Gratis
                </button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-20 h-24 bg-gradient-to-b from-primary-600 to-primary-700 rounded mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Edición 2024
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Actualizada con IA
                    </p>
                    <div className="text-3xl font-bold text-primary-600 mb-2">$29</div>
                    <div className="text-lg text-gray-500 line-through">$49</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué vas a conseguir?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No es solo un ebook, es tu roadmap completo hacia una carrera exitosa en tecnología
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros lectores
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="section-container">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Garantía de 30 días
            </h3>
            <p className="text-green-700">
              Si no estás completamente satisfecho con el contenido, 
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Empieza tu carrera tech hoy mismo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Miles de desarrolladores ya han transformado su carrera. 
            ¿Cuándo será tu turno?
          </p>
          
          <button className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg">
            <Download className="h-6 w-6 mr-2" />
            Descargar Ahora - $29
          </button>
        </div>
      </section>
    </div>
  )
}
