import { VentureRevenue } from '../../data/ventureRevenueData'

interface LeaderboardChartProps {
  data: VentureRevenue[]
}

/**
 * LeaderboardChart Component
 * BEM Structure: leaderboard-chart (block)
 * Elements: leaderboard-chart__item, leaderboard-chart__rank, leaderboard-chart__venture-info,
 *           leaderboard-chart__venture-name, leaderboard-chart__team-members,
 *           leaderboard-chart__bar-container, leaderboard-chart__bar, leaderboard-chart__value
 * Modifiers: leaderboard-chart__item--top, leaderboard-chart__bar--top
 */
export default function LeaderboardChart({ data }: LeaderboardChartProps) {
  // Calculate max revenue for bar scaling
  const maxRevenue = Math.max(...data.map(entry => Math.abs(entry.revenue)))

  // Format currency
  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value)
    const sign = value < 0 ? '-' : ''

    if (absValue >= 1000000) {
      return `${sign}£${(absValue / 1000000).toFixed(1)}M`
    } else if (absValue >= 1000) {
      return `${sign}£${(absValue / 1000).toFixed(1)}K`
    }
    return `${sign}£${absValue.toFixed(0)}`
  }

  return (
    <div className="leaderboard-chart space-y-4">
      {data.map((entry, index) => {
        const barWidth = (Math.abs(entry.revenue) / maxRevenue) * 100
        const isTop3 = index < 3
        const isNegative = entry.revenue < 0
        const rank = index + 1

        return (
          <div
            key={entry.id}
            className={`
              leaderboard-chart__item
              ${isTop3 ? 'leaderboard-chart__item--top' : ''}
              bg-apollo-gray rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:bg-apollo-border
            `}
          >
            {/* Mobile Layout (< 640px) */}
            <div className="sm:hidden space-y-3">
              {/* Top Row: Rank + Venture Name + Value */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {/* Rank */}
                  <div
                    className={`
                      leaderboard-chart__rank
                      flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-base
                      ${isTop3
                        ? 'bg-apollo-blue text-white'
                        : 'bg-apollo-border text-apollo-text-secondary'
                      }
                    `}
                  >
                    {rank}
                  </div>

                  {/* Venture Name */}
                  <div className="leaderboard-chart__venture-name font-bold text-white text-sm">
                    {entry.ventureName}
                  </div>
                </div>

                {/* Value */}
                <div
                  className={`
                    leaderboard-chart__value flex-shrink-0 font-bold text-base
                    ${isNegative
                      ? 'text-red-400'
                      : isTop3
                      ? 'text-apollo-blue'
                      : 'text-apollo-text-secondary'
                    }
                  `}
                >
                  {formatCurrency(entry.revenue)}
                </div>
              </div>

              {/* Team Members */}
              <div className="leaderboard-chart__team-members text-xs text-apollo-text-secondary pl-12">
                {entry.teamMembers.join(', ')}
              </div>

              {/* Bar */}
              <div className="leaderboard-chart__bar w-full h-6 bg-apollo-dark rounded-full overflow-hidden">
                <div
                  className={`
                    leaderboard-chart__bar-fill h-full rounded-full transition-all duration-700 ease-out
                    ${isNegative
                      ? 'bg-red-500'
                      : isTop3
                      ? 'leaderboard-chart__bar--top bg-gradient-to-r from-apollo-blue to-apollo-deep-blue'
                      : 'bg-apollo-blue'
                    }
                  `}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>

            {/* Desktop Layout (>= 640px) */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Rank */}
              <div
                className={`
                  leaderboard-chart__rank
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                  ${isTop3
                    ? 'bg-apollo-blue text-white'
                    : 'bg-apollo-border text-apollo-text-secondary'
                  }
                `}
              >
                {rank}
              </div>

              {/* Venture Info */}
              <div className="leaderboard-chart__venture-info flex-shrink-0 w-48">
                <div className="leaderboard-chart__venture-name font-bold text-white">
                  {entry.ventureName}
                </div>
                <div className="leaderboard-chart__team-members text-sm text-apollo-text-secondary mt-1">
                  {entry.teamMembers.join(', ')}
                </div>
              </div>

              {/* Bar Container */}
              <div className="leaderboard-chart__bar-container flex-1 flex items-center gap-4">
                {/* Bar */}
                <div className="leaderboard-chart__bar flex-1 h-8 bg-apollo-dark rounded-full overflow-hidden">
                  <div
                    className={`
                      leaderboard-chart__bar-fill h-full rounded-full transition-all duration-700 ease-out
                      ${isNegative
                        ? 'bg-red-500'
                        : isTop3
                        ? 'leaderboard-chart__bar--top bg-gradient-to-r from-apollo-blue to-apollo-deep-blue'
                        : 'bg-apollo-blue'
                      }
                    `}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>

                {/* Value */}
                <div
                  className={`
                    leaderboard-chart__value flex-shrink-0 w-24 text-right font-bold text-lg
                    ${isNegative
                      ? 'text-red-400'
                      : isTop3
                      ? 'text-apollo-blue'
                      : 'text-apollo-text-secondary'
                    }
                  `}
                >
                  {formatCurrency(entry.revenue)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
