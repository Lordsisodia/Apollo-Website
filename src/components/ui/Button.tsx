import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
}

export default function Button({ icon, children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[28px] bg-apollo-blue px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:shadow-md ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

