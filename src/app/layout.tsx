import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic']
})

const SITE_URL = 'https://онлайнпродукты.рф'

export const metadata: Metadata = {
	title:
		'Магистерская программа «Устойчивые продукты онлайн-образования» | Университет Косыгина',
	description:
		'Магистерская программа по направлениям «Информационные системы и технологии» и «Менеджмент». ИИ-технологии, финансы, управление. Бюджетные места, 2 квалификации.',
	keywords: [
		'магистратура',
		'университет Косыгина',
		'онлайн-образование',
		'информационные системы',
		'менеджмент',
		'ИИ-технологии',
		'бюджетные места',
		'поступление 2026'
	],
	metadataBase: new URL(SITE_URL),
	alternates: { canonical: '/' },
	openGraph: {
		title: 'Магистерская программа | Университет Косыгина',
		description:
			'Устойчивые продукты онлайн-образования: ИИ-технологии, финансы, управление. 2 квалификации, бюджетные места.',
		url: SITE_URL,
		siteName: 'Онлайн-продукты',
		locale: 'ru_RU',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
				<Toaster
					position="bottom-center"
					toastOptions={{ style: { fontSize: '16px' } }}
					richColors
				/>
			</body>
		</html>
	)
}
