



export const QUERY_GET_PRODUCT_CATEGORIES = gql`
query MyQuery {
    productCategories(first: 500) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`


export const QUERY_GET_PRODUCT_CATEGORY =  gql`
query MyQuery($id: ID = "dGVybToyMTc") {
    productCategory(id: $id) {
      count
      description
      name
      image {
        link
      }
    }
  }
`