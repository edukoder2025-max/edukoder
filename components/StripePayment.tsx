'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { Download, Lock, CheckCircle } from 'lucide-react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  productId: string
  userEmail?: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

function PaymentForm({ productId, userEmail, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(userEmail || '')
  const [succeeded, setSucceeded] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)

    try {
      // Create payment intent
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          userEmail: email,
        }),
      })

      const { success, data, error } = await response.json()

      if (!success) {
        throw new Error(error || 'Failed to create payment')
      }

      // Confirm payment
      const { error: stripeError } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: email,
            },
          },
        }
      )

      if (stripeError) {
        throw new Error(stripeError.message)
      }

      setSucceeded(true)
      onSuccess?.()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed'
      onError?.(errorMessage)
      console.error('Payment error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (succeeded) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Pago Exitoso!
        </h3>
        <p className="text-gray-600 mb-6">
          Recibirás el enlace de descarga en tu email en los próximos minutos.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Próximos pasos:</strong>
            <br />
            1. Revisa tu email (incluyendo spam)
            <br />
            2. Descarga el ebook usando el enlace
            <br />
            3. Únete a nuestra comunidad Discord
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Información de la Tarjeta
        </label>
        <div className="border border-gray-300 rounded-lg p-3 bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Procesando...
          </div>
        ) : (
          <>
            <Lock className="h-5 w-5 mr-2" />
            Pagar $29 - Descarga Instantánea
          </>
        )}
      </button>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          🔒 Pago seguro con encriptación SSL
          <br />
          💳 Aceptamos todas las tarjetas principales
          <br />
          🔄 Garantía de reembolso de 30 días
        </p>
      </div>
    </form>
  )
}

export default function StripePayment(props: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-md mx-auto">
        <PaymentForm {...props} />
      </div>
    </Elements>
  )
}
