import React from 'react';
import styles from '../pokemon/pokemon.module.css';

export default function LocationDetails({ location, onBack, loading, error }) {
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!location) {
    return <div className={styles.notFound}>Location not found</div>;
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
        <h1 className={styles.pokemonName}>{location.name.charAt(0).toUpperCase() + location.name.slice(1)}</h1>


        <div className={styles.statsContainer}>
                  <h2>Details</h2>
                  <div className={styles.statsList}>
                    <p>Region: {location.region.name.charAt(0).toUpperCase() + location.region.name.slice(1)}</p>
                    <p>Generation: {"The API currently seems to be bugged for generation ._." /*//location.game_indices[0].generation.name[location.game_indices[0].generation.name.length - 2] == "i" || location.game_indices[0].generation.name[location.game_indices[0].generation.name.length - 2] == "v"? location.game_indices[0].generation.name[location.game_indices[0].generation.name.length - 2].charAt(0).toUpperCase() + location.game_indices[0].generation.name[location.game_indices[0].generation.name.length - 1].charAt(0).toUpperCase() + " (The API seems to be bugged and says IV for everything ._.)" : location.game_indices[0].generation.name[location.game_indices[0].generation.name.length - 1].charAt(0).toUpperCase()*/}</p>
                    
                  </div>
                </div>
        
      </div>
    </div>
  );
}