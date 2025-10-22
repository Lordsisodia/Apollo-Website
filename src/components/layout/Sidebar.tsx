import { EnvelopeIcon, InstagramIcon, LinkedinIcon } from '../ui/Icons'
import { sidebarContent } from '../../data/content'

export default function Sidebar() {
  return (
    <aside
      className="fixed left-10 top-10 bottom-10 w-[355px] z-50"
      aria-label="Sidebar"
    >
      {/* Floating card with rounded corners and shadow */}
      <div className="h-full rounded-[32px] overflow-hidden shadow-2xl flex flex-col">
        {/* White top section */}
        <div className="bg-white text-black py-[60px] px-[40px]">
          <img src="/images/apollo-logo.avif" alt="Apollo Logo" className="w-48 mb-6" />
          <h1 className="text-3xl font-black tracking-tight text-[#1a1a4f]">APOLLO</h1>
          <p className="text-xs tracking-[0.2em] text-gray-500 mt-1 font-medium">LEARNING ORGANISATION</p>
        </div>

        {/* Dark bottom section - takes remaining space */}
        <div className="bg-[#2a2a2a] text-white p-10 flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-lg text-white mb-2 font-medium">{sidebarContent.location}</p>
            <p className="text-sm text-gray-400">{sidebarContent.copyright}</p>
          </div>

          {/* Social icons - pushed to bottom */}
          <div className="flex items-center gap-4 mb-8">
            <a href={sidebarContent.social.linkedin} aria-label="LinkedIn" className="h-12 w-12 rounded-full border-2 border-gray-600 hover:border-apollo-blue transition-colors grid place-items-center text-gray-400 hover:text-apollo-blue">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={sidebarContent.social.instagram} aria-label="Instagram" className="h-12 w-12 rounded-full border-2 border-gray-600 hover:border-apollo-blue transition-colors grid place-items-center text-gray-400 hover:text-apollo-blue">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Connect button */}
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-apollo-blue hover:bg-[#3aa4ff] py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            <EnvelopeIcon className="h-5 w-5" />
            CONNECT
          </a>
        </div>
      </div>
    </aside>
  )
}
