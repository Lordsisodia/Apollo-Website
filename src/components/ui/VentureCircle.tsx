interface VentureCircleProps {
  logo: string
  label: string
  selected?: boolean
}

export default function VentureCircle({ logo, label, selected }: VentureCircleProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid aspect-square w-40 place-items-center rounded-full p-10 ${
          selected ? 'border-[3px] border-apollo-blue' : 'border-2 border-apollo-border'
        }`}
      >
        <img src={logo} alt={label} className="max-h-20 max-w-20 object-contain" />
      </div>
      <div className="mt-3 text-sm text-apollo-text-secondary">{label}</div>
    </div>
  )
}

