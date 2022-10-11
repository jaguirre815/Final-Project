import { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

//import Coordinates from "./Components/Coordinates";
import Home from "./Components/GoogleMaps";
//import Input from "./Components/Input";
import Display from "./Components/Display";
import Navbar from "./Components/NavBar";
import Button from 'react-bootstrap/Button';
import SignUp from "./Components/Signup";
import Login from "./Components/Login";

import './App.css';



function App() {
  const [places, setPlaces] = useState([])
  const [randomPlace, setRandomPlace] = useState({})
  const [isRandomPlaceEnabled, setIsRandomPlaceEnabled] = useState(false)
  const [userLocation, setUserLocation] = useState({}) 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }, [])

  useEffect(() => {
    const calculatedRandomPlace = places[Math.floor(Math.random() * places.length)]
    
    setRandomPlace(calculatedRandomPlace)
  }, [places])

  const handleEnableRandomPlace = () => {
    setIsRandomPlaceEnabled(true)
  }
  
  const handleDisableRandomPlace = () => {
    setIsRandomPlaceEnabled(false)
  }

  //console.log(places)
  return (
    <div className="main-container background-image">
      <Router>
        <Navbar
          userLocation={userLocation}
          setPlaces={setPlaces}
          places={places}
        />
        <div className="row" >
          <div className="col-md-7">
            <Routes>
              <Route exact path='/' element={<Home /> } />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
          <div className="col-md-4 listRes">
            {places.length >= 1 && 
              <div>
                <Button className="button" onClick={handleEnableRandomPlace} variant="primary">Pick a Restaurant for Me</Button> 
                  {/* TODO: Write a function to pick a new restaurant when clicked */}
                <Button className="button" onClick={handleDisableRandomPlace} variant="primary">Pick Again</Button>
              </div>
            }

           {(places.length >= 1 && !isRandomPlaceEnabled) &&
              places.map((place,i) => {
               return <Display key={i} place={place} />;
              }
            )}
        </div>
        {(isRandomPlaceEnabled && places.length >= 1) &&
          <Display place={randomPlace} />
        }
      </div>
    </Router>
  </div>
);
}
          

export default App;
     

      
      
      
