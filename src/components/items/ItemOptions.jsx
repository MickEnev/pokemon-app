import React, { useState } from 'react';
import styles from '../pokemon/pokemon.module.css';

export default function ItemOptions(props) {
  const { data, onSelectItem } = props;
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter Pokemon based on search term
  const filteredItems = data.results.filter(item => {
    if (searchTerm === '') {
      return true;
    }
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.pokemonList}>
        <div className={styles.pokemonDashboard}>
        <input 
            value={searchTerm} 
            placeholder='Search Item' 
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
        />
        </div>

      <div className={styles.pokemonGrid}>
        {filteredItems.map((item, index) => (
          <div key={index} className={styles.pokemonCard}>
            <h1 className={styles.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
            <div className={styles.buttonContainer}>
            <button 
              onClick={() => onSelectItem(item.name)} 
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