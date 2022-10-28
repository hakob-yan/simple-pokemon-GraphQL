import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';
import Pokemon from '../components/pokemon/Pokemon';
import { GET_POKEMONS } from '../GraphQL/Queries'
import './App.scss';

function App() {
  const { loading, data, error } = useQuery(GET_POKEMONS)
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons)
    }
  }, [data]);
  if (loading) return <div className='loading'> <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></div>
  if (error) { return <h1>Error occured ...</h1> }
  return (
    <div className="App">
      {pokemons.map(item => (
        <Pokemon
          key={item.id}
          image={item.image}
          name={item.name}
          weaknesses={item.weaknesses}
          types={item.types}
          classification={item.classification}
          weight={item.weight}
        />
      ))}
    </div>
  );
}

export default App;
