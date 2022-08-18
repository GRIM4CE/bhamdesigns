import gql from 'graphql-tag'

export const GET_PROJECTS = gql`
  query projects($filter: String) {
    projects(filter: $filter, count: 50) {
      title
      category
      date
      slug {
        pageType
        path
        noIndex
      }
      image {
        path
        fileType
        fallbackFileType
      }
    }
  }
`

export const GET_GALLERY = gql`
  query gallery($slug: String) {
    gallery(slug: $slug) {
      description
      projectId
      project {
        title
        slug {
          noIndex
        }
      }
      images {
        fileType
        count
        path
      }
    }
  }
`
