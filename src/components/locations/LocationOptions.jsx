import React, { useState } from 'react';
import styles from '../pokemon/pokemon.module.css';

export default function LocationOptions(props) {
  const { data, onSelectLocation } = props;
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter Pokemon based on search term
  const filteredLocations = data.results.filter(location => {
    if (searchTerm === '') {
      return true;
    }
    return location.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.pokemonList}>
        <div className={styles.pokemonDashboard}>
        <input 
            value={searchTerm} 
            placeholder='Search Location' 
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
        />
        </div>

      <div className={styles.pokemonGrid}>
        {filteredLocations.map((location, index) => (
          <div key={index} className={styles.pokemonCard}>
            <h1 className={styles.pokemonName}>{location.name.charAt(0).toUpperCase() + location.name.slice(1)}</h1>
            <div className={styles.buttonContainer}>
            <button 
              onClick={() => onSelectLocation(location.name)} 
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