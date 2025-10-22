import SectionLabel from '../ui/SectionLabel'
import TimelineItem from '../ui/TimelineItem'
import { timelineContent } from '../../data/content'

export default function TimelineSection() {
  const { sectionLabel, heading, items } = timelineContent
  return (
    <div className="py-24">
      <SectionLabel text={sectionLabel} />
      <h2 className="mt-6 text-section font-normal leading-tight">{heading}</h2>
      <div className="mt-10 space-y-6">
        {items.map((item, i) => (
          <TimelineItem key={i} item={item} isLast={i === items.length - 1} />
        ))}
      </div>
    </div>
  )
}

