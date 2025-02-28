import React from 'react';
import styles from './pokemon.module.css';

export default function PokemonDetails({ pokemon, onBack, loading, error }) {
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!pokemon) {
    return <div className={styles.notFound}>Pokemon not found</div>;
  }

  return (
    <div className={styles.pokemonDetails}>
      <button 
        onClick={onBack} 
        className={styles.backButton}
      >
        Back to List
      </button>
      
      <div className={styles.detailsContainer}>
        <h1 className={styles.pokemonName}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        
        {pokemon.sprites && (
          <div className={styles.spriteContainer}>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              className={styles.pokemonSprite}
            />
          </div>
        )}
        
        <div className={styles.statsContainer}>
          <h2>Stats</h2>
          <div className={styles.statsList}>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
          </div>
        </div>
        
        {pokemon.types && (
          <div className={styles.typesContainer}>
            <h2>Types</h2>
            <div className={styles.typesList}>
              {pokemon.types.map((type, index) => (
                <span key={index} className={styles.type}>
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) + " "}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {pokemon.abilities && (
          <div className={styles.abilitiesContainer}>
            <h2>Abilities</h2>
            <div className={styles.abilitiesList}>
              {pokemon.abilities.map((ability, index) => (
                <span key={index} className={styles.ability}>
                  {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) + " "}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}