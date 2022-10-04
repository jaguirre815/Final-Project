import { useState } from 'react'

function Input({ userLocation, setPlaces, places}) {
 const [placeInput, setPlaceInput] = useState(null)  

    const handleChange = (e) => {
        console.log(e.target.value)
        setPlaceInput(e.target.value)
    }

    const clear = () => {
        setPlaces([])
    }

    const handleSubmit = async (e) => {
     e.preventDefault()
     console.log('userLocation', userLocation)
     const response = await fetch(`http://localhost:8080/place/cuisine/${placeInput}`) 
     const data = await response.json()
     console.log(data)

     setPlaces(data.results)
     //setPlaces('')

    }
    return(

        
        <><h1>Where The Hell Do You Want To Eat 🤬</h1>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  placeholder="cuisine"/>
            <button className="btn btn-outline-success" type="submit">Submit</button>
            </form>
            <button className="btn btn-outline-success" onClick={clear}>I Changed My mind</button>
        </>
    )
}

export default Input
            
        