import { useEffect, useState } from "react";
import Coordinates from "./Components/Coordinates";
import Home from "./Components/GoogleMaps";
import Input from "./Components/Input";
import Display from "./Components/Display";
import Navbar from "./Components/NavBar";
import './App.css';



function App() {
  const [places, setPlaces] = useState([])
  const [userLocation, setUserLocation] = useState({}) 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }, [])

  //console.log(places)
  return (
    <>
      <Navbar />
      < Input userLocation={userLocation} setPlaces={setPlaces} places={places}/>
       {places.length >= 1 && 
          places.map(place => {
          return(
            <Display place={place} />
          )
        })
       }
      < Coordinates />
      < Home />
    </>
  );
}

export default App;

      
      
      
