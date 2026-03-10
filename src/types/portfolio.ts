export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  address: string
  github: string
  linkedin: string
  gitlab: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  note?: string
}

export interface Experience {
  title: string
  company: string
  type: string
  period: string
  location: string
  bullets: string[]
}

export interface Project {
  id: number
  title: string
  context: string
  period: string
  description: string
  bullets: string[]
  tech: string[]
  githubUrl: string
  liveUrl: string
}

export interface Skill {
  name: string
  category: 'ai' | 'backend' | 'soft'
}

export interface Language {
  name: string
  level: string
}
