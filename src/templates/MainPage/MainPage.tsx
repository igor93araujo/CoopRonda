'use client'
import { Grid, Paper, Typography } from '@mui/material'
import { PageWrapper } from './styles'
import { Regions } from '@/utils/Regions'

export const MainPage = () => {
  return (
    <PageWrapper>
     <Typography variant='h4' sx={{ alignSelf : 'center', textAlign: 'center'}}>
      COOPERATIVA DE APOIO COMUNITÁRIO E ZELADORIA RESIDENCIAL LTDA - COOP RONDA
     </Typography>
     <Typography>
       Serviços prestados de zeladoria com finalidade de oferecer apoio as residencias, casas comerciais,industrias, condominios, templos religiosos, apoio aos usuarios nas av/ruas do bairro, até a chegada em suas residencias, presença in loco do zelador para verificar barulhos estranhos e/ou movimentos suspeitos de pessoas, comunicando a policia militar atraves do telefone 190, qualquer anormalidade verificada.
     </Typography>

     <strong>
     HORARIO DE ATENDIMENTO DA SECRETARIA: 08:00 às 18:00 (SEGUNDA À SABADO).
     </strong>
     <strong>
     CONTRATAÇÃO E CANCELAMENTO DIRETAMENTE COM O PRÓPRIO ZELADOR DE 22:00 às 05:00.
     </strong>

    <Typography variant='h6' sx={{ alignSelf : 'center'}}>
    As regiões/cidades atendidas em MG:
    </Typography>

    <div className="regions">
     <Grid container spacing={2}>
         {Regions.map((region) => (
           <Grid item xs={12} sm={6} md={4} lg={2} key={region}>
             <Paper elevation={3}>
               <Typography variant="h6" align="center">
                 {region}
               </Typography>
             </Paper>
           </Grid>
         ))}
     </Grid>
    </div>

    <Typography sx={{ alignSelf : 'center'}}>
    Para maiores informações confira nossa proposta de trabalho.
    </Typography>

  </PageWrapper>
  )
}
