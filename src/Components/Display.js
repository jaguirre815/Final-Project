function Display({ place }) {
  
    return (
        <>
          <div className="card mt-2">
            <h5 className="card-header" style={{color: 'orange' }}>Rating : {place.rating} ⭐️</h5>
            <div className="card-body" >
              <h5 className="card-title" style={{color: 'green'}}>{place.name}</h5>
              <p className="card-text" style={{color: 'blue'}}>{place.vicinity}</p>
            </div>
          </div>
        </>
      );
    }
    
    export default Display;
        
        
      
  

