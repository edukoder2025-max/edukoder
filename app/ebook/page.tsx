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

      {/* Author Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sobre el Autor
              </h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
                <div className="lg:col-span-1 text-center mb-8 lg:mb-0">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mx-auto flex items-center justify-center text-4xl text-white mb-4">
                    👨‍💻
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">CodeMentor Pro</h3>
                  <p className="text-gray-600">Senior Full Stack Developer</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Con más de 8 años de experiencia en desarrollo web y habiendo trabajado en empresas como
                    Google, Microsoft y startups exitosas, he ayudado a más de 10,000 desarrolladores a
                    conseguir su primer empleo tech.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mi enfoque único combina enseñanza práctica con estrategias profesionales probadas.
                    Este ebook es el resultado de años de experiencia tanto en desarrollo como en
                    contratación de talento tech.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">10,000+</div>
                      <div className="text-sm text-gray-600">Estudiantes Mentoreados</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Desarrolladores Contratados</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">8</div>
                      <div className="text-sm text-gray-600">Años de Experiencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Contenido Siempre Actualizado
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Este ebook utiliza tecnología de vanguardia para mantenerse al día con las últimas tendencias
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Powered by Gemini AI
                </h3>
                <p className="text-gray-600">
                  El contenido se actualiza automáticamente usando Gemini 1.5 Flash para incluir
                  las últimas tendencias y mejores prácticas del desarrollo web.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  GitHub Actions Automation
                </h3>
                <p className="text-gray-600">
                  Pipeline automatizado que regenera y actualiza el contenido semanalmente,
                  garantizando que siempre tengas información fresca y relevante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas más comunes sobre el ebook
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿En qué formato viene el ebook?
                </h3>
                <p className="text-gray-600">
                  Recibes el ebook en formato PDF optimizado para lectura en cualquier dispositivo,
                  plus una versión EPUB para e-readers y acceso web permanente.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Incluye código fuente de los proyectos?
                </h3>
                <p className="text-gray-600">
                  Sí, incluye todo el código fuente de los 12 proyectos prácticos, templates de CV,
                  portfolio y acceso a repositorio privado de GitHub con ejemplos adicionales.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cómo funcionan las actualizaciones automáticas?
                </h3>
                <p className="text-gray-600">
                  Cada semana, nuestro sistema de IA actualiza el contenido con nuevas tendencias.
                  Recibes notificaciones por email cuando hay actualizaciones importantes disponibles.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Hay soporte después de la compra?
                </h3>
                <p className="text-gray-600">
                  Incluye acceso a nuestra comunidad privada de Discord, sesiones de Q&A mensuales
                  y soporte directo por email durante 6 meses.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué incluye la garantía de reembolso?
                </h3>
                <p className="text-gray-600">
                  Tienes 30 días completos para revisar el contenido. Si no estás satisfecho por
                  cualquier razón, te devolvemos el 100% sin preguntas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Es adecuado para principiantes?
                </h3>
                <p className="text-gray-600">
                  Absolutamente. El ebook está diseñado para llevarte desde cero hasta nivel intermedio-avanzado,
                  con explicaciones claras y ejemplos paso a paso.
                </p>
              </div>
            </div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg">
              <Download className="h-6 w-6 mr-2" />
              Descargar Ahora - $29
            </button>
            <button className="inline-flex items-center border-2 border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
              Vista Previa Gratis
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            💳 Pago seguro • 🔒 Garantía 30 días • ⚡ Descarga instantánea
          </p>
        </div>
      </section>
    </div>
  )
}
