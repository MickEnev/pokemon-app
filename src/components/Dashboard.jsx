import React, {useState} from 'react'
import styles from './dashboard.module.css'
import Options from './Options'
import useFetchData from './hooks/useFetchData'
import Pokemon from './pokemon/Pokemon.jsx'
import Moves from './moves/Moves.jsx'
import Items from './items/Items.jsx'
import Berries from './berries/Berries.jsx'

export default function Dashboard() {
  const [selection, setSelection] = useState(null)
  const {data, error, loading} = useFetchData(selection)

  const dataRender = {
    'pokemon': <Pokemon data={data}/>,
    'move': <Moves data={data}/>,
    'item': <Items data={data}/>,
    'berry': <Berries data={data}/>
  }

  function onClickHandler(clickedButton) {
          return () => {
              setSelection(clickedButton)
          }
      }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 style={{margin: '0 auto', color: '#EBE25E'}}>Pokemon Info</h1>
        <Options selection={selection} setSelection={onClickHandler}/>

        {(data && !loading) && (
          dataRender[selection]
        )}
      </div>
    </div>
  )
}
