import React, {useState} from 'react'
import styles from './pokemon.module.css'
import PokemonOptions from './PokemonOptions'
import useFetchPokemon from './hooks/useFetchPokemon'

export default function Pokemon(props) {
     const {data} = props
     const [selection, setSelection] = useState(null)
     const {pokemon, error, loading} = useFetchPokemon(selection)

     function onClickHandler(clickedButton) {
        return () => {
            setSelection(clickedButton)
        }
     }

  return (
    <div className={styles.pokemonDashboard}>
        <PokemonOptions data={data} selection={selection} setSelection={onClickHandler}/>
    </div>
  )
}
