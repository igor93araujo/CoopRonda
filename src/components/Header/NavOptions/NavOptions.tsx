import React from 'react'
import * as S from './styles';
import { ComponentsData } from '@/utils/ComponentsData';

interface Props {
  smallDevice: boolean;
  onNavigate: (pageId: string) => void;
  activePage: string;
  setOpenDrawer?: (open: boolean) => void;
};

type RouteType = {
  name: string;
  path: string;
}

export const NavOptions = ({smallDevice, onNavigate, activePage, setOpenDrawer}: Props) => {
  
  const handleNavigationClick = (route: RouteType) => {
    if (setOpenDrawer) {
      onNavigate(route.path);
      setOpenDrawer(false);
      return;
    }
    onNavigate(route.path);
  }

  return (
   <S.StyledNav>
    <ul className={smallDevice ? 'smallDevice' : ''}>
    {
      ComponentsData.map(data => (
        <li key={data.name}>
          <a
            onClick={() => handleNavigationClick(data)}
            className={activePage === data.path ? 'active' : ''}
          >{data.name}</a>
        </li>
      ))
    }
    </ul>
 </S.StyledNav>
  )
}
