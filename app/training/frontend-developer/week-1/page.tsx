'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PlayCircle, Clock, CheckCircle, BookOpen, Code, Download, ArrowRight, ArrowLeft, Trophy, Target, ExternalLink } from 'lucide-react'

export default function Week1Page() {
  const [currentPhase, setCurrentPhase] = useState<'overview' | 'phase1' | 'phase2'>('overview')
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const phase1Lessons = [
    {
      id: 1,
      title: "Introducción a HTML5",
      duration: "45 min",
      type: "video",
      content: "Aprende qué es HTML5 y por qué es importante para el desarrollo web moderno."
    },
    {
      id: 2,
      title: "Estructura básica de un documento HTML",
      duration: "30 min",
      type: "lecture",
      content: "DOCTYPE, html, head, body y la anatomía de una página web."
    },
    {
      id: 3,
      title: "Elementos semánticos en HTML5",
      duration: "60 min",
      type: "video",
      content: "Header, nav, main, article, section, aside, footer y su importancia."
    },
    {
      id: 4,
      title: "Práctica: Creando la estructura básica",
      duration: "90 min",
      type: "practice",
      content: "Construye la estructura HTML de una página corporativa paso a paso."
    }
  ]

  const phase2Lessons = [
    {
      id: 5,
      title: "Introducción a CSS3",
      duration: "45 min",
      type: "video",
      content: "Qué es CSS, cómo funciona y cómo conectarlo con HTML."
    },
    {
      id: 6,
      title: "Selectores y propiedades básicas",
      duration: "60 min",
      type: "lecture",
      content: "Tipos de selectores, colores, fuentes, espaciado y layout básico."
    },
    {
      id: 7,
      title: "Flexbox: alineación y distribución",
      duration: "75 min",
      type: "video",
      content: "Flexbox para crear layouts modernos y responsivos."
    },
    {
      id: 8,
      title: "CSS Grid: layouts complejos",
      duration: "75 min",
      type: "video",
      content: "Grid system para layouts bidimensionales avanzados."
    },
    {
      id: 9,
      title: "Variables CSS y custom properties",
      duration: "45 min",
      type: "lecture",
      content: "Crear sistemas de design escalables con variables CSS."
    },
    {
      id: 10,
      title: "Práctica: Portfolio responsive",
      duration: "120 min",
      type: "practice",
      content: "Construye un portfolio personal completo y responsive."
    }
  ]

  const resources = [
    {
      title: "HTML5 Cheat Sheet",
      type: "PDF",
      description: "Referencia rápida de todos los elementos HTML5"
    },
    {
      title: "CSS Flexbox Guide",
      type: "Interactive",
      description: "Guía interactiva para dominar Flexbox"
    },
    {
      title: "CSS Grid Garden",
      type: "Game",
      description: "Juego para practicar CSS Grid de forma divertida"
    },
    {
      title: "VS Code Extensions",
      type: "Tools",
      description: "Extensions recomendadas para desarrollo frontend"
    }
  ]

  const projects = [
    {
      title: "Landing Page Corporativa",
      description: "Página web para una empresa ficticia con navegación, hero section, servicios y contacto",
      skills: ["HTML5 semántico", "Estructura básica", "Formularios", "SEO básico"],
      duration: "6-8 horas"
    },
    {
      title: "Portfolio Personal Responsive",
      description: "Tu portfolio personal con sección about, proyectos, habilidades y contacto",
      skills: ["CSS Grid", "Flexbox", "Responsive design", "Animaciones"],
      duration: "8-10 horas"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/training/frontend-developer/start" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="font-semibold text-gray-900">Semana 1: Fundamentos Web</span>
              </div>
              <div className="text-sm text-gray-500">
                {completedLessons.length} de {phase1Lessons.length + phase2Lessons.length} lecciones completadas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="section-container py-2">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Tu progreso esta semana</span>
            <span>{Math.round((completedLessons.length / (phase1Lessons.length + phase2Lessons.length)) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedLessons.length / (phase1Lessons.length + phase2Lessons.length)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="section-container">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentPhase('overview')}
              className={`py-4 border-b-2 font-medium ${
                currentPhase === 'overview'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Resumen
            </button>
            <button
              onClick={() => setCurrentPhase('phase1')}
              className={`py-4 border-b-2 font-medium ${
                currentPhase === 'phase1'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Fase 1: HTML Semántico
            </button>
            <button
              onClick={() => setCurrentPhase('phase2')}
              className={`py-4 border-b-2 font-medium ${
                currentPhase === 'phase2'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Fase 2: CSS Moderno
            </button>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Overview */}
        {currentPhase === 'overview' && (
          <div className="space-y-8">
            {/* Welcome */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-8">
              <h1 className="text-3xl font-bold mb-4">
                ¡Bienvenido a tu primera semana! 🌟
              </h1>
              <p className="text-xl text-orange-100 mb-6">
                En esta semana aprenderás los fundamentos del desarrollo web: HTML5 semántico y CSS moderno. 
                Al final, habrás creado dos proyectos profesionales para tu portfolio.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Fase 1: HTML Semántico</h3>
                  <p className="text-orange-100 text-sm">
                    4 lecciones • 3.5 horas • Proyecto: Landing page corporativa
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Fase 2: CSS Moderno</h3>
                  <p className="text-orange-100 text-sm">
                    6 lecciones • 6.5 horas • Proyecto: Portfolio personal
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Preview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proyectos que construirás</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Habilidades que practicarás:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos adicionales</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm mr-3">
                        📄
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{resource.type}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                ¿Por dónde empezar?
              </h3>
              <div className="space-y-3 text-blue-800 text-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                  Comienza con la Fase 1: HTML Semántico
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                  Sigue las lecciones en orden y marca como completadas
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                  Construye el proyecto de la landing page
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
                  Continúa con la Fase 2: CSS Moderno
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase 1 */}
        {currentPhase === 'phase1' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Fase 1: HTML Semántico y Accesibilidad</h2>
                  <p className="text-gray-600">Aprende los fundamentos de HTML5 y crea contenido accesible</p>
                </div>
              </div>

              <div className="space-y-4">
                {phase1Lessons.map((lesson, index) => (
                  <div key={lesson.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                            completedLessons.includes(lesson.id)
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                          <p className="text-gray-600 text-sm">{lesson.content}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          {lesson.type === 'video' && <PlayCircle className="h-4 w-4 mr-1" />}
                          {lesson.type === 'lecture' && <BookOpen className="h-4 w-4 mr-1" />}
                          {lesson.type === 'practice' && <Code className="h-4 w-4 mr-1" />}
                          {lesson.duration}
                        </div>
                        
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                          {lesson.type === 'practice' ? 'Comenzar Práctica' : 'Ver Lección'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-purple-900">Proyecto de Fase 1</h3>
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Landing Page Corporativa</h4>
                <p className="text-purple-800 text-sm mb-4">
                  Construye una página web completa para una empresa ficticia. Incluirá navegación, 
                  hero section, servicios, testimonios y formulario de contacto.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Comenzar Proyecto
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Phase 2 */}
        {currentPhase === 'phase2' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Fase 2: CSS Moderno y Responsive Design</h2>
                  <p className="text-gray-600">Domina CSS Grid, Flexbox y diseño responsive</p>
                </div>
              </div>

              <div className="space-y-4">
                {phase2Lessons.map((lesson, index) => (
                  <div key={lesson.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                            completedLessons.includes(lesson.id)
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                          <p className="text-gray-600 text-sm">{lesson.content}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          {lesson.type === 'video' && <PlayCircle className="h-4 w-4 mr-1" />}
                          {lesson.type === 'lecture' && <BookOpen className="h-4 w-4 mr-1" />}
                          {lesson.type === 'practice' && <Code className="h-4 w-4 mr-1" />}
                          {lesson.duration}
                        </div>
                        
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                          {lesson.type === 'practice' ? 'Comenzar Práctica' : 'Ver Lección'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-purple-900">Proyecto de Fase 2</h3>
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Portfolio Personal Responsive</h4>
                <p className="text-purple-800 text-sm mb-4">
                  Crea tu portfolio personal profesional con CSS Grid y Flexbox. Incluirá sección about, 
                  proyectos, habilidades, experiencia y formulario de contacto. Completamente responsive.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Comenzar Proyecto
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bg-white border-t">
        <div className="section-container py-6">
          <div className="flex items-center justify-between">
            <Link href="/training/frontend-developer/start" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio del programa
            </Link>
            
            <button 
              className="flex items-center bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed"
              disabled
            >
              Semana 2: JavaScript Core
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            Completa esta semana para desbloquear la siguiente
          </div>
        </div>
      </div>
    </div>
  )
}
