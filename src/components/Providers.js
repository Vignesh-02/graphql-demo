"use client"

import {
    ApolloClient, InMemoryCache, ApolloProvider, gql
} from "@apollo/client"

export const Providers = ({ children }) => {
    const client = new ApolloClient({
        uri: "https://dev.cleantech-mart.com/graphql",
        cache: new InMemoryCache()
    })

    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}