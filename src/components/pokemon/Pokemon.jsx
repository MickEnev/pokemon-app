import React, { useState } from 'react';
import styles from './pokemon.module.css';
import PokemonOptions from './PokemonOptions.jsx';
import PokemonDetails from './PokemonDetails.jsx';
import useFetchPokemon from '../hooks/useFetchPokemon.jsx';

export default function Pokemon(props) {
  const { data } = props;
  const [selection, setSelection] = useState(null);
  const { pokemon, error, loading } = useFetchPokemon(selection);

  function handlePokemonSelect(pokemonName) {
    setSelection(pokemonName);
  }

  return (
    <div className={styles.pokemonDashboard}>
      {selection && pokemon ? (
        // Show Pokemon details when a Pokemon is selected and data is loaded
        <PokemonDetails 
          pokemon={pokemon} 
          onBack={() => setSelection(null)}
          loading={loading}
          error={error}
        />
      ) : (
        // Show Pokemon list when no Pokemon is selected
        <PokemonOptions 
          data={data} 
          onSelectPokemon={handlePokemonSelect}
        />
      )}
    </div>
  );
}