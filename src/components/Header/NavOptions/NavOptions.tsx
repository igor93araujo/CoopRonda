import React from 'react'
import * as S from './styles';
import { NavRoutes } from '@/utils/NavRoutes';

interface Props {
  smallDevice: boolean;
};

//crie uma função que identifique em qual path estou e coloquei nele uma classe active

const path = window.location.pathname;

export const NavOptions = ({smallDevice}: Props) => {
  return (
   <S.StyledNav>
    <ul className={smallDevice ? 'smallDevice' : ''}>
    {
      NavRoutes.map(route => (
        <li key={route.name}>
          <a href = {route.path} className={
            path === route.path ? 'active' : ''
          }>{route.name}</a>
        </li>
      ))
    }
    </ul>
 </S.StyledNav>
  )
}
