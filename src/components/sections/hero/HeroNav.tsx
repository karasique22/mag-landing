import Image from 'next/image'

export function HeroNav() {
	return (
		<nav className="relative z-20 flex flex-col gap-3 px-4 pt-4 md:gap-0 md:px-12 md:pt-9 lg:px-14 lg:pt-11">
			<div className="flex items-center">
				<div className="flex items-center gap-3 md:gap-7">
					<Image
						src="/icons/logo-1.svg"
						alt="Министерство науки и высшего образования РФ"
						width={171}
						height={48}
						priority
						className="max-w-32.5 min-[375px]:max-w-none"
						style={{ height: 'auto' }}
					/>
					<Image
						src="/icons/logo-2.svg"
						alt="Университет Косыгина"
						width={117}
						height={52}
						priority
						className="max-w-22.5 min-[375px]:max-w-none"
						style={{ height: 'auto' }}
					/>
					<Image
						src="/icons/logo-3-full.svg"
						alt="Институт экономики и менеджмента"
						width={210}
						height={30}
						priority
						className="hidden lg:block"
					/>
					<Image
						src="/icons/logo-4.svg"
						alt="Институт информационных технологий"
						width={190}
						height={38}
						priority
						className="hidden lg:block"
						style={{ height: 'auto' }}
					/>
				</div>
			</div>
		</nav>
	)
}
