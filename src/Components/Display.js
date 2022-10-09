function Display({ place }) {
  
    return (
        <>
          <div className="card mt-2">
            <h5 className="card-header">Rating : {place.rating}</h5>
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.vicinity}</p>
            </div>
          </div>
        </>
      );
    }
    
    export default Display;
        
        
      
  

