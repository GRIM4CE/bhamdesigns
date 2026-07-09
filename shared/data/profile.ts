// Single source of truth for identity details. Consumed by the sidebar links and
// by the Person structured data on the homepage, so the two cannot drift apart.
export const profile = {
  name: 'Jon Leibham',
  jobTitle: 'Web Engineer',
  email: 'jleibham@gmail.com',
  github: 'https://github.com/GRIM4CE',
  linkedin: 'https://www.linkedin.com/in/jon-leibham-a29b93105/',
} as const

/** Profile URLs that identify the same person elsewhere on the web (schema.org sameAs). */
export const sameAs: string[] = [profile.github, profile.linkedin]
