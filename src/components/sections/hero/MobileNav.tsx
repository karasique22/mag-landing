'use client'

import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'

export interface NavLink {
	label: string
	href: string
}

export function MobileNav({ links }: { links: NavLink[] }) {
	return (
		<Sheet>
			<SheetTrigger
				className="flex items-center justify-center p-2 lg:hidden"
				aria-label="Открыть меню"
			>
				<MenuIcon className="size-6 text-white" />
			</SheetTrigger>
			<SheetContent
				side="right"
				showCloseButton={true}
				className="border-white/10 bg-black/70 backdrop-blur-xl [&>button:last-of-type]:text-white [&>button:last-of-type]:opacity-100 [&>button:last-of-type]:hover:bg-white/10"
			>
				<SheetTitle className="sr-only">Навигация</SheetTitle>
				<nav className="flex flex-col gap-2 px-2 pt-6">
					{links.map(({ label, href }) => (
						<SheetTrigger
							key={href}
							asChild
						>
							<a
								href={href}
								className="rounded-lg px-4 py-3 text-xl font-semibold tracking-tight text-white transition-colors hover:bg-white/10"
							>
								{label}
							</a>
						</SheetTrigger>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}
