'use client'

import { useState } from 'react'
import { Play, Copy, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react'

interface CodeEditorProps {
  initialCode: string
  language: 'html' | 'css' | 'javascript' | 'php' | 'react'
  title?: string
  expectedOutput?: string
  hints?: string[]
  showOutput?: boolean
}

export default function CodeEditor({ 
  initialCode, 
  language, 
  title = "Editor de Código",
  expectedOutput,
  hints = [],
  showOutput = true
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [copied, setCopied] = useState(false)

  const runCode = async () => {
    setIsRunning(true)
    
    // Simular ejecución de código
    setTimeout(() => {
      if (language === 'javascript') {
        try {
          // Simulación básica de ejecución de JavaScript
          if (code.includes('console.log')) {
            const matches = code.match(/console\.log\((.*?)\)/g)
            if (matches) {
              const outputs = matches.map(match => {
                const content = match.match(/console\.log\((.*?)\)/)?.[1] || ''
                return eval(content)
              })
              setOutput(outputs.join('\n'))
            }
          } else {
            setOutput('// Código ejecutado sin salida visible')
          }
        } catch (error) {
          setOutput(`Error: ${error}`)
        }
      } else if (language === 'html') {
        setOutput('Vista previa HTML generada')
      } else if (language === 'css') {
        setOutput('Estilos CSS aplicados')
      } else if (language === 'php') {
        setOutput('Código PHP ejecutado en servidor')
      } else if (language === 'react') {
        setOutput('Componente React renderizado')
      }
      setIsRunning(false)
    }, 1000)
  }

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
  }

  const getLanguageColor = () => {
    switch (language) {
      case 'html': return 'text-orange-600'
      case 'css': return 'text-blue-600'
      case 'javascript': return 'text-yellow-600'
      case 'php': return 'text-purple-600'
      case 'react': return 'text-cyan-600'
      default: return 'text-gray-600'
    }
  }

  const checkSolution = () => {
    if (!expectedOutput) return null
    
    const isCorrect = output.trim() === expectedOutput.trim()
    return (
      <div className={`flex items-center p-3 rounded-lg ${
        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
      }`}>
        {isCorrect ? (
          <>
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">¡Correcto! Excelente trabajo.</span>
          </>
        ) : (
          <>
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-yellow-800">
              El resultado no coincide. Revisa tu código o consulta las pistas.
            </span>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className={`ml-3 px-2 py-1 text-xs font-medium rounded ${getLanguageColor()} bg-gray-100`}>
            {language.toUpperCase()}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {hints.length > 0 && (
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              {showHints ? 'Ocultar' : 'Ver'} Pistas
            </button>
          )}
          
          <button
            onClick={copyCode}
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            <Copy className="h-4 w-4 mr-1" />
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
          
          <button
            onClick={resetCode}
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </button>
          
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 disabled:opacity-50"
          >
            <Play className="h-4 w-4 mr-1" />
            {isRunning ? 'Ejecutando...' : 'Ejecutar'}
          </button>
        </div>
      </div>

      {/* Hints */}
      {showHints && hints.length > 0 && (
        <div className="bg-blue-50 border-b border-blue-200 p-4">
          <h4 className="font-medium text-blue-900 mb-2">💡 Pistas:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {hints.map((hint, index) => (
              <li key={index}>• {hint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Editor */}
      <div className="grid lg:grid-cols-2 divide-x divide-gray-200">
        <div className="p-0">
          <div className="bg-gray-800 text-gray-100 p-1 text-xs font-mono">
            <span className="text-gray-400">// Editor</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 p-4 font-mono text-sm bg-gray-900 text-gray-100 border-none resize-none focus:outline-none"
            spellCheck={false}
            style={{
              tabSize: 2,
              fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace'
            }}
          />
        </div>
        
        {showOutput && (
          <div className="p-0">
            <div className="bg-gray-100 text-gray-700 p-1 text-xs font-mono flex items-center justify-between">
              <span>// Salida</span>
              {expectedOutput && (
                <span className="text-gray-500">Resultado esperado disponible</span>
              )}
            </div>
            <div className="h-80 p-4 overflow-auto bg-white">
              {output ? (
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                  {output}
                </pre>
              ) : (
                <div className="text-gray-400 text-sm">
                  Haz clic en "Ejecutar" para ver el resultado
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Expected Output */}
      {expectedOutput && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <h4 className="font-medium text-gray-900 mb-2">Resultado Esperado:</h4>
          <pre className="text-sm text-gray-700 bg-white p-3 rounded border font-mono">
            {expectedOutput}
          </pre>
          
          {output && checkSolution()}
        </div>
      )}

      {/* Quick Actions */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            Presiona <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl+Enter</kbd> para ejecutar
          </div>
          
          <div className="flex space-x-3">
            <button className="text-blue-600 hover:text-blue-700">
              Ver documentación
            </button>
            <button className="text-blue-600 hover:text-blue-700">
              Compartir código
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
