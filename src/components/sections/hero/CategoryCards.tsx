import Image from 'next/image'

interface Category {
	icon: string
	label: string
	sublabel?: string
}

const categories: Category[] = [
	{
		icon: '/icons/category-management.png',
		label: '2 квалификации'
	},
	{
		icon: '/icons/category-ai.png',
		label: 'х2 шансы поступить',
		sublabel: '(портфолио + тестирование)'
	},
	{
		icon: '/icons/category-finance.png',
		label: 'Профессиональный трекинг'
	}
]

export function CategoryCards() {
	return (
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
							className="size-full max-h-20 object-contain lg:max-h-36"
						/>
					</div>
					<div className="flex min-w-0 flex-col pr-3">
						<span className="tracking-none text-category-label leading-8 font-medium text-black">
							{label}
						</span>
						{sublabel && (
							<span className="text-category-sublabel font-medium tracking-tight text-black/60">
								{sublabel}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
