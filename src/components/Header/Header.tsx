'use client';

import { useState } from 'react';
import * as S from './styles';
import Typography from '@mui/material/Typography';
import { ResponsiveDrawer } from './ResponsiveDrawer';
import { NavOptions } from './NavOptions/NavOptions';

interface Props {
  onNavigate: (pageId: string) => void;
  activePage: string;
}

export const Header = ({onNavigate, activePage}: Props) => {

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
        <ResponsiveDrawer onNavigate={onNavigate} activePage={activePage}/>
      ) : (
        <NavOptions onNavigate={onNavigate} smallDevice={false} activePage={activePage}/>
      )
    }
        </S.StyledBox>
 )
}