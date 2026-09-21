import classes from './MapModal.module.css';
import {MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {useEffect, useState} from "react";
import MapMove from "./MapMove";

interface Position {
    lat: number;
    lng: number;
}
interface MapModalProps {
    closeModal: () => void;
    setSelectedAddress: (address: string) => void;
}
export default function MapModal({closeModal,setSelectedAddress}: MapModalProps) {
    const [position, setPosition] = useState<Position | null>(null);
    const [address, setAddress] = useState<string>("");
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    },[])
    const getAddress = async() => {
        if(!position){
            alert("لطفا یک نقطه روی نقشه انتخاب کنید");
            return;
        }
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.lng}&format=json&addressdetails=1&accept-language=fa`
            );
            const data = await response.json();
            const address = data.address;

            const persianAddress =[
                address.neighbourhood || address.quarter,
                address.suburb || address.city_district,
                address.road
            ].filter(Boolean)
                .join("، ");

            setSelectedAddress(persianAddress);
            closeModal();

            console.log(data.display_name);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className={classes.overlay}>
                <div className={classes.mapBox}>
                    <button className={classes.closeBtn} onClick={closeModal} >x</button>
                    <h2 className={classes.locationSelection}>انتخاب محل</h2>
                    <p className={classes.text}>برای مشاهده مناسب ترین پیشنهاد ها، ابتدا موقعیتتان را مشخص کنید</p>
                    <div className={classes.map}>
                        <div className={classes.mapPin}>
                            📍
                        </div>
                        <MapContainer
                            center={[35.6892,51.3890]}
                            zoom={13}
                            style={{height: '400px'}}
                        >
                            <TileLayer
                                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <MapMove setPosition={setPosition} />
                        </MapContainer>
                        {address &&
                            <div style={{
                                padding: '15px',
                                textAlign: 'right',
                                fontFamily: 'Vazir'
                            }}>
                                {address}
                            </div>
                        }
                        <button className={classes.confirm} onClick={getAddress}>تایید</button>
                    </div>
                </div>
            </div>
        </>
    )
}