import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT as string,
  cache,
})

export default apolloClient
