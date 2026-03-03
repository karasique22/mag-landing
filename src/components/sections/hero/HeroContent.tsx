import { HeroNav } from '@/components/sections/hero/HeroNav'
import { HeroPhoto } from '@/components/sections/hero/HeroPhoto'
import Image from 'next/image'

interface HeroContentProps {
	onCtaClick: () => void
}

export function HeroContent({ onCtaClick }: HeroContentProps) {
	return (
		<div className="rounded-card from-hero-to to-hero-from relative flex flex-1 flex-col overflow-hidden bg-linear-[237deg] max-xl:rounded-none">
			<Image
				src="/images/binary.png"
				alt=""
				width={1054}
				height={662}
				className="pointer-events-none absolute top-0 right-0 z-0 h-full w-auto max-w-none select-none"
				aria-hidden="true"
				priority
			/>

			<Image
				src="/images/line-1.png"
				alt=""
				width={948}
				height={606}
				className="pointer-events-none absolute top-10 -right-2 z-0 select-none"
				aria-hidden="true"
			/>

			<HeroNav />

			<div className="relative flex flex-1 flex-col gap-8 px-4 pb-0 md:px-12 md:pt-6 lg:px-14 lg:pt-10 xl:flex-row">
				<div className="relative z-20 flex flex-1 flex-col justify-center pb-8 md:pb-6 lg:pt-0 lg:pb-6 xl:w-max xl:justify-normal 2xl:pb-12">
					<div className="flex flex-col gap-3 md:gap-4 xl:gap-0">
						<div>
							<p className="mb-2 text-center text-lg font-medium tracking-tight text-white md:mb-2 md:text-2xl lg:mb-3 xl:text-left">
								Магистерская программа
							</p>
							<h1 className="text-hero-title bg-linear-to-tl from-white/60 via-white to-white/60 bg-clip-text pb-1 text-center leading-tight font-semibold tracking-tight text-transparent antialiased md:mb-6 lg:mb-5 xl:text-left xl:leading-none 2xl:mb-10">
								Устойчивые продукты{' '}
								<span className="whitespace-nowrap">онлайн-образования:</span>{' '}
								<span className="whitespace-nowrap">ИИ-технологии,</span>{' '}
								финансы, управление
							</h1>
						</div>

						<div className="flex flex-col gap-3 xl:mb-8 xl:w-max 2xl:mb-12">
							{[
								{
									code: '09.04.02',
									title: 'Информационные системы и технологии'
								},
								{ code: '38.04.02', title: 'Менеджмент' }
							].map(({ code, title }) => (
								<div
									key={code}
									className="rounded-direction w-full border border-white/20 bg-white/5 px-6 py-4 backdrop-blur-md"
								>
									<div className="rounded-badge bg-purple mb-2 inline-block px-2.5 py-0.5">
										<span className="text-lg font-bold tracking-tight text-white">
											{code}
										</span>
									</div>
									<p className="text-xl font-medium tracking-tight text-white">
										{title}
									</p>
								</div>
							))}
						</div>

						<button
							type="button"
							onClick={onCtaClick}
							className="btn-glass rounded-4xl border border-white/40 bg-white/20 px-12 py-2.5 text-lg font-semibold tracking-tight text-white shadow-lg backdrop-blur-lg transition-colors hover:bg-white/30 md:w-max md:py-3 md:text-xl xl:px-16 xl:py-4 xl:text-2xl"
						>
							Оставить заявку
						</button>
					</div>
				</div>

				<HeroPhoto />
			</div>

			<Image
				src="/images/line-2.png"
				alt=""
				width={1572}
				height={237}
				className="pointer-events-none absolute -bottom-1 z-15 w-screen select-none 2xl:right-0"
				aria-hidden="true"
			/>
		</div>
	)
}
