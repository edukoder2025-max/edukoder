'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Trophy, Target, BookOpen, PlayCircle, Lock } from 'lucide-react'

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  locked: boolean
  type: 'video' | 'exercise' | 'quiz' | 'project'
}

interface Module {
  id: string
  title: string
  lessons: Lesson[]
  completed: boolean
}

interface AdvancedProgressTrackerProps {
  modules: Module[]
  currentModuleId: string
  currentLessonId?: string
  totalTimeSpent?: number
  certificateProgress?: number
}

export default function AdvancedProgressTracker({
  modules,
  currentModuleId,
  currentLessonId,
  totalTimeSpent = 0,
  certificateProgress = 0
}: AdvancedProgressTrackerProps) {
  const [expandedModule, setExpandedModule] = useState<string>(currentModuleId)
  const [stats, setStats] = useState({
    completedLessons: 0,
    totalLessons: 0,
    completedModules: 0,
    totalModules: modules.length
  })

  useEffect(() => {
    const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0)
    const completedLessons = modules.reduce((acc, module) => 
      acc + module.lessons.filter(lesson => lesson.completed).length, 0
    )
    const completedModules = modules.filter(module => module.completed).length

    setStats({
      completedLessons,
      totalLessons,
      completedModules,
      totalModules: modules.length
    })
  }, [modules])

  const getOverallProgress = () => {
    return Math.round((stats.completedLessons / stats.totalLessons) * 100)
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const getLessonIcon = (lesson: Lesson) => {
    if (lesson.completed) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    
    if (lesson.locked) {
      return <Lock className="h-4 w-4 text-gray-400" />
    }

    switch (lesson.type) {
      case 'video':
        return <PlayCircle className="h-4 w-4 text-blue-500" />
      case 'exercise':
        return <BookOpen className="h-4 w-4 text-orange-500" />
      case 'quiz':
        return <Target className="h-4 w-4 text-purple-500" />
      case 'project':
        return <Trophy className="h-4 w-4 text-yellow-500" />
      default:
        return <BookOpen className="h-4 w-4 text-gray-500" />
    }
  }

  const getLessonTypeLabel = (type: string) => {
    const labels = {
      video: 'Video',
      exercise: 'Ejercicio',
      quiz: 'Quiz',
      project: 'Proyecto'
    }
    return labels[type as keyof typeof labels] || 'Lección'
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <h3 className="text-lg font-semibold mb-4">Tu Progreso</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{getOverallProgress()}%</div>
            <div className="text-blue-100 text-sm">Completado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{formatTime(totalTimeSpent)}</div>
            <div className="text-blue-100 text-sm">Tiempo total</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${getOverallProgress()}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-blue-100 mt-2">
          <span>{stats.completedLessons} de {stats.totalLessons} lecciones</span>
          <span>{stats.completedModules} de {stats.totalModules} módulos</span>
        </div>
      </div>

      {/* Certificate Progress */}
      {certificateProgress > 0 && (
        <div className="p-4 bg-yellow-50 border-b border-yellow-200">
          <div className="flex items-center mb-2">
            <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="font-medium text-yellow-900">Progreso del Certificado</span>
          </div>
          <div className="w-full bg-yellow-200 rounded-full h-2">
            <div
              className="bg-yellow-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${certificateProgress}%` }}
            ></div>
          </div>
          <div className="text-sm text-yellow-700 mt-1">
            {certificateProgress}% completado para obtener tu certificado
          </div>
        </div>
      )}

      {/* Modules List */}
      <div className="max-h-96 overflow-y-auto">
        {modules.map((module) => (
          <div key={module.id} className="border-b border-gray-100 last:border-b-0">
            <button
              onClick={() => setExpandedModule(expandedModule === module.id ? '' : module.id)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
            >
              <div className="flex items-center">
                {module.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3" />
                )}
                <div>
                  <div className="font-medium text-gray-900">{module.title}</div>
                  <div className="text-sm text-gray-500">
                    {module.lessons.filter(l => l.completed).length} de {module.lessons.length} lecciones
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                {module.id === currentModuleId && (
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mr-2">
                    Actual
                  </span>
                )}
                <svg
                  className={`w-4 h-4 text-gray-400 transform transition-transform ${
                    expandedModule === module.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Lessons List */}
            {expandedModule === module.id && (
              <div className="bg-gray-50">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`px-8 py-2 flex items-center justify-between ${
                      lesson.id === currentLessonId ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    } ${lesson.locked ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center">
                      {getLessonIcon(lesson)}
                      <div className="ml-3">
                        <div className={`text-sm ${lesson.completed ? 'text-gray-600' : 'text-gray-900'} ${lesson.completed ? 'line-through' : ''}`}>
                          {lesson.title}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {lesson.duration}
                          <span className="mx-2">•</span>
                          {getLessonTypeLabel(lesson.type)}
                        </div>
                      </div>
                    </div>
                    
                    {lesson.id === currentLessonId && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Actual
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="font-semibold text-gray-900">{stats.completedLessons}</div>
            <div className="text-gray-500">Completadas</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{stats.totalLessons - stats.completedLessons}</div>
            <div className="text-gray-500">Pendientes</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{formatTime(totalTimeSpent)}</div>
            <div className="text-gray-500">Tiempo total</div>
          </div>
        </div>
      </div>
    </div>
  )
}
