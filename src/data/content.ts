export const sidebarContent = {
  location: "Based in Bristol, UWE",
  copyright: "© 2024 APOLLO. Open to connect always.",
  social: {
    linkedin: "https://www.linkedin.com/in/apollo-uwe-521135335",
    instagram: "https://www.instagram.com/apollouwe/"
  }
}

export const heroContent = {
  sectionLabel: "MEET THE TEAM",
  headline: "At Apollo, we're more than just a team - we're innovators and visionaries.",
  subtitle: "We are a team of 18 young entrepreneurs, currently studying Team Entrepreneurship at the University of the West of England."
}

export const ethosContent = {
  sectionLabel: "TEAM ETHOS",
  heading: "Apollo's Team Ethos",
  cards: [
    {
      icon: "target",
      title: "OUR TEAM MISSION",
      description: "To cultivate our specialisms through shared growth",
      link: "Read more"
    },
    {
      icon: "bell",
      title: "OUR TEAM VISION",
      description: "To be a supportive team of outstanding entrepreneurs",
      link: "Read more"
    },
    {
      icon: "crown",
      title: "OUR TEAM VALUES",
      description: "P - Persistence | A - Ambitious | I - Integrity and Accountability | R - Respect",
      link: "Read more"
    }
  ]
}

export const timelineContent = {
  sectionLabel: "TIMELINE",
  heading: "Team Apollo Timeline",
  items: [
    {
      status: "upcoming" as const,
      label: "Upcoming",
      events: [
        { title: "Frat Friday Event Night at Pams", date: "8th of November 2024" },
        { title: "UWE Poker Championship Tournament", details: "Undisclosed every Thursday, - Sunday 8PM" }
      ]
    },
    {
      status: "planned" as const,
      label: "Our Plans",
      events: [
        { title: "Apollo Consulting Launch", details: "Official launch of Apollo Consulting services" },
        { title: "Pioneering Marketting Connections", details: "Affiliate Team" },
        { title: "A New Chapter with Exo", details: "New Education Standard" }
      ]
    },
    {
      status: "past" as const,
      date: "24th September 2023",
      events: [
        { title: "Formation of the Apollo Team", location: "UWE BRISTOL" }
      ]
    }
  ]
}

export const venturesContent = {
  sectionLabel: "VENTURES",
  heading: "Our Team Ventures",
  ventures: [
    { id: 1, name: "Delta Sports Management", logo: "/images/ventures/delta.avif", selected: false },
    { id: 2, name: "Frat Fridays", logo: "/images/ventures/frat-fridays.avif", selected: true },
    { id: 3, name: "SISO SOLUTIONS", logo: "/images/ventures/siso.avif", selected: false },
    { id: 4, name: "DORCH GARMS", logo: "/images/ventures/dorch-garms.avif", selected: false },
    { id: 5, name: "Flipped It", logo: "/images/ventures/flipped-it.avif", selected: false },
    { id: 6, name: "FAIRFEED", logo: "/images/ventures/fairfeed.avif", selected: false },
    { id: 7, name: "Apollo Consulting", logo: "/images/ventures/apollo-consulting.avif", selected: false },
    { id: 8, name: "AlexCountX", logo: "/images/ventures/alexcountx.avif", selected: false }
  ]
}

export const contactContent = {
  sectionLabel: "CONTACT",
  heading: "Let's Work Together!",
  subtitle: "Feel you resonate with Apollo's vision? Reach out and share a bit about yourself. We're always eager to connect with individuals eager to shape the future with us. Contact the Apollo team today!",
  fields: [
    { name: "fullName", label: "FULL NAME", placeholder: "Your Full Name", type: "text" },
    { name: "email", label: "EMAIL", placeholder: "Your email address", type: "email" },
    { name: "phone", label: "PHONE", placeholder: "Your Phone Number", type: "tel" },
    { name: "subject", label: "SUBJECT", placeholder: "Select a Subject", type: "select" },
    { name: "budget", label: "YOUR BUDGET", placeholder: "A range budget for your project", type: "text" },
    { name: "message", label: "MESSAGE", placeholder: "Write Your Message here...", type: "textarea" }
  ]
}

