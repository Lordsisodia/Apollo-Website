import { TimePeriod, timePeriodLabels } from '../../data/ventureRevenueData'

interface TimeFilterProps {
  selectedPeriod: TimePeriod
  onPeriodChange: React.Dispatch<React.SetStateAction<TimePeriod>>
}

/**
 * TimeFilter Component
 * BEM Structure: time-filter (block)
 * Elements: time-filter__list, time-filter__button
 * Modifiers: time-filter__button--active
 */
export default function TimeFilter({ selectedPeriod, onPeriodChange }: TimeFilterProps) {
  const periods: TimePeriod[] = ['1d', '7d', '30d', '3m', '6m', '1y', '3y', '6y', '10y', 'lifetime']

  return (
    <div className="time-filter">
      <div className="time-filter__list flex flex-wrap gap-3 justify-center">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`
              time-filter__button
              px-6 py-3 rounded-pill font-medium transition-all duration-300
              ${selectedPeriod === period
                ? 'time-filter__button--active bg-apollo-blue text-white'
                : 'bg-apollo-gray text-apollo-text-secondary hover:bg-apollo-border hover:text-white'
              }
            `}
          >
            {timePeriodLabels[period]}
          </button>
        ))}
      </div>
    </div>
  )
}
