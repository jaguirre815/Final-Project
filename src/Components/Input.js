import { useState } from 'react'

function Input({ setPlace}) {
    const [places, setPlaces] = useState('')

    const handleChange = (e) => {
        setPlaces(e.target.value)
    }

    const clear = () => {
        setPlaces(null)
    }

    const handleSubmit = async (e) => {
     e.preventDefault()
     const response = await fetch(`http://localhost:8080/place/food/${places}`) 
     const data = await response.json()
     console.log(data)

     setPlace(data)
     //setPlaces('')

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  placeholder="cuisine"/>
            <button className="btn btn-outline-success" type="submit">Submit</button>
            <h1>{places}</h1>
            </form>
            <button className="btn btn-outline-success" onClick={clear}>I Changed My mind</button>
        </>
    )
}

export default Input
        