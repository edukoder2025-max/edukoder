import Link from 'next/link'
import { Download, Star, CheckCircle } from 'lucide-react'

export default function EbookPromo() {
  const benefits = [
    'Aprende los fundamentos de JavaScript, TypeScript y PHP',
    'Proyectos prácticos paso a paso',
    'Guía completa para conseguir tu primer empleo',
    'Estrategias de pricing para freelancers',
    'Templates de CV y portfolio profesional',
    'Acceso a comunidad privada de Discord',
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="section-container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Acelera tu Carrera con Nuestro{' '}
              <span className="text-yellow-400">Ebook Exclusivo</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              La guía definitiva que combina fundamentos técnicos con estrategias profesionales. 
              Actualizado automáticamente con IA y las últimas tendencias del mercado.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <div className="flex items-center mr-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-300">4.9/5 (420+ reseñas)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ebook" className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Descargar Ahora - $29
              </Link>
              
              <Link href="/ebook#preview" className="inline-flex items-center border-2 border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
                Vista Previa Gratis
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="text-center">
                    <div className="w-16 h-20 bg-gradient-to-b from-primary-600 to-primary-700 rounded mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Guía Completa del Programador
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Edición 2024 - Actualizada con IA
                    </p>
                    <div className="text-2xl font-bold text-primary-600">$29</div>
                    <div className="text-sm text-gray-500 line-through">$49</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
                ¡Oferta!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
