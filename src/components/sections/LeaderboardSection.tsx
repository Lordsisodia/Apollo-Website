import { Link } from 'react-router-dom'
import SectionLabel from '../ui/SectionLabel'
import { ChartBarIcon } from '@heroicons/react/24/outline'

/**
 * LeaderboardSection Component
 * BEM Structure: leaderboard-section (block)
 * Elements: leaderboard-section__content, leaderboard-section__description,
 *           leaderboard-section__cta, leaderboard-section__button
 */
export default function LeaderboardSection() {
  return (
    <section id="leaderboard" className="leaderboard-section py-20">
      <SectionLabel icon={<ChartBarIcon />} text="REVENUE TRACKING" />

      <h2 className="text-4xl lg:text-5xl font-light mb-8">
        Track our <span className="text-apollo-blue">Venture Revenue</span> in real-time
      </h2>

      <div className="leaderboard-section__content border border-apollo-border rounded-3xl p-8 max-w-4xl">
        <div className="leaderboard-section__description space-y-4 text-gray-300 leading-relaxed">
          <p>
            Our Revenue Leaderboard showcases the performance of Apollo's ventures, displaying the team
            members who run each business. From digital platforms to physical products, our diverse
            portfolio demonstrates the entrepreneurial spirit of Team Apollo.
          </p>
          <p>
            View historical data spanning from daily snapshots to lifetime revenue. Track how each
            venture performs over time and see which businesses are leading our collective success.
            All figures are based on actual P&L statements from 2024-2025.
          </p>
        </div>

        <div className="leaderboard-section__cta mt-8">
          <Link
            to="/leaderboard"
            className="leaderboard-section__button inline-flex items-center gap-3 bg-apollo-blue hover:bg-apollo-deep-blue text-white px-8 py-4 rounded-button font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ChartBarIcon className="w-6 h-6" />
            <span>View Revenue Leaderboard</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
