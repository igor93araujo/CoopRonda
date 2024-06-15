import React from 'react'
import * as S from './styles';
import { NavRoutes } from '@/utils/NavRoutes';

interface Props {
  smallDevice: boolean;
};

export const NavOptions = ({smallDevice}: Props) => {
  return (
   <S.StyledNav>
    <ul className={smallDevice ? 'smallDevice' : ''}>
    {
      NavRoutes.map(route => (
        <li key={route.name}>
          <a href = {route.path}>{route.name}</a>
        </li>
      ))
    }
    </ul>
 </S.StyledNav>
  )
}
