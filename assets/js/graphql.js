import gql from 'graphql-tag'

export const GET_PROJECTS = gql`
  query projects {
    projects(count: 50) {
      title
      category
      date
      image {
        path
        fileType
      }
    }
  }
`

export const GET_GALLERY = gql`
  query gallery($slug: String) {
    gallery(slug: $slug) {
      title
      description
      projectId
      images {
        fileType
        count
        path
      }
    }
  }
`
