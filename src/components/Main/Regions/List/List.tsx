import { Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { RegionsAndCities } from '@/utils/Regions'
import React, { ChangeEvent } from 'react'

interface ListProps {
 filteredRegions: string[];
}

export default function List({ filteredRegions }: ListProps) {

 return (
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
 )
}
