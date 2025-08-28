'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react'

interface QuizQuestion {
  question: string
  options: string[]
  // support both 'correct' and legacy 'correctAnswer'
  correct?: number
  correctAnswer?: number
  explanation?: string
}

interface QuizData {
  lessonId: string
  questions: QuizQuestion[]
}

interface InteractiveQuizProps {
  quizData: QuizData
  title?: string
  onQuizComplete?: (score: number) => void
}

export default function InteractiveQuiz({ quizData, title = "Quiz Interactivo", onQuizComplete }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // normalize questions to ensure 'correct' field exists
  const normalizedQuestions = quizData.questions.map(q => ({
    ...q,
    correct: typeof (q as any).correct === 'number' ? (q as any).correct : (q as any).correctAnswer
  }))

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(normalizedQuestions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (!submitted) {
      const newAnswers = [...selectedAnswers]
      newAnswers[currentQuestion] = answerIndex
      setSelectedAnswers(newAnswers)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < normalizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setSubmitted(true)
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(normalizedQuestions.length).fill(-1))
    setShowResults(false)
    setSubmitted(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === normalizedQuestions[index].correct ? 1 : 0)
    }, 0)
  }

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (showResults) {
    const score = calculateScore()
  const percentage = Math.round((score / normalizedQuestions.length) * 100)

    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">{title} - Resultados</h3>
        
        <div className="text-center mb-8">
          <div className={`text-4xl font-bold mb-2 ${getScoreColor(score, normalizedQuestions.length)}`}>
            {score}/{normalizedQuestions.length}
          </div>
          <div className="text-gray-600">
            Puntuación: {percentage}%
          </div>
          
      <div className="mt-4">
        {percentage >= 80 ? (
              <div className="text-green-600 font-medium">¡Excelente trabajo! 🎉</div>
            ) : percentage >= 60 ? (
              <div className="text-yellow-600 font-medium">Buen intento, pero puedes mejorar 💪</div>
            ) : (
              <div className="text-red-600 font-medium">Necesitas repasar el material 📚</div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {normalizedQuestions.map((question, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">
                {index + 1}. {question.question}
              </h4>
              
              <div className="space-y-2 mb-3">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[index] === optionIndex
                  const isCorrect = optionIndex === question.correct
                  const isWrong = isSelected && !isCorrect
                  
                  return (
                    <div
                      key={optionIndex}
                      className={`flex items-center p-2 rounded ${
                        isCorrect
                          ? 'bg-green-100 border border-green-300'
                          : isWrong
                          ? 'bg-red-100 border border-red-300'
                          : isSelected
                          ? 'bg-blue-100 border border-blue-300'
                          : 'bg-gray-50'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      ) : isWrong ? (
                        <XCircle className="h-5 w-5 text-red-600 mr-3" />
                      ) : (
                        <div className="w-5 h-5 mr-3" />
                      )}
                      <span className={`${isCorrect ? 'text-green-800' : isWrong ? 'text-red-800' : 'text-gray-700'}`}>
                        {option}
                      </span>
                    </div>
                  )
                })}
              </div>
              
              {question.explanation && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3">
                  <p className="text-sm text-blue-800">
                    <strong>Explicación:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={restartQuiz}
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

    const question = normalizedQuestions[currentQuestion]
  const isAnswered = selectedAnswers[currentQuestion] !== -1

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="text-sm text-gray-500">
          Pregunta {currentQuestion + 1} de {normalizedQuestions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / normalizedQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          {question.question}
        </h4>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedAnswers[currentQuestion] === index && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-lg ${
            currentQuestion === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Anterior
        </button>
        
        <button
          onClick={() => {
            if (currentQuestion === quizData.questions.length - 1) {
              setSubmitted(true)
              setShowResults(true)
              const finalScore = calculateScore()
              if (onQuizComplete) onQuizComplete(finalScore)
            } else {
              nextQuestion()
            }
          }}
          disabled={!isAnswered}
          className={`px-6 py-2 rounded-lg ${
            isAnswered
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition-colors`}
        >
          {currentQuestion === normalizedQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}
