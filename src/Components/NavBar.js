import React from 'react'
import Input from './Input'

const NavBar = ({userLocation, setPlaces, places}) => {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
              <a className="navbar-brand" href="/" style={{color: 'green'}}>Home</a>
              <a className="nav-link" href="/signup" style={{color: 'green'}}>SignUp</a>
              <a className="nav-link" href="/login" style={{color: 'green'}}>LogIn</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                  <Input userLocation={userLocation} setPlaces={setPlaces} places={places} />
              </div>
          </div>
      </nav>
    )
  }
  
  export default NavBar