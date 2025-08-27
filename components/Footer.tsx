import Link from 'next/link'
import { Code, Mail, Github, Twitter, Linkedin } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Microtutoriales', href: '/tutorials' },
      { name: 'Series de Entrenamiento', href: '/training' },
      { name: 'Guías de Carrera', href: '/career' },
      { name: 'Ebook', href: '/ebook' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contacto', href: '/contact' },
      { name: 'Términos', href: '/terms' },
    ],
    social: [
      { name: 'GitHub', href: '#', icon: Github },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'Email', href: 'mailto:hola@codementorpro.com', icon: Mail },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="section-container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Mantente al día con los últimos tutoriales
                </h2>
                <p className="text-gray-400 text-lg">
                  Recibe contenido exclusivo, nuevos tutoriales y tips de carrera 
                  directamente en tu inbox cada semana.
                </p>
              </div>
              <div>
                <NewsletterSignup variant="inline" className="bg-gray-800 border-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">CodeMentor Pro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              La plataforma más completa para aprender programación y acelerar tu carrera tech. 
              Microtutoriales, guías profesionales y contenido actualizado con IA.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Tutoriales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">15k+</div>
              <div className="text-sm text-gray-400">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">2.5k+</div>
              <div className="text-sm text-gray-400">Empleos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">95%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CodeMentor Pro. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Contenido generado con IA • Actualizado automáticamente
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Plataforma activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
