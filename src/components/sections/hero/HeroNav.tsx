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
		<nav className="relative z-20 flex flex-col">
			<div className="flex items-center justify-between px-4 pt-4 md:px-9 md:pt-6">
				<div className="flex gap-7">
					<Image
						src="/icons/logo-1.svg"
						alt="Министерство науки и высшего образования РФ"
						width={171}
						height={48}
						priority
					/>
					<Image
						src="/icons/logo-2.svg"
						alt="Университет Косыгина"
						width={117}
						height={52}
						priority
					/>
				</div>

				<div className="hidden items-center gap-2 lg:flex">
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
	)
}
