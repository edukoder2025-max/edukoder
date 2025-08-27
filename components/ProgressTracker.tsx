'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Circle, Clock, Trophy, Target } from 'lucide-react'

interface Module {
  id: number
  title: string
  completed: boolean
  duration: string
}

interface ProgressTrackerProps {
  seriesTitle: string
  modules: Module[]
  onModuleToggle?: (moduleId: number) => void
}

export default function ProgressTracker({ seriesTitle, modules, onModuleToggle }: ProgressTrackerProps) {
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [totalTimeSpent, setTotalTimeSpent] = useState(0)

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${seriesTitle}`)
    if (saved) {
      const data = JSON.parse(saved)
      setCompletedModules(data.completed || [])
      setTotalTimeSpent(data.timeSpent || 0)
    }
  }, [seriesTitle])

  // Save progress to localStorage when completed modules change
  useEffect(() => {
    const progressData = {
      completed: completedModules,
      timeSpent: totalTimeSpent,
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem(`progress-${seriesTitle}`, JSON.stringify(progressData))
  }, [completedModules, totalTimeSpent, seriesTitle])

  const toggleModule = (moduleId: number) => {
    setCompletedModules(prev => {
      const isCompleted = prev.includes(moduleId)
      const module = modules.find(m => m.id === moduleId)
      
      if (isCompleted) {
        // Remove from completed
        if (module) {
          const duration = parseInt(module.duration)
          setTotalTimeSpent(time => Math.max(0, time - duration))
        }
        return prev.filter(id => id !== moduleId)
      } else {
        // Add to completed
        if (module) {
          const duration = parseInt(module.duration)
          setTotalTimeSpent(time => time + duration)
        }
        return [...prev, moduleId]
      }
    })

    onModuleToggle?.(moduleId)
  }

  const completionPercentage = Math.round((completedModules.length / modules.length) * 100)
  const remainingModules = modules.length - completedModules.length
  const estimatedTimeRemaining = modules
    .filter(m => !completedModules.includes(m.id))
    .reduce((total, m) => total + parseInt(m.duration), 0)

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - completionPercentage / 100)}`}
              className="text-green-500 transition-all duration-300"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900">
              {completionPercentage}%
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Tu Progreso
        </h3>
        <p className="text-sm text-gray-600">
          {completedModules.length} de {modules.length} módulos completados
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto mb-2">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {totalTimeSpent}h
          </div>
          <div className="text-xs text-gray-500">Completadas</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mx-auto mb-2">
            <Target className="h-5 w-5 text-orange-600" />
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {remainingModules}
          </div>
          <div className="text-xs text-gray-500">Restantes</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mx-auto mb-2">
            <Trophy className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {estimatedTimeRemaining}h
          </div>
          <div className="text-xs text-gray-500">Estimadas</div>
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900 mb-3">Módulos</h4>
        <div className="max-h-64 overflow-y-auto space-y-2">
          {modules.map((module) => {
            const isCompleted = completedModules.includes(module.id)
            return (
              <button
                key={module.id}
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                  isCompleted 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                )}
                
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium ${
                    isCompleted ? 'text-green-900 line-through' : 'text-gray-900'
                  }`}>
                    {module.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {module.duration}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Achievement */}
      {completionPercentage === 100 && (
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg text-center">
          <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-yellow-900">
            ¡Felicitaciones!
          </div>
          <div className="text-xs text-yellow-700">
            Has completado toda la serie
          </div>
        </div>
      )}

      {/* Next Milestone */}
      {completionPercentage < 100 && completionPercentage >= 25 && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm font-medium text-blue-900 mb-1">
            Próximo hito: {completionPercentage < 50 ? '50%' : completionPercentage < 75 ? '75%' : '100%'}
          </div>
          <div className="text-xs text-blue-700">
            Te faltan {Math.ceil((modules.length * (completionPercentage < 50 ? 0.5 : completionPercentage < 75 ? 0.75 : 1)) - completedModules.length)} módulos
          </div>
        </div>
      )}
    </div>
  )
}
