export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Core';
  level: number; // Percentage 0-100
  iconName: string;
  description: string;
  color?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage' | 'Graduating';
  details: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  architecture?: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  demoType: 'renthub' | 'skyscope';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialUrl?: string;
  badgeColor: string;
  iconName: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
