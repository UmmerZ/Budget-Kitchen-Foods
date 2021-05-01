import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
// import { onError } from "@apollo/client/link/error"

const httpLink = new HttpLink({ uri: "http://localhost:5000/graphql" })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
