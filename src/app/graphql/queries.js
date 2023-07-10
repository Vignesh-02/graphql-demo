import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
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
`;