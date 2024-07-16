import React from 'react'
import "./Map.css"
import MapCard from 'Components/Molecules/cards/mapCard/MapCard'

export default function Map() {
  return (
    <>
    <div className=' UserMap ' style={{height:"100%"}}>
        <MapCard height={"86vh"}  mapFunction={true} />
    </div>
    </>
  )
}
