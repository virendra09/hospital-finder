import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import {Link} from "react-router-dom";
import FetchHospitals, { Latitude, Longitude } from "./FetchHospitals";
import "./ShowMap.css";

const containerStyle = {
  width: '1000px',
  height: '550px'
};

const center = {
    lat: Latitude || -3.745,
    lng: Longitude || -38.523 
};

// In the place of ponts array we should put array which is 
// returned by api but it is not working properly because of some restrictions  thats why I use points array.

const points = [
    {
        lat: -3.745,
        lng: -38.522
      },
    {
        lat: -3.743,
        lng: -38.523
      },
    {
        lat: -3.744,
        lng: -38.524
      },
    { 
        lat: -3.746,
        lng: -38.523
      },
    {
        lat: -3.747,
        lng: -38.522
      },

    ]

const MyComponent=()=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "Your API KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return (
    <div className='map'>
              <h3>Zoom out for better<br/> view of location</h3>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            streetViewControl: false,
            mapTypeControl: false
          }}
        >
          {points.map((point, i) => (
            <MarkerF key={i} position={point} />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
      <Link to="/">
        <button className='button'>Log Out</button>
      </Link>
    </div>
  );
};

export default MyComponent;