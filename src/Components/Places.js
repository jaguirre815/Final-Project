import { useState } from "react"



function Places() {
    const [place, setPlace] = useState([]);

    const handleChange = (e) => {
        setPlace(e.target.value)
    }

    const clear = () => {
        setPlace(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.2133971%2C-89.0645187&radius=10000&type=restaurant&keyword=mexican&key=AIzaSyBpdt4tDsFDyl9Ax74vDBk-1TVCtTKhbgI&=`)
        const data = await response.json()
        console.log(data)

        setPlace(data)
    }

    let placeInfo 
        if(place.name) {
            placeInfo=  [<h2>{place.name}</h2>,
            <img src={place.image} alt='product' />]
            
        }

        return (
        
           
                
                    <form className="container-fluid col-6" onSubmit={handleSubmit}>
                            <input className="form-control me-8" id="submitPlace" onChange={handleChange} placeholder="what you want to eat at least" />
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" >Search</button>
                        </div>
                    </form>
                
            
               
                            
                            
              
                   
        
            
            
            
                    
        )
}

export default Places

    