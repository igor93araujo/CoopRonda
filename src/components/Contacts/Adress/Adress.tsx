import { Typography } from '@mui/material'
import React from 'react'

export default function Adress() {
 return (
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
 )
}
