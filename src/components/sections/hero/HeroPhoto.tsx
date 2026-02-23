import Image from 'next/image'

interface Badge {
	text: string
	className: string
}

const badges: Badge[] = [
	{
		text: 'развитие',
		className: 'top-[40%] left-[12%] rotate-[7.59deg]'
	},
	{ text: 'быстрый старт', className: 'bottom-[28%] left-[30%]' },
	{ text: 'лёгкость', className: 'top-[43%] right-[5%] -rotate-[7.1deg]' },
	{
		text: 'бюджетные места',
		className: 'bottom-[8%] left-0 rotate-[2deg]'
	},
	{
		text: 'командная работа',
		className: 'bottom-[22%] right-[3%] -rotate-[3deg]'
	}
]

function CheckBadge({ text, className }: { text: string; className: string }) {
	return (
		<div
			className={`rounded-tag absolute z-20 hidden items-center gap-1.5 bg-white px-2.5 py-1 shadow-md lg:flex ${className}`}
		>
			<span className="bg-badge-bg flex size-6.5 shrink-0 items-center justify-center rounded-full">
				<Image
					src="/icons/check.svg"
					alt=""
					aria-hidden="true"
					width={26}
					height={26}
				/>
			</span>
			<span className="text-text-dark text-xl font-semibold tracking-tight select-none">
				{text}
			</span>
		</div>
	)
}

export function HeroPhoto() {
	return (
		<div className="hero-photo-col pointer-events-none absolute inset-0 hidden md:block lg:relative lg:flex-1">
			<div
				className="glow-blue bg-blue-glow absolute bottom-0 left-[5%] h-[45%] w-[85%] opacity-60"
				aria-hidden="true"
			/>
			<div
				className="glow-purple bg-purple-dark absolute right-[-5%] bottom-0 h-[30%] w-[60%] opacity-70"
				aria-hidden="true"
			/>

			<div className="absolute right-[-7%] bottom-0 h-[60%] lg:h-[90%]">
				<Image
					src="/images/hero-team.png"
					alt="Команда программы"
					width={795}
					height={530}
					className="h-full w-auto max-w-none"
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
	)
}
