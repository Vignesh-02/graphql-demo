

export const MUTATION_CREATE_USER = gql`
mutation createUser($input: CreateUserInput = {username: "abcdef", password: "abcdef", email: "laserlikefocus000@gmail.com"}) {
    createUser(input: $input) {
      clientMutationId
      user {
        email
        firstName
        id
        name
      }
    }
  }
`

// dXNlcjo2ODQ=
// dXNlcjo2ODU

// type UpdateUserInput
export const MUTATION_UPDATE_USER = gql`
mutation updateUser {
    updateUser(input: {id: "dXNlcjo2ODQ=", password: "pqrstuv", firstName: "pqrstuv"}) {
      user {
        id
        email
        name
        firstName
        
      }
    }
  }
`

export const MUTATION_DELETE_USER = gql`
mutation deleteUser {
    deleteUser(input: {id: "dXNlcjo2ODQ"}) {
      clientMutationId
      deletedId
      user {
        email
      }
    }
  }
`