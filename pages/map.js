'use client';

import { useMemo, React, useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import styles from '/styles/Map.module.css';
import axios from 'axios';


function Map(props) {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [coords, setCoords] = useState([]);
    const [detectedObjects, setDetectedObjects] = useState([]);
    console.log(coords)

    // for(let i = 0; i < detectedObjects.length; i+=1) (
    //     setCoords(coords => [...coords, {lat: detectedObjects[i].lat, lng: detectedObjects[i].long}])
    // )

    

    async function enterImage() {
      try {
        // Fetch data from the server
        const response = await axios.get("http://localhost:3001/data"); // Replace with your backend server URL and route
  
        // Update the state with the fetched data
        setDetectedObjects(response.data);
      } catch (error) {
        console.warn("Error:", error.message);
      }
    }

    useEffect(()=>{
        console.log("FETCH IMAGES")
        enterImage()
    , []})

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyC6eQ5ACRJqPIIwd6AGOgiLV8eqM8EGWx8', // Use the same API key here
        libraries: ['geometry', 'drawing'],
    });

    const containerStyle = {
        position: 'relative',
        width: 'inherit',
        height: 'inherit'
    };

    console.log(detectedObjects)

    const markers = useMemo(() => {
        return detectedObjects.map((object) => ({
            position: { lat: object.location.lat, lng: object.location.long },
<<<<<<< Updated upstream
            title: '🚑Request for AID: ' + object.className,
            content: '🕛Time requested: ' + object.time
=======
            title: 'Marker ' + object._id,
            content: 'Info for Marker ' + object._id
>>>>>>> Stashed changes
        }));
    }, [detectedObjects]);

    // console.log(markers)

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleCloseInfoWindow = () => {
        setSelectedMarker(null);
    };

    

    return (
        <div className={styles.map}>
            <div className={styles.mapwrapper}>
                <div className={styles.mapcontainer}>
                    {isLoaded && (
                        <GoogleMap zoom={13} center={{ lat: 43.0097715088247, lng: -81.27267789091229 }} mapContainerStyle={containerStyle}>
                            {markers.map((marker) => (
                                <Marker
                                    key={marker.title}
                                    position={marker.position}
                                    onClick={() => handleMarkerClick(marker)}
                                />
                            ))}

                            {selectedMarker && (
                                <InfoWindow
                                    position={selectedMarker.position}
                                    onCloseClick={handleCloseInfoWindow}
                                >
                                    <div>
                                        <h3>{selectedMarker.title}</h3>
                                        <p>{selectedMarker.content}</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Map;
