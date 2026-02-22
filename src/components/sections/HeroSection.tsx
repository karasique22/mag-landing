'use client'

import { useState } from 'react'
import Image from 'next/image'

import { ApplicationForm } from './ApplicationForm'
import { Modal } from '@/components/ui/Modal'
import { MobileNav } from './MobileNav'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface NavLink {
	label: string
	href: string
}

interface Direction {
	code: string
	title: string
}

interface Badge {
	text: string
	className: string
}

interface Category {
	icon: string
	label: string
	sublabel?: string
}

const navLinks: NavLink[] = [
	{ label: 'Поступление 2026', href: '#admission' },
	{ label: 'О программе', href: '#program' },
	{ label: 'Специальности', href: '#specialties' }
]

const directions: Direction[] = [
	{
		code: '09.04.02',
		title: 'Информационные системы и технологии'
	},
	{
		code: '38.04.02',
		title: 'Менеджмент'
	}
]

const badges: Badge[] = [
	{
		text: 'развитие',
		className: 'top-[40%] left-[12%] rotate-[7.59deg]'
	},
	{ text: 'быстрый старт', className: 'bottom-[28%] left-[30%]' },
	{ text: 'лёгкость', className: 'top-[32%] right-[2%] -rotate-[7.1deg]' },
	{
		text: 'бюджетные места',
		className: 'bottom-[8%] left-0 rotate-[2deg]'
	},
	{
		text: 'командная работа',
		className: 'bottom-[22%] right-[3%] -rotate-[3deg]'
	}
]

const categories: Category[] = [
	{
		icon: `${basePath}/icons/category-management.png`,
		label: '2 квалификации'
	},
	{
		icon: `${basePath}/icons/category-ai.png`,
		label: 'х2 шансы поступить',
		sublabel: '(портфолио + тестирование)'
	},
	{
		icon: `${basePath}/icons/category-finance.png`,
		label: 'Профессиональный трекинг'
	}
]

function CheckBadge({ text, className }: { text: string; className: string }) {
	return (
		<div
			className={`rounded-tag absolute z-20 flex items-center gap-1.5 bg-white px-2.5 py-1 shadow-md ${className}`}
		>
			<span className="bg-badge-bg flex size-6.5 shrink-0 items-center justify-center rounded-full">
				<Image
					src={`${basePath}/icons/check.svg`}
					alt=""
					aria-hidden="true"
					width={26}
					height={26}
				/>
			</span>
			<span className="text-text-dark text-xl font-semibold tracking-tight">
				{text}
			</span>
		</div>
	)
}

