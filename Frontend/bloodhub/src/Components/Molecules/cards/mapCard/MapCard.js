import React from 'react';
import './MapCard.css'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import donorPinImg from "Assets/images/donorPin.png"
import seekerPinImg from "Assets/images/seeker.png"
import bloodBankPinImg from "Assets/images/bloodBankPin.png"
import activeDrivePinImg from "Assets/images/activeDrivePin.png"
import myPinImg from "Assets/images/myPin.png"
import L from 'leaflet';
import { useState,useEffect } from 'react';

const myPin = new L.Icon({
  iconUrl: myPinImg, // Replace with your image URL
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
});
const donorPin = new L.Icon({
  iconUrl: donorPinImg, // Replace with your image URL
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
});
const seekerPin = new L.Icon({
  iconUrl: seekerPinImg, 
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const bloodBankPin = new L.Icon({
  iconUrl: bloodBankPinImg, 
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const activeDrivePin = new L.Icon({
  iconUrl: activeDrivePinImg, 
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const MyLocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 13 });
  }, [map]);

  return position === null ? (<>
    {<div className='notAllowMSG' >
        <b>Allow location to see nearby users</b>
    </div>}
    </>) : (
    <Marker position={position} icon={myPin}>
      <Popup>
        <b className='text-success'>You are here</b>
      </Popup>
    </Marker>
  );
};

export default function MapCard({ className, style }) {
  return (
    <div className={className} style={style}>
      <MapContainer style={{ height: "40vh", width: "100%" ,zIndex:"0" }}  zoom={15} scrollWheelZoom={true}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MyLocationMarker />
      </MapContainer>
    </div>
  );
}
