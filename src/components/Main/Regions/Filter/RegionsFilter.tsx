import { InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { RegionsAndCities } from '@/utils/Regions'
import React, { ChangeEvent } from 'react'

interface RegionsProps {
 setFilteredRegions: React.Dispatch<React.SetStateAction<string[]>>
}

export default function RegionsFilter({ setFilteredRegions }: RegionsProps) {

 const handleFilter = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { value } = event.target;
  const filtered = RegionsAndCities.filter((region) => region.toLowerCase().includes(value.toLowerCase()));
  setFilteredRegions(filtered);
 }

 return (
  <div className="regionsSearch">
   <Typography variant='h6'>
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
    style={{ zIndex: -1 }}
    onChange={(event) => handleFilter(event)}
   />
  </div>
 )
}
