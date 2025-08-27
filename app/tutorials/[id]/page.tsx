import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen, Code, PlayCircle } from 'lucide-react'

// This would normally come from a database or API
async function getTutorial(id: string) {
  // Simulate tutorial data
  const tutorials = {
    '1': {
      id: '1',
      title: 'Variables en JavaScript: let, const, var',
      description: 'Aprende las diferencias fundamentales entre let, const y var en JavaScript',
      content: {
        introduction: 'Las variables son uno de los conceptos más importantes en JavaScript. Entender las diferencias entre let, const y var es crucial para escribir código moderno y evitar errores comunes.',
        explanation: 'JavaScript tiene tres formas de declarar variables: var (ES5), let y const (ES6+). Cada una tiene comportamientos diferentes en cuanto a scope, hoisting y reasignación.',
        codeExample: `// var - función scope, hoisting
var nombre = "Juan";
var nombre = "Pedro"; // ✅ Válido
console.log(nombre); // "Pedro"

// let - block scope, no redeclaración
let edad = 25;
edad = 26; // ✅ Válido
// let edad = 27; // ❌ Error: Cannot redeclare

// const - block scope, inmutable
const PI = 3.14159;
// PI = 3.14; // ❌ Error: Cannot assign to const
// const debe inicializarse
// const radio; // ❌ Error: Missing initializer

// Objeto con const
const persona = { nombre: "Ana" };
persona.nombre = "María"; // ✅ Válido (muta el objeto)
// persona = {}; // ❌ Error: Cannot reassign`,
        keyPoints: [
          'var tiene function scope, let y const tienen block scope',
          'var permite redeclaración, let y const no',
          'const no puede ser reasignada, pero los objetos sí pueden mutar',
          'Siempre usa const por defecto, let cuando necesites reasignar, evita var'
        ],
        practiceExercise: 'Crea una función que use let para un contador y const para configuración. Experimenta intentando reasignar cada variable.'
      },
      duration: '4 min',
      level: 'Principiante',
      category: 'JavaScript',
      author: 'CodeMentor Pro',
      publishedAt: '2024-01-15',
      tags: ['javascript', 'variables', 'es6', 'scope'],
      views: '12,500',
      nextTutorial: {
        id: '2',
        title: 'Arrow Functions vs Function Declaration'
      },
      relatedTutorials: [
        { id: '3', title: 'Hoisting en JavaScript' },
        { id: '4', title: 'Scope y Closures' },
        { id: '5', title: 'Template Literals ES6' }
      ]
    }
  }
  
  return tutorials[id as keyof typeof tutorials] || null
}

export default async function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = await getTutorial(params.id)

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutorial no encontrado</h1>
          <Link href="/tutorials" className="btn-primary">
            Volver a Tutoriales
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/tutorials" className="text-gray-500 hover:text-gray-700">Microtutoriales</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{tutorial.title}</span>
          </nav>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-xs font-medium text-secondary-600 bg-secondary-50 px-2 py-1 rounded">
                    {tutorial.level}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {tutorial.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {tutorial.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(tutorial.publishedAt).toLocaleDateString('es-ES')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div>
                      {tutorial.views} vistas
                    </div>
                  </div>

                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <Share2 className="h-4 w-4 mr-1" />
                    Compartir
                  </button>
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {tutorial.content.introduction}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Explicación</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {tutorial.content.explanation}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ejemplo de Código</h2>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{tutorial.content.codeExample}</code>
                    </pre>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Puntos Clave</h2>
                  <ul className="space-y-3">
                    {tutorial.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-3"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ejercicio Práctico</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-900">Practica lo aprendido</span>
                    </div>
                    <p className="text-blue-800">
                      {tutorial.content.practiceExercise}
                    </p>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tutorial.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link href="/tutorials" className="inline-flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Tutoriales
              </Link>
              
              {tutorial.nextTutorial && (
                <Link href={`/tutorials/${tutorial.nextTutorial.id}`} className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Siguiente: {tutorial.nextTutorial.title}
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="space-y-8">
              {/* Related Tutorials */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tutoriales Relacionados
                </h3>
                <div className="space-y-3">
                  {tutorial.relatedTutorials.map((related) => (
                    <Link key={related.id} href={`/tutorials/${related.id}`} className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <PlayCircle className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 hover:text-primary-600">
                          {related.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">
                  ¿Te gustó este tutorial?
                </h3>
                <p className="text-sm text-blue-100 mb-4">
                  Descarga nuestro ebook completo con 300+ páginas de contenido avanzado.
                </p>
                <Link href="/ebook" className="inline-flex items-center bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Descargar Ebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
