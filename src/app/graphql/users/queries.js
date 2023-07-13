


export const QUERY_GET_USER = gql`
query MyQuery($id: ID = "dXNlcjo2ODU") {
    user(id: $id) {
      email
      firstName
      id
    }
  }
`

export const QUERY_GET_USERS = gql`
query MyQuery{
    users {
      edges {
        node {
          firstName
          email
          id
        }
      }
    }
  }
`