import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/stripe'
import { purchaseQueries, userQueries } from '@/lib/database'

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    // Verify webhook signature
    const event = verifyWebhookSignature(body, signature, endpointSecret)

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object)
        break
      
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}

async function handlePaymentSuccess(paymentIntent: any) {
  try {
    const { id, amount, currency, metadata } = paymentIntent
    const { product_id, user_email } = metadata

    // Find or create user
    let user = await userQueries.getByEmail(user_email)
    if (!user) {
      user = await userQueries.create({
        email: user_email,
        name: user_email.split('@')[0], // Use email prefix as name
      })
    }

    // Create purchase record
    await purchaseQueries.create({
      user_id: user.id,
      product_id: 1, // Assuming ebook is product ID 1
      stripe_payment_intent_id: id,
      amount_cents: amount,
      currency: currency.toUpperCase(),
    })

    // Update purchase status to completed
    const purchase = await purchaseQueries.updateStatus(
      paymentIntent.id,
      'completed'
    )

    // TODO: Send email with download link
    console.log('Payment successful for:', user_email, 'Product:', product_id)

  } catch (error) {
    console.error('Error handling payment success:', error)
  }
}

async function handlePaymentFailed(paymentIntent: any) {
  try {
    console.log('Payment failed:', paymentIntent.id)
    
    // TODO: Log failed payment, send notification
    
  } catch (error) {
    console.error('Error handling payment failure:', error)
  }
}
