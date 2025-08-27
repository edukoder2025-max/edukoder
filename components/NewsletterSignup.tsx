'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'modal'
  className?: string
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Por favor ingresa tu email')
      return
    }

    if (!email.includes('@')) {
      setStatus('error')
      setMessage('Por favor ingresa un email válido')
      return
    }

    setStatus('loading')

    try {
      // Simulate API call - in real app would call backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate success
      setStatus('success')
      setMessage('¡Gracias! Te has suscrito exitosamente.')
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
      
    } catch (error) {
      setStatus('error')
      setMessage('Error al suscribirse. Intenta de nuevo.')
    }
  }

  const baseStyles = "transition-all duration-300"
  
  const variants = {
    default: "bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-2xl",
    inline: "bg-gray-50 border border-gray-200 p-6 rounded-lg",
    modal: "bg-white p-6"
  }

  if (status === 'success') {
    return (
      <div className={`${variants[variant]} ${baseStyles} ${className}`}>
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            ¡Suscripción exitosa!
          </h3>
          <p className="text-sm opacity-90">
            Recibirás nuestros mejores tutoriales cada semana
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${variants[variant]} ${baseStyles} ${className}`}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
          variant === 'default' ? 'bg-white/20' : 'bg-primary-100'
        }`}>
          <Mail className={`h-6 w-6 ${
            variant === 'default' ? 'text-white' : 'text-primary-600'
          }`} />
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${
          variant === 'default' ? 'text-white' : 'text-gray-900'
        }`}>
          Recibe tutoriales semanales
        </h3>
        
        <p className={`text-sm ${
          variant === 'default' ? 'text-blue-100' : 'text-gray-600'
        }`}>
          Únete a 10,000+ developers que reciben contenido exclusivo cada semana
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              status === 'error' 
                ? 'border-red-300 bg-red-50' 
                : 'border-gray-300 bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent'
            }`}
            disabled={status === 'loading'}
          />
        </div>

        {message && (
          <div className={`flex items-center text-sm ${
            status === 'error' ? 'text-red-600' : 'text-green-600'
          }`}>
            {status === 'error' ? (
              <AlertCircle className="h-4 w-4 mr-2" />
            ) : (
              <CheckCircle className="h-4 w-4 mr-2" />
            )}
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 ${
            variant === 'default'
              ? 'bg-white text-primary-700 hover:bg-gray-100'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
              Suscribiendo...
            </div>
          ) : (
            'Suscribirse Gratis'
          )}
        </button>
      </form>

      <div className={`text-xs text-center mt-4 ${
        variant === 'default' ? 'text-blue-200' : 'text-gray-500'
      }`}>
        No spam. Cancela cuando quieras.
      </div>
    </div>
  )
}
