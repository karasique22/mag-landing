interface Props {
	code: string
	title: string
}

export function DirectionCard({ code, title }: Props) {
	return (
		<div
			className="rounded-direction border border-white/20 bg-white/5 px-5 py-5 backdrop-blur-md lg:w-[320px]"
		>
			<div className="rounded-badge bg-purple mb-3 inline-block px-2.5 py-1">
				<span className="text-xl font-bold tracking-tight text-white">
					{code}
				</span>
			</div>
			<p className="text-xl font-medium tracking-tight whitespace-pre-line text-white">
				{title}
			</p>
		</div>
	)
}
