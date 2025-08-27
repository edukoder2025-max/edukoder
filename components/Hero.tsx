import Link from 'next/link'
import { ArrowRight, PlayCircle, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="section-container py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Aprende a programar con{' '}
              <span className="text-yellow-300">microtutoriales</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Consigue tu primer empleo y escala tu carrera con contenido práctico, 
              guías profesionales y nuestro ebook exclusivo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/tutorials" className="inline-flex items-center bg-white text-primary-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                <PlayCircle className="h-5 w-5 mr-2" />
                Explorar Tutoriales
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link href="/ebook" className="inline-flex items-center border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-700 transition-colors">
                <BookOpen className="h-5 w-5 mr-2" />
                Descargar Ebook
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200">Microtutoriales</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15k+</div>
                <div className="text-blue-200">Estudiantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200">Satisfacción</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 text-left">
                    <div className="text-green-400 text-sm mb-2">// Ejemplo de microtutorial</div>
                    <div className="text-blue-300">function</div>
                    <div className="text-yellow-300 ml-2">crearDesarrollador</div>
                    <div className="text-white">() {'{'}</div>
                    <div className="text-gray-300 ml-4">return "¡Éxito!";</div>
                    <div className="text-white">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
