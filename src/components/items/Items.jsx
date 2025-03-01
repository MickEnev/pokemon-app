import React, { useState } from 'react';
import styles from '../pokemon/pokemon.module.css';
import ItemOptions from './ItemOptions.jsx';
import ItemDetails from './ItemDetails.jsx';
import useFetchItems from '../hooks/useFetchItems.jsx';

export default function Item(props) {
  const { data } = props;
  const [selection, setSelection] = useState(null);
  const { item, error, loading } = useFetchItems(selection);

  function handleItemSelect(itemName) {
    setSelection(itemName);
  }

  return (
    <div className={styles.pokemonDashboard}>
      {selection && item ? (
        // Show Pokemon details when a Pokemon is selected and data is loaded
        <ItemDetails 
          item={item} 
          onBack={() => setSelection(null)}
          loading={loading}
          error={error}
        />
      ) : (
        // Show Pokemon list when no Pokemon is selected
        <ItemOptions 
          data={data} 
          onSelectItem={handleItemSelect}
        />
      )}
    </div>
  );
}