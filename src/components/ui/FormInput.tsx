import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type CommonProps = {
  label: string
  name: string
}

type TextProps = CommonProps & { type?: 'text' | 'email' | 'tel' | 'password'; placeholder?: string } & InputHTMLAttributes<HTMLInputElement>
type TextareaProps = CommonProps & { type: 'textarea'; placeholder?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>
type SelectProps = CommonProps & { type: 'select'; placeholder?: string; options?: string[] } & SelectHTMLAttributes<HTMLSelectElement>

export default function FormInput(props: TextProps | TextareaProps | SelectProps) {
  const labelClasses = 'mb-2 block text-xs font-medium tracking-[0.18em] text-apollo-text-tertiary'
  const baseClasses = 'w-full rounded-[12px] border border-apollo-border bg-transparent px-5 py-4 text-sm outline-none focus:border-apollo-blue placeholder:text-apollo-text-tertiary'

  if (props.type === 'textarea') {
    const { label, name, placeholder, ...rest } = props
    return (
      <label className="block">
        <span className={labelClasses}>{label}</span>
        <textarea name={name} placeholder={placeholder} className={`${baseClasses} min-h-[140px]`} {...rest} />
      </label>
    )
  }

  if (props.type === 'select') {
    const { label, name, placeholder, options = [], ...rest } = props
    return (
      <label className="block">
        <span className={labelClasses}>{label}</span>
        <select name={name} className={`${baseClasses}`} defaultValue="" {...rest}>
          <option value="" disabled hidden>
            {placeholder ?? 'Select'}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-apollo-dark">
              {opt}
            </option>
          ))}
        </select>
      </label>
    )
  }

  const { label, name, placeholder, type = 'text', ...rest } = props
  return (
    <label className="block">
      <span className={labelClasses}>{label}</span>
      <input name={name} type={type} placeholder={placeholder} className={baseClasses} {...rest} />
    </label>
  )
}

