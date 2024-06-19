'use client'
import { Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { PageWrapper } from './styles'
import { Regions } from '@/utils/Regions'
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react'

export const MainPage = () => {

  const [filteredRegions, setFilteredRegions] = useState<string[]>(Regions);

  const handleFilter = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    const filtered = Regions.filter((region) => region.toLowerCase().includes(value.toLowerCase()));
    setFilteredRegions(filtered);
  }

  return (
    <PageWrapper>
      <Typography variant='h4' sx={{ alignSelf: 'center', textAlign: 'center' }}>
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

      <Typography variant='h6' sx={{ alignSelf: 'center' }}>
        As regiões/cidades atendidas em MG:
      </Typography>
      <TextField
        label="Procure por sua cidade na lista"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event) => handleFilter(event)}
      />

      <div className="regions">
        <Grid container spacing={2}>
          {filteredRegions.length ? (
            filteredRegions.map((region, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Paper>
                  <Typography variant="h6" align="center">
                    {region}
                  </Typography>
                </Paper>
              </Grid>
            ))
          ) :
            (<Typography variant="h6" align="center">
              Nenhuma região encontrada.
            </Typography>)
          }
        </Grid>
      </div>

      <Typography sx={{ alignSelf: 'center' }}>
        Para maiores informações confira nossa proposta de trabalho.
      </Typography>

    </PageWrapper>
  )
}
