import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ContentCardProps {
  icon?: ReactNode
  title: string
  description: string
  link?: string
}

export default function ContentCard({ icon, title, description, link }: ContentCardProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative min-h-[280px] rounded-card border border-apollo-border p-12 transition-colors hover:border-apollo-blue"
    >
      {icon ? (
        <div className="absolute right-6 top-6 text-apollo-blue">{icon}</div>
      ) : null}
      <h3 className="text-card-title font-semibold tracking-wide">{title}</h3>
      <p className="mt-4 text-sm text-apollo-text-secondary leading-6">{description}</p>
      {link ? (
        <button className="mt-6 text-sm font-medium text-apollo-blue hover:underline">
          {link}
        </button>
      ) : null}
    </motion.div>
  )
}

