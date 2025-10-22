import SectionLabel from '../ui/SectionLabel'
import VentureCircle from '../ui/VentureCircle'
import { venturesContent } from '../../data/content'

export default function VenturesSection() {
  const { sectionLabel, heading, ventures } = venturesContent
  const h = heading.replace('Ventures', '<span class="text-apollo-blue">Ventures</span>')
  return (
    <div className="py-24">
      <SectionLabel text={sectionLabel} />
      <h2
        className="mt-6 text-section font-normal leading-tight"
        dangerouslySetInnerHTML={{ __html: h }}
      />
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {ventures.map((v) => (
          <VentureCircle key={v.id} logo={v.logo} label={v.name} selected={v.selected} />
        ))}
      </div>
    </div>
  )
}

