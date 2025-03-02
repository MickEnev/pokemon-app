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
          <div className={styles.itemSpriteContainer}>
            <img 
              src={item.sprites.default} 
              alt={item.name} 
              className={styles.itemSprite}
            />
          </div>
        )}

        <div className={styles.statsContainer}>
                  <h2>Info</h2>
                  <div className={styles.statsList}>
                    <p>Cost: {item.cost}</p>
                    <p>Category: {item.category.name.charAt(0).toUpperCase() + item.category.name.slice(1)}</p>
                    <p>Attributes: {item.attributes[0].name.charAt(0).toUpperCase() + item.attributes[0].name.slice(1)}</p>
                  </div>
                </div>


        <div className={styles.statsContainer}>
                  <h2>Effect</h2>
                  <div className={styles.statsList}>
                    <p>
                        {item.effect_entries.length > 0 && item.effect_entries[0].short_effect
                            ? item.effect_entries[0].short_effect
                            : "None"}
                    </p>
                  </div>
                </div>
        
        
      </div>
    </div>
  );
}