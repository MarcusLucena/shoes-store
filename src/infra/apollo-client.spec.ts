import { describe, it, expect } from 'vitest'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { apolloClient } from '@/infra/apollo-client'

describe('apolloClient', () => {
  it('initializes ApolloClient with correct URI', () => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: 'http://example.com/graphql',
    })

    expect(client).toBeInstanceOf(ApolloClient)
    expect(client.link.options.uri).toBe('http://example.com/graphql')
  })

  it('uses InMemoryCache for caching', () => {
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      cache,
      uri: 'http://example.com/graphql',
    })

    expect(client.cache).toBe(cache)
  })

  it('exports apolloClient instance', () => {
    expect(apolloClient).toBeInstanceOf(ApolloClient)
  })
})
