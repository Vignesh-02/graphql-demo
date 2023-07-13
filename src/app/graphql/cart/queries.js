
export const QUERY_GET_CART_DETAILS = gql`
query Cart {
    cart(recalculateTotals: false) {
      needsShippingAddress
      discountTax
      contentsTax
      contentsTotal
      discountTotal
      displayPricesIncludeTax
      feeTax
      feeTotal
      isEmpty
      totalTax
      total
      subtotalTax
      subtotal
      shippingTotal
      shippingTax
      totalTaxes {
        amount
        label
      }
    }
  }
` 