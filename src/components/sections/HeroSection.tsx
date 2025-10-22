import SectionLabel from '../ui/SectionLabel'
import { heroContent } from '../../data/content'

export default function HeroSection() {
  const { sectionLabel, headline, subtitle } = heroContent
  const highlighted = headline.replace('Apollo', '<span class="text-apollo-blue">Apollo</span>')
  return (
    <div className="min-h-screen flex items-center">
      <div className="py-24">
        <SectionLabel text={sectionLabel} />
        <h2
          className="mt-6 text-hero font-normal leading-tight"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
        <p className="mt-6 text-[20px] leading-8 text-apollo-text-secondary max-w-3xl">{subtitle}</p>
      </div>
    </div>
  )
}

