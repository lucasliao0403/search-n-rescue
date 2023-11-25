import { useMemo, React, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import styles from '/styles/Map.module.css';

function Map(props) {
    const [selectedMarker, setSelectedMarker] = useState(null);

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

    const markers = useMemo(() => [
        { position: { lat: 43.0097715088247, lng: -81.27267789091229 }, title: 'Marker 1', content: 'Info for Marker 1' },
        // Add more markers as needed
    ], []);

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
                            {markers.map((marker, index) => (
                                <Marker
                                    key={index}
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
