import projects from './data/projects'
import { getGallery } from './data/galleries'
import type { Project, Gallery } from "~~/types/project";

export const fetchProjects = (): Project[] => projects.sort((a, b) => {
  if(!a.endDate || !b.endDate) return 
  return b.endDate - a.endDate
})

export const fetchGallery = (slug: string): Gallery => getGallery(slug)

