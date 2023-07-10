import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://dev.cleantech-mart.com/graphql",
    cache: new InMemoryCache()
})

export default client