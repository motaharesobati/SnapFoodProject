import { useMapEvents } from "react-leaflet";
import React from "react";

interface Position {
    lat: number;
    lng: number;
}

interface MapMoveProps {
    setPosition: React.Dispatch<
        React.SetStateAction<Position | null>
    >
}

export default function MapMove({setPosition}: MapMoveProps) {
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