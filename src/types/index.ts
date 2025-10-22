export interface TeamMember {
  id: number
  name: string
  role: string
  roleType: 'dark' | 'blue'
  image: string
}

export interface Venture {
  id: number
  name: string
  logo: string
  selected?: boolean
}

export interface TimelineEvent {
  title: string
  date?: string
  details?: string
  location?: string
}

export interface TimelineItem {
  status: 'upcoming' | 'planned' | 'past'
  label?: string
  date?: string
  events: TimelineEvent[]
}

export interface EthosCard {
  icon: string
  title: string
  description: string
  link: string
}

