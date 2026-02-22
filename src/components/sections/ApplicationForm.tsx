'use client'

import { useState } from 'react'

interface FormState {
  name: string
  phone: string
  email: string
  message: string
}

interface ApplicationFormProps {
  onSuccess: () => void
}

export function ApplicationForm({ onSuccess }: ApplicationFormProps) {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Request failed')

      onSuccess()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
        Оставить заявку
      </h2>

      <div className="flex flex-col gap-3">
        <input
          name="name"
          type="text"
          placeholder="ФИО *"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Телефон *"
          required
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        <textarea
          name="message"
          placeholder="Сообщение (необязательно)"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="mt-3 text-sm text-red-500">
          Не удалось отправить заявку. Попробуйте ещё раз.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
      >
        {status === 'loading' ? 'Отправляем...' : 'Отправить'}
      </button>
    </form>
  )
}
