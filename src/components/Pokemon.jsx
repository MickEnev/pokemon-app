import React, {useState} from 'react'
import styles from './pokemon.module.css'

export default function Pokemon(props) {
     const {data} = props
     const [pokemon, setPokemon] = useState('')
     
     const mappedList = data.results.filter(element => {
        if (pokemon === '') {
            return true
        }
        if (element['name'].toLowerCase().includes(pokemon.toLowerCase())) {
            return true
        }
        return false
     })
     console.log("mappedList: ", mappedList)

  return (
    <div className={styles.pokemonDashboard}>
        <input value={pokemon} placeholder='Pokemon' onChange={(e) => {setPokemon(e.target.value)}}></input>

        {mappedList.map((pokemon, index) => {
            const keys = Object.keys(pokemon).filter(element => {
                if (element === 'name' || element === '_id') {
                    return false
                }
                return true
            })

            return (
                <div key={index} className={styles.information}>
                    <h1 className={styles.pokemonName}>{pokemon.name.toUpperCase()}</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.pokemonButton}>I choose you!</button>
                    </div>
                    {keys.map(title => {
                        return (
                            <div key={title} className={styles.keyVal}>
                                <p>{title}: {pokemon[title]}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}
