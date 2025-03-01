import React from 'react';
import styles from '../pokemon/pokemon.module.css';

export default function ItemDetails({ item, onBack, loading, error }) {
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!item) {
    return <div className={styles.notFound}>Item not found</div>;
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
        <h1 className={styles.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
        
        {item.sprites && (
          <div className={styles.spriteContainer}>
            <img 
              src={item.sprites.default} 
              alt={item.name} 
              className={styles.pokemonSprite}
            />
          </div>
        )}
        
        
      </div>
    </div>
  );
}