import { EnvelopeIcon as HEnvelope } from '@heroicons/react/24/outline'
import type { SVGProps } from 'react'

export function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
  return <HEnvelope aria-hidden {...props} />
}

export function CrownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M3 8l4 3 5-7 5 7 4-3v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
      <path d="M7 20h10" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.7c0-1.8 0-4-2.4-4s-2.7 1.9-2.7 3.9V24h-4V8.5z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.9.1 4.2.3c-.8.2-1.5.5-2.2 1.2C1.3 2.2 1 2.9.8 3.7.6 4.4.5 5.2.5 6.5.4 7.8.4 8.3.4 12s0 4.2.1 5.5c.1 1.3.1 2.1.3 2.8.2.8.5 1.5 1.2 2.2.7.7 1.4 1 2.2 1.2.7.2 1.5.3 2.8.3 1.3.1 1.8.1 5.5.1s4.2 0 5.5-.1c1.3-.1 2.1-.1 2.8-.3.8-.2 1.5-.5 2.2-1.2.7-.7 1-1.4 1.2-2.2.2-.7.3-1.5.3-2.8.1-1.3.1-1.8.1-5.5s0-4.2-.1-5.5c-.1-1.3-.1-2.1-.3-2.8-.2-.8-.5-1.5-1.2-2.2C21.5.8 20.8.5 20 .3 19.3.1 18.5 0 17.2 0c-1.3-.1-1.8-.1-5.5-.1z"/>
      <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8m0-2.3a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z"/>
      <circle cx="18.4" cy="5.6" r="1.2"/>
    </svg>
  )
}
