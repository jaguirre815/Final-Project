import { useState } from "react";
import Coordinates from "./Components/Coordinates";
import Home from "./Components/GoogleMaps";
import Input from "./Components/Input";
import Display from "./Components/Display";
import Navbar from "./Components/NavBar";
import './App.css';



function App() {
  const [place, setPlace] = useState(null)
  const data = place ? <Display place={place}/> : null
  return (
    <>
      <Navbar />
      < Input setPlace={setPlace} />
      {data}
      < Coordinates />
      < Home />
    </>
  );
}

export default App;

      
      
      
