import React, { useState } from 'react';
import styles from '../pokemon/pokemon.module.css';
import LocationOptions from './LocationOptions.jsx';
import LocationDetails from './LocationDetails.jsx';
import useFetchLocation from '../hooks/useFetchLocation.jsx';

export default function Locations(props) {
  const { data } = props;
  const [selection, setSelection] = useState(null);
  const { location, error, loading } = useFetchLocation(selection);

  function handleLocationSelect(locationName) {
    setSelection(locationName);
  }

  return (
    <div className={styles.pokemonDashboard}>
      {selection && location ? (
        // Show Pokemon details when a Pokemon is selected and data is loaded
        <LocationDetails 
          location={location} 
          onBack={() => setSelection(null)}
          loading={loading}
          error={error}
        />
      ) : (
        // Show Pokemon list when no Pokemon is selected
        <LocationOptions 
          data={data} 
          onSelectLocation={handleLocationSelect}
        />
      )}
    </div>
  );
}