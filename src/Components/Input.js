import { useState, useEffect } from 'react'

function Input({ userLocation, setPlaces, places}) {
 const [placeInput, setPlaceInput] = useState(null)  


    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        })
    }, [])
    
    

    const handleChange = (e) => {
        console.log(e.target.value)
        setPlaceInput(e.target.value)
    }

    const clear = () => {
        setPlaces([])
    }

    const handleSubmit = async (e) => {
     e.preventDefault()
     
     console.log('lat long', lat, lng )
    const response = await fetch(`https://wheretoeatserver.herokuapp.com/location/cuisine/${placeInput}?lat=${lat}&lng=${lng}`)
     const data = await response.json()
     console.log(data)

     setPlaces(data.results)
     //setPlaces('')

    }
    return(


        <><h1>Where The Hell Do You Want To Eat </h1>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  placeholder="cuisine"/>
            <button className="btn btn-outline-success" type="submit">Submit</button>
            </form>
            <button className="btn btn-outline-success" onClick={clear}>I Changed My mind</button>
        </>
    )
}

export default Input
            
        