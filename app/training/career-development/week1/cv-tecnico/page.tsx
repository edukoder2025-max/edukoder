import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, FileText, Download, Eye } from 'lucide-react'
import ProgressTracker from '@/components/ProgressTracker'

export default function CVTecnicoPage() {
  const lessonData = {
    series: 'Desarrollo de Carrera',
    week: 1,
    lesson: 1,
    title: 'CV Técnico Optimizado para ATS',
    duration: '50 minutos',
    difficulty: 'Todos los niveles',
    description: 'Aprende a crear un CV técnico que pase los filtros ATS y llame la atención de recruiters tech.',
    objectives: [
      'Entender cómo funcionan los sistemas ATS',
      'Estructurar un CV técnico efectivo',
      'Optimizar keywords para tecnologías',
      'Destacar proyectos y logros medibles'
    ]
  }

  const badExample = `Juan Pérez
Desarrollador

Experiencia:
- Trabajé en una empresa de tecnología
- Hice algunas páginas web
- Usé varios lenguajes de programación

Educación:
- Ingeniería (sin terminar)

Habilidades:
- Programación
- Computadoras`

  const goodExample = `JUAN PÉREZ
Frontend Developer | React.js | JavaScript | TypeScript

📧 juan.perez@email.com | 📱 +34 600 123 456
🌐 portfolio: juanperez.dev | 💼 linkedin.com/in/juanperez
🔗 github.com/juanperez

PERFIL PROFESIONAL
Frontend Developer con 2 años de experiencia creando aplicaciones web 
con React.js. Especializado en desarrollo responsive y optimización 
de performance. Aumenté la velocidad de carga 40% en mi último proyecto.

EXPERIENCIA TÉCNICA

Frontend Developer | TechStartup SL | 2022-2024
• Desarrollé 15+ componentes React reutilizables para e-commerce
• Implementé responsive design para 3 proyectos web (95% Mobile Score)
• Optimizé bundle size de 2MB a 800KB usando Webpack y lazy loading
• Colaboré con equipo de 5 developers usando Git y metodología Agile

Junior Developer | FreelanceProjects | 2021-2022
• Creé 8 landing pages usando HTML5, CSS3 y JavaScript vanilla
• Integré APIs REST para 4 proyectos de gestión de datos
• Implementé autenticación JWT en 2 aplicaciones web

PROYECTOS DESTACADOS

🚀 E-commerce Dashboard (React + TypeScript)
• 10,000+ productos gestionados, reducción 60% tiempo de administración
• Tech: React, TypeScript, Redux, Material-UI, Chart.js
• Link: github.com/juanperez/ecommerce-dashboard

📱 Weather App PWA (React + APIs)
• 50,000+ consultas mensuales, 4.8/5 rating Google Play
• Tech: React, PWA, OpenWeather API, Service Workers
• Link: weather-app-juan.netlify.app

STACK TECNOLÓGICO

Frontend: React.js, JavaScript ES6+, TypeScript, HTML5, CSS3
Styling: Tailwind CSS, Styled Components, SASS, Bootstrap
State: Redux, Context API, Zustand
Testing: Jest, React Testing Library, Cypress
Tools: Git, Webpack, Vite, NPM, VS Code

EDUCACIÓN
Desarrollo Web Full Stack | Bootcamp TechAcademy | 2021
Certificaciones: React Developer (Meta), JavaScript (freeCodeCamp)`

  const quiz = [
    {
      question: '¿Qué es lo más importante para que un CV pase filtros ATS?',
      options: [
        'Un diseño visual llamativo',
        'Keywords específicas del puesto',
        'Muchos colores y gráficos',
        'Un formato en PDF'
      ],
      correct: 1
    },
    {
      question: '¿Cómo debes presentar tus proyectos?',
      options: [
        'Solo mencionar el nombre',
        'Incluir métricas y tecnologías usadas',
        'Explicar todo el proceso técnico',
        'Poner capturas de pantalla'
      ],
      correct: 1
    }
  ]

  const checklist = [
    'Usar formato ATS-friendly (sin tablas, columnas complejas)',
    'Incluir keywords del job posting',
    'Cuantificar logros con números',
    'Destacar tecnologías relevantes',
    'Incluir enlaces a portfolio y GitHub',
    'Mantener máximo 2 páginas',
    'Usar verbos de acción (implementé, optimicé, creé)',
    'Adaptar CV para cada posición'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            <Link href="/training/career-development" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Desarrollo de Carrera
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
              <button className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transition-colors">
                <Play className="h-8 w-8" />
              </button>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
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

            {/* What NOT to do */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">❌ CV Que NO Funciona</h3>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <pre className="text-sm text-red-800 whitespace-pre-wrap font-mono">
                  {badExample}
                </pre>
              </div>
              
              <div className="bg-red-100 border-l-4 border-red-500 p-4">
                <h4 className="font-medium text-red-900 mb-2">Problemas identificados:</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Sin información de contacto completa</li>
                  <li>• Experiencia vaga, sin métricas</li>
                  <li>• No menciona tecnologías específicas</li>
                  <li>• Sin proyectos o portfolio</li>
                  <li>• Habilidades genéricas</li>
                </ul>
              </div>
            </div>

            {/* What TO do */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ CV Optimizado y Efectivo</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <pre className="text-sm text-green-800 whitespace-pre-wrap font-mono text-xs leading-relaxed">
                  {goodExample}
                </pre>
              </div>
              
              <div className="bg-green-100 border-l-4 border-green-500 p-4">
                <h4 className="font-medium text-green-900 mb-2">Por qué funciona:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Keywords claras en el título (React.js, JavaScript)</li>
                  <li>• Métricas específicas (40% mejora, 15+ componentes)</li>
                  <li>• Stack tecnológico detallado</li>
                  <li>• Proyectos con links y resultados</li>
                  <li>• Formato ATS-friendly</li>
                </ul>
              </div>
            </div>

            {/* ATS Tips */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 Optimización para ATS</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">✅ ATS-Friendly</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Usar formato .docx o .pdf simple</li>
                    <li>• Fuentes estándar (Arial, Calibri)</li>
                    <li>• Sin tablas o columnas complejas</li>
                    <li>• Headers simples (EXPERIENCIA, EDUCACIÓN)</li>
                    <li>• Keywords del job posting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">❌ Evitar</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Gráficos o imágenes</li>
                    <li>• Headers/footers complejos</li>
                    <li>• Texto en imágenes</li>
                    <li>• Formatos creativos</li>
                    <li>• Demasiados colores</li>
                  </ul>
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

            {/* Checklist */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Checklist: CV Perfecto</h3>
              </div>
              
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <input type="checkbox" className="mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
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
                  Crear tu CV técnico optimizado siguiendo la estructura del ejemplo. 
                  Incluir tus proyectos, tecnologías y métricas específicas.
                </p>
              </div>
              
              <div className="flex gap-3 mb-4">
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar Template
                </button>
                <button className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Ejemplos
                </button>
              </div>

              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Subir mi CV para revisión
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button className="flex items-center text-gray-400 cursor-not-allowed">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Lección anterior
              </button>
              
              <Link 
                href="/training/career-development/week1/keywords-ats" 
                className="flex items-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
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
                totalModules={6}
                currentLesson={1}
                totalLessons={4}
              />
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Semana 1 - CV Técnico</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Estructura ATS-friendly
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Keywords por tecnología
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Proyectos destacados
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Formato visual
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Recursos</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-green-600 hover:text-green-700">📄 Templates CV</a>
                  <a href="#" className="block text-green-600 hover:text-green-700">🔍 ATS Scanner</a>
                  <a href="#" className="block text-green-600 hover:text-green-700">💼 Ejemplos Reales</a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Estadísticas</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-gray-500">CVs optimizados pasan ATS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">3x</div>
                    <div className="text-gray-500">Más entrevistas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
