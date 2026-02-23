'use client'

import { ApplicationForm } from '@/components/ApplicationForm'
import { CategoryCards } from '@/components/sections/hero/CategoryCards'
import { HeroContent } from '@/components/sections/hero/HeroContent'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle
} from '@/components/ui/dialog'
import { useState } from 'react'
import { toast } from 'sonner'

export default function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleSuccess = () => {
		setIsModalOpen(false)
		toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
	}

	return (
		<section className="lg:p-hero-inset flex h-svh min-h-0 flex-col bg-white">
			<HeroContent onCtaClick={() => setIsModalOpen(true)} />
			<CategoryCards />

			<Dialog
				open={isModalOpen}
				onOpenChange={setIsModalOpen}
			>
				<DialogContent
					showCloseButton={false}
					className="rounded-2xl border-none bg-white p-6 shadow-2xl sm:max-w-md"
				>
					<div className="mb-6 flex items-center justify-between">
						<DialogTitle className="text-2xl font-semibold tracking-tight text-gray-900">
							Оставить заявку
						</DialogTitle>
						<DialogClose
							className="flex size-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
							aria-label="Закрыть"
						>
							✕
						</DialogClose>
					</div>
					<ApplicationForm
						onSuccess={handleSuccess}
						onError={err => toast.error(err.message)}
					/>
				</DialogContent>
			</Dialog>
		</section>
	)
}
