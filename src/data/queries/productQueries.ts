import gql from 'graphql-tag'

export const PRODUCTS_QUERY = gql`
  query Products {
    products {
      code
      name
      available
      visible
      details {
        name
        description
      }
      fullPriceInCents
      salePriceInCents
      rating
      image
      stockAvailable
    }
  }
`
