import React from 'react';
import './MapCard.css'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents, useMap, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import donorPinImg from "Assets/images/donorPin.png"
import seekerPinImg from "Assets/images/seekerPin.png"
/* import bloodBankPinImg from "Assets/images/bloodBankPin.png"
import activeDrivePinImg from "Assets/images/activeDrivePin.png" */
import { placingRoute } from './calculateRouteAndDistance ';
import myPinImg from "Assets/images/myPin.png"
import  BloodDonor  from "Assets/images/blooddonor.png"
import L from 'leaflet';
import { useState,useEffect } from 'react';
import { patchUser } from 'Services/FetchData';
import MapPopup from '../MapPopup/MapPopup';
import { LayersControl,Circle } from 'react-leaflet';
import { useOutletContext } from 'react-router-dom';
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
/* const bloodBankPin = new L.Icon({
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
 */
const MyLocationMarker = (userId) => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);

      const updatedLocation = {
        "lat":parseFloat(e.latlng.lat.toFixed(6)),
        "lng":parseFloat(e.latlng.lng.toFixed(6))
      }
      map.flyTo(e.latlng, map.getMaxZoom("15"), {
        animate: true,
        duration: 1.5, 
      });
      patchUser(updatedLocation,userId.userId).then((data)=>{
        if(!data){
          console.log("Location not set")
        }else{
         /*  console.log("New Location Set") */
        }
      });
    },
  });
  useEffect(() => {
    map.locate({ setView: true, maxZoom: 13 });
  }, [map]);

  return position === null ? (<>
    {<div className='notAllowMSG' >
        <b><i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i></b>
    </div>}
    </>) : (
    <Marker position={position} icon={myPin}>

    </Marker>
  );
};
const RecenterButton = ()=>{
  const map = useMap()
  const recenter = ()=>{
    map.locate();
  }
  
  return (<>
            <div onClick={recenter} title='Recenter' className='centerLocationIcon d-flex align-items-center justify-content-center'>
              <i className="fa-regular fa-circle-dot fa-xl"></i>
            </div>
  </>);
}
const GetRecenterUser = ({lat,lng,onclick})=>{
  const parentMap = useMap();
  const getCenter=()=>{
    parentMap.flyTo({lat:lat,lng:lng},parentMap.getMaxZoom());
  }
  return (
  <>
        <div className='locate cursor-pointer p-2 ' onClick={()=>{
          getCenter();
          onclick();
        }}>
            <span className='text-dark '><i className="fa-solid fa-magnifying-glass-location fa-lg"></i></span>
        </div>
  </>)
}
const getFilteredUser = (query,items)=>{
    if(!query){
      return null;
    }else{
      return items.filter((item)=> item.firstName.toLowerCase().includes(query.toLowerCase()) || item.lastName.toLowerCase().includes(query.toLowerCase()));
    }
}
const GetRouteButton = ({start,end,onclick=()=>{}})=>{
  const map=useMap();
  const getRoute = ()=>{
    placingRoute(map,start,end);
  }
  return (<>
      <div className=' p-2 ' onClick={()=>{
        getRoute();
        onclick();
      }}>
          <span className='text-primary cursor-pointer ' >
          <i className="fa-solid fa-route fa-lg"></i>
          </span>
      </div>
  </>);
}
const SearchBox = ({Donors,Seeker,myLocation,setSearchBox})=>{
  const parentMap = useMap();
  const [query,setQuery] = useState("");
  const filteredUser = getFilteredUser(query,[...Donors,...Seeker]);
  const disableMapEvents = ()=>{
    parentMap.dragging.disable();
    parentMap.scrollWheelZoom.disable();
  }

  return(<>
      {/* Start SearchBoxFunctionalities */}
            <div className='searchBox' onClick={disableMapEvents}>
              <div className='searchInputContainer'>
                  <input type="text" placeholder='Search Donor/Seeker/Blood Bank/Drive' value={query} onChange={(e)=>{setQuery(e.target.value)}} /> <i onClick={()=>{setQuery("")}} className="fa-solid fa-xmark fa-lg"></i>
              </div>
              <div className='searchElement'>
              {
                filteredUser?
                filteredUser.map((user,index)=>(
                  <div className='searchOutput' key={index}>
                    <div className='d-flex'>
                      <div className='userProfileImg'>
                          <img height={"100%"} width={"100%"} src={BloodDonor} alt={user.firstName} />
                      </div>
                      <div className='userDetails p-2'>
                          <span>{user.firstName+" "+user.lastName+" "+user.bloodGroup}</span>
                      </div>
                      <div className='type p-2 ms-auto'>
                          <span className='text-success '>DONOR</span>
                      </div>
                      {/* locateUser */}        
                      <GetRecenterUser lat={user.lat} lng={user.lng} onclick={()=>{setSearchBox(false);}} />
                      {/* GetRoute BUtton */}
                      <GetRouteButton start={{lat:myLocation.lat,lng:myLocation.lng}} end={{ lat: user.lat, lng: user.lng }} onclick={()=>{setSearchBox(false)}} />
                      
                    </div>
                  </div>
                )):<></>
                
              }
              
              </div>
            </div>
      {/* end SearchBoxFunctionalities */}
  </>);
}

