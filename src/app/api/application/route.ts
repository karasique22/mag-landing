import { NextRequest, NextResponse } from 'next/server'

interface ApplicationBody {
  name: string
  phone: string
  email: string
  message?: string
}

function formatMessage({ name, phone, email, message }: ApplicationBody): string {
  const lines = [
    '📬 <b>Новая заявка с сайта!</b>',
    '',
    `👤 <b>ФИО:</b> ${name}`,
    `📞 <b>Телефон:</b> ${phone}`,
    `📧 <b>Email:</b> ${email}`,
  ]
  if (message?.trim()) {
    lines.push(`💬 <b>Сообщение:</b> ${message.trim()}`)
  }
  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  const body: ApplicationBody = await req.json()

  const { name, phone, email, message } = body

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: 'Bot not configured' }, { status: 500 })
  }

  const text = formatMessage({ name, phone, email, message })

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })

  if (!res.ok) {
    const error = await res.text()
    console.error('Telegram API error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
