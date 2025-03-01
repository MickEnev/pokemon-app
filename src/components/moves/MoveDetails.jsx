import React from 'react';
import styles from '../pokemon/pokemon.module.css';

export default function MoveDetails({ move, onBack, loading, error }) {
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!move) {
    return <div className={styles.notFound}>Move not found</div>;
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
        <h1 className={styles.pokemonName}>{move.name.charAt(0).toUpperCase() + move.name.slice(1)}</h1>
        
        <div className={styles.statsContainer}>
          <h2>Stats</h2>
          <div className={styles.statsList}>
            <p>Accuracy: {move.accuracy}</p>
            <p>Power: {move.power}</p>
            <p>PP: {move.pp}</p>
            <p>Priority: {move.priority}</p>
            <p>Damage Type: {move.damage_class.name.charAt(0).toUpperCase() + move.damage_class.name.slice(1)}</p>
            <p>Generation: {move.generation.name[move.generation.name.length - 1].toUpperCase()}</p>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <h2>Effect</h2>
          <div className={styles.statsList}>
            <p>
                {move.effect_entries.length > 0 && move.effect_entries[0].short_effect
                    ? move.effect_entries[0].short_effect
                    : "None"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}