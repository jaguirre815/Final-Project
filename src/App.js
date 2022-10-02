import { useState } from "react";
import Coordinates from "./Components/Coordinates";
import Home from "./Components/GoogleMaps";
import Input from "./Components/Input";
import Display from "./Components/Display";



function App() {
  const [place, setPlace] = useState(null)
  const data = place ? <Display place={place}/> : null
  return (
    <>
      < Input setPlace={setPlace} />
      {data}
      < Coordinates />
      < Home />
    </>
  );
}

export default App;

      
      
      
