import type { ReactNode } from 'react'

interface SectionLabelProps {
  icon?: ReactNode
  text: string
}

export default function SectionLabel({ icon, text }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-[10px] rounded-pill border border-[#4a4a4a] px-7 py-3 text-xs tracking-[0.18em] text-apollo-text-secondary">
      {icon}
      {text}
    </span>
  )
}

