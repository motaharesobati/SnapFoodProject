import { useMapEvents } from "react-leaflet";

export default function MapMove({setPosition}) {
    useMapEvents({
        moveend(e) {
            const map = e.target;
            const center = map.getCenter();
            setPosition({
                lat: center.lat,
                lng: center.lng
            });
        }
    });
    return null;
}