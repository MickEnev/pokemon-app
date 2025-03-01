import React, {useState, useEffect} from 'react'

export default function useFetchItems(selection) {
    const [item, setItem] = useState(null)
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
            const url = apiURL + '/item/' + selection + '?limit=-1'
            try {
                const res = await fetch(url, options)
                const jsonData = await res.json()
                console.log("ITEM DATA: ", jsonData)
                setItem(jsonData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [selection])
  return {item, error, loading}
}
