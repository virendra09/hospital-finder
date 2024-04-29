import React, { useEffect, useState } from "react";
// import MyComponent from "./ShowMap";

let Latitude = null;
let Longitude = null;

const FetchHospitals = () => {

   

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        // fetch user's current position when the component mounts
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            console.log('Latitude:', latitude, 'Longitude:', longitude);
            setLatitude(latitude);
            setLongitude(longitude);


           // Exporting latitude and longitude as variables
           Latitude = latitude;
           Longitude = longitude;
            
        });
    }, []); // empty dependency array ensures the effect runs only once when the component mounts

    const fetchNearbyHospitals = () => {
        if (latitude && longitude) {
            const apiUrl = `api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=AIzaSyACZcEN7Nc1TqEqVh7cS94Zf2itxYOl1qg`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Nearby Hospitals:', data.results);
                    const locations = data.results;
                    // handle the data
                })
                .catch((error) => {
                    console.error('Error fetching hospitals:', error);
                });
        } else {
            console.error('latitude and/or longitude are not available');
        }
    };


  return (
    <div>
          <button onClick={fetchNearbyHospitals}  style={{ backgroundColor: 'rgb(218, 132, 230)', color: 'black', padding: '10px', borderRadius: '5px' , fontWeight:"bold", fontSize:"20px"}}>Fetch Nearby Hospitals</button>
          
          
    </div>
  )
}

export { Latitude, Longitude };
export default FetchHospitals;