"use client"

import Homepage from "@/components/Homepage";
import NewComponent from "@/components/NewComponent"
import Products from "@/components/Products";

import { useQuery, gql } from "@apollo/client"
import client from '../../apollo-client'

import { QUERY_ALL_PRODUCTS } from "./graphql/products/queries";


export async function getCountries(){
    const { data } = await client.query({
        query: gql`
          query Countries {
            countries {
              code
              name
              emoji
              currency
              languages{
                name
              }
            }
          }
        `,
      });
      return  data.countries
}

export async function getPosts(){
    const {data}  = await client.query({
        query: gql`
        query getPosts{
            posts {
              edges {
                node {
                  id
                  content
                  status
                  excerpt
                }
              }
            }
          }
        `
     })
     return data.posts
}

    




export default   function Home(){

    const {data} =   useQuery(QUERY_ALL_PRODUCTS)
    // const products = data.products.edges.map(node => node)
    const products = data?.products?.edges.map(({node}) => node)
    console.log(products)
    // const countries = await getCountries()
    // const posts = await getPosts()
    // const postData = posts.edges.map(({node}) => node)
    //     console.log(postData)
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        {/* <Homepage countries={countries}/> */}
        {/* <NewComponent posts={postData}/>  */}
        <Products products={products} />
      </div>
    );
  };
