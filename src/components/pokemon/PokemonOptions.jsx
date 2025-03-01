import React, { useState } from 'react';
import styles from './pokemon.module.css';

export default function PokemonOptions(props) {
  const { data, onSelectPokemon } = props;
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter Pokemon based on search term
  const filteredPokemon = data.results.filter(pokemon => {
    if (searchTerm === '') {
      return true;
    }
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.pokemonList}>
        <div className={styles.pokemonDashboard}>
        <input 
            value={searchTerm} 
            placeholder='Search Pokemon' 
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
        />
        </div>

      <div className={styles.pokemonGrid}>
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className={styles.pokemonCard}>
            <h1 className={styles.pokemonName}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <div className={styles.buttonContainer}>
            <button 
              onClick={() => onSelectPokemon(pokemon.name)} 
              className={styles.pokemonButton}
            >
              I choose you!
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}