import Link from 'next/link'
import { Code, Mail, Github, Twitter, Linkedin } from 'lucide-react'

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
      <div className="section-container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
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
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
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
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CodeMentor Pro. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Contenido generado con IA • Actualizado automáticamente
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
