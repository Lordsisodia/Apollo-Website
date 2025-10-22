import type { TimelineItem as TItem } from '../../types'

interface TimelineItemProps {
  item: TItem
  isLast?: boolean
}

export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  const color = item.status === 'upcoming' ? 'bg-apollo-green' : 'bg-apollo-border'
  const line = item.status === 'upcoming' ? 'bg-apollo-green/60' : 'bg-apollo-border'

  return (
    <div className="relative pl-10">
      <span className={`absolute left-0 top-2 h-4 w-4 rounded-full ${color}`} />
      {!isLast && <span className={`absolute left-[7px] top-6 bottom-0 w-[2px] ${line}`} />}

      {item.label && (
        <div className="text-xs uppercase tracking-widest text-apollo-text-tertiary">{item.label}</div>
      )}
      {item.date && (
        <div className="text-xs uppercase tracking-widest text-apollo-text-tertiary">{item.date}</div>
      )}

      <div className="mt-2 space-y-2">
        {item.events.map((ev, idx) => (
          <div key={idx} className="text-sm">
            <div className="font-medium">{ev.title}</div>
            {ev.details && (
              <div className="text-apollo-text-secondary">{ev.details}</div>
            )}
            {ev.location && (
              <div className="text-apollo-text-secondary">{ev.location}</div>
            )}
            {ev.date && <div className="text-apollo-text-secondary">{ev.date}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

