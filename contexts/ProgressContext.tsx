'use client'

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'

// Types
interface LessonProgress {
  lessonId: string
  completed: boolean
  timeSpent: number
  lastAccessed: Date
  quizScore?: number
  exerciseCompleted?: boolean
  notes?: string
}

interface ModuleProgress {
  moduleId: string
  seriesId: string
  lessons: Record<string, LessonProgress>
  completed: boolean
  certificateEarned?: boolean
  startedAt: Date
  completedAt?: Date
}

interface UserProgress {
  userId?: string
  totalTimeSpent: number
  modulesProgress: Record<string, ModuleProgress>
  achievements: string[]
  currentStreak: number
  lastActivityDate: Date
}

interface ProgressContextType {
  progress: UserProgress
  markLessonComplete: (seriesId: string, moduleId: string, lessonId: string) => void
  updateLessonTime: (seriesId: string, moduleId: string, lessonId: string, timeSpent: number) => void
  saveQuizScore: (seriesId: string, moduleId: string, lessonId: string, score: number) => void
  completeExercise: (seriesId: string, moduleId: string, lessonId: string) => void
  saveNotes: (seriesId: string, moduleId: string, lessonId: string, notes: string) => void
  getLessonProgress: (seriesId: string, moduleId: string, lessonId: string) => LessonProgress | null
  getModuleProgress: (seriesId: string, moduleId: string) => ModuleProgress | null
  getSeriesProgress: (seriesId: string) => { completed: number; total: number; percentage: number }
  unlockAchievement: (achievementId: string) => void
  resetProgress: () => void
}

// Actions
type ProgressAction =
  | { type: 'MARK_LESSON_COMPLETE'; payload: { seriesId: string; moduleId: string; lessonId: string } }
  | { type: 'UPDATE_LESSON_TIME'; payload: { seriesId: string; moduleId: string; lessonId: string; timeSpent: number } }
  | { type: 'SAVE_QUIZ_SCORE'; payload: { seriesId: string; moduleId: string; lessonId: string; score: number } }
  | { type: 'COMPLETE_EXERCISE'; payload: { seriesId: string; moduleId: string; lessonId: string } }
  | { type: 'SAVE_NOTES'; payload: { seriesId: string; moduleId: string; lessonId: string; notes: string } }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: { achievementId: string } }
  | { type: 'LOAD_PROGRESS'; payload: UserProgress }
  | { type: 'RESET_PROGRESS' }

// Initial state
const initialProgress: UserProgress = {
  totalTimeSpent: 0,
  modulesProgress: {},
  achievements: [],
  currentStreak: 0,
  lastActivityDate: new Date()
}

// Reducer
function progressReducer(state: UserProgress, action: ProgressAction): UserProgress {
  switch (action.type) {
    case 'MARK_LESSON_COMPLETE': {
      const { seriesId, moduleId, lessonId } = action.payload
      const moduleKey = `${seriesId}-${moduleId}`
      
      const updatedState = {
        ...state,
        modulesProgress: {
          ...state.modulesProgress,
          [moduleKey]: {
            moduleId,
            seriesId,
            startedAt: state.modulesProgress[moduleKey]?.startedAt || new Date(),
            completed: false,
            lessons: {
              ...state.modulesProgress[moduleKey]?.lessons,
              [lessonId]: {
                ...state.modulesProgress[moduleKey]?.lessons?.[lessonId],
                lessonId,
                completed: true,
                lastAccessed: new Date(),
                timeSpent: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.timeSpent || 0
              }
            }
          }
        },
        lastActivityDate: new Date()
      }

      // Check if module is completed
      const moduleProgress = updatedState.modulesProgress[moduleKey]
      const totalLessons = Object.keys(moduleProgress.lessons).length
      const completedLessons = Object.values(moduleProgress.lessons).filter(l => l.completed).length
      
      if (completedLessons > 0 && completedLessons === totalLessons) {
        moduleProgress.completed = true
        moduleProgress.completedAt = new Date()
      }

      return updatedState
    }

    case 'UPDATE_LESSON_TIME': {
      const { seriesId, moduleId, lessonId, timeSpent } = action.payload
      const moduleKey = `${seriesId}-${moduleId}`

      return {
        ...state,
        totalTimeSpent: state.totalTimeSpent + timeSpent,
        modulesProgress: {
          ...state.modulesProgress,
          [moduleKey]: {
            moduleId,
            seriesId,
            startedAt: state.modulesProgress[moduleKey]?.startedAt || new Date(),
            completed: state.modulesProgress[moduleKey]?.completed || false,
            lessons: {
              ...state.modulesProgress[moduleKey]?.lessons,
              [lessonId]: {
                ...state.modulesProgress[moduleKey]?.lessons?.[lessonId],
                lessonId,
                completed: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.completed || false,
                timeSpent: (state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.timeSpent || 0) + timeSpent,
                lastAccessed: new Date()
              }
            }
          }
        },
        lastActivityDate: new Date()
      }
    }

    case 'SAVE_QUIZ_SCORE': {
      const { seriesId, moduleId, lessonId, score } = action.payload
      const moduleKey = `${seriesId}-${moduleId}`

      return {
        ...state,
        modulesProgress: {
          ...state.modulesProgress,
          [moduleKey]: {
            moduleId,
            seriesId,
            startedAt: state.modulesProgress[moduleKey]?.startedAt || new Date(),
            completed: state.modulesProgress[moduleKey]?.completed || false,
            lessons: {
              ...state.modulesProgress[moduleKey]?.lessons,
              [lessonId]: {
                ...state.modulesProgress[moduleKey]?.lessons?.[lessonId],
                lessonId,
                completed: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.completed || false,
                timeSpent: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.timeSpent || 0,
                quizScore: score,
                lastAccessed: new Date()
              }
            }
          }
        },
        lastActivityDate: new Date()
      }
    }

    case 'COMPLETE_EXERCISE': {
      const { seriesId, moduleId, lessonId } = action.payload
      const moduleKey = `${seriesId}-${moduleId}`

      return {
        ...state,
        modulesProgress: {
          ...state.modulesProgress,
          [moduleKey]: {
            moduleId,
            seriesId,
            startedAt: state.modulesProgress[moduleKey]?.startedAt || new Date(),
            completed: state.modulesProgress[moduleKey]?.completed || false,
            lessons: {
              ...state.modulesProgress[moduleKey]?.lessons,
              [lessonId]: {
                ...state.modulesProgress[moduleKey]?.lessons?.[lessonId],
                lessonId,
                completed: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.completed || false,
                timeSpent: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.timeSpent || 0,
                exerciseCompleted: true,
                lastAccessed: new Date()
              }
            }
          }
        },
        lastActivityDate: new Date()
      }
    }

    case 'SAVE_NOTES': {
      const { seriesId, moduleId, lessonId, notes } = action.payload
      const moduleKey = `${seriesId}-${moduleId}`

      return {
        ...state,
        modulesProgress: {
          ...state.modulesProgress,
          [moduleKey]: {
            moduleId,
            seriesId,
            startedAt: state.modulesProgress[moduleKey]?.startedAt || new Date(),
            completed: state.modulesProgress[moduleKey]?.completed || false,
            lessons: {
              ...state.modulesProgress[moduleKey]?.lessons,
              [lessonId]: {
                ...state.modulesProgress[moduleKey]?.lessons?.[lessonId],
                lessonId,
                completed: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.completed || false,
                timeSpent: state.modulesProgress[moduleKey]?.lessons?.[lessonId]?.timeSpent || 0,
                notes,
                lastAccessed: new Date()
              }
            }
          }
        }
      }
    }

    case 'UNLOCK_ACHIEVEMENT': {
      const { achievementId } = action.payload
      if (state.achievements.includes(achievementId)) {
        return state
      }

      return {
        ...state,
        achievements: [...state.achievements, achievementId]
      }
    }

    case 'LOAD_PROGRESS': {
      return action.payload
    }

    case 'RESET_PROGRESS': {
      return initialProgress
    }

    default:
      return state
  }
}

