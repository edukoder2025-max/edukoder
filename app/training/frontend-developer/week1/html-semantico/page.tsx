import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, FileText, Lightbulb } from 'lucide-react'
import ProgressTracker from '@/components/ProgressTracker'

export default function HTMLSemanticoPage() {
  const lessonData = {
    series: 'Frontend Developer',
    week: 1,
    lesson: 1,
    title: 'HTML Semántico y Estructura Moderna',
    duration: '45 minutos',
    difficulty: 'Principiante',
    description: 'Aprende a crear estructuras HTML semánticas que mejoren la accesibilidad y SEO de tus sitios web.',
    objectives: [
      'Entender la importancia del HTML semántico',
      'Conocer los elementos semánticos de HTML5',
      'Implementar estructura semántica en proyectos reales',
      'Mejorar la accesibilidad web'
    ]
  }

  const codeExample = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Blog Personal</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h1>Bienvenido a mi Blog</h1>
            <article>
                <header>
                    <h2>Mi primer artículo</h2>
                    <time datetime="2024-01-15">15 de enero, 2024</time>
                </header>
                <p>Este es el contenido de mi primer artículo...</p>
                <footer>
                    <p>Por: <strong>Juan Pérez</strong></p>
                </footer>
            </article>
        </section>
        
        <aside>
            <h3>Artículos relacionados</h3>
            <ul>
                <li><a href="#">HTML básico</a></li>
                <li><a href="#">CSS fundamentals</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Mi Blog Personal</p>
    </footer>
</body>
</html>`

  const quiz = [
    {
      question: '¿Cuál es la diferencia entre <div> y <section>?',
      options: [
        '<div> es para contenido y <section> para estilos',
        '<section> tiene significado semántico, <div> es genérico',
        'No hay diferencia, son sinónimos',
        '<div> es más moderno que <section>'
      ],
      correct: 1
    },
    {
      question: '¿Qué elemento HTML5 se usa para contenido independiente?',
      options: [
        '<aside>',
        '<section>',
        '<article>',
        '<main>'
      ],
      correct: 2
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            <Link href="/training/frontend-developer" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Frontend Developer
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-500">Semana 1 - Lección 1</div>
              <h1 className="text-xl font-semibold text-gray-900">{lessonData.title}</h1>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              {lessonData.duration}
            </div>
          </div>
        </div>
      </header>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Video Placeholder */}
            <div className="bg-gray-900 rounded-lg mb-8 aspect-video flex items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors">
                <Play className="h-8 w-8" />
              </button>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {lessonData.difficulty}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {lessonData.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{lessonData.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Objetivos de aprendizaje:</h3>
              <ul className="space-y-2">
                {lessonData.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Ejemplo Práctico</h3>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{codeExample}</code>
                </pre>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Copiar Código
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Ver en CodePen
                </button>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Conceptos Clave</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">&lt;header&gt;</h4>
                  <p className="text-sm text-gray-600">Representa el encabezado de una página o sección</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">&lt;main&gt;</h4>
                  <p className="text-sm text-gray-600">Contenido principal de la página</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">&lt;article&gt;</h4>
                  <p className="text-sm text-gray-600">Contenido independiente y reutilizable</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">&lt;aside&gt;</h4>
                  <p className="text-sm text-gray-600">Contenido relacionado o sidebar</p>
                </div>
              </div>
            </div>

            {/* Quiz */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">¿Qué has aprendido?</h3>
              
              {quiz.map((question, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">{question.question}</h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={optionIndex}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Verificar Respuestas
              </button>
            </div>

            {/* Exercise */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Ejercicio Práctico</h3>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-green-900 mb-2">Tu misión:</h4>
                <p className="text-green-800 text-sm">
                  Crea una página HTML semántica para un blog personal que incluya:
                  header con navegación, main con 2 artículos, aside con enlaces relacionados, y footer.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Usar elementos semánticos correctos</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Incluir atributos de accesibilidad</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Validar HTML en W3C Validator</span>
                </div>
              </div>

              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subir mi solución
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button className="flex items-center text-gray-400 cursor-not-allowed">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Lección anterior
              </button>
              
              <Link 
                href="/training/frontend-developer/week1/elementos-semanticos" 
                className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente lección
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Progreso del Curso</h3>
              <ProgressTracker 
                currentModule={1}
                totalModules={12}
                currentLesson={1}
                totalLessons={4}
              />
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Semana 1 - HTML Semántico</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-blue-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Estructura HTML moderna
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Elementos semánticos
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Accesibilidad web
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    SEO básico
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Recursos</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📄 Guía de HTML5</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🔗 W3C Validator</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📚 MDN Reference</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
