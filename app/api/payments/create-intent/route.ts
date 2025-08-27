import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent, PRODUCTS } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { productId, userEmail } = await request.json()

    // Validate product
    const product = PRODUCTS[productId as keyof typeof PRODUCTS]
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Invalid product ID' },
        { status: 400 }
      )
    }

    // Create payment intent
    const paymentIntent = await createPaymentIntent(
      product.price,
      product.currency,
      {
        product_id: productId,
        user_email: userEmail || '',
        product_name: product.name,
      }
    )

    return NextResponse.json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret,
        amount: product.price,
        currency: product.currency,
        product: {
          id: product.id,
          name: product.name,
          description: product.description,
          features: product.features,
        }
      }
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
