'use client'

import Link from 'next/link'
import { Trophy, Clock, Target, BookOpen, TrendingUp, Calendar, Award, Star } from 'lucide-react'
import { useProgress } from '@/contexts/ProgressContext'
import AdvancedProgressTracker from '@/components/AdvancedProgressTracker'

export default function DashboardPage() {
  const { progress, getSeriesProgress } = useProgress()

  const seriesData = [
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
      totalModules: 12
    },
    {
      id: 'backend-developer', 
      title: 'Backend Developer',
      color: 'from-purple-500 to-pink-500',
      icon: '⚙️',
      totalModules: 10
    },
    {
      id: 'career-development',
      title: 'Desarrollo de Carrera',
      color: 'from-green-500 to-teal-500',
      icon: '🚀',
      totalModules: 6
    }
  ]

  const achievements = [
    { id: 'first-lesson', title: 'Primera Lección', description: 'Completaste tu primera lección', icon: '🎯', earned: progress.achievements.includes('first-lesson') },
    { id: 'quiz-master', title: 'Quiz Master', description: 'Obtuviste 100% en 5 quizzes', icon: '🧠', earned: progress.achievements.includes('quiz-master') },
    { id: 'code-warrior', title: 'Code Warrior', description: 'Completaste 10 ejercicios de código', icon: '💻', earned: progress.achievements.includes('code-warrior') },
    { id: 'time-master', title: 'Time Master', description: 'Estudia 10 horas en total', icon: '⏰', earned: progress.achievements.includes('time-master') },
    { id: 'module-complete', title: 'Módulo Completo', description: 'Completaste tu primer módulo', icon: '📚', earned: progress.achievements.includes('module-complete') },
    { id: 'streak-week', title: 'Racha Semanal', description: 'Estudia 7 días seguidos', icon: '🔥', earned: progress.achievements.includes('streak-week') }
  ]

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  const getTotalProgress = () => {
    const allSeries = seriesData.map(series => getSeriesProgress(series.id))
    const totalModules = allSeries.reduce((acc, series) => acc + (series.total || 0), 0)
    const completedModules = allSeries.reduce((acc, series) => acc + series.completed, 0)
    return totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
  }

  const earnedAchievements = achievements.filter(a => a.earned)
  const recentActivity = Object.values(progress.modulesProgress)
    .flatMap(module => Object.values(module.lessons))
    .sort((a, b) => new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Mi Panel de Aprendizaje
            </h1>
            <p className="text-xl text-blue-100">
              Sigue tu progreso y continúa aprendiendo
            </p>
          </div>
        </div>
      </section>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{getTotalProgress()}%</div>
                <div className="text-sm text-gray-500">Progreso Total</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{formatTime(progress.totalTimeSpent)}</div>
                <div className="text-sm text-gray-500">Tiempo Total</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{earnedAchievements.length}</div>
                <div className="text-sm text-gray-500">Logros</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{progress.currentStreak}</div>
                <div className="text-sm text-gray-500">Racha Días</div>
              </div>
            </div>

            {/* Series Progress */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Progreso por Serie</h2>
              
              <div className="space-y-6">
                {seriesData.map((series) => {
                  const progress = getSeriesProgress(series.id)
                  return (
                    <div key={series.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 bg-gradient-to-r ${series.color} rounded-lg flex items-center justify-center text-xl mr-4`}>
                            {series.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{series.title}</h3>
                            <p className="text-sm text-gray-500">
                              {progress.completed} de {series.totalModules} módulos completados
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{progress.percentage}%</div>
                          <Link 
                            href={`/training/${series.id}`}
                            className="text-sm text-blue-600 hover:text-blue-700"
                          >
                            Continuar →
                          </Link>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${series.color} transition-all duration-500`}
                          style={{ width: `${progress.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Actividad Reciente</h2>
              
              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          {lesson.completed ? (
                            <Trophy className="h-5 w-5 text-yellow-600" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Lección {lesson.lessonId}</div>
                          <div className="text-sm text-gray-500">
                            {lesson.completed ? 'Completada' : 'En progreso'} • {formatTime(lesson.timeSpent)}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(lesson.lastAccessed).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">¡Comienza tu primera lección para ver tu actividad aquí!</p>
                  <Link 
                    href="/training" 
                    className="inline-flex items-center mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explorar Series
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Logros</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      achievement.earned
                        ? 'border-yellow-300 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className={`font-medium text-sm ${achievement.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
                      {achievement.title}
                    </div>
                    <div className={`text-xs mt-1 ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Racha de Estudio</h3>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-orange-600">{progress.currentStreak}</div>
                <div className="text-sm text-gray-500">días consecutivos</div>
              </div>
              
              <div className="mt-4 grid grid-cols-7 gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded text-xs flex items-center justify-center font-medium ${
                      i < progress.currentStreak
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
              
              <div className="space-y-3">
                <Link
                  href="/training"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explorar Series
                </Link>
                
                <Link
                  href="/tutorials"
                  className="block w-full border border-gray-300 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Ver Microtutoriales
                </Link>
                
                <Link
                  href="/ebook"
                  className="block w-full bg-yellow-400 text-gray-900 text-center py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                >
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
