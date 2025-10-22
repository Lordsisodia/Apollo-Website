import SectionLabel from '../ui/SectionLabel'
import ContentCard from '../ui/ContentCard'
import { ethosContent } from '../../data/content'
import { BoltIcon, BellIcon } from '@heroicons/react/24/outline'
import { CrownIcon } from '../ui/Icons'

const icons = {
  target: <BoltIcon className="h-14 w-14" />,
  bell: <BellIcon className="h-14 w-14" />,
  crown: <CrownIcon className="h-14 w-14" />,
}

export default function TeamEthosSection() {
  const { sectionLabel, heading, cards } = ethosContent
  const h = heading.replace('Ethos', '<span class="text-apollo-blue">Ethos</span>')
  return (
    <div className="py-24">
      <SectionLabel text={sectionLabel} />
      <h2
        className="mt-6 text-section font-normal leading-tight"
        dangerouslySetInnerHTML={{ __html: h }}
      />

      <div className="mt-10 flex flex-col gap-6 max-w-full">
        {cards.map((c) => (
          <ContentCard
            key={c.title}
            icon={icons[c.icon as keyof typeof icons]}
            title={c.title}
            description={c.description}
            link={c.link}
          />
        ))}
      </div>
    </div>
  )}
