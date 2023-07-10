import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";


export const QUERY_ALL_PRODUCTS = gql`
query getProducts {
    products(first: 3000) {
      edges {
        node {
          id
          name
          sku
          averageRating
          featured
          image {
            link
          }
          onSale
          productId
          status
          productTags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`