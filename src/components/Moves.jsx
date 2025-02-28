import React, { useState } from 'react';
import styles from './pokemon.module.css';
import MoveOptions from './MoveOptions.jsx'
import useFetchMoves from './hooks/useFetchMoves.jsx';
import MoveDetails from './MoveDetails.jsx'

export default function Moves(props) {
  const { data } = props;
  const [selection, setSelection] = useState(null);
  const { move, error, loading } = useFetchMoves(selection);

  function handleMoveSelect(moveName) {
    setSelection(moveName);
  }

  return (
    <div className={styles.pokemonDashboard}>
        {selection && move ? (
                <MoveDetails 
                  move={move} 
                  onBack={() => setSelection(null)}
                  loading={loading}
                  error={error}
                />
              ) : (
                <MoveOptions 
                  data={data} 
                  onSelectMove={handleMoveSelect}
                />
              )}
    </div>
  );
}