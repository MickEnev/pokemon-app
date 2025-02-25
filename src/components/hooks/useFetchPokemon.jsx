import React from 'react'

export default function useFetchPokemon(selection) {
    const [data, setData] = useState(null)
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
            const url = apiURL + '/'
        }
    })
  return (
    <div>

    </div>
  )
}
