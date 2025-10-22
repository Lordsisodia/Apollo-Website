import SectionLabel from '../ui/SectionLabel'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import TeamMemberCard from '../ui/TeamMemberCard'
import { teamMembers, teamPhoto } from '../../data/teamMembers'

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <SectionLabel icon={<BriefcaseIcon />} text="PORTFOLIO" />

      <h2 className="text-5xl lg:text-6xl font-light mb-16">
        Meet The <span className="text-apollo-blue">Team</span>
      </h2>

      {/* Full team photo */}
      <div className="mb-16 relative">
        <img
          src={teamPhoto.image}
          alt={teamPhoto.caption}
          className="w-full rounded-3xl"
        />
        <div className="absolute bottom-8 left-8 flex items-center gap-4">
          <h3 className="text-2xl font-semibold text-white tracking-tight">{teamPhoto.caption}</h3>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-apollo-blue"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Team member grid - 3 columns, 6 rows */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  )
}
