'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PlayCircle, Clock, CheckCircle, Trophy, BookOpen, ArrowRight, Star, Target } from 'lucide-react'

export default function FrontendDeveloperStartPage() {
  const [userGoals, setUserGoals] = useState<string[]>([])
  
  const goals = [
    'Conseguir mi primer trabajo como Frontend Developer',
    'Crear mi propio portfolio profesional',
    'Aprender React y JavaScript moderno',
    'Cambiar de carrera a tecnología',
    'Mejorar mis habilidades actuales',
    'Crear proyectos personales'
  ]

  const toggleGoal = (goal: string) => {
    setUserGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    )
  }

  const startWeekOne = () => {
    // Store user goals in localStorage for tracking
    if (typeof window !== 'undefined') {
      localStorage.setItem('frontendDeveloperGoals', JSON.stringify(userGoals))
      localStorage.setItem('frontendDeveloperStartDate', new Date().toISOString())
    }
    
    // Navigate to week 1
    window.location.href = '/training/frontend-developer/week-1'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/training/frontend-developer" className="flex items-center text-gray-600 hover:text-gray-900">
              ← Volver al programa
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                🎨
              </div>
              <span className="font-semibold text-gray-900">Frontend Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              ¡Bienvenido a tu viaje Frontend! 🚀
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Estás a punto de comenzar una transformación increíble. En 12 semanas, 
              desarrollarás las habilidades para convertirte en un Frontend Developer profesional.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold mb-2">12 Semanas</h3>
                <p className="text-blue-100 text-sm">Curriculum estructurado</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold mb-2">6 Proyectos</h3>
                <p className="text-blue-100 text-sm">Portfolio real</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">A tu ritmo</h3>
                <p className="text-blue-100 text-sm">Sin fechas límite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Selection */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cuáles son tus objetivos?
              </h2>
              <p className="text-xl text-gray-600">
                Selecciona lo que esperas lograr con este programa. Esto nos ayudará a personalizar tu experiencia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {goals.map((goal, index) => (
                <button
                  key={index}
                  onClick={() => toggleGoal(goal)}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    userGoals.includes(goal)
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      userGoals.includes(goal)
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {userGoals.includes(goal) && (
                        <CheckCircle className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="font-medium">{goal}</span>
                  </div>
                </button>
              ))}
            </div>

            {userGoals.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-green-900 mb-2">¡Excelente elección!</h3>
                <p className="text-green-800 text-sm">
                  Has seleccionado {userGoals.length} objetivo{userGoals.length > 1 ? 's' : ''}. 
                  Durante el programa, te iremos mostrando contenido específico para ayudarte a alcanzar estas metas.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What You'll Learn First */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tu primera semana: Fundamentos Web
              </h2>
              <p className="text-xl text-gray-600">
                Comenzaremos con HTML semántico y CSS moderno para crear tu primera página web profesional.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Fase 1: HTML Semántico
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      5-6 horas de contenido
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-blue-500" />
                    Estructura HTML5 moderna
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-blue-500" />
                    Elementos semánticos (header, nav, main)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-blue-500" />
                    Formularios accesibles
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-blue-500" />
                    SEO básico y meta tags
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Proyecto: Landing page corporativa</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Fase 2: CSS Moderno
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      6-7 horas de contenido
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-green-500" />
                    Flexbox y CSS Grid
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-green-500" />
                    Variables CSS y custom properties
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-green-500" />
                    Responsive design mobile-first
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <BookOpen className="h-4 w-4 mr-3 text-green-500" />
                    Animaciones y transiciones
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium text-purple-900">Proyecto: Portfolio personal responsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tu compromiso para el éxito
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  ⏰
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">15-20 horas/semana</h3>
                <p className="text-gray-600 text-sm">
                  Dedicación consistente para absorber bien cada concepto
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💪
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Práctica diaria</h3>
                <p className="text-gray-600 text-sm">
                  Codificar todos los días, aunque sea 30 minutos
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sin rendirse</h3>
                <p className="text-gray-600 text-sm">
                  Persistencia cuando encuentres desafíos
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-2">💡 Recuerda</h3>
              <p className="text-yellow-800 text-sm">
                Este es un viaje de autodescubrimiento. No hay tareas que entregar ni fechas límite. 
                Ve a tu ritmo, pero mantén la consistencia. ¡Cada línea de código te acerca más a tu objetivo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Estás listo para comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tu primera semana te espera. Comenzarás con HTML semántico y construirás 
            tu primera página web profesional.
          </p>
          
          <button
            onClick={startWeekOne}
            className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <PlayCircle className="h-6 w-6 mr-2" />
            Comenzar Semana 1: Fundamentos Web
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
          
          <p className="text-blue-100 text-sm mt-4">
            ✨ Tu progreso se guardará automáticamente
          </p>
        </div>
      </section>
    </div>
  )
}