export default function MapCard({ className,style,height,mapFunction=false }) {
  let start ={}
  const {Donors,Seeker,user} = useOutletContext();
  if(user){
     start = {lat:user.lat,lng:user.lng}
  }

  const [searchBox,setSearchBox] = useState(false);
  const toggleSearchBox = ()=>{
    searchBox?setSearchBox(false):setSearchBox(true);
  }

  return (

    <div className={className} style={style}>
      <MapContainer className='mainMapContainer'  style={{ height: `${height}`, width: "100%" ,zIndex:"0" }}  zoom={12} scrollWheelZoom={true} whenReady={(map)=>{
        map.target.on('click', function (e) {
          this.dragging.enable();
          if (this.dragging.enabled()) {
            this.scrollWheelZoom.enable();
          } 
        });
      }}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyLocationMarker userId={user.id}/>

        {/* Map functions */}
          {
            mapFunction?<>
              <div className='mapFunction ' >
                  {/* search icon and close search icons */}
                  <div onClick={toggleSearchBox} title='Search' className='searchIcon d-flex align-items-center justify-content-center'>
                    {
                      searchBox?<><i  className="fa-solid fa-xmark fa-xl"></i></>:<> <i className="fa-solid fa-magnifying-glass fa-xl"></i></>
                    }
                  </div>
                    {/* Center location icon */}
                  <RecenterButton  />
                    
              </div>
            </>:<></>
          }
        {/* end Map functions */}
        {searchBox?<>
        <SearchBox Donors={Donors} Seeker={Seeker} myLocation={start} setSearchBox={setSearchBox}/>
        </>:<></>}  
       

        {/* Other map pins */}
          <LayersControl position='topright' >
            <LayersControl.Overlay checked name='Donors' key={"donor"} >
              <LayerGroup>
                {
                  Donors.filter(donor => donor.lat && donor.lng && (donor.emailId !== user.emailId))
                  .map((donor,index)=>(
                    <>
                    <Marker position={{ lat: donor.lat, lng: donor.lng }} icon={donorPin} key={index}>
                      <Popup>
                        <MapPopup data={donor} type="Donor" start={start} GetRouteButton={GetRouteButton} GetRecenterUser={GetRecenterUser}/>
{/*                         <GetRouteButton start={{lat:start.lat,lng:start.lng}} end={{ lat: donor.lat, lng: donor.lng }} />
 */}
                      </Popup>
                    </Marker>
                    </>
                  ))
                }
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay checked name='Seeker' key={"seeker"}>
              <LayerGroup>
                {
                  Seeker.filter(seeker => seeker.lat && seeker.lng && (seeker.emailId !== user.emailId))
                  .map((seeker,index)=>(
                    <>
                    <Marker position={{ lat: seeker.lat, lng: seeker.lng }} icon={seekerPin} key={index}>
                      <Popup>
                        <MapPopup data={seeker} type="Seeker" start={start} GetRouteButton={GetRouteButton} GetRecenterUser={GetRecenterUser}/>
                      </Popup>
                    </Marker>
                    </>
                  ))
                }
              </LayerGroup>
            </LayersControl.Overlay>
            
            <LayersControl.Overlay  name='100km Range' key={"range"}>
            <Circle
              center={[user.lat,user.lng]}
              pathOptions={{ fillColor: 'blue' }}
              radius={100000}
            />
            </LayersControl.Overlay>
          </LayersControl>
        {/* End Other map pins */}

      </MapContainer>
    </div>
  );
}
