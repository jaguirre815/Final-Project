import React, { useState } from 'react';

const Coordinates = () => {
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

	return (
		<div>
			<button className="btn btn-outline-success" onClick={getLocation}>Tell me where i am</button>
			<h1 className="mx-5" style={{color: '#fff'}}></h1>
            <p>{status}</p>
			{lat && <p>Latitude: {lat}</p>}
			{lng && <p>Longitude: {lng}</p>}
		</div>
	);
}

export default Coordinates;



