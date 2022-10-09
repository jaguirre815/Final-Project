import { useEffect, useState } from "react";
import Coordinates from "./Components/Coordinates";
import Home from "./Components/GoogleMaps";
//import Input from "./Components/Input";
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
    <div className="main-container background-image">
      <Navbar
        userLocation={userLocation}
        setPlaces={setPlaces}
        places={places}
      />
      <div className="row" >
        <div className="col-md-7">
          <Coordinates />
          <div>
          <Home />
          </div>
        </div>
        <div className="col-md-4">
          {places.length >= 1 &&
            places.map((place,i) => {
              return <Display key={i} place={place} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
     

      
      
      
