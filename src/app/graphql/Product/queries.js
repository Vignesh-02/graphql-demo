

export const QUERY_GET_POST = gql`
query getProduct {
    product(id: "cHJvZHVjdDoyMDcyNw==", idType: ID) {
      featured
      featuredImage {
        node {
          link
        }
      }
      productId
      name
      modified
      productTags {
        edges {
          node {
            name
            productTagId
            taxonomyName
            termGroupId
            taxonomy {
              node {
                name
              }
            }
          }
        }
      }
      purchasable
      purchaseNote
      title
      totalSales
      type
      visibleProducts {
        nodes {
          id
        }
      }
      attributes {
        edges {
          node {
            attributeId
            label
            name
            options
            position
            variation
          }
        }
      }
      comments {
        edges {
          node {
            content
          }
        }
      }
      preview {
        node {
          id
        }
      }
      shortDescription(format: RENDERED)
      sku
      slug
    }
  }
`

// shortDescription will give you 