import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

// Product configurations
export const PRODUCTS = {
  EBOOK: {
    id: 'ebook',
    name: 'Guía Completa del Programador Moderno',
    price: 2900, // $29.00 in cents
    currency: 'usd',
    description: 'El ebook más completo para aprender programación y conseguir tu primer empleo tech.',
    features: [
      'Fundamentos sólidos de JavaScript, TypeScript y PHP',
      'Proyectos prácticos con código fuente completo',
      'Guía paso a paso para tu primer empleo tech',
      'Estrategias de pricing para trabajos freelance',
      'Templates profesionales de CV y portfolio',
      'Acceso a comunidad privada de Discord',
      'Actualizaciones automáticas del contenido',
      'Garantía de reembolso de 30 días'
    ]
  }
}

// Create payment intent
export async function createPaymentIntent(
  amount: number,
  currency: string = 'usd',
  metadata: Record<string, string> = {}
) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return paymentIntent
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
}

// Verify webhook signature
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  endpointSecret: string
) {
  try {
    return stripe.webhooks.constructEvent(payload, signature, endpointSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    throw error
  }
}

// Format price for display
export function formatPrice(amountInCents: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amountInCents / 100)
}

export default stripe
