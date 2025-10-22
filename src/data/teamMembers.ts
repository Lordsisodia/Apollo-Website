export interface TeamMember {
  id: number
  name: string
  role: string
  roleType: 'dark' | 'blue'
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Freddie",
    role: "Venture Lead",
    roleType: "dark",
    image: "/images/team/freddie.avif"
  },
  {
    id: 2,
    name: "Logan",
    role: "Academic Lead",
    roleType: "blue",
    image: "/images/team/logan.avif"
  },
  {
    id: 3,
    name: "Harry",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/harry.avif"
  },
  {
    id: 4,
    name: "Sam",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/sam.avif"
  },
  {
    id: 5,
    name: "Shaan",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/shaan.avif"
  },
  {
    id: 6,
    name: "Alex H",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/alex-h.avif"
  },
  {
    id: 7,
    name: "Alex K",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/alex-k.avif"
  },
  {
    id: 8,
    name: "Ares",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/ares.avif"
  },
  {
    id: 9,
    name: "Ben",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/ben-j.avif"
  },
  {
    id: 10,
    name: "Charlie",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/charlie.avif"
  },
  {
    id: 11,
    name: "David",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/david.avif"
  },
  {
    id: 12,
    name: "Emma",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/emma.avif"
  },
  {
    id: 13,
    name: "George",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/george.avif"
  },
  {
    id: 14,
    name: "George L",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/george-l.avif"
  },
  {
    id: 15,
    name: "Grace",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/grace.avif"
  },
  {
    id: 16,
    name: "James",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/james.avif"
  },
  {
    id: 17,
    name: "Jaymie",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/jaymie.avif"
  },
  {
    id: 18,
    name: "Matt",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/matt.avif"
  }
]

export const teamPhoto = {
  image: "/images/team/whole-team.avif",
  caption: "The Whole Team"
}
