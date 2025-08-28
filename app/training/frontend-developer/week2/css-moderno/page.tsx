'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react'
import { useProgress } from '@/contexts/ProgressContext'
import VideoPlayer from '@/components/VideoPlayer'
import InteractiveQuiz from '@/components/InteractiveQuiz'
import CodeEditor from '@/components/CodeEditor'

export default function CSSModernoPage() {
  const { markLessonComplete, updateLessonTime, saveQuizScore, completeExercise } = useProgress()
  const [lessonCompleted, setLessonCompleted] = useState(false)

  const lessonData = {
    series: 'Frontend Developer',
    seriesId: 'frontend-developer',
    week: 2,
    moduleId: 'week2',
    lessonId: 'css-moderno',
    title: 'CSS Moderno: Flexbox y Grid',
    duration: '55 minutos',
    difficulty: 'Intermedio',
    description: 'Domina las técnicas modernas de CSS para crear layouts flexibles y responsivos con Flexbox y CSS Grid.'
  }

  const videoChapters = [
    { time: 0, title: 'Introducción a CSS Moderno', description: 'Visión general de Flexbox y Grid' },
    { time: 180, title: 'Flexbox Fundamentals', description: 'Conceptos básicos y propiedades principales' },
    { time: 480, title: 'Flexbox en Acción', description: 'Ejemplos prácticos y casos de uso' },
    { time: 720, title: 'CSS Grid Layout', description: 'Sistema de cuadrícula bidimensional' },
    { time: 1020, title: 'Grid vs Flexbox', description: 'Cuándo usar cada uno' },
    { time: 1260, title: 'Proyecto Práctico', description: 'Creando un layout completo' }
  ]

  const videoResources = [
    { title: 'CSS Flexbox Guide', url: '#', type: 'pdf' as const },
    { title: 'Grid Layout Examples', url: '#', type: 'code' as const },
    { title: 'Can I Use - CSS Grid', url: '#', type: 'link' as const }
  ]

  const initialFlexboxCode = `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.item {
  background: #3b82f6;
  color: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 100px;
  text-align: center;
}

/* Tu código aquí - Haz que los items se distribuyan uniformemente */`

  const gridCode = `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Experimenta con grid-template-areas para layouts complejos */`

  const quizQuestions = [
    {
      question: '¿Cuál es la principal diferencia entre Flexbox y CSS Grid?',
      options: [
        'Flexbox es para layouts 1D, Grid es para layouts 2D',
        'Grid es más moderno que Flexbox',
        'Flexbox solo funciona en navegadores nuevos',
        'No hay diferencia significativa'
      ],
      correct: 0,
      explanation: 'Flexbox está diseñado para layouts unidimensionales (fila o columna), mientras que CSS Grid maneja layouts bidimensionales (filas y columnas simultáneamente).'
    },
    {
      question: '¿Qué propiedad usarías para centrar elementos tanto horizontal como verticalmente con Flexbox?',
      options: [
        'align-items: center',
        'justify-content: center',
        'align-items: center y justify-content: center',
        'text-align: center'
      ],
      correct: 2,
      explanation: 'Para centrar completamente necesitas align-items: center (eje cruzado) y justify-content: center (eje principal).'
    },
    {
      question: '¿Cuál es la unidad fr en CSS Grid?',
      options: [
        'Fractal unit - para elementos curvos',
        'Frame unit - para animaciones',
        'Fraction unit - representa una fracción del espacio disponible',
        'Fixed unit - tamaño fijo en píxeles'
      ],
      correct: 2,
      explanation: 'La unidad "fr" (fraction) representa una fracción del espacio libre disponible en el contenedor grid.'
    }
  ]

  const handleVideoProgress = (progress: number) => {
    if (progress > 0) {
      updateLessonTime(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, 1)
    }
  }

  const handleVideoComplete = () => {
    updateLessonTime(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, 5)
  }

  const handleQuizComplete = (score: number, total: number) => {
    const percentage = Math.round((score / total) * 100)
    saveQuizScore(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, percentage)
    
    if (percentage >= 80) {
      completeExercise(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)
    }
  }

  const handleLessonComplete = () => {
    markLessonComplete(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)
    setLessonCompleted(true)
  }

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
              <div className="text-sm text-gray-500">Semana 2 - Lección 2</div>
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
          <div className="lg:col-span-3 space-y-8">
            {/* Video Section */}
            <VideoPlayer
              title={lessonData.title}
              description={lessonData.description}
              duration={lessonData.duration}
              chapters={videoChapters}
              resources={videoResources}
              onProgress={handleVideoProgress}
              onComplete={handleVideoComplete}
            />

            {/* Learning Objectives */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Objetivos de Aprendizaje</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Entender cuándo usar Flexbox vs CSS Grid</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Crear layouts flexibles y responsivos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dominar las propiedades principales de ambos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implementar diseños modernos y profesionales</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Editor - Flexbox */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Práctica: Flexbox Layout</h2>
              <p className="text-gray-600 mb-6">
                Modifica el CSS para que los elementos se distribuyan uniformemente y tengan el mismo tamaño.
                Usa las propiedades <code className="bg-gray-100 px-2 py-1 rounded">flex-grow</code> y <code className="bg-gray-100 px-2 py-1 rounded">flex-basis</code>.
              </p>
              
              <CodeEditor
                initialCode={initialFlexboxCode}
                language="css"
                title="Editor CSS - Flexbox"
                expectedOutput="Los elementos deben tener el mismo ancho y distribuirse uniformemente"
                hints={[
                  'Usa flex: 1 para que todos los elementos tengan el mismo tamaño',
                  'justify-content: space-between distribuye el espacio entre elementos',
                  'align-items controla la alineación en el eje cruzado'
                ]}
              />
            </div>

            {/* Interactive Code Editor - Grid */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Práctica: CSS Grid Layout</h2>
              <p className="text-gray-600 mb-6">
                Experimenta con CSS Grid para crear layouts complejos. Prueba diferentes valores en <code className="bg-gray-100 px-2 py-1 rounded">grid-template-columns</code>.
              </p>
              
              <CodeEditor
                initialCode={gridCode}
                language="css"
                title="Editor CSS - Grid"
                hints={[
                  'repeat(3, 1fr) crea 3 columnas del mismo tamaño',
                  'minmax(200px, 1fr) establece un tamaño mínimo y máximo',
                  'grid-template-areas permite nombrar áreas del grid'
                ]}
              />
            </div>

            {/* Interactive Quiz */}
            <InteractiveQuiz
              questions={quizQuestions}
              title="Quiz: CSS Moderno"
            />

            {/* Completion Section */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Completaste la lección?</h3>
                  <p className="text-gray-600">
                    Marca como completada cuando hayas visto el video y practicado con los ejercicios.
                  </p>
                </div>
                
                {!lessonCompleted ? (
                  <button
                    onClick={handleLessonComplete}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Marcar Completada
                  </button>
                ) : (
                  <div className="flex items-center text-green-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span className="font-medium">¡Lección Completada!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Link 
                href="/training/frontend-developer/week2/html-semantico"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Lección anterior
              </Link>
              
              <Link 
                href="/training/frontend-developer/week2/responsive-design" 
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
              <h3 className="font-semibold text-gray-900 mb-4">Progreso de la Semana</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">HTML Semántico</span>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm">CSS Moderno</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Responsive Design</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Mobile First</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Recursos Útiles</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📖 CSS Grid Guide</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎮 Flexbox Froggy</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎯 Grid Garden</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📱 Responsive Examples</a>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Tu Progreso</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo en lección:</span>
                    <span className="font-medium">23min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quiz score:</span>
                    <span className="font-medium text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ejercicios:</span>
                    <span className="font-medium">2/2</span>
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
