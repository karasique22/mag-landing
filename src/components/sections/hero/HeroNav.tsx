'use client'

import { MobileNav, NavLink } from '@/components/sections/hero/MobileNav'
import Image from 'next/image'

const navLinks: NavLink[] = [
	{ label: 'Поступление 2026', href: '#admission' },
	{ label: 'О программе', href: '#program' },
	{ label: 'Специальности', href: '#specialties' }
]

export function HeroNav() {
	return (
		<nav className="relative z-20 flex flex-col gap-3 px-4 pt-4 md:gap-0 md:px-9 md:pt-6">
			<div className="flex items-center justify-between">
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
						className="hidden md:block"
					/>
				</div>

				<div className="hidden items-center gap-2 xl:flex">
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

			<Image
				src="/icons/logo-3-full.svg"
				alt="Институт экономики и менеджмента"
				width={210}
				height={40}
				priority
				className="md:hidden"
			/>
		</nav>
	)
}
