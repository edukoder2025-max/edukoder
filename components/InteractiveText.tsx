'use client'

import { useState, useRef, useEffect } from 'react'
import CodeBlock from './CodeBlock'
import { CheckCircle } from 'lucide-react'

interface SectionQuiz {
  question: string
  options: string[]
  correct: number
}

interface Section {
  id: string
  title: string
  paragraphs?: string[]
  code?: string
  language?: string
  quiz?: SectionQuiz
}

interface InteractiveTextProps {
  sections: Section[]
  onSectionRead?: (sectionId: string, timeSpent: number) => void
  onComplete?: () => void
}

export default function InteractiveText({ sections, onSectionRead, onComplete }: InteractiveTextProps) {
  const [open, setOpen] = useState<string | null>(sections[0]?.id || null)
  const [read, setRead] = useState<Record<string, boolean>>({})
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const timers = useRef<Record<string, number>>({})
  const startTimes = useRef<Record<string, number>>({})

  useEffect(() => {
    // start timer for first open
    if (open) startTimes.current[open] = Date.now()
  }, [])

  const toggle = (id: string) => {
    if (open === id) {
      // closing -> stop timer
      const start = startTimes.current[id]
      if (start) {
        const delta = Math.floor((Date.now() - start) / 1000)
        timers.current[id] = (timers.current[id] || 0) + delta
        if (onSectionRead) onSectionRead(id, timers.current[id])
      }
      setOpen(null)
    } else {
      // opening new -> record start
      if (open) {
        const prev = open
        const start = startTimes.current[prev]
        if (start) {
          const delta = Math.floor((Date.now() - start) / 1000)
          timers.current[prev] = (timers.current[prev] || 0) + delta
          if (onSectionRead) onSectionRead(prev, timers.current[prev])
        }
      }
      startTimes.current[id] = Date.now()
      setOpen(id)
    }
  }

  const markRead = (id: string) => {
    const start = startTimes.current[id]
    if (start) {
      const delta = Math.floor((Date.now() - start) / 1000)
      timers.current[id] = (timers.current[id] || 0) + delta
    }
    setRead(r => ({ ...r, [id]: true }))
    if (onSectionRead) onSectionRead(id, timers.current[id] || 0)
  }

  const answerQuiz = (id: string, optionIndex: number) => {
    setQuizAnswers(q => ({ ...q, [id]: optionIndex }))
  }

  const finish = () => {
    // ensure timers flushed
    if (open) {
      const start = startTimes.current[open]
      if (start) {
        const delta = Math.floor((Date.now() - start) / 1000)
        timers.current[open] = (timers.current[open] || 0) + delta
        if (onSectionRead) onSectionRead(open, timers.current[open])
      }
    }
    if (onComplete) onComplete()
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Lectura interactiva</h2>
      <div className="space-y-4">
        {sections.map((s) => (
          <div key={s.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button onClick={() => toggle(s.id)} className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center">
              <span className="font-medium">{s.title}</span>
              <span className="text-sm text-gray-500">{read[s.id] ? 'Leído' : (open === s.id ? 'Abierto' : 'Abrir')}</span>
            </button>
            {open === s.id && (
              <div className="p-4 bg-white">
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="text-gray-700 mb-3">{p}</p>
                ))}
                {s.code && (
                  <div className="mb-3">
                    <CodeBlock code={s.code} language={s.language || 'html'} />
                  </div>
                )}
                {s.quiz && (
                  <div className="mt-3 p-3 border rounded">
                    <div className="font-medium mb-2">{s.quiz.question}</div>
                    <div className="space-y-2">
                      {s.quiz.options.map((opt, idx) => {
                        const selected = quizAnswers[s.id] === idx
                        const correct = s.quiz!.correct === idx
                        return (
                          <button key={idx} onClick={() => answerQuiz(s.id, idx)} className={`w-full text-left p-2 rounded ${selected ? (correct ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300') : 'bg-gray-50 hover:bg-gray-100'}`}>
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    {quizAnswers[s.id] !== undefined && (
                      <div className="mt-2 text-sm text-gray-700">
                        {quizAnswers[s.id] === s.quiz.correct ? <span className="text-green-700">Respuesta correcta <CheckCircle className="inline-block ml-2" /></span> : <span className="text-red-700">Respuesta incorrecta</span>}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-4 flex gap-2">
                  <button onClick={() => markRead(s.id)} className="bg-blue-600 text-white px-3 py-2 rounded">Marcar leído</button>
                  <button onClick={() => toggle(s.id)} className="bg-gray-100 px-3 py-2 rounded">Cerrar</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t flex justify-end">
        <button onClick={finish} className="bg-green-600 text-white px-4 py-2 rounded">Marcar lección completa</button>
      </div>
    </div>
  )
}
