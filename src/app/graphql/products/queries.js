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
          ... on SimpleProduct {
            price
          }
        }
      }
    }
  }
`


export const QUERY_PRODUCTS_BASED_ON_PRODUCT_CATEGORIES = gql`
query ProductsBasedonProductCategories {
    products {
      edges {
        node {
          productCategories {
            edges {
              node {
                name
                parentId
                products (where: {maxPrice: 1.5, minPrice: 1.5){
                  edges {
                    node {
                      name
                      productTags {
                        edges {
                          node {
                            name
                            productTagId
                          }
                        }
                      }
                      productTypes {
                        edges {
                          node {
                            name
                          }
                        }
                      }
                    }
                  }
                }
                productCategoryId
              }
            }
          }
          productId
          status
          image {
            id
            link
          }
        }
      }
    }
  }
`


export const QUERY_PRODUCTS_BASED_ON_SEARCH = gql`

`


export const QUERY_GET_PRODUCTS_BASED_PRODUCT_TAGS = gql`
query MyQuery{
    productTags {
      edges {
        node {
          id
          name
          productTagId
          products {
            edges {
              node {
                name
                productId
              }
            }
          }
        }
      }
    }
  }
`