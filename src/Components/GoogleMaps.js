import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useEffect, } from "react";
import '../assets/css/style.css'

import { useState} from "react";

function Home () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>
        return < Map />
}

function Map() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const getLocation = () => {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
    }
    }
   
    const center = {lat, lng}
    useEffect(()=>{
        getLocation()
    },[])
    
  
    return (
       <> 
       {status===null ? ' ': status}
       {/* <button className="btn btn-outline-success" onClick={getLocation}>Get Location</button> */}
       <h1>Where The Fuck Do You Want To Eat!!!</h1>
       
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
      </>
    );
  }

export default Home