'use client'

import { useState } from 'react'
import StripePayment from '@/components/StripePayment'
import { Download, X } from 'lucide-react'

export default function PaymentSection() {
  const [showPayment, setShowPayment] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleSuccess = () => {
    // Payment successful - user will receive email with download link
    setShowPayment(false)
  }

  const handleError = (error: string) => {
    console.error('Payment error:', error)
    alert('Error en el pago: ' + error)
  }

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full max-h-90vh overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Finalizar Compra
              </h3>
              <button
                onClick={() => setShowPayment(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                Guía Completa del Programador Moderno
              </h4>
              <div className="text-sm text-blue-800">
                <div className="flex justify-between mb-1">
                  <span>Ebook Digital</span>
                  <span className="font-bold">$29.00</span>
                </div>
                <div className="text-xs">
                  ✅ Descarga instantánea
                  <br />
                  ✅ Actualizaciones gratuitas
                  <br />
                  ✅ Garantía 30 días
                </div>
              </div>
            </div>

            <StripePayment
              productId="EBOOK"
              userEmail={userEmail}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => setShowPayment(true)}
        className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
      >
        <Download className="h-6 w-6 mr-2" />
        Descargar Ahora - $29
      </button>
      <button className="inline-flex items-center border-2 border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
        Vista Previa Gratis
      </button>
    </div>
  )
}
