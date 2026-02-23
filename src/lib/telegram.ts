const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? ''
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? ''
const TELEGRAM_TOPIC_ID = process.env.NEXT_PUBLIC_TELEGRAM_TOPIC_ID

interface ApplicationData {
	name: string
	phone: string
	email: string
	message?: string
}

export async function sendApplication(data: ApplicationData) {
	if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
		throw new Error('Telegram не настроен')
	}

	const text = [
		'📬 Новая заявка',
		`👤 ФИО: ${data.name}`,
		`📞 Телефон: ${data.phone}`,
		`✉️ Email: ${data.email}`,
		data.message ? `💬 Сообщение: ${data.message}` : null
	]
		.filter(Boolean)
		.join('\n')

	const res = await fetch(
		`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				...(TELEGRAM_TOPIC_ID && {
					message_thread_id: Number(TELEGRAM_TOPIC_ID)
				}),
				text
			})
		}
	)

	if (!res.ok) throw new Error('Ошибка отправки')
}
