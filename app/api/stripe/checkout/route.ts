import { NextRequest, NextResponse } from 'next/server'

const PRICE_IDS: Record<string, string> = {
  mensal: process.env.STRIPE_PRICE_MENSAL || '',
  trimestral: process.env.STRIPE_PRICE_TRIMESTRAL || '',
  anual: process.env.STRIPE_PRICE_ANUAL || '',
}

export async function POST(req: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe não configurado' }, { status: 503 })
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(stripeKey, { apiVersion: '2025-04-30.basil' as any })

    const { plan } = await req.json()
    const priceId = PRICE_IDS[plan]
    if (!priceId) {
      return NextResponse.json({ error: 'Plano inválido' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://barberpro.lat'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      locale: 'pt-BR',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/obrigado?plan=${plan}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/#planos`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('[stripe/checkout]', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
