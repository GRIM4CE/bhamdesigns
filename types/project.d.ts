export interface Project {
  id: string
  category?: string[],
  image: {
    path: string
    fileType: string
    fallbackFileType: string
  },
  title: string,
  startDate?: number
  endDate: number | null,
  slug?: {
    pageType: string,
    path: string
  }
}

export interface Gallery { 
  id: string,
  description: string,
  images: {
    count: number,
    path: string,
    fileType: string,
  },
  title: string,
  slug: string,
  projectId: string,
}

export interface State {
  projects: []
  gallery: []
  category: string
}
