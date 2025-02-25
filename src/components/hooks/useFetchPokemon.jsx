import React, {useState, useEffect} from 'react'

export default function useFetchPokemon(selection) {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    
    const apiURL = "https://pokeapi.co/api/v2"

    let options = {
        headers: {
            'method': 'GET'
        }
    }
    useEffect(() => {
        if (!selection) {
            return
        }
        setLoading(true)
        async function fetchData() {
            const url = apiURL + '/pokemon/' + selection + '?limit=-1'
            try {
                const res = await fetch(url, options)
                const jsonData = await res.json()
                console.log("POKEMON DATA: ", jsonData)
                setPokemon(jsonData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [selection])
  return {pokemon, error, loading}
}
