

export const MUTATION_ADD_CART_ITEMS = gql`
mutation MyMutation($productId: Int = 20858, $quantity: Int = 10) {
    addCartItems(input: {items: [{productId: $productId, quantity: $quantity}]}) {
      added {
        id
        total
      }
      cart {
        total
      }
    }
  }
`


// mutation MyMutation($input: AddToCartInput = {productId: 20878, quantity: 10}) {
//     addToCart(input: $input) {
//       cart {
//         feeTotal
//       }
//       cartItem {
//         quantity
//         subtotal
//       }
//     }
//   }



  const MUTATION_ADD_TO_CART = gql`
    mutation ADD_TO_CART($input: AddToCartInput!) {
      addToCart(input: $input) {
        cartItem {
          key
          product {
            node {
              id
              productId: databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
          variation {
            node {
              id
              variationId: databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
            }
            attributes {
              id
              attributeId
              name
              value
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
    }
`;

import { gql } from "@apollo/client";

/**
 * Update Cart
 *
 * This query is used for both updating the items in the cart and delete a cart item.
 * When the cart item needs to be deleted, we should pass quantity as 0 in the input along with other fields.
 */
const UPDATE_CART = gql`
mutation UPDATE_CART($input: UpdateItemQuantitiesInput!) {
  updateItemQuantities(input: $input) {
    items {
      key
      product {
        node {
          id
          productId: databaseId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
      }
      variation {
        node {
          id
          variationId: databaseId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
        }
        attributes {
          id
          attributeId
          name
          value
        }
      }
      quantity
      total
      subtotal
      subtotalTax
    }
    removed {
      key
      product {
        node {
          id
          productId: databaseId
        }
      }
      variation {
        node {
          id
          variationId: databaseId
        }
      }
    }
    updated {
      key
      product {
        node {
          id
          productId: databaseId
        }
      }
      variation {
        node {
          id
          variationId: databaseId
        }
      }
    }
  }
}
`;


const CLEAR_CART_MUTATION = gql`
mutation CLEAR_CART_MUTATION( $input: RemoveItemsFromCartInput! ) {
  removeItemsFromCart(input: $input) {
    cartItems {
      quantity
    }
  }
}
`



export default UPDATE_CART;

// add to cart 

// "data": {
//     "addToCart": {
//       "cartItem": {
//         "key": "94fa408dabe453246eb240f198322336",
//         "product": {
//           "node": {
//             "id": "cHJvZHVjdDoyMDcyNQ==",
//             "productId": 20725,
//             "name": "Flinslim Lite Solar Hybrid Inverter",
//             "description": "<p><br data-mce-bogus=\"1\"></p>\n",
//             "type": "SIMPLE",
//             "onSale": false,
//             "slug": "flinslim-lite-solar-hybrid-inverter",
//             "averageRating": 0,
//             "reviewCount": 0,
//             "image": {
//               "id": "cG9zdDoyMDcyNA==",
//               "sourceUrl": "https://dev.cleantech-mart.com/wp-content/uploads/2023/07/flinslim-lite-solar-hybrid-inverter-250x250-1.webp",
//               "altText": ""
//             },
//             "galleryImages": {
//               "nodes": []
//             }
//           }
//         },
//         "variation": null,
//         "quantity": 1,
//         "total": "₹87,969.0",
//         "subtotal": "₹74,550.0",
//         "subtotalTax": "₹13,419.0"
//       }
//     }
//   },
//   "extensions": {
//     "debug": [
//       {
//         "type": "DEBUG_LOGS_INACTIVE",
//         "message": "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled."
//       }
//     ]
//   }
// }