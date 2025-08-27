'use client'

import { useState, useEffect } from 'react'
import { Calculator, DollarSign, TrendingUp, Info } from 'lucide-react'

interface CalculatorState {
  experience: string
  location: string
  technology: string
  projectType: string
  desiredSalary: string
  hoursPerWeek: string
}

const experienceLevels = [
  { value: 'junior', label: 'Junior (0-2 años)', multiplier: 1 },
  { value: 'mid', label: 'Mid-level (2-5 años)', multiplier: 1.5 },
  { value: 'senior', label: 'Senior (5+ años)', multiplier: 2.2 },
  { value: 'lead', label: 'Tech Lead (8+ años)', multiplier: 3 }
]

const locations = [
  { value: 'latam', label: 'Latinoamérica', multiplier: 1 },
  { value: 'spain', label: 'España', multiplier: 1.3 },
  { value: 'us-remote', label: 'Estados Unidos (remoto)', multiplier: 2 },
  { value: 'europe', label: 'Europa', multiplier: 1.6 }
]

const technologies = [
  { value: 'html-css', label: 'HTML/CSS', multiplier: 0.8 },
  { value: 'javascript', label: 'JavaScript', multiplier: 1 },
  { value: 'react', label: 'React', multiplier: 1.2 },
  { value: 'nextjs', label: 'Next.js', multiplier: 1.3 },
  { value: 'nodejs', label: 'Node.js', multiplier: 1.25 },
  { value: 'python', label: 'Python', multiplier: 1.15 },
  { value: 'aws', label: 'AWS/Cloud', multiplier: 1.4 },
  { value: 'blockchain', label: 'Blockchain', multiplier: 1.8 }
]

const projectTypes = [
  { value: 'basic', label: 'Sitio web básico', multiplier: 0.9 },
  { value: 'ecommerce', label: 'E-commerce', multiplier: 1.1 },
  { value: 'webapp', label: 'Aplicación web', multiplier: 1.3 },
  { value: 'mobile', label: 'App móvil', multiplier: 1.4 },
  { value: 'enterprise', label: 'Software empresarial', multiplier: 1.6 }
]

export default function RateCalculator() {
  const [state, setState] = useState<CalculatorState>({
    experience: '',
    location: '',
    technology: '',
    projectType: '',
    desiredSalary: '',
    hoursPerWeek: '40'
  })

  const [result, setResult] = useState<{
    hourlyRate: number
    dailyRate: number
    weeklyRate: number
    monthlyRate: number
    projectRate: number
  } | null>(null)

  const updateField = (field: keyof CalculatorState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }))
  }

  const calculateRates = () => {
    const { experience, location, technology, projectType, desiredSalary, hoursPerWeek } = state

    if (!experience || !location || !technology || !projectType || !desiredSalary) {
      return
    }

    const expLevel = experienceLevels.find(e => e.value === experience)
    const loc = locations.find(l => l.value === location)
    const tech = technologies.find(t => t.value === technology)
    const proj = projectTypes.find(p => p.value === projectType)

    if (!expLevel || !loc || !tech || !proj) return

    const baseSalary = parseInt(desiredSalary)
    const hours = parseInt(hoursPerWeek)
    
    // Calculate base hourly rate from desired annual salary
    const baseHourlyRate = baseSalary / (52 * hours)
    
    // Apply multipliers
    const adjustedRate = baseHourlyRate * expLevel.multiplier * loc.multiplier * tech.multiplier

    // Add freelance premium (30-50% more than employed rate)
    const freelancePremium = 1.4
    const hourlyRate = Math.round(adjustedRate * freelancePremium)

    setResult({
      hourlyRate,
      dailyRate: hourlyRate * 8,
      weeklyRate: hourlyRate * hours,
      monthlyRate: hourlyRate * hours * 4.33,
      projectRate: Math.round(hourlyRate * proj.multiplier * 40) // Estimated 40h project
    })
  }

  useEffect(() => {
    calculateRates()
  }, [state])

  const isComplete = state.experience && state.location && state.technology && state.projectType && state.desiredSalary

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nivel de Experiencia
            </label>
            <select
              value={state.experience}
              onChange={(e) => updateField('experience', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Selecciona tu nivel</option>
              {experienceLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ubicación / Mercado
            </label>
            <select
              value={state.location}
              onChange={(e) => updateField('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Selecciona ubicación</option>
              {locations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tecnología Principal
            </label>
            <select
              value={state.technology}
              onChange={(e) => updateField('technology', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Selecciona tecnología</option>
              {technologies.map(tech => (
                <option key={tech.value} value={tech.value}>
                  {tech.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Proyecto
            </label>
            <select
              value={state.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Selecciona tipo</option>
              {projectTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salario Anual Deseado (USD)
            </label>
            <input
              type="number"
              value={state.desiredSalary}
              onChange={(e) => updateField('desiredSalary', e.target.value)}
              placeholder="50000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horas por Semana
            </label>
            <input
              type="number"
              value={state.hoursPerWeek}
              onChange={(e) => updateField('hoursPerWeek', e.target.value)}
              placeholder="40"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results */}
        <div className="lg:pl-8">
          <div className="sticky top-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-green-600" />
              Tarifas Recomendadas
            </h3>

            {!isComplete ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <Info className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  Completa todos los campos para ver tus tarifas recomendadas
                </p>
              </div>
            ) : result ? (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Tarifa por Hora</span>
                    <span className="text-2xl font-bold text-green-900">
                      ${result.hourlyRate}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Tarifa por Día</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ${result.dailyRate}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Tarifa Semanal</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ${result.weeklyRate}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Tarifa Mensual</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ${Math.round(result.monthlyRate)}
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-800">Proyecto Típico</span>
                    <span className="text-xl font-semibold text-blue-900">
                      ${result.projectRate}
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    Estimado para proyecto de 1 semana
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-yellow-800 mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Tips de Negociación
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Siempre pide 50% de anticipo</li>
                    <li>• Incluye revisiones limitadas (2-3 máximo)</li>
                    <li>• Agrega 20% buffer para cambios de scope</li>
                    <li>• Considera cobrar por urgencias (+50%)</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
