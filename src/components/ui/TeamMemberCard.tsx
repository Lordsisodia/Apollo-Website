import type { TeamMember } from '../../types'
import { motion } from 'framer-motion'

export default function TeamMemberCard({ name, role, roleType, image }: TeamMember) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-[24px]"
    >
      <div className="relative">
        <img src={image} alt={name} className="aspect-[3/4] w-full object-cover" />
        <div
          className={`absolute inset-x-8 -bottom-5 mx-auto w-max rounded-full px-4 py-1 text-xs font-medium text-white ${
            roleType === 'blue' ? 'bg-apollo-blue' : 'bg-black/60'
          }`}
        >
          {role}
        </div>
      </div>
      <div className="mt-7 text-center text-sm">{name}</div>
    </motion.div>
  )
}
