"use client"
import { useQuery } from "@apollo/client";
// import { QUERY_ALL_POSTS } from "@/app/graphql/queries";


const NewComponent =  ({ posts }) => {
    //   const func = async() => {
    //     const response  = await client.query({
    //         query: gql`
    //         query getPosts{
    //             posts {
    //               edges {
    //                 node {
    //                   id
    //                   content
    //                   status
    //                   excerpt
    //                 }
    //               }
    //             }
    //           }
    //         `
    //      })
    //      return repsonse
    //   }
    //     const data =  func().then(res => res)
    //     console.log(data)

        // const { data, loading, refetch } = useQuery(QUERY_ALL_POSTS);
        // console.log(`The data is ${data}`)
        // let vals = posts.map(post => post.edges.node)
        
    console.log(posts)
  return (
    // console.log(posts)
        <div>
        This is the data 
        </div>
  )
}

export default NewComponent