'use client'

import React from 'react'
import { AddressWrapper, PageWrapper } from './styles'
import { Typography, useMediaQuery } from '@mui/material'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

export default function ContactsPage() {

  const matches = useMediaQuery('(max-width:500px)');


  const { isLoaded } = useJsApiLoader
  ({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBt_0I-im6dNOmIon3K9l11n96Qcw0W1_I"
  })

  return (
    <PageWrapper>
     <Typography variant="h4">Onde nos encontrar?</Typography>
     <AddressWrapper>
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
              <Marker position ={{
                lat: -19.890597485243465,
                lng: -43.92503001025345
              }}/>
            </GoogleMap>
        ) : <></>
        }
      </div>
      <div className="adressInfo">
        <Typography variant="h6">Endereço:</Typography>
        <Typography >Rua Afonso Pena Júnior, 251, sala 08.</Typography>
        <Typography variant="body1">Bairro: Cidade Nova</Typography>
        <Typography variant="body1">Cidade: Belo Horizonte.</Typography>
        <Typography variant="body1">CEP: 31170-110</Typography>
        <Typography variant="h6">Telefone:</Typography>
        <Typography variant="body1">(31) 3492-2116</Typography>
        <Typography variant="h6">E-mail:</Typography>
        <Typography variant="body1">contato@coopronda.com.br</Typography>
      </div>
     </AddressWrapper>
    </PageWrapper>
  )
}
