import { useMediaQuery } from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'

export default function Map() {

 const matches = useMediaQuery('(max-width:500px)');


 const { isLoaded } = useJsApiLoader
  ({
   id: 'google-map-script',
   googleMapsApiKey: "AIzaSyBt_0I-im6dNOmIon3K9l11n96Qcw0W1_I"
  })

 return (
  <div className="map">
   {
    isLoaded ? (
     <GoogleMap
      mapContainerStyle={{
       height: '100%',
       width: '100%',
      }}
      center={{
       lat: -19.890597485243465,
       lng: -43.92503001025345
      }}
      zoom={16}
     >
      <Marker position={{
       lat: -19.890597485243465,
       lng: -43.92503001025345
      }} />
     </GoogleMap>
    ) : <></>
   }
  </div>
 )
}
