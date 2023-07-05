import Homepage from "@/components/Homepage";

import { gql } from "@apollo/client"
import client from '../../apollo-client'

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

 
export default async function Home(){
    const countries = await getCountries()
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <Homepage countries={countries}/>
      </div>
    );
  };