export default function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const handleSuccess = () => {
		setIsModalOpen(false)
		setIsSuccess(true)
		setTimeout(() => setIsSuccess(false), 5000)
	}

	return (
		<section className="lg:p-hero-inset flex flex-col bg-white lg:h-svh lg:min-h-175">
			<div className="rounded-card from-hero-to to-hero-from relative flex flex-1 flex-col overflow-hidden bg-linear-[237deg] max-lg:min-h-svh max-lg:rounded-none">
				<Image
					src={`${basePath}/images/binary.png`}
					alt=""
					width={1054}
					height={662}
					className="pointer-events-none absolute top-0 right-0 z-0 h-full w-auto max-w-none select-none"
					aria-hidden="true"
					priority
				/>

				<Image
					src={`${basePath}/images/line-1.png`}
					alt=""
					width={948}
					height={606}
					className="pointer-events-none absolute top-10 -right-2 z-0 select-none"
					aria-hidden="true"
				/>

				<nav className="relative z-20 flex flex-col">
					<div className="flex items-center justify-between px-4 pt-4 md:px-9 md:pt-6">
						<div className="flex gap-7">
							<Image
								src={`${basePath}/icons/logo-1.svg`}
								alt="Министерство науки и высшего образования РФ"
								width={171}
								height={48}
								priority
							/>
							<Image
								src={`${basePath}/icons/logo-2.svg`}
								alt="Университет Косыгина"
								width={117}
								height={52}
								priority
							/>
						</div>

						<div className="hidden items-center gap-2 md:flex">
							{navLinks.map(({ label, href }) => (
								<a
									key={href}
									href={href}
									className="px-2.5 py-2.5 text-base font-semibold tracking-tight text-white transition-colors hover:text-white/80"
								>
									{label}
								</a>
							))}
						</div>

						<MobileNav links={navLinks} />
					</div>
				</nav>

				<div className="relative flex flex-1 flex-col gap-8 px-4 pt-8 pb-0 md:flex-row md:px-9 md:pt-10 lg:pt-16">
					<div className="relative z-20 flex flex-1 flex-col gap-6 pb-8 md:pb-10 lg:w-max lg:gap-0 lg:pb-16 2xl:gap-12">
						<div>
							<p className="mb-3 text-sm font-medium tracking-tight text-white md:text-left md:text-base lg:mb-4">
								Магистерская программа
							</p>
							<h1 className="text-hero-title bg-linear-to-tl from-white/60 via-white to-white/60 bg-clip-text text-center leading-tight font-semibold tracking-tight text-transparent md:mb-10 md:text-left lg:mb-12 lg:leading-none">
								Устойчивые продукты онлайн-образования: ИИ-технологии, финансы,
								управление
							</h1>
						</div>

						<button
							onClick={() => setIsModalOpen(true)}
							className="btn-glass rounded-4xl bg-white/10 px-12 py-3 text-xl font-medium tracking-tight text-white backdrop-blur-lg transition-colors hover:bg-white/20 lg:w-max xl:px-16 xl:py-4 xl:text-2xl"
						>
							Оставить заявку
						</button>
					</div>

					<div className="hero-photo-col relative hidden flex-1 lg:block">
						<div
							className="glow-blue bg-blue-glow absolute bottom-0 left-[5%] h-[45%] w-[85%] opacity-60"
							aria-hidden="true"
						/>
						<div
							className="glow-purple bg-purple-dark absolute right-[-5%] bottom-0 h-[30%] w-[60%] opacity-70"
							aria-hidden="true"
						/>

						<div className="absolute right-[-7%] bottom-0 z-10 h-[90%]">
							<Image
								src={`${basePath}/images/hero-team.png`}
								alt="Команда программы"
								width={795}
								height={530}
								className="z-50 h-full w-auto max-w-none"
								priority
							/>
							{badges.map(({ text, className }) => (
								<CheckBadge
									key={text}
									text={text}
									className={className}
								/>
							))}
						</div>
					</div>
				</div>

				<Image
					src={`${basePath}/images/line-2.png`}
					alt=""
					width={1572}
					height={237}
					className="pointer-events-none absolute -bottom-1 z-[15] w-screen select-none 2xl:right-0"
					aria-hidden="true"
				/>
			</div>

			<div className="mt-2 grid grid-cols-1 gap-2 lg:mt-4 lg:grid-cols-3 lg:gap-3">
				{categories.map(({ icon, label, sublabel }) => (
					<div
						key={label}
						className="rounded-card bg-card-bg flex items-center"
					>
						<div className="flex shrink-0 items-center justify-center">
							<Image
								src={icon}
								alt={label}
								width={156}
								height={156}
								className="size-full max-h-36 object-contain"
							/>
						</div>
						<div className="flex flex-col">
							<span
								className="tracking-none leading-8 font-medium text-black"
								style={{ fontSize: 'var(--text-category-label)' }}
							>
								{label}
							</span>
							{sublabel && (
								<span
									className="font-medium tracking-tight text-black/60"
									style={{ fontSize: 'calc(var(--text-category-label) * 0.7)' }}
								>
									{sublabel}
								</span>
							)}
						</div>
					</div>
				))}
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ApplicationForm onSuccess={handleSuccess} />
			</Modal>

			{isSuccess && (
				<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-green-600 px-6 py-3 text-white shadow-lg">
					Заявка отправлена! Мы свяжемся с вами.
				</div>
			)}
		</section>
	)
}
