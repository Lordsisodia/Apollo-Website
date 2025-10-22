import SectionLabel from '../ui/SectionLabel'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { ventureProfiles } from '../../data/venturesDetailed'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function AboutVenturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ventureProfiles.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + ventureProfiles.length) % ventureProfiles.length)
  }

  const currentProfile = ventureProfiles[currentIndex]

  if (!currentProfile) return null

  return (
    <section id="about" className="py-20">
      <SectionLabel icon={<ChatBubbleLeftRightIcon />} text="ABOUT VENTURES" />

      <h2 className="text-4xl lg:text-5xl font-light mb-16">
        Learn more about <span className="text-apollo-blue">our Teams Ventures</span> and how you can connect
      </h2>

      {/* Venture profile card - smaller and more compact */}
      <div className="border border-apollo-border rounded-3xl p-8 max-w-3xl">
        <div className="flex items-start gap-4 mb-6">
          <img
            src={currentProfile.avatar}
            alt={currentProfile.name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-semibold mb-1">{currentProfile.name}</h3>
            <p className="text-sm text-gray-400">
              {currentProfile.title} of{' '}
              <a href="#ventures" className="text-apollo-blue hover:underline">
                {currentProfile.venture}
              </a>
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {currentProfile.description}
        </p>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full border border-apollo-border hover:border-apollo-blue transition-colors grid place-items-center"
          aria-label="Previous venture"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">{currentIndex + 1} / {ventureProfiles.length}</span>

          <div className="flex gap-2">
            {ventureProfiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-apollo-blue w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to venture ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full border border-apollo-border hover:border-apollo-blue transition-colors grid place-items-center"
          aria-label="Next venture"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
