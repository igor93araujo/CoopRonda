'use client';

import { useState } from 'react';
import * as S from './styles';
import Typography from '@mui/material/Typography';
import { ResponsiveDrawer } from './ResponsiveDrawer';
import { NavOptions } from './NavOptions/NavOptions';

export const Header = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  const smallDevice = screenSize < 600;
  
 return (
  <S.StyledBox>  
    <Typography variant='h5'>CoopRonda</Typography>
    {
      smallDevice ? (
        <ResponsiveDrawer />
      ) : (
        <NavOptions smallDevice={false}/>
      )
    }
        </S.StyledBox>
 )
}