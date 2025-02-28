import React, { useState } from 'react';
import styles from './pokemon.module.css';

export default function MoveOptions(props) {
  const { data, onSelectMove } = props;
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter Pokemon based on search term
  const filteredMoves = data.results.filter(move => {
    if (searchTerm === '') {
      return true;
    }
    return move.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.pokemonList}>
        <div className={styles.pokemonDashboard}>
        <input 
            value={searchTerm} 
            placeholder='Search Move' 
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
        />
        </div>

      <div className={styles.pokemonGrid}>
        {filteredMoves.map((move, index) => (
          <div key={index} className={styles.pokemonCard}>
            <h1 className={styles.pokemonName}>{move.name.charAt(0).toUpperCase() + move.name.slice(1)}</h1>
            <div className={styles.buttonContainer}>
            <button 
              onClick={() => onSelectMove(move.name)} 
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