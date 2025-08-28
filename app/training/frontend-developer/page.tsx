'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Clock, Users, Star, PlayCircle, Download, Code, Zap, ChevronDown, ChevronUp, BookOpen, Trophy, Target, ArrowRight, Monitor, Smartphone } from 'lucide-react'

export default function FrontendDeveloperPage() {
  const [showFullCurriculum, setShowFullCurriculum] = useState(false)
  const [expandedModules, setExpandedModules] = useState<number[]>([])

  const toggleModule = (moduleIndex: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleIndex) 
        ? prev.filter(i => i !== moduleIndex)
        : [...prev, moduleIndex]
    )
  }

  const curriculum = [
    {
      topic: "Fundamentos Web",
      icon: "🏗️",
      color: "orange",
      weeks: [
        {
          week: 1,
          phase: "Fase 1: HTML Semántico y Accesibilidad",
          concepts: [
            'Estructura HTML5 moderna',
            'Elementos semánticos (header, nav, main, article)',
            'Formularios accesibles y validación',
            'SEO básico y meta tags'
          ],
          practicals: [
            'Crear estructura de una página de empresa',
            'Formulario de contacto accesible',
            'Navegación responsive',
            'Optimizar para motores de búsqueda'
          ],
          project: 'Landing page corporativa completa',
          duration: '10-12 horas'
        },
        {
          week: 2,
          phase: "Fase 2: CSS Moderno y Responsive Design",
          concepts: [
            'Flexbox: alineación y distribución',
            'CSS Grid: layouts complejos',
            'Variables CSS y custom properties',
            'Media queries y breakpoints'
          ],
          practicals: [
            'Layout con Flexbox y Grid',
            'Sistema de colores con variables',
            'Responsive design mobile-first',
            'Animaciones y transiciones'
          ],
          project: 'Portfolio personal responsive',
          duration: '12-15 horas'
        }
      ]
    },
    {
      topic: "JavaScript Core",
      icon: "⚡",
      color: "yellow",
      weeks: [
        {
          week: 3,
          phase: "Fase 1: JavaScript Fundamentals",
          concepts: [
            'Variables, tipos de datos y scope',
            'Funciones: declaración, expresión, arrow',
            'Objetos y arrays: métodos y manipulación',
            'Control de flujo y loops'
          ],
          practicals: [
            'Calculadora con diferentes operaciones',
            'Manipulación de arrays de datos',
            'Validación de formularios',
            'Juego simple de adivinanza'
          ],
          project: 'Calculadora científica interactiva',
          duration: '12-15 horas'
        },
        {
          week: 4,
          phase: "Fase 2: DOM y Eventos",
          concepts: [
            'Selección y manipulación del DOM',
            'Event listeners y delegation',
            'Local Storage y Session Storage',
            'Debugging con DevTools'
          ],
          practicals: [
            'To-do list con persistencia',
            'Galería de imágenes interactiva',
            'Formulario con validación en tiempo real',
            'Menú de navegación dinámico'
          ],
          project: 'App de gestión de tareas completa',
          duration: '15-18 horas'
        }
      ]
    },
    {
      topic: "JavaScript Avanzado",
      icon: "🚀",
      color: "purple",
      weeks: [
        {
          week: 5,
          phase: "Fase 1: Conceptos Avanzados",
          concepts: [
            'Closures y lexical scope',
            'Prototypes y herencia',
            'This keyword y binding',
            'Destructuring y spread operator'
          ],
          practicals: [
            'Crear factory functions',
            'Sistema de herencia con prototypes',
            'Módulos y namespace patterns',
            'Funciones de orden superior'
          ],
          project: 'Librería de utilidades JavaScript',
          duration: '15-18 horas'
        },
        {
          week: 6,
          phase: "Fase 2: Asíncrono y APIs",
          concepts: [
            'Promises y async/await',
            'Fetch API y HTTP methods',
            'Error handling y try/catch',
            'JSON y serialización de datos'
          ],
          practicals: [
            'Consumir APIs REST',
            'Manejar errores de red',
            'Implementar loading states',
            'Cache de datos en cliente'
          ],
          project: 'App del clima con múltiples APIs',
          duration: '15-18 horas'
        }
      ]
    },
    {
      topic: "React Fundamentals",
      icon: "⚛️",
      color: "cyan",
      weeks: [
        {
          week: 7,
          phase: "Fase 1: Componentes y JSX",
          concepts: [
            'Componentes funcionales y JSX',
            'Props y prop drilling',
            'Estado local con useState',
            'Renderizado condicional y listas'
          ],
          practicals: [
            'Componentes reutilizables',
            'Props validation con PropTypes',
            'Estado compartido entre componentes',
            'Manejo de formularios controlados'
          ],
          project: 'App de recetas con filtros',
          duration: '15-18 horas'
        },
        {
          week: 8,
          phase: "Fase 2: Hooks y Efectos",
          concepts: [
            'useEffect y lifecycle',
            'Custom hooks para lógica reutilizable',
            'useContext para estado global',
            'useReducer para estado complejo'
          ],
          practicals: [
            'Efectos de montaje y desmontaje',
            'Crear hooks personalizados',
            'Contexto para tema y autenticación',
            'Reducer pattern para estado'
          ],
          project: 'E-commerce con carrito y wishlist',
          duration: '18-20 horas'
        }
      ]
    },
    {
      topic: "React Ecosystem",
      icon: "🌐",
      color: "blue",
      weeks: [
        {
          week: 9,
          phase: "Fase 1: Routing y State Management",
          concepts: [
            'React Router v6 y navegación',
            'Rutas protegidas y parámetros',
            'State management patterns',
            'Context API avanzado'
          ],
          practicals: [
            'Aplicación multi-página',
            'Autenticación y rutas privadas',
            'Estado global con Context',
            'Optimización de renders'
          ],
          project: 'Dashboard de administración',
          duration: '18-20 horas'
        },
        {
          week: 10,
          phase: "Fase 2: TypeScript y Testing",
          concepts: [
            'TypeScript básico e interfaces',
            'Props tipadas en React',
            'Testing con Jest y RTL',
            'Testing de componentes y hooks'
          ],
          practicals: [
            'Migrar componentes a TypeScript',
            'Crear tipos para APIs',
            'Unit tests para componentes',
            'Integration tests para features'
          ],
          project: 'App bancaria con TypeScript y tests',
          duration: '20-22 horas'
        }
      ]
    },
    {
      topic: "Producción y Deploy",
      icon: "🚀",
      color: "green",
      weeks: [
        {
          week: 11,
          phase: "Fase 1: Next.js y SSR",
          concepts: [
            'App Router de Next.js 14',
            'Server Components vs Client Components',
            'Static Site Generation (SSG)',
            'API Routes y middleware'
          ],
          practicals: [
            'Migrar app React a Next.js',
            'Implementar SSG para blog',
            'API routes para backend',
            'Optimización de imágenes'
          ],
          project: 'Blog personal con CMS headless',
          duration: '20-22 horas'
        },
        {
          week: 12,
          phase: "Fase 2: Proyecto Final",
          concepts: [
            'Arquitectura de aplicación completa',
            'Performance optimization',
            'SEO avanzado y meta tags',
            'Deployment y CI/CD'
          ],
          practicals: [
            'Planificación y wireframes',
            'Desarrollo iterativo',
            'Testing end-to-end',
            'Deploy en Vercel/Netlify'
          ],
          project: 'Plataforma completa de tu elección',
          duration: '25-30 horas'
        }
      ]
    }
  ]

  const prerequisites = [
    'Conocimientos básicos de computación e internet',
    'Ganas de aprender y dedicar tiempo consistente',
    'Dedicar 15-20 horas por semana de estudio',
    'Computadora con navegador web moderno',
    'Editor de código (recomendamos VS Code)'
  ]

  const outcomes = [
    'Crear aplicaciones web modernas con React y Next.js',
    'Dominar HTML5, CSS3 y JavaScript ES6+',
    'Implementar responsive design y mobile-first',
    'Trabajar con APIs REST y manejo de datos',
    'Usar TypeScript para código más robusto y mantenible',
    'Implementar testing automatizado y TDD',
    'Deployar aplicaciones en producción',
    'Portfolio profesional con 6 proyectos reales',
    'Preparación completa para entrevistas frontend',
    'Base sólida para seguir aprendiendo frameworks avanzados'
  ]

  const startLearning = () => {
    // Here you would typically navigate to the first lesson or a signup flow
    alert('¡Excelente! Te redirigiremos al primer módulo donde comenzarás tu viaje como Frontend Developer.')
    // In a real app: router.push('/training/frontend-developer/week-1')
  }

  const handleDownloadGuide = () => {
    alert('Descargando guía de estudio completa...')
    // In a real app: trigger download of PDF guide
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Frontend Developer
                  </h1>
                  <p className="text-blue-100">De cero a React Developer profesional</p>
                </div>
              </div>

              <p className="text-xl text-blue-100 mb-6">
                Conviértete en Frontend Developer en 12 semanas con nuestro programa estructurado. 
                Aprende HTML, CSS, JavaScript, React, TypeScript y Next.js con 6 proyectos reales 
                que construirás paso a paso.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>12 semanas</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>3,200+ estudiantes</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  <span>6 proyectos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={startLearning}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Comenzar Gratis
                </button>
                <button 
                  onClick={() => setShowFullCurriculum(!showFullCurriculum)}
                  className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Ver Temario Completo
                  {showFullCurriculum ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
                </button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-6">Stack Tecnológico</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                    HTML5
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    CSS3 & Flexbox/Grid
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    JavaScript ES6+
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                    React 18 & Hooks
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    TypeScript
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full mr-3"></div>
                    Next.js 14
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-3">Herramientas Profesionales</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white/20 px-2 py-1 rounded">VS Code</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Git & GitHub</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Jest & RTL</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Metodología de Aprendizaje
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada tema se divide en 2 fases: conceptos fundamentales y aplicación práctica. 
              100% autodidacta, sin tareas que entregar, a tu propio ritmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📚
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fase 1: Conceptos</h3>
              <p className="text-gray-600">
                Aprende los fundamentos teóricos con explicaciones claras y ejemplos prácticos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fase 2: Práctica</h3>
              <p className="text-gray-600">
                Aplica lo aprendido construyendo proyectos reales paso a paso.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proyecto Final</h3>
              <p className="text-gray-600">
                Cada semana completarás un proyecto que podrás mostrar en tu portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué necesitas para empezar?
              </h2>
              <div className="space-y-4">
                {prerequisites.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">💡 Tiempo recomendado</h3>
                <p className="text-blue-800 text-sm">
                  Dedica 15-20 horas por semana (2-3 horas diarias) para completar cada fase cómodamente. 
                  Puedes ir más lento o más rápido según tu disponibilidad.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Lo que lograrás al completar la serie
              </h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">🎯 Tu Portfolio Final</h3>
                <p className="text-green-800 text-sm">
                  Al finalizar tendrás 6 proyectos profesionales: Landing page, Portfolio, 
                  Calculadora, App de tareas, E-commerce, Dashboard y tu proyecto final personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Curriculum Detallado
            </h2>
            <p className="text-xl text-gray-600">
              6 temas principales • 2 fases por tema • 12 semanas • 6 proyectos
            </p>
          </div>

          {/* Curriculum Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {curriculum.map((topic, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{topic.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{topic.topic}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Semanas {topic.weeks[0].week}-{topic.weeks[1].week} • 2 fases
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>Fase 1:</strong> {topic.weeks[0].phase.split(': ')[1]}
                  </div>
                  <div className="text-sm">
                    <strong>Fase 2:</strong> {topic.weeks[1].phase.split(': ')[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Curriculum */}
          {showFullCurriculum && (
            <div className="space-y-8">
              <div className="border-t-2 border-blue-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Curriculum Completo - 12 Semanas
                </h3>
              </div>
              
              {curriculum.map((topic, topicIndex) => (
                <div key={topicIndex} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{topic.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{topic.topic}</h3>
                      <p className="text-gray-600">Semanas {topic.weeks[0].week}-{topic.weeks[1].week}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {topic.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div 
                          className="p-6 cursor-pointer"
                          onClick={() => toggleModule(topicIndex * 2 + weekIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-12 h-12 bg-${topic.color}-100 text-${topic.color}-600 rounded-lg flex items-center justify-center font-bold mr-4`}>
                                {week.week}
                              </div>
                              <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                  {week.phase}
                                </h4>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {week.duration}
                                </div>
                              </div>
                            </div>
                            {expandedModules.includes(topicIndex * 2 + weekIndex) ? 
                              <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            }
                          </div>
                        </div>

                        {expandedModules.includes(topicIndex * 2 + weekIndex) && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="grid lg:grid-cols-2 gap-8 mt-6">
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                                  <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                                  Conceptos que aprenderás:
                                </h5>
                                <div className="space-y-2">
                                  {week.concepts.map((concept, idx) => (
                                    <div key={idx} className="flex items-start text-sm text-gray-700">
                                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                      {concept}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                                  <Monitor className="h-4 w-4 mr-2 text-green-500" />
                                  Prácticas que realizarás:
                                </h5>
                                <div className="space-y-2">
                                  {week.practicals.map((practical, idx) => (
                                    <div key={idx} className="flex items-start text-sm text-gray-700">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                      {practical}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-100">
                              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <div className="flex items-center">
                                  <Trophy className="h-5 w-5 text-purple-600 mr-2" />
                                  <span className="font-semibold text-purple-900">Proyecto de la semana:</span>
                                  <span className="ml-2 text-purple-800">{week.project}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tu Progreso, Tu Ritmo
            </h2>
            <p className="text-xl text-gray-600">
              Aprende de forma autodidacta con nuestro sistema de seguimiento personal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                📊
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seguimiento Visual</h3>
              <p className="text-sm text-gray-600">
                Ve tu progreso en tiempo real con barras de progreso y badges de logros.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Metas Personales</h3>
              <p className="text-sm text-gray-600">
                Establece tu ritmo de estudio y recibe recordatorios motivacionales.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                📝
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sin Tareas</h3>
              <p className="text-sm text-gray-600">
                Aprende a tu ritmo sin presión. No hay tareas que entregar ni fechas límite.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificación</h3>
              <p className="text-sm text-gray-600">
                Obtén tu certificado al completar cada tema y el programa completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para convertirte en Frontend Developer?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Únete a más de 3,200 estudiantes que ya han transformado su carrera 
            con nuestra serie de entrenamiento más popular. Comienza hoy mismo de forma gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={startLearning}
              className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PlayCircle className="h-6 w-6 mr-2" />
              Comenzar Gratis Ahora
            </button>
            <button 
              onClick={handleDownloadGuide}
              className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              <Download className="h-6 w-6 mr-2" />
              Descargar Guía de Estudio
            </button>
          </div>

          <div className="text-center">
            <p className="text-blue-100 text-sm">
              ✨ Acceso inmediato • ✨ Sin pagos iniciales • ✨ Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
