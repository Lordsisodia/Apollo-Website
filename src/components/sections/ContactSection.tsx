import SectionLabel from '../ui/SectionLabel'
import FormInput from '../ui/FormInput'
import Button from '../ui/Button'
import { contactContent } from '../../data/content'
import { EnvelopeIcon } from '../ui/Icons'

export default function ContactSection() {
  const { sectionLabel, heading, subtitle, fields } = contactContent
  const h = heading.replace('Together!', '<span class="text-apollo-blue">Together!</span>')
  return (
    <div className="py-24">
      <SectionLabel text={sectionLabel} />
      <h2
        className="mt-6 text-section font-normal leading-tight"
        dangerouslySetInnerHTML={{ __html: h }}
      />
      <p className="mt-4 max-w-3xl text-apollo-text-secondary">{subtitle}</p>

      <form className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput label={fields[0]?.label || "FULL NAME"} name={fields[0]?.name || "fullName"} placeholder={fields[0]?.placeholder} />
        <FormInput label={fields[1]?.label || "EMAIL"} name={fields[1]?.name || "email"} type="email" placeholder={fields[1]?.placeholder} />
        <FormInput label={fields[2]?.label || "PHONE"} name={fields[2]?.name || "phone"} type="tel" placeholder={fields[2]?.placeholder} />
        <FormInput label={fields[3]?.label || "SUBJECT"} name={fields[3]?.name || "subject"} type="select" placeholder={fields[3]?.placeholder} options={["General", "Partnership", "Speaking", "Other"]} />
        <FormInput label={fields[4]?.label || "BUDGET"} name={fields[4]?.name || "budget"} placeholder={fields[4]?.placeholder} />
        <div className="md:col-span-2">
          <FormInput label={fields[5]?.label || "MESSAGE"} name={fields[5]?.name || "message"} type="textarea" placeholder={fields[5]?.placeholder} />
        </div>
        <div className="md:col-span-2">
          <Button type="submit" icon={<EnvelopeIcon className="h-5 w-5" />}>Send Message</Button>
        </div>
      </form>
    </div>
  )
}

