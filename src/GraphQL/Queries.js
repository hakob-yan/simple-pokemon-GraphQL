import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
query AllPokemons {
pokemons(first:10 ) {
  id
  name
  number
  classification
  weaknesses
  image 
  types
  weight {
    minimum
    maximum
  }    
}
}
`;