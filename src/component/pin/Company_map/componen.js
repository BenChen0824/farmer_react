import { useMap, useMapEvent } from 'react-leaflet';
import { useEffect } from 'react';
im

function MyMapComponent(props) {
    const { placeDisplay, centerRef, setBounds } = props;

    const map = useMap();

    useEffect(() => {
        if (placeDisplay.length > 0) {
            const firstPlace = placeDisplay[0].geometry; // 某個座標

            centerRef.current = firstPlace;

            map.setView(firstPlace, map.getMaxZoom(), {
                animate: centerRef.current || false,
            });
            // console.log('filter', centerRef.current);
        }
    }, [placeDisplay]);

    return null;
}

export default MyMapComponent;
