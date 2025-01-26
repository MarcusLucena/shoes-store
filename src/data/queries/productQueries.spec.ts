import { describe, it, expect, vi } from 'vitest'
import { gql } from '@apollo/client/core'
import { apolloClient } from '@/infra/apollo-client'
import { PRODUCTS_QUERY } from '@/data/queries/productQueries'

// Mock the Apollo client
vi.mock('@/infra/apollo-client', () => ({
  apolloClient: {
    query: vi.fn(),
  },
}))

describe('productQueries', () => {
  it('fetches products data successfully', async () => {
    const mockProductsData = {
      data: {
        products: [
          {
            code: 'P001',
            name: 'Product 1',
            available: true,
            visible: true,
            details: {
              name: 'Product 1 Name',
              description: 'Product 1 Description',
            },
            fullPriceInCents: 1000,
            salePriceInCents: 800,
            rating: 4.5,
            image: 'product1.jpg',
            stockAvailable: 10,
          },
        ],
      },
    }

    apolloClient.query.mockResolvedValue(mockProductsData)

    const result = await apolloClient.query({
      query: PRODUCTS_QUERY,
    })

    expect(result.data.products).toEqual(mockProductsData.data.products)
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: gql`
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
      `,
    })
  })

  it('handles empty products data', async () => {
    const mockEmptyData = {
      data: {
        products: [],
      },
    }

    apolloClient.query.mockResolvedValue(mockEmptyData)

    const result = await apolloClient.query({
      query: PRODUCTS_QUERY,
    })

    expect(result.data.products).toEqual(mockEmptyData.data.products)
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: gql`
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
      `,
    })
  })

  it('handles query error', async () => {
    const mockError = new Error('Query failed')

    apolloClient.query.mockRejectedValue(mockError)

    await expect(
      apolloClient.query({
        query: PRODUCTS_QUERY,
      }),
    ).rejects.toThrow('Query failed')

    expect(apolloClient.query).toHaveBeenCalledWith({
      query: gql`
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
      `,
    })
  })
})