// Context
const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

// Provider
export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(progressReducer, initialProgress)

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress')
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress)
        // Convert date strings back to Date objects
        if (parsed.lastActivityDate) {
          parsed.lastActivityDate = new Date(parsed.lastActivityDate)
        }
        Object.values(parsed.modulesProgress).forEach((module: any) => {
          if (module.startedAt) module.startedAt = new Date(module.startedAt)
          if (module.completedAt) module.completedAt = new Date(module.completedAt)
          Object.values(module.lessons).forEach((lesson: any) => {
            if (lesson.lastAccessed) lesson.lastAccessed = new Date(lesson.lastAccessed)
          })
        })
        dispatch({ type: 'LOAD_PROGRESS', payload: parsed })
      } catch (error) {
        console.error('Error loading progress from localStorage:', error)
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(progress))
  }, [progress])

  const markLessonComplete = (seriesId: string, moduleId: string, lessonId: string) => {
    dispatch({ type: 'MARK_LESSON_COMPLETE', payload: { seriesId, moduleId, lessonId } })
  }

  const updateLessonTime = (seriesId: string, moduleId: string, lessonId: string, timeSpent: number) => {
    dispatch({ type: 'UPDATE_LESSON_TIME', payload: { seriesId, moduleId, lessonId, timeSpent } })
  }

  const saveQuizScore = (seriesId: string, moduleId: string, lessonId: string, score: number) => {
    dispatch({ type: 'SAVE_QUIZ_SCORE', payload: { seriesId, moduleId, lessonId, score } })
  }

  const completeExercise = (seriesId: string, moduleId: string, lessonId: string) => {
    dispatch({ type: 'COMPLETE_EXERCISE', payload: { seriesId, moduleId, lessonId } })
  }

  const saveNotes = (seriesId: string, moduleId: string, lessonId: string, notes: string) => {
    dispatch({ type: 'SAVE_NOTES', payload: { seriesId, moduleId, lessonId, notes } })
  }

  const getLessonProgress = (seriesId: string, moduleId: string, lessonId: string): LessonProgress | null => {
    const moduleKey = `${seriesId}-${moduleId}`
    return progress.modulesProgress[moduleKey]?.lessons[lessonId] || null
  }

  const getModuleProgress = (seriesId: string, moduleId: string): ModuleProgress | null => {
    const moduleKey = `${seriesId}-${moduleId}`
    return progress.modulesProgress[moduleKey] || null
  }

  const getSeriesProgress = (seriesId: string) => {
    const seriesModules = Object.values(progress.modulesProgress).filter(m => m.seriesId === seriesId)
    const totalModules = seriesModules.length
    const completedModules = seriesModules.filter(m => m.completed).length
    
    return {
      completed: completedModules,
      total: totalModules,
      percentage: totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
    }
  }

  const unlockAchievement = (achievementId: string) => {
    dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: { achievementId } })
  }

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' })
  }

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markLessonComplete,
        updateLessonTime,
        saveQuizScore,
        completeExercise,
        saveNotes,
        getLessonProgress,
        getModuleProgress,
        getSeriesProgress,
        unlockAchievement,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

// Hook
export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
