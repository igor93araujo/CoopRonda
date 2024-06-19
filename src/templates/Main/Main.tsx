'use client'
import { Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { PageWrapper } from './styles'


import { ChangeEvent, useState } from 'react'
import Presentation from '@/components/Main/Presentation/Presentation';
import { RegionsAndCities } from '@/utils/Regions';
import RegionsFilter from '@/components/Main/Regions/Filter/RegionsFilter';
import List from '@/components/Main/Regions/List/List';
import Footer from '@/components/Main/Footer/Footer';

export const Main = () => {

  const [filteredRegions, setFilteredRegions] = useState<string[]>(RegionsAndCities);



  return (
    <PageWrapper>
      <Presentation />
      <RegionsFilter setFilteredRegions={setFilteredRegions} />
      <List filteredRegions={filteredRegions} />
      <Footer />
    </PageWrapper>
  )
}
