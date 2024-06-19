'use client'

import React from 'react'
import { ContactsWrapper, PageWrapper } from './styles'
import { Typography } from '@mui/material'
import Map from '@/components/Contacts/Map/Map'
import Adress from '@/components/Contacts/Adress/Adress'
import Form from '@/components/Contacts/Form/Form'


export default function Contacts() {

  return (
    <PageWrapper>
      <Typography variant="h4">Onde nos encontrar?</Typography>
      <ContactsWrapper>
        <Map />
        <Adress />
        <Form />
      </ContactsWrapper>
    </PageWrapper>
  )
}
