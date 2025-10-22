import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ShareIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { useMemo } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { scrollToId } from '../../utils/scroll'

const ICON_SIZE = 'h-6 w-6'

export default function RightNavigation() {
  const items = useMemo(
    () => [
      { id: 'home', icon: HomeIcon, label: 'Home' },
      { id: 'ethos', icon: UserIcon, label: 'Team' },
      { id: 'portfolio', icon: BriefcaseIcon, label: 'Portfolio' },
      { id: 'documents', icon: DocumentTextIcon, label: 'Documents' },
      { id: 'network', icon: ShareIcon, label: 'Network' },
      { id: 'timeline', icon: ClockIcon, label: 'Timeline' },
      { id: 'chat', icon: ChatBubbleLeftRightIcon, label: 'Chat' },
      { id: 'contact', icon: EnvelopeIcon, label: 'Email' },
    ],
    [],
  )

  const active = useActiveSection(['home', 'ethos', 'timeline', 'ventures', 'contact'])

  return (
    <nav
      aria-label="Right navigation"
      className="fixed right-10 top-1/2 -translate-y-1/2 z-50 bg-[#2a2a2a]/80 backdrop-blur-md rounded-[30px] w-[60px] py-3 flex flex-col items-center gap-5 shadow-xl"
    >
      {items.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          aria-label={label}
          onClick={() => id !== 'portfolio' && id !== 'documents' && id !== 'network' && id !== 'chat' ? scrollToId(id) : undefined}
          className={`w-6 h-6 transition-all duration-200 ${
            active === id ? 'text-apollo-blue scale-110' : 'text-gray-400 hover:text-apollo-blue hover:scale-110'
          }`}
        >
          <Icon className="w-full h-full" />
        </button>
      ))}
    </nav>
  )
}

